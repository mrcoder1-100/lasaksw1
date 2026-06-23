import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';

const ProtectedRoute = () => {
    const { adminUser, loading: adminLoading } = useAdmin();
    // We also need to check basic auth session, which useAdmin handles, but let's be sure.
    // Actually useAdmin handles fetching. If adminUser is null, it means no admin profile.
    // BUT we might be logged in as a USER but not have ADMIN ENTRY?
    // AdminContext fetches entries from `admin_users`. If not found, adminUser is null.

    const location = useLocation();

    if (adminLoading) {
        return (
            <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-blue-500/20 rounded-full animate-ping absolute inset-0"></div>
                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">Authenticating System...</p>
                </div>
            </div>
        );
    }

    if (!adminUser) {
        console.warn(`Unauthorized access attempt to: ${location.pathname}`);
        return <Navigate to="/admin" state={{ from: location }} replace />;
    }

    // AdminProvider is now Global, so we just return Outlet
    return <Outlet />;
};

export default ProtectedRoute;

