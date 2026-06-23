import { useState, useEffect } from 'react';
import { auth } from '../firebase';

/**
 * Custom hook to fetch and manage admin user data
 * @returns {Object} - { adminUser, loading, error, refetch }
 */
export const useAdminUser = () => {
    const [adminUser, setAdminUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // SIMPLIFIED ADMIN CONFIGURATION
    const WRITE_ADMINS = [
        'info@lasak.in',
        'Head@lasak.in'
    ];

    const READ_ADMINS = [
        'veerasneha1404@gmail.com',
        '24pa21@psgtech.ac.in',
        'viewer@lasak.in'
    ];

    const fetchAdminUser = async () => {
        try {
            setLoading(true);
            setError(null);

            // Get current authenticated user
            // In Firebase, we should rely on onAuthStateChanged in Context,
            // but for this hook, auth.currentUser might be populated if auth is initialized.
            // Note: If calling this on initial load, currentUser might be null momentarily.
            const user = auth.currentUser;

            if (!user) {
                setAdminUser(null);
                setLoading(false);
                return;
            }

            // DETERMINE ROLE BASED ON EMAIL
            let assignedRole = null;
            let assignedPermissions = null;

            if (user.email && WRITE_ADMINS.includes(user.email)) {
                // WRITE MODE
                assignedRole = 'head_admin';
                assignedPermissions = {
                    blogs: { read: true, write: true },
                    services: { read: true, write: true },
                    products: { read: true, write: true },
                    enquiries: { read: true, write: true },
                    careers: { read: true, write: true },
                    contact: { read: true, write: true },
                    legal: { read: true, write: true },
                    admin_management: { read: true, write: true }
                };
            } else if (user.email && READ_ADMINS.includes(user.email)) {
                // READ MODE
                assignedRole = 'admin';
                assignedPermissions = {
                    blogs: { read: true, write: false },
                    services: { read: true, write: false },
                    products: { read: true, write: false },
                    enquiries: { read: true, write: false },
                    careers: { read: true, write: false },
                    contact: { read: true, write: false },
                    legal: { read: true, write: false },
                    admin_management: { read: false, write: false }
                };
            }

            if (assignedRole) {
                const virtualAdminUser = {
                    id: user.uid,
                    email: user.email,
                    role: assignedRole,
                    permissions: assignedPermissions
                };
                setAdminUser(virtualAdminUser);
            } else {
                setAdminUser(null);
            }
        } catch (err) {
            console.error('Error in useAdminUser:', err);
            setError(err.message);
            setAdminUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdminUser();
    }, []);

    return {
        adminUser,
        loading,
        error,
        refetch: fetchAdminUser
    };
};

export default useAdminUser;
