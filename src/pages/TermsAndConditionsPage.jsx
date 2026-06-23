import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { db } from '../firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../contexts/AdminContext';
import { checkPermission } from '../utils/permissions';

const TermsAndConditionsPage = ({ isEditable: propIsEditable = false }) => {
    const { permissions, role } = useAdmin();
    // Only allow manual editing if passed prop is true AND user has write permissions for legal
    const canWrite = role === 'head_admin' || checkPermission(permissions, 'legal', 'write');
    const isEditable = propIsEditable && canWrite;

    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState(null);

    useEffect(() => {
        const fetchTerms = async () => {
            try {
                const q = query(collection(db, 'legal_pages'), where('slug', '==', 'terms-and-conditions'));
                const snap = await getDocs(q);

                if (snap.empty) throw new Error("Terms not found");
                setPageData({ id: snap.docs[0].id, ...snap.docs[0].data() });
            } catch (error) {
                console.error('Error fetching terms:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTerms();
    }, []);

    const autoSave = async (field, value) => {
        if (!pageData || value === pageData[field]) return;

        setSaving(true);
        try {
            await updateDoc(doc(db, 'legal_pages', pageData.id), {
                [field]: value,
                last_updated: new Date().toISOString()
            });
            setPageData(prev => ({ ...prev, [field]: value }));
            setLastSaved(new Date().toLocaleTimeString());
        } catch (error) {
            console.error('Auto-save failed:', error);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white text-sm font-mono tracking-widest uppercase">Initializing Legal Engine...</div>;

    if (!pageData) return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white text-center px-4">
            <div className="max-w-md bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl">
                <h1 className="text-6xl font-black mb-6 text-slate-700">404</h1>
                <p className="text-slate-400 font-medium mb-8">Terms & Conditions document not found in system storage.</p>
                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Lasak Tech Compliance Management</div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0f172a]">
            <SEO
                title="Terms & Conditions - Lasak Tech"
                description="Please review our terms and conditions for using Lasak Tech's website and services."
                canonical="/terms"
            />
            {isEditable && (
                <div className="fixed bottom-10 right-10 z-[100] flex items-center gap-4 bg-[#1e293b]/90 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] animate-fade-in border-l-4 border-l-blue-500">
                    <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${saving ? 'bg-yellow-400 animate-pulse shadow-[0_0_15px_rgba(250,204,21,0.5)]' : 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]'}`}></div>
                        <span className="text-xs font-black text-white uppercase tracking-[0.2em]">
                            {saving ? 'Syncing...' : 'Live Sync Active'}
                        </span>
                    </div>
                    {lastSaved && (
                        <>
                            <div className="h-6 w-px bg-white/10 mx-2"></div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Saved {lastSaved}</span>
                        </>
                    )}
                </div>
            )}

            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-slate-300">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-16 relative group">
                        <h1
                            contentEditable={isEditable}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => autoSave('title', e.target.innerText)}
                            className={`text-4xl md:text-6xl font-black text-white text-center uppercase tracking-tighter focus:outline-none transition-all leading-tight ${isEditable ? 'hover:bg-white/5 cursor-text p-8 rounded-[2.5rem] border border-dashed border-transparent hover:border-blue-500/50 outline-none' : ''}`}
                        >
                            {pageData.title}
                        </h1>
                        {isEditable && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Click to Edit Title</div>}
                    </div>

                    <div className="relative group">
                        <div
                            contentEditable={isEditable}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => autoSave('content', e.target.innerHTML)}
                            className={`prose prose-invert prose-blue max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-slate-100 focus:outline-none transition-all ${isEditable ? 'hover:bg-white/5 cursor-text p-10 rounded-[3rem] border border-dashed border-transparent hover:border-blue-500/50 outline-none' : ''}`}
                            dangerouslySetInnerHTML={{ __html: pageData.content }}
                        />
                        {isEditable && <div className="absolute top-0 -left-16 [writing-mode:vertical-lr] rotate-180 text-[10px] font-bold text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Click to Edit Body Content</div>}
                    </div>

                    {!isEditable && pageData.last_updated && (
                        <p className="mt-16 pt-8 border-t border-white/5 text-[10px] font-mono text-slate-600 text-center uppercase tracking-widest">
                            Legal Engine v2.0 // Last Verified Sync: {new Date(pageData.last_updated).toLocaleDateString()}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
