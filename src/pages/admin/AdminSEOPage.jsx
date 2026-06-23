import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../firebase';
import { collection, query, orderBy, getDocs, deleteDoc, updateDoc, addDoc, doc } from 'firebase/firestore';
import { Search, Plus, Save, Trash2, Globe, Search as SearchIcon, AlertCircle, CheckCircle, ArrowLeft, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';

const AdminSEOPage = () => {
    const { permissions, role, loading: adminLoading } = useAdmin();
    const [seoRecords, setSeoRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        path: '',
        title: '',
        description: '',
        og_image: '',
        canonical: ''
    });

    useEffect(() => {
        if (!adminLoading) {
            fetchSEO();
        }
    }, [adminLoading]);

    if (adminLoading) return <div className="text-center p-10 text-slate-400">Loading permissions...</div>;

    const canRead = role === 'head_admin' || checkPermission(permissions, 'seo', 'read');
    const canWrite = role === 'head_admin' || checkPermission(permissions, 'seo', 'write');

    if (!canRead) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-center p-8">
                <div className="bg-red-500/10 p-6 rounded-full mb-4">
                    <Lock size={48} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
                <p className="text-slate-400 max-w-md">
                    You do not have permission to manage SEO metadata.
                </p>
                <button
                    className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
                    onClick={() => navigate('/admin/dashboard')}
                >
                    Go Back
                </button>
            </div>
        );
    }

    const fetchSEO = async () => {
        try {
            setLoading(true);
            const q = query(collection(db, 'page_seo'), orderBy('path', 'asc'));
            const snap = await getDocs(q);
            setSeoRecords(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (error) {
            console.error('Error fetching SEO records:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await updateDoc(doc(db, 'page_seo', editingId), { ...formData, updated_at: new Date().toISOString() });
            } else {
                await addDoc(collection(db, 'page_seo'), formData);
            }
            setIsAdding(false);
            setEditingId(null);
            setFormData({ path: '', title: '', description: '', og_image: '', canonical: '' });
            fetchSEO();
        } catch (error) {
            alert('Error saving SEO record: ' + error.message);
        }
    };

    const handleEdit = (record) => {
        setEditingId(record.id);
        setFormData({
            path: record.path,
            title: record.title,
            description: record.description,
            og_image: record.og_image || '',
            canonical: record.canonical || ''
        });
        setIsAdding(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this SEO record? This will revert the page to default hardcoded tags.')) return;
        try {
            await deleteDoc(doc(db, 'page_seo', id));
            fetchSEO();
        } catch (error) {
            alert('Error deleting record: ' + error.message);
        }
    };

    const filteredRecords = seoRecords.filter(r =>
        r.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen pt-28 pb-20 bg-[#0f172a] px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/admin/dashboard')}
                            className="p-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white transition-all hover:bg-white/10"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">SEO & Metadata</h1>
                            <p className="text-slate-500 text-sm font-mono mt-1">Global Traffic Control</p>
                        </div>
                    </div>

                    {canWrite && (
                        <button
                            onClick={() => setIsAdding(true)}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
                        >
                            <Plus size={20} /> New Page Record
                        </button>
                    )}
                </div>

                {/* Search Bar */}
                <div className="relative mb-10 max-w-xl">
                    <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search by path or title..."
                        className="w-full bg-white/5 border border-white/10 rounded-[2rem] pl-16 pr-8 py-5 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* List of Records */}
                <div className="grid grid-cols-1 gap-4">
                    <AnimatePresence>
                        {loading ? (
                            <div className="text-center py-20 text-slate-500 font-mono uppercase tracking-widest animate-pulse">Initializing SEO Engine...</div>
                        ) : filteredRecords.length === 0 ? (
                            <div className="text-center py-20 border-2 border-dashed border-white/10 rounded-[3rem] bg-white/5 text-slate-500 italic">
                                No SEO records found. Start by creating one for a high-priority page.
                            </div>
                        ) : filteredRecords.map((record) => (
                            <motion.div
                                key={record.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="group bg-white/5 border border-white/10 rounded-[2rem] p-6 flex flex-col md:flex-row items-center gap-8 hover:bg-white/10 transition-all border-l-4 border-l-transparent hover:border-l-blue-500"
                            >
                                <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400 shrink-0">
                                    <Globe size={28} />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{record.path}</span>
                                        <div className="h-1 w-1 rounded-full bg-slate-700"></div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Metadata</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 truncate max-w-lg">{record.title}</h3>
                                    <p className="text-slate-400 text-sm line-clamp-1 italic">"{record.description}"</p>
                                </div>
                                <div className="flex gap-3 shrink-0">
                                    {canWrite && (
                                        <>
                                            <button
                                                onClick={() => handleEdit(record)}
                                                className="p-3 bg-white/5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-all border border-white/5"
                                            >
                                                <Plus size={18} className="rotate-45" /> {/* Use as edit icon proxy if Edit not imported */}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(record.id)}
                                                className="p-3 bg-red-500/10 text-red-400 hover:text-white hover:bg-red-500 rounded-xl transition-all border border-red-500/10"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Add/Edit Overlay */}
                <AnimatePresence>
                    {isAdding && (
                        <div className="fixed inset-0 z-[10000] bg-[#0a0f1c]/95 backdrop-blur-xl flex justify-center items-start pt-32 pb-10 px-4 overflow-y-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                className="bg-[#1e293b] border border-white/10 w-full max-w-2xl rounded-[3rem] p-10 shadow-3xl relative"
                            >
                                <button
                                    onClick={() => { setIsAdding(false); setEditingId(null); }}
                                    className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
                                >
                                    <Plus size={32} className="rotate-45" />
                                </button>

                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">
                                    {editingId ? 'Modify SEO' : 'New Page Entry'}
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-1">Page Path (e.g. /about)</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500"
                                                value={formData.path}
                                                onChange={e => setFormData({ ...formData, path: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-1">Canonical Path (optional)</label>
                                            <input
                                                type="text"
                                                className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500"
                                                value={formData.canonical}
                                                onChange={e => setFormData({ ...formData, canonical: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-1">SEO Title</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500"
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-1">Meta Description</label>
                                        <textarea
                                            required
                                            rows={3}
                                            className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 resize-none"
                                            value={formData.description}
                                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-1">OG Image URL (optional)</label>
                                        <input
                                            type="text"
                                            className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="/og-image.png"
                                            value={formData.og_image}
                                            onChange={e => setFormData({ ...formData, og_image: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl uppercase tracking-widest transition-all mt-4 transform hover:scale-[1.02]"
                                    >
                                        <Save size={20} className="inline mr-2" /> Publish SEO Data
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Footer Disclaimer */}
                <div className="mt-20 p-8 rounded-[2rem] bg-indigo-500/10 border border-indigo-500/20 flex gap-6 items-center">
                    <AlertCircle className="text-indigo-400 shrink-0" size={32} />
                    <div>
                        <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">Real-time SEO Active</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Changes published here are reflected instantly on the live site. Database values override hardcoded SEO tags in the codebase. Ensure titles are between 50-60 characters for optimal search results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSEOPage;
