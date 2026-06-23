import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAdmin } from '../../contexts/AdminContext';

const AdminDiagnosticPage = () => {
    const [authUser, setAuthUser] = useState(null);
    const [adminRecord, setAdminRecord] = useState(null);
    const [error, setError] = useState(null);
    const adminContext = useAdmin();

    useEffect(() => {
        checkStatus();
    }, []);

    const checkStatus = async () => {
        try {
            // Check authenticated user
            const user = await new Promise((resolve) => {
                const unsubscribe = auth.onAuthStateChanged((u) => {
                    unsubscribe();
                    resolve(u);
                });
            });
            setAuthUser(user);

            if (user) {
                // Check admin_users record
                const q = query(collection(db, 'admin_users'), where('email', '==', user.email));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    setAdminRecord(querySnapshot.docs[0].data());
                } else {
                    setAdminRecord(null);
                }
                setError(null);
            }
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f172a] p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black text-white mb-8">🔍 Admin Access Diagnostic</h1>

                {/* Auth User Status */}
                <div className="bg-[#1e293b] border border-white/10 rounded-xl p-6 mb-4">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Authentication Status</h2>
                    {authUser ? (
                        <div className="space-y-2">
                            <p className="text-green-400 font-bold">✅ User is authenticated</p>
                            <p className="text-slate-300">Email: <span className="text-white font-mono">{authUser.email}</span></p>
                            <p className="text-slate-300">User ID: <span className="text-white font-mono text-xs">{authUser.uid}</span></p>
                        </div>
                    ) : (
                        <p className="text-red-400 font-bold">❌ No authenticated user</p>
                    )}
                </div>

                {/* Admin Record Status */}
                <div className="bg-[#1e293b] border border-white/10 rounded-xl p-6 mb-4">
                    <h2 className="text-2xl font-bold text-white mb-4">2. Admin Users Table Record</h2>
                    {adminRecord ? (
                        <div className="space-y-2">
                            <p className="text-green-400 font-bold">✅ Admin record found</p>
                            <p className="text-slate-300">Email: <span className="text-white font-mono">{adminRecord.email}</span></p>
                            <p className="text-slate-300">Role: <span className="text-yellow-400 font-bold">{adminRecord.role}</span></p>
                            <div className="mt-4">
                                <p className="text-slate-300 mb-2">Permissions:</p>
                                <pre className="bg-black/50 p-4 rounded text-xs text-green-400 overflow-auto">
                                    {JSON.stringify(adminRecord.permissions, null, 2)}
                                </pre>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="space-y-2">
                            <p className="text-red-400 font-bold">❌ Error fetching admin record</p>
                            <pre className="bg-red-500/10 p-4 rounded text-sm text-red-300">
                                {JSON.stringify(error, null, 2)}
                            </pre>
                        </div>
                    ) : (
                        <p className="text-red-400 font-bold">❌ No admin record found for this user</p>
                    )}
                </div>

                {/* Admin Context Status */}
                <div className="bg-[#1e293b] border border-white/10 rounded-xl p-6 mb-4">
                    <h2 className="text-2xl font-bold text-white mb-4">3. Admin Context Status</h2>
                    <div className="space-y-2">
                        <p className="text-slate-300">Loading: <span className="text-white font-bold">{adminContext.loading ? 'Yes' : 'No'}</span></p>
                        <p className="text-slate-300">Admin User: <span className="text-white font-bold">{adminContext.adminUser ? 'Loaded' : 'Null'}</span></p>
                        <p className="text-slate-300">Role: <span className="text-white font-bold">{adminContext.role || 'None'}</span></p>
                        <p className="text-slate-300">Email: <span className="text-white font-bold">{adminContext.email || 'None'}</span></p>
                        <p className="text-slate-300">isHeadAdmin(): <span className={`font-bold ${adminContext.isHeadAdmin() ? 'text-green-400' : 'text-red-400'}`}>
                            {adminContext.isHeadAdmin() ? '✅ TRUE' : '❌ FALSE'}
                        </span></p>
                        {adminContext.error && (
                            <p className="text-red-400">Error: {adminContext.error}</p>
                        )}
                    </div>
                </div>

                {/* Diagnosis */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-blue-400 mb-4">💡 Diagnosis</h2>
                    {!authUser && <p className="text-white">❌ You are not logged in. Please login first.</p>}
                    {authUser && adminRecord && adminRecord.role === 'head_admin' && !adminContext.adminUser && (
                        <p className="text-white">❌ Database is correct but AdminContext failed to load. Check Firestore permissions or refresh the page.</p>
                    )}
                    {authUser && adminRecord && adminRecord.role === 'head_admin' && adminContext.isHeadAdmin() && (
                        <p className="text-green-400 font-bold">✅ Everything looks good! You should have access to Admin Users page.</p>
                    )}
                </div>

                <div className="mt-6 flex gap-4">
                    <button
                        onClick={checkStatus}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold"
                    >
                        🔄 Refresh Status
                    </button>
                    <a
                        href="/admin/users"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold inline-block"
                    >
                        → Try Admin Users Page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdminDiagnosticPage;
