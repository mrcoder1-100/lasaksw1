import React, { useState, useEffect } from 'react';
import { X, Mail, Key, Shield, Check } from 'lucide-react';
import { db } from '../../firebase';
import { doc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { DEFAULT_PERMISSIONS, HEAD_ADMIN_PERMISSIONS, READ_ONLY_PERMISSIONS, MODULE_NAMES } from '../../utils/permissions';

const AdminUserModal = ({ isOpen, onClose, onSave, editingAdmin = null }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'admin',
        permissions: { ...READ_ONLY_PERMISSIONS }
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (editingAdmin) {
            setFormData({
                email: editingAdmin.email,
                password: '',
                role: editingAdmin.role,
                permissions: editingAdmin.permissions || { ...DEFAULT_PERMISSIONS },
            });
        } else {
            setFormData({
                email: '',
                password: '',
                role: 'admin',
                permissions: { ...READ_ONLY_PERMISSIONS },
            });
        }
        setError('');
    }, [editingAdmin, isOpen]);

    const handleRoleChange = (newRole) => {
        setFormData(prev => ({
            ...prev,
            role: newRole,
            permissions: newRole === 'head_admin' ? { ...HEAD_ADMIN_PERMISSIONS } : { ...READ_ONLY_PERMISSIONS }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (editingAdmin) {
                // Update existing admin in Firestore
                await updateDoc(doc(db, 'admin_users', editingAdmin.id), {
                    role: formData.role,
                    permissions: formData.permissions
                });

                onSave();
                onClose();
            } else {
                // CREATE NEW ADMIN USER RECORD IN FIRESTORE
                // Note: Firebase does not support creating Auth users from the client-side.
                // The new admin user must sign up themselves or be created via Firebase Console / Cloud Functions.
                // We create the Firestore record here so access is granted once they log in.
                if (!formData.email) {
                    throw new Error('Email is required.');
                }

                await addDoc(collection(db, 'admin_users'), {
                    email: formData.email,
                    role: formData.role,
                    permissions: formData.permissions,
                    created_at: new Date().toISOString()
                });

                alert(`✅ Admin record created for ${formData.email}.\n\nIMPORTANT: This user must create their Firebase account at the login page first, or be created via Firebase Console > Authentication.\n\nOnce they log in, they will have the permissions you configured.`);
                onSave();
                onClose();
            }
        } catch (err) {
            console.error('Admin action failed:', err);
            setError(err.message || 'Action failed');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#1e293b] border border-white/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-[#1e293b] border-b border-white/10 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                            <Shield className="text-blue-400" size={20} />
                        </div>
                        <h2 className="text-2xl font-black text-white">
                            {editingAdmin ? 'Edit Admin User' : 'Add New Admin'}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors"
                    >
                        <X className="text-white" size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-300 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                disabled={!!editingAdmin}
                                className="w-full bg-black/20 border border-white/5 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="admin@lasak.in"
                                required
                            />
                        </div>
                    </div>

                    {/* Create User Info - Firebase Note */}
                    {!editingAdmin && (
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
                            <Shield className="text-blue-400 shrink-0 mt-0.5" size={20} />
                            <div>
                                <p className="text-blue-200 text-sm font-bold">Firebase Account Setup</p>
                                <p className="text-blue-500/80 text-xs mt-1">
                                    This will create an admin record in the database. The user must also create a Firebase Auth account via the login page, or be created via Firebase Console → Authentication.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Role */}
                    <div className="space-y-4">
                        <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider">
                            Access Level
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => handleRoleChange('admin')}
                                className={`p-4 rounded-xl border-2 transition-all text-left ${formData.role === 'admin'
                                    ? 'border-blue-500 bg-blue-500/10'
                                    : 'border-white/10 bg-black/20 hover:border-white/20'
                                    }`}
                            >
                                <p className="text-white font-bold">Custom Access</p>
                                <p className="text-slate-400 text-[10px] mt-1 uppercase">Configure per-page permissions</p>
                            </button>
                            <button
                                type="button"
                                onClick={() => handleRoleChange('head_admin')}
                                className={`p-4 rounded-xl border-2 transition-all text-left ${formData.role === 'head_admin'
                                    ? 'border-blue-500 bg-blue-500/10'
                                    : 'border-white/10 bg-black/20 hover:border-white/20'
                                    }`}
                            >
                                <p className="text-white font-bold">Super Admin</p>
                                <p className="text-slate-400 text-[10px] mt-1 uppercase">Full access to everything</p>
                            </button>
                        </div>

                        {/* Granular Permissions (Only for 'admin' role) */}
                        {formData.role === 'admin' && (
                            <div className="bg-black/20 border border-white/5 rounded-xl p-4 space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase pb-2 border-b border-white/5">
                                    <span>Module</span>
                                    <div className="flex gap-4 pr-2">
                                        <span className="w-8 text-center">View</span>
                                        <span className="w-8 text-center">Edit</span>
                                    </div>
                                </div>
                                {Object.keys(MODULE_NAMES).map((moduleKey) => {
                                    const moduleLabel = MODULE_NAMES[moduleKey];
                                    return (
                                        <div key={moduleKey} className="flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-2 transition-colors">
                                            <span className="text-sm text-slate-300 font-medium">{moduleLabel}</span>
                                            <div className="flex gap-4">
                                                {/* Read Toggle */}
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                        checked={formData.permissions[moduleKey]?.read || false}
                                                        onChange={(e) => {
                                                            setFormData(prev => ({
                                                                ...prev,
                                                                permissions: {
                                                                    ...prev.permissions,
                                                                    [moduleKey]: {
                                                                        ...prev.permissions[moduleKey],
                                                                        read: e.target.checked
                                                                    }
                                                                }
                                                            }));
                                                        }}
                                                    />
                                                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                                </label>

                                                {/* Write Toggle */}
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                        checked={formData.permissions[moduleKey]?.write || false}
                                                        onChange={(e) => {
                                                            setFormData(prev => ({
                                                                ...prev,
                                                                permissions: {
                                                                    ...prev.permissions,
                                                                    [moduleKey]: {
                                                                        ...prev.permissions[moduleKey],
                                                                        write: e.target.checked
                                                                    }
                                                                }
                                                            }));
                                                        }}
                                                    />
                                                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
                                                </label>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Check size={18} />
                                    {editingAdmin ? 'Update Admin' : 'Create Admin'}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminUserModal;
