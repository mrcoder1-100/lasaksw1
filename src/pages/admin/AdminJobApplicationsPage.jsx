import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Calendar, MessageSquare, Trash2, CheckCircle, Clock, AlertCircle, Briefcase, Phone, Link as LinkIcon, FileText, ExternalLink } from 'lucide-react';
import { db } from '../../firebase';
import { collection, query, orderBy, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';

const AdminJobApplicationsPage = () => {
    const { permissions, role } = useAdmin();
    const canWrite = role === 'head_admin' || checkPermission(permissions, 'careers', 'write');

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // all, new, in-progress, reviewed

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const q = query(collection(db, 'job_applications'), orderBy('created_at', 'desc'));
            const snap = await getDocs(q);
            setApplications(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            await updateDoc(doc(db, 'job_applications', id), { status: newStatus });

            setApplications(applications.map(a =>
                a.id === id ? { ...a, status: newStatus } : a
            ));
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this application?')) return;

        try {
            await deleteDoc(doc(db, 'job_applications', id));
            setApplications(applications.filter(a => a.id !== id));
        } catch (error) {
            console.error('Error deleting application:', error);
            alert('Failed to delete application');
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'new': return <AlertCircle className="text-orange-500" size={20} />;
            case 'in-progress': return <Clock className="text-blue-500" size={20} />;
            case 'reviewed': return <CheckCircle className="text-green-500" size={20} />;
            default: return <AlertCircle className="text-gray-500" size={20} />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'new': return 'bg-orange-500/10 border-orange-500/20 text-orange-400';
            case 'in-progress': return 'bg-blue-500/10 border-blue-500/20 text-blue-400';
            case 'reviewed': return 'bg-green-500/10 border-green-500/20 text-green-400';
            default: return 'bg-gray-500/10 border-gray-500/20 text-gray-400';
        }
    };

    const filteredApplications = filter === 'all'
        ? applications
        : applications.filter(a => (a.status || 'new') === filter);

    const stats = {
        total: applications.length,
        new: applications.filter(a => !a.status || a.status === 'new').length,
        inProgress: applications.filter(a => a.status === 'in-progress').length,
        reviewed: applications.filter(a => a.status === 'reviewed').length
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center text-white">
                Loading applications...
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            {/* Admin Indicator */}
            <div className="fixed top-28 left-0 right-0 z-[10000] bg-purple-600 backdrop-blur-md text-white px-4 py-2 text-center font-bold shadow-lg border-b border-white/10 flex justify-center items-center max-w-7xl mx-auto rounded-b-xl">
                <span>JOB APPLICATIONS MANAGEMENT</span>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden flex items-center justify-center min-h-[40vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase mb-8 leading-none tracking-tight">
                            Job <span className="text-purple-500">Applications</span>
                        </h1>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-4 mt-12">
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                                <div className="text-3xl font-black text-white">{stats.total}</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Total</div>
                            </div>
                            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl px-6 py-4">
                                <div className="text-3xl font-black text-orange-400">{stats.new}</div>
                                <div className="text-xs text-orange-400 uppercase tracking-wider">New</div>
                            </div>
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl px-6 py-4">
                                <div className="text-3xl font-black text-blue-400">{stats.inProgress}</div>
                                <div className="text-xs text-blue-400 uppercase tracking-wider">In Progress</div>
                            </div>
                            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl px-6 py-4">
                                <div className="text-3xl font-black text-green-400">{stats.reviewed}</div>
                                <div className="text-xs text-green-400 uppercase tracking-wider">Reviewed</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="py-8 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['all', 'new', 'in-progress', 'reviewed'].map(status => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-6 py-2 rounded-full font-bold uppercase text-xs transition-all ${filter === status
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                                    }`}
                            >
                                {status.replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications List */}
            <section className="py-12 px-4 pb-20">
                <div className="container mx-auto max-w-6xl space-y-6">
                    {filteredApplications.length === 0 ? (
                        <div className="text-center text-slate-500 py-20">
                            No applications found for this filter.
                        </div>
                    ) : (
                        filteredApplications.map((app) => (
                            <motion.div
                                key={app.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#1e293b]/30 border border-white/10 rounded-3xl p-6 md:p-8 relative group hover:border-purple-500/30 transition-all"
                            >
                                {/* Delete Button - Write Access Only */}
                                {canWrite && (
                                    <button
                                        onClick={() => handleDelete(app.id)}
                                        className="absolute top-6 right-6 text-red-500 hover:bg-red-500/10 p-3 rounded-full z-20 transition-colors opacity-0 group-hover:opacity-100"
                                        title="Delete Application"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Left: Applicant Info */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <User className="text-purple-500" size={20} />
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase tracking-wider">Applicant</div>
                                                <div className="text-white font-bold">
                                                    {app.first_name} {app.last_name}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Mail className="text-blue-500" size={20} />
                                            <div className="min-w-0 flex-1">
                                                <div className="text-xs text-slate-500 uppercase tracking-wider">Email</div>
                                                <a
                                                    href={`mailto:${app.email}`}
                                                    className="text-blue-400 hover:text-blue-300 font-medium break-all text-sm"
                                                >
                                                    {app.email}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Phone className="text-green-500" size={20} />
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase tracking-wider">Phone</div>
                                                <a
                                                    href={`tel:${app.phone}`}
                                                    className="text-white font-medium hover:text-green-400"
                                                >
                                                    {app.phone}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Calendar className="text-orange-500" size={20} />
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase tracking-wider">Applied</div>
                                                <div className="text-white font-medium text-sm">
                                                    {new Date(app.created_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Middle: Role & Details */}
                                    <div className="lg:col-span-2 space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Briefcase className="text-purple-500 mt-1" size={20} />
                                            <div className="flex-1">
                                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Position</div>
                                                <div className="text-2xl font-black text-white">{app.role}</div>
                                            </div>
                                        </div>

                                        {app.portfolio_url && (
                                            <div className="flex items-start gap-3">
                                                <LinkIcon className="text-blue-500 mt-1" size={20} />
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Portfolio/LinkedIn</div>
                                                    <a
                                                        href={app.portfolio_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 break-all"
                                                    >
                                                        {app.portfolio_url}
                                                        <ExternalLink size={14} />
                                                    </a>
                                                </div>
                                            </div>
                                        )}

                                        {app.message && (
                                            <div className="flex items-start gap-3">
                                                <MessageSquare className="text-green-500 mt-1" size={20} />
                                                <div className="flex-1">
                                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Cover Letter</div>
                                                    <div className="text-slate-300 leading-relaxed bg-black/20 p-4 rounded-2xl border border-white/5 text-sm">
                                                        {app.message}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {app.resume_url && (
                                            <div className="flex items-start gap-3">
                                                <FileText className="text-yellow-500 mt-1" size={20} />
                                                <div className="flex-1">
                                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Resume</div>
                                                    <a
                                                        href={app.resume_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full font-bold text-xs uppercase hover:bg-yellow-500/20 transition-all"
                                                    >
                                                        <FileText size={16} />
                                                        View Resume
                                                        <ExternalLink size={14} />
                                                    </a>
                                                </div>
                                            </div>
                                        )}

                                        {/* Status Selector */}
                                        <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-white/5">
                                            <span className="text-xs text-slate-500 uppercase tracking-wider">Status:</span>
                                            <div className="flex gap-2 flex-wrap">
                                                {['new', 'in-progress', 'reviewed'].map(status => (
                                                    <button
                                                        key={status}
                                                        onClick={() => canWrite && handleStatusUpdate(app.id, status)}
                                                        disabled={!canWrite}
                                                        className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${(app.status || 'new') === status
                                                            ? getStatusColor(status)
                                                            : 'bg-white/5 border-white/10 text-slate-500 hover:bg-white/10'
                                                            } ${!canWrite ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                    >
                                                        {(app.status || 'new') === status && getStatusIcon(status)}
                                                        {status.replace('-', ' ')}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default AdminJobApplicationsPage;
