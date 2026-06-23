import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { db } from '../firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../contexts/AdminContext';
import { checkPermission } from '../utils/permissions';

const PrivacyPolicyPage = ({ isEditable: propIsEditable = false }) => {
    const { permissions, role } = useAdmin();
    // Only allow manual editing if passed prop is true AND user has write permissions for legal
    const canWrite = role === 'head_admin' || checkPermission(permissions, 'legal', 'write');
    const isEditable = propIsEditable && canWrite;

    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState(null);

    useEffect(() => {
        const fetchPolicy = async () => {
            try {
                const q = query(collection(db, 'legal_pages'), where('slug', '==', 'privacy-policy'));
                const snap = await getDocs(q);

                if (snap.empty) throw new Error("Privacy policy not found");
                setPageData({ id: snap.docs[0].id, ...snap.docs[0].data() });
            } catch (error) {
                console.error('Error fetching privacy policy:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPolicy();
    }, []);

    const autoSave = async (field, value) => {
        // Only save if content changed
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

    if (loading) return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">Loading...</div>;

    if (!pageData) return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white text-center">
            <div>
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-slate-400">Privacy Policy content not found in database.</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0f172a]">
            <SEO
                title="Privacy Policy - Lasak Tech"
                description="Read Lasak Tech's privacy policy to understand how we collect, use, and protect your personal information."
                canonical="/privacy"
            />
            {isEditable && (
                <div className="fixed bottom-10 right-10 z-[100] flex items-center gap-4 bg-[#1e293b]/90 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] animate-bounce-in">
                    <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${saving ? 'bg-yellow-400 animate-pulse outline outline-4 outline-yellow-400/20' : 'bg-green-500 outline outline-4 outline-green-500/20'}`}></div>
                        <span className="text-xs font-black text-white uppercase tracking-[0.2em]">
                            {saving ? 'Saving...' : 'Live Sync Active'}
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
                    <div className="mb-12 relative group">
                        <h1
                            contentEditable={isEditable}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => autoSave('title', e.target.innerText)}
                            className={`text-4xl md:text-5xl font-black text-white text-center uppercase tracking-tighter focus:outline-none transition-all ${isEditable ? 'hover:bg-white/5 cursor-text p-6 rounded-[2rem] border border-dashed border-transparent hover:border-blue-500/50' : ''}`}
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
                            className={`prose prose-invert prose-blue max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-slate-100 focus:outline-none transition-all ${isEditable ? 'hover:bg-white/5 cursor-text p-10 rounded-[3rem] border border-dashed border-transparent hover:border-blue-500/50' : ''}`}
                            dangerouslySetInnerHTML={{ __html: pageData.content }}
                        />
                        {isEditable && <div className="absolute top-0 -left-16 [writing-mode:vertical-lr] rotate-180 text-[10px] font-bold text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Click to Edit Body Content</div>}
                    </div>

                    {!isEditable && pageData.last_updated && (
                        <p className="mt-12 text-xs text-slate-500 text-center italic">
                            Last Updated: {new Date(pageData.last_updated).toLocaleDateString()}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
