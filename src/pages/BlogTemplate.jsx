import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ArrowLeft, Calendar, User, Tag, Edit } from 'lucide-react';
import Clients from '../components/Clients';

const BlogTemplate = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            setUser(getAuth().currentUser);

            const q = query(collection(db, 'blogs'), where('slug', '==', slug));
            const snap = await getDocs(q);

            if (snap.empty) {
                console.error('Error fetching blog: Not found');
            } else {
                setBlog({ id: snap.docs[0].id, ...snap.docs[0].data() });
            }
            setLoading(false);
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="text-slate-400 animate-pulse text-xl font-bold">Loading...</div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#0f172a] pt-32 px-4 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
                <Link to="/blogs" className="text-blue-500 hover:text-blue-400">Back to Blogs</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f172a] pt-20 relative">
            {/* Admin Edit Button */}
            {user && (
                <Link
                    to={`/admin/blogs/edit/${blog.id}`}
                    className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-transform hover:scale-105"
                >
                    <Edit size={20} /> Edit this Post
                </Link>
            )}

            {/* Hero Image */}
            <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden">
                <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-32">
                <Link to="/blogs" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full transition-colors border border-white/10">
                    <ArrowLeft size={16} /> Back to Blogs
                </Link>

                <div className="bg-[#1e2340]/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

                    <div className="flex flex-wrap gap-4 mb-8">
                        {blog.category && (
                            <span className="bg-blue-600/20 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                <Tag size={14} /> {blog.category}
                            </span>
                        )}
                        <span className="text-slate-400 flex items-center gap-2 text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                            <Calendar size={14} /> {new Date(blog.created_at).toLocaleDateString()}
                        </span>
                        {blog.author && (
                            <span className="text-slate-400 flex items-center gap-2 text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                                <User size={14} /> {blog.author}
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent mb-10"></div>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-invert max-w-none 
                        prose-headings:font-bold prose-headings:text-white 
                        prose-p:text-slate-300 prose-p:leading-relaxed
                        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-2xl prose-img:border prose-img:border-white/10
                        prose-strong:text-white
                        prose-ul:list-disc prose-ul:pl-6 prose-li:text-slate-300 prose-li:marker:text-blue-500
                        prose-ol:list-decimal prose-ol:pl-6
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:italic"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>
            </div>

            <div className="py-20">
                <Clients />
            </div>
        </div>
    );
};

export default BlogTemplate;
