import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { getAuth, signOut } from 'firebase/auth';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { LayoutDashboard, Users, ShoppingBag, Settings, LogOut, Package, Lightbulb, Plus, Edit2, Trash2, Home, LayoutGrid, Globe, Search, Shield, Cog, CreditCard } from 'lucide-react';

const AdminDashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const q = query(collection(db, 'blogs'), orderBy('created_at', 'desc'));
            const snap = await getDocs(q);
            setBlogs(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) {
            console.error('Error fetching blogs:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this post?')) return;

        try {
            await deleteDoc(doc(db, 'blogs', id));
            setBlogs(blogs.filter(blog => blog.id !== id));
        } catch (error) {
            alert('Error deleting post: ' + error.message);
        }
    };

    const handleLogout = async () => {
        await signOut(getAuth());
        navigate('/admin');
    };

    return (
        <div className="min-h-screen pt-20 bg-[#0f172a]">
            {/* Admin Header */}
            <div className="fixed top-20 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
                <h2 className="text-white font-black uppercase tracking-widest text-xl">Admin Dashboard</h2>
                <div className="flex gap-4">
                    <button onClick={handleLogout} className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/40 text-red-200 px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors border border-red-600/20">
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </div>

            <section className="py-32 px-4 relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                        {/* Sidebar Navigation */}
                        <div className="lg:sticky lg:top-40 h-fit lg:col-span-1 py-4 flex flex-col gap-2">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Visual Editors</h3>
                            <Link to="/admin/home" className="px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white font-bold flex items-center gap-3 transition-colors border border-transparent hover:border-white/10">
                                <Home size={18} /> Home Layout
                            </Link>
                            <Link to="/admin/services" className="px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white font-bold flex items-center gap-3 transition-colors border border-transparent hover:border-white/10">
                                <Cog size={18} /> Services Layout
                            </Link>
                            <Link to="/admin/legal" className="px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white font-bold flex items-center gap-3 transition-colors border border-transparent hover:border-white/10">
                                <Shield size={18} /> Legal Documents
                            </Link>
                            <Link to="/admin/seo" className="px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white font-bold flex items-center gap-3 transition-colors border border-transparent hover:border-white/10">
                                <Globe size={18} /> SEO Management
                            </Link>
                            <Link to="/admin/payment" className="px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white font-bold flex items-center gap-3 transition-colors border border-transparent hover:border-white/10">
                                <CreditCard size={18} /> Payment Portal
                            </Link>
                            <Link to="/admin/products" className="p-6 bg-[#0f172a] rounded-xl border border-white/10 hover:border-blue-500/50 transition-all hover:bg-[#1e293b] flex flex-col gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300">
                                    <Package size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Manage Products</h3>
                                <p className="text-slate-400 text-sm">Update product catalog and details</p>
                            </Link>

                            <Link to="/admin/about" className="p-6 bg-[#0f172a] rounded-xl border border-white/10 hover:border-blue-500/50 transition-all hover:bg-[#1e293b] flex flex-col gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:text-pink-300">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Edit About Page</h3>
                                <p className="text-slate-400 text-sm">Update team, vision, and hero content</p>
                            </Link>

                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-6 mb-4 px-2">Blog Management</h3>
                            <Link to="/admin/dashboard" className="px-4 py-3 rounded-xl bg-blue-600/20 text-blue-300 font-bold flex items-center gap-3 border border-blue-500/30">
                                <LayoutGrid size={18} /> Blogs
                            </Link>
                        </div>

                        {/* Main Content Area (Blogs List - kept for now as landing) */}
                        <div className="flex flex-col space-y-8 lg:col-span-4">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Blog Posts</h2>
                                <Link to="/admin/editor/new" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg shadow-green-600/20">
                                    <Plus size={18} /> Create New Post
                                </Link>
                            </div>

                            {loading ? (
                                <div className="text-white text-center py-20">Loading...</div>
                            ) : blogs.length === 0 ? (
                                <div className="text-slate-400 text-center py-20 border border-white/10 rounded-3xl bg-white/5">
                                    <p className="text-xl mb-4">No blog posts found.</p>
                                    <Link to="/admin/editor/new" className="text-blue-400 font-bold hover:underline">Create your first post</Link>
                                </div>
                            ) : (
                                <div className="grid gap-4">
                                    {blogs.map((blog) => (
                                        <motion.div
                                            key={blog.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 flex gap-6 items-center hover:bg-white/10 transition-colors"
                                        >
                                            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-800">
                                                {blog.image ? (
                                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs">No Img</div>
                                                )}
                                            </div>

                                            <div className="flex-grow">
                                                <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1 block">{blog.category}</span>
                                                <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight">
                                                    {blog.title}
                                                </h3>
                                            </div>

                                            <div className="flex gap-2">
                                                <Link
                                                    to={`/admin/editor/${blog.id}`}
                                                    className="p-2 bg-blue-600/20 hover:bg-blue-600 text-blue-200 hover:text-white rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit2 size={16} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(blog.id)}
                                                    className="p-2 bg-red-600/20 hover:bg-red-600 text-red-200 hover:text-white rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;
