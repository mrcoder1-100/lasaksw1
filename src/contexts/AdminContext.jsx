import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { isHeadAdmin as checkIsHeadAdmin } from '../utils/permissions';

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
    const [adminUser, setAdminUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAdminUser();

        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchAdminUser(user);
            } else {
                setAdminUser(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const fetchAdminUser = async (currentUser = null) => {
        try {
            setLoading(true);
            setError(null);

            // Get current authenticated user
            const user = currentUser || auth.currentUser;

            if (!user) {
                setAdminUser(null);
                setLoading(false);
                return;
            }

            // Fetch admin details from the database
            let adminData = null;
            try {
                const q = query(collection(db, 'admin_users'), where('user_id', '==', user.uid));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    adminData = querySnapshot.docs[0].data();
                }
            } catch (adminError) {
                console.error('Error fetching admin profile:', adminError);
            }

            // FALLBACK LOGIC: If user is not in DB but is in hardcoded list, allow entry
            const WRITE_ADMINS = ['info@lasak.in', 'Head@lasak.in', 'shamlisamporna@gmail.com'];
            const READ_ADMINS = ['veerasneha1404@gmail.com', '24pa21@psgtech.ac.in', 'viewer@lasak.in'];

            if (adminData) {
                console.log('✅ Admin user loaded from DB:', adminData.email);
                setAdminUser(adminData);
            } else if (user.email && WRITE_ADMINS.includes(user.email)) {
                console.log('🛡️ Using Head Admin fallback for:', user.email);
                setAdminUser({
                    user_id: user.uid,
                    email: user.email,
                    role: 'head_admin',
                    permissions: {
                        blogs: { read: true, write: true },
                        services: { read: true, write: true },
                        products: { read: true, write: true },
                        enquiries: { read: true, write: true },
                        careers: { read: true, write: true },
                        contact: { read: true, write: true },
                        legal: { read: true, write: true },
                        admin_management: { read: true, write: true }
                    }
                });
            } else if (user.email && READ_ADMINS.includes(user.email)) {
                console.log('🛡️ Using Reader Admin fallback for:', user.email);
                setAdminUser({
                    user_id: user.uid,
                    email: user.email,
                    role: 'admin',
                    permissions: {
                        blogs: { read: true, write: false },
                        services: { read: true, write: false },
                        products: { read: true, write: false },
                        enquiries: { read: true, write: false },
                        careers: { read: true, write: false },
                        contact: { read: true, write: false },
                        legal: { read: true, write: false },
                        admin_management: { read: true, write: false }
                    }
                });
            } else {
                console.log('❌ User not found in admin_users table:', user.email);
                setAdminUser(null);
            }

        } catch (err) {
            console.error('❌ Error in fetchAdminUser:', err);
            setError(err.message);
            setAdminUser(null);
        } finally {
            setLoading(false);
        }
    };

    const refreshAdminUser = () => {
        fetchAdminUser();
    };

    const isHeadAdmin = () => {
        return adminUser ? checkIsHeadAdmin(adminUser.role) : false;
    };

    const value = {
        adminUser,
        loading,
        error,
        refreshAdminUser,
        isHeadAdmin,
        role: adminUser?.role || null,
        permissions: adminUser?.permissions || null,
        email: adminUser?.email || null
    };

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};

export default AdminContext;
