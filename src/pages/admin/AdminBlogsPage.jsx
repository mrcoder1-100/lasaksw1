import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Plus, Edit, Trash2, Search, Eye, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import PermissionGate from '../../components/admin/PermissionGate';

const AdminBlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, 'blogs'), orderBy('created_at', 'desc'));
            const snap = await getDocs(q);
            setBlogs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog post?')) return;

        try {
            await deleteDoc(doc(db, 'blogs', id));
            setBlogs(blogs.filter(blog => blog.id !== id));
        } catch (error) {
            alert('Error deleting blog');
            console.error(error);
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 relative z-30">
            <div className="flex justify-between items-center mb-8 relative z-10">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Blog Management</h1>
                    <p className="text-slate-400">Manage your insights, articles, and news.</p>
                </div>
                <PermissionGate module="blogs" action="write">
                    <Link to="/admin/blogs/new" className="pointer-events-auto relative z-20">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 pointer-events-auto">
                            <Plus size={20} /> New Post
                        </Button>
                    </Link>
                </PermissionGate>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1e2340] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
            </div>

            {/* Alternative Create Button (Workaround) */}
            <PermissionGate module="blogs" action="write">
                <div className="mb-6">
                    <Link to="/admin/blogs/new" className="block">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-6 rounded-xl border border-blue-500/20 cursor-pointer transition-all group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                        <Plus size={24} className="group-hover:rotate-90 transition-transform" />
                                        Create New Blog Post
                                    </h3>
                                    <p className="text-blue-100 text-sm">Click here to write a new article</p>
                                </div>
                                <ChevronRight className="text-blue-200 group-hover:translate-x-2 transition-transform" size={24} />
                            </div>
                        </div>
                    </Link>
                </div>
            </PermissionGate>

            {loading ? (
                <div className="text-center py-20 text-slate-400">Loading blogs...</div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {filteredBlogs.map((blog) => (
                        <div key={blog.id} className="bg-[#1e2340] border border-white/5 p-4 rounded-xl flex items-center justify-between hover:border-blue-500/30 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                                    {blog.image_url ? (
                                        <img src={blog.image_url} alt={blog.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">No Img</div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg line-clamp-1">{blog.title}</h3>
                                    <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                                        <span className="bg-white/5 px-2 py-0.5 rounded text-xs uppercase tracking-wider">{blog.category || 'Uncategorized'}</span>
                                        <span>•</span>
                                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                <PermissionGate module="blogs" action="read">
                                    <Link to={`/blogs/${blog.slug}`} target="_blank" title="View Live">
                                        <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors">
                                            <Eye size={18} />
                                        </button>
                                    </Link>
                                </PermissionGate>
                                <PermissionGate module="blogs" action="write">
                                    <Link to={`/admin/blogs/edit/${blog.id}`} title="Edit">
                                        <button className="p-2 hover:bg-blue-600/20 rounded-lg text-blue-400 transition-colors">
                                            <Edit size={18} />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="p-2 hover:bg-red-500/20 rounded-lg text-red-500 transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </PermissionGate>
                            </div>
                        </div>
                    ))}

                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-20 bg-[#1e2340]/50 rounded-xl border border-dashed border-white/10 text-slate-400">
                            No blogs found matching your search.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminBlogsPage;
