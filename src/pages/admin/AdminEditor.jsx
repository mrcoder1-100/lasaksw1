import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Loader2, Lock } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';

const AdminEditor = () => {
    const { permissions, role, loading: adminLoading } = useAdmin();
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === 'new';

    if (adminLoading) return <div className="text-center p-10 text-slate-400">Loading permissions...</div>;

    const canWrite = role === 'head_admin' || checkPermission(permissions, 'blogs', 'write');

    if (!canWrite) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-center p-8">
                <div className="bg-red-500/10 p-6 rounded-full mb-4">
                    <Lock size={48} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
                <p className="text-slate-400 max-w-md">
                    You do not have permission to edit blogs.
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

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!isNew);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        link: '', // Ideally generated from title
        content: '' // Just a placeholder for now, as the current site uses hardcoded pages. 
        // To fully dynamic, we'd need to store HTML/Markdown here.
    });

    useEffect(() => {
        if (!isNew) {
            fetchPost();
        }
    }, [id]);

    const fetchPost = async () => {
        try {
            const docSnap = await getDoc(doc(db, 'blogs', id));

            if (docSnap.exists()) setFormData({ id: docSnap.id, ...docSnap.data() });
            else throw new Error("Blog not found");
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to load post');
            navigate('/admin/dashboard');
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Basic slug generation if link is empty
            const submissionData = { ...formData };
            if (!submissionData.link) {
                submissionData.link = '/blogs/' + submissionData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            }

            if (isNew) {
                await addDoc(collection(db, 'blogs'), submissionData);
            } else {
                await updateDoc(doc(db, 'blogs', id), submissionData);
            }
            navigate('/admin/dashboard');
        } catch (error) {
            alert('Error saving: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">Loading...</div>;

    return (
        <div className="min-h-screen bg-[#0f172a] pt-28 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => navigate('/admin/dashboard')} className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-3xl font-black text-white uppercase">{isNew ? 'New Post' : 'Edit Post'}</h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl animate-fade-in-up">
                    <div className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Title</label>
                            <input
                                type="text"
                                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-blue-500 transition-colors"
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                required
                            />
                        </div>

                        {/* Category & Link */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Category</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Link Path (Optional)</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="e.g. /blogs/my-post"
                                    value={formData.link}
                                    onChange={e => setFormData({ ...formData, link: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Image URL</label>
                            <input
                                type="text"
                                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-blue-500 transition-colors"
                                value={formData.image}
                                onChange={e => setFormData({ ...formData, image: e.target.value })}
                            />
                        </div>

                        {/* Content (For now just a text area, usually this would be a rich text editor) */}
                        <div>
                            <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Content / HTML</label>
                            <textarea
                                className="w-full h-64 bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-300 font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                value={formData.content || ''}
                                onChange={e => setFormData({ ...formData, content: e.target.value })}
                                placeholder="<p>Blog content here...</p>"
                            ></textarea>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 rounded-xl uppercase tracking-widest transition-all hover:scale-105 disabled:opacity-50 disabled:scale-100"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                                {loading ? 'Saving...' : 'Save Post'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminEditor;
