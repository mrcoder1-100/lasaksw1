import React from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';
import { Lock } from 'lucide-react';

/**
 * PermissionGate component - Conditionally renders children based on permissions
 * @param {string} module - The module name (e.g., 'blogs', 'services')
 * @param {string} action - The action type ('read' or 'write')
 * @param {React.ReactNode} children - Content to render if permission is granted
 * @param {React.ReactNode} fallback - Optional content to render if permission is denied
 * @param {boolean} showDenied - Whether to show "Access Denied" message (default: false)
 */
const PermissionGate = ({
    module,
    action,
    children,
    fallback = null,
    showDenied = false
}) => {
    const { permissions, loading, role } = useAdmin();

    // Show loading state
    if (loading) {
        return null;
    }

    // Head admin has all permissions
    if (role === 'head_admin') {
        return <>{children}</>;
    }

    // Check if user has the required permission
    const hasPermission = checkPermission(permissions, module, action);

    if (hasPermission) {
        return <>{children}</>;
    }

    // Show fallback or access denied message
    if (showDenied) {
        return (
            <div className="flex items-center justify-center gap-3 p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                <Lock size={20} className="text-red-400" />
                <p className="text-red-300 text-sm font-semibold">
                    Access Denied - Insufficient Permissions
                </p>
            </div>
        );
    }

    return fallback;
};

export default PermissionGate;
