import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../../contexts/AdminContext';
import { Shield, UserPlus, Edit2, Trash2, Crown, User, Eye, Pencil, Lock } from 'lucide-react';
import AdminUserModal from '../../components/admin/AdminUserModal';
import { getPermissionLevel, MODULE_NAMES } from '../../utils/permissions';

const AdminUsersPage = () => {
    const adminContext = useAdmin();
    const { isHeadAdmin, loading: adminLoading } = adminContext;

    // DEBUG: Log entire admin context
    console.log('🔍 useAdmin context:', adminContext);

    const [adminUsers, setAdminUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    useEffect(() => {
        fetchAdminUsers();
    }, []);

    const fetchAdminUsers = async () => {
        try {
            setLoading(true);
            const q = query(collection(db, 'admin_users'), orderBy('created_at', 'desc'));
            const snap = await getDocs(q);
            setAdminUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (err) {
            console.error('Error fetching admin users:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (adminId) => {
        try {
            // Get the user_id first
            const adminToDelete = adminUsers.find(a => a.id === adminId);
            if (!adminToDelete) return;

            await deleteDoc(doc(db, 'admin_users', adminId));
            console.warn('Note: Auth deletion from client is not supported in Firebase without Cloud Functions. Only the record was removed.');

            fetchAdminUsers();
            setDeleteConfirm(null);
        } catch (err) {
            console.error('Error deleting admin:', err);
            alert('Failed to delete admin user: ' + err.message);
        }
    };



    // Check if user is head admin
    if (adminLoading) {
        return (
            <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    // DEBUG: Log admin context state
    console.log('🔍 AdminUsersPage - Checking access...');
    console.log('📊 isHeadAdmin function:', isHeadAdmin);
    console.log('📊 isHeadAdmin() result:', isHeadAdmin());
    console.log('📊 adminLoading:', adminLoading);

    if (!isHeadAdmin()) {
        console.log('❌ Access denied - isHeadAdmin() returned false');
        return (
            <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-md text-center">
                    <Lock className="mx-auto text-red-400 mb-4" size={48} />
                    <h2 className="text-2xl font-black text-white mb-2">Access Denied</h2>
                    <p className="text-red-300">Only head administrators can manage admin users.</p>
                </div>
            </div>
        );
    }

    console.log('✅ Access granted - User is head admin');

    return (
        <div className="min-h-screen bg-[#0f172a] pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                            <Shield className="text-blue-400" size={28} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-white">Admin Users</h1>
                            <p className="text-slate-400 text-sm mt-1">Manage administrator accounts and permissions</p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setEditingAdmin(null);
                            setIsModalOpen(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all hover:scale-105"
                    >
                        <UserPlus size={20} />
                        Add Admin
                    </button>
                </div>

                {/* Admin Users List */}
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : adminUsers.length === 0 ? (
                    <div className="bg-[#1e293b]/50 border border-white/10 rounded-2xl p-12 text-center">
                        <Shield className="mx-auto text-slate-600 mb-4" size={48} />
                        <p className="text-slate-400">No admin users found</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {adminUsers.map(admin => (
                            <div
                                key={admin.id}
                                className="bg-[#1e293b]/50 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${admin.role === 'head_admin'
                                            ? 'bg-yellow-600/20 border border-yellow-500/30'
                                            : 'bg-blue-600/20 border border-blue-500/30'
                                            }`}>
                                            {admin.role === 'head_admin' ? (
                                                <Crown className="text-yellow-400" size={24} />
                                            ) : (
                                                <User className="text-blue-400" size={24} />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-white">{admin.email}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${admin.role === 'head_admin'
                                                    ? 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                                                    : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                                    }`}>
                                                    {admin.role === 'head_admin' ? 'Write Mode' : 'Read Mode'}
                                                </span>
                                            </div>
                                            <p className="text-slate-400 text-sm mb-4">
                                                Created {new Date(admin.created_at).toLocaleDateString()}
                                            </p>

                                            <div className={`${admin.role === 'head_admin' ? 'bg-yellow-600/10 border-yellow-500/20' : 'bg-blue-600/10 border-blue-500/20'} border rounded-lg p-3`}>
                                                <p className={`${admin.role === 'head_admin' ? 'text-yellow-400' : 'text-blue-400'} text-sm font-semibold flex items-center gap-2`}>
                                                    <Shield size={16} />
                                                    {admin.role === 'head_admin' ? 'Full access to all modules' : 'View-only access to dashboard'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 ml-4">
                                        <button
                                            onClick={() => {
                                                setEditingAdmin(admin);
                                                setIsModalOpen(true);
                                            }}
                                            className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-xl flex items-center justify-center transition-all"
                                            title="Edit admin"
                                        >
                                            <Edit2 className="text-blue-400" size={16} />
                                        </button>
                                        {admin.role !== 'head_admin' && (
                                            <button
                                                onClick={() => setDeleteConfirm(admin.id)}
                                                className="w-10 h-10 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-xl flex items-center justify-center transition-all"
                                                title="Delete admin"
                                            >
                                                <Trash2 className="text-red-400" size={16} />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Delete Confirmation */}
                                {deleteConfirm === admin.id && (
                                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between bg-red-500/10 rounded-xl p-4">
                                        <p className="text-red-300 font-semibold">Are you sure you want to delete this admin?</p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setDeleteConfirm(null)}
                                                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold transition-all"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => handleDelete(admin.id)}
                                                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-all"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            <AdminUserModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingAdmin(null);
                }}
                onSave={fetchAdminUsers}
                editingAdmin={editingAdmin}
            />
        </div>
    );
};

export default AdminUsersPage;
