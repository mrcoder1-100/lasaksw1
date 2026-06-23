import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { Edit, Shield, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLegalPages = () => {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPages();
    }, []);

    const fetchPages = async () => {
        try {
            const q = query(collection(db, 'legal_pages'), orderBy('title', 'asc'));
            const snap = await getDocs(q);
            setPages(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (error) {
            console.error('Error fetching legal pages:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-20 bg-[#0f172a] px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Legal Documents</h1>
                    <div className="text-slate-500 text-sm font-mono">
                        System Configuration / Legal
                    </div>
                </div>

                {loading ? (
                    <div className="text-white text-center py-20 flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-slate-400 font-medium">Loading documents...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {pages.map((page, index) => (
                            <motion.div
                                key={page.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/admin/legal/edit/${page.id}`}
                                    className="group block bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="relative z-10 flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
                                                {page.slug.includes('privacy') ? <Shield size={28} /> : <FileText size={28} />}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                                    {page.title}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xs font-mono text-slate-500">/{page.slug}</span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                                    <span className="text-xs font-mono text-slate-500">
                                                        Last Updated: {new Date(page.last_updated).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                                Click to Edit
                                            </div>
                                            <div className="p-3 bg-slate-800 rounded-xl text-white group-hover:bg-blue-600 transition-colors">
                                                <ChevronRight size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom highlight */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
                                </Link>
                            </motion.div>
                        ))}

                        {pages.length === 0 && (
                            <div className="text-center py-20 border-2 border-dashed border-white/10 rounded-[3rem] bg-white/5">
                                <p className="text-slate-500 text-xl font-light italic">"No legal documents registered in the system."</p>
                                <p className="text-slate-600 text-sm mt-2">Initialize legal schema to continue.</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Info Card */}
                <div className="mt-12 p-8 rounded-[2rem] bg-blue-600/10 border border-blue-500/20 flex flex-col md:flex-row gap-6 items-center">
                    <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400">
                        <Shield size={32} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">Compliance Management</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            These documents represent the legal framework of Lasak Technologies. Ensure all changes are vetted by regulatory standards before publishing live updates to users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLegalPages;
