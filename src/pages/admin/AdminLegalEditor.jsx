import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ArrowLeft, Save, Loader2, Info, Eye, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';

const AdminLegalEditor = () => {
    const { permissions, role, loading: adminLoading } = useAdmin();
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [pageData, setPageData] = useState({
        title: '',
        slug: '',
        content: ''
    });
    const [showPreview, setShowPreview] = useState(false);

    if (adminLoading) return <div className="text-center p-10 text-slate-400">Loading permissions...</div>;

    const canWrite = role === 'head_admin' || checkPermission(permissions, 'legal', 'write');

    if (!canWrite) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-center p-8">
                <div className="bg-red-500/10 p-6 rounded-full mb-4">
                    <Lock size={48} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
                <p className="text-slate-400 max-w-md">
                    You do not have permission to edit legal documents.
                </p>
                <button
                    className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
                    onClick={() => navigate('/admin/legal')}
                >
                    Go Back
                </button>
            </div>
        );
    }
    useEffect(() => {
        fetchPage();
    }, [id]);

    const fetchPage = async () => {
        try {
            const docSnap = await getDoc(doc(db, 'legal_pages', id));
            if (docSnap.exists()) {
                setPageData({ id: docSnap.id, ...docSnap.data() });
            } else {
                throw new Error("Page not found");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to load document');
            navigate('/admin/legal');
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await updateDoc(doc(db, 'legal_pages', id), {
                title: pageData.title,
                content: pageData.content,
                last_updated: new Date().toISOString()
            });
            navigate('/admin/legal');
        } catch (error) {
            alert('Error saving: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0f172a] pt-28 pb-20 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Header Actions */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/admin/legal')}
                            className="p-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div>
                            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Edit Document</h1>
                            <p className="text-slate-500 text-sm font-mono mt-1">/{pageData.slug}</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => setShowPreview(!showPreview)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all ${showPreview ? 'bg-blue-600 text-white' : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'}`}
                        >
                            <Eye size={18} /> {showPreview ? 'Close Preview' : 'Preview Live'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Editor Form */}
                    <motion.form
                        layout
                        onSubmit={handleSubmit}
                        className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-3xl"
                    >
                        <div className="space-y-8">
                            {/* Title Field */}
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 pl-1">Document Title</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-2xl px-6 py-4 text-white text-xl font-bold focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    value={pageData.title}
                                    onChange={e => setPageData({ ...pageData, title: e.target.value })}
                                    required
                                />
                            </div>

                            {/* Info Box */}
                            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex gap-4">
                                <Info className="text-indigo-400 shrink-0" size={20} />
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Use standard HTML tags like <code>&lt;section&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;ul&gt;</code> for content formatting. Tailwind classes like <code>text-2xl</code> or <code>mb-10</code> are supported.
                                </p>
                            </div>

                            {/* Content Area */}
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 pl-1">Document Body (HTML Source)</label>
                                <div className="relative group">
                                    <textarea
                                        className="w-full h-[600px] bg-[#0a0f1c]/50 border border-white/10 rounded-3xl px-8 py-8 text-slate-300 font-mono text-sm leading-relaxed focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none group-hover:border-white/20"
                                        value={pageData.content}
                                        onChange={e => setPageData({ ...pageData, content: e.target.value })}
                                        placeholder="Enter your privacy policy HTML here..."
                                        required
                                    ></textarea>
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        HTML Engine
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-5 rounded-2xl uppercase tracking-[0.15em] transition-all hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.5)] disabled:opacity-50 disabled:scale-100"
                                >
                                    {loading ? <Loader2 className="animate-spin" /> : <Save size={20} className="group-hover:rotate-12 transition-transform" />}
                                    {loading ? 'Publishing Changes...' : 'Publish to Live Site'}
                                </button>
                            </div>
                        </div>
                    </motion.form>

                    {/* Live Preview Overlay */}
                    <AnimatePresence>
                        {showPreview && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="fixed inset-0 z-[100] bg-[#0a0f1c]/95 backdrop-blur-2xl flex flex-col pt-20"
                            >
                                <div className="container mx-auto max-w-4xl flex-grow overflow-y-auto px-6 py-20">
                                    <div className="flex justify-center mb-16">
                                        <div className="px-6 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full">
                                            Simulation Mode: Live Preview
                                        </div>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl font-black text-white mb-12 text-center uppercase tracking-tighter">
                                        {pageData.title.split(' ')[0]} <span className="text-blue-500 text-outline-blue">{pageData.title.split(' ').slice(1).join(' ')}</span>
                                    </h1>

                                    <div
                                        className="prose prose-invert prose-blue max-w-none prose-headings:text-white prose-a:text-blue-400"
                                        dangerouslySetInnerHTML={{ __html: pageData.content }}
                                    />
                                </div>

                                <div className="p-8 border-t border-white/5 flex justify-center sticky bottom-0 bg-[#0a0f1c]/80 backdrop-blur-md">
                                    <button
                                        onClick={() => setShowPreview(false)}
                                        className="px-10 py-4 bg-white text-blue-900 font-bold rounded-2xl uppercase tracking-widest hover:scale-105 transition-transform"
                                    >
                                        Return to Editor
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AdminLegalEditor;
