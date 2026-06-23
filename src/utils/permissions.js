/**
 * Permission utility functions for admin role-based access control
 */

/**
 * Check if a user has a specific permission for a module
 * @param {Object} permissions - The permissions object from admin_users table
 * @param {string} module - The module name (e.g., 'blogs', 'services', 'products')
 * @param {string} action - The action type ('read' or 'write')
 * @returns {boolean} - True if user has permission, false otherwise
 */
export const checkPermission = (permissions, module, action) => {
    if (!permissions || !module || !action) return false;

    // Check if module exists in permissions
    if (!permissions[module]) return false;

    // Check if action is allowed
    return permissions[module][action] === true;
};

/**
 * Check if user is a head admin
 * @param {string} role - The user's role
 * @returns {boolean} - True if user is head admin
 */
export const isHeadAdmin = (role) => {
    return role === 'head_admin';
};

/**
 * Check if user can manage other admins
 * @param {Object} permissions - The permissions object from admin_users table
 * @returns {boolean} - True if user can manage admins
 */
export const canManageAdmins = (permissions) => {
    return checkPermission(permissions, 'admin_management', 'write');
};

/**
 * Check if user has read access to a module
 * @param {Object} permissions - The permissions object
 * @param {string} module - The module name
 * @returns {boolean}
 */
export const canRead = (permissions, module) => {
    return checkPermission(permissions, module, 'read');
};

/**
 * Check if user has write access to a module
 * @param {Object} permissions - The permissions object
 * @param {string} module - The module name
 * @returns {boolean}
 */
export const canWrite = (permissions, module) => {
    return checkPermission(permissions, module, 'write');
};

/**
 * Check if user has both read and write access to a module
 * @param {Object} permissions - The permissions object
 * @param {string} module - The module name
 * @returns {boolean}
 */
export const hasFullAccess = (permissions, module) => {
    return canRead(permissions, module) && canWrite(permissions, module);
};

/**
 * Get all modules that user has access to
 * @param {Object} permissions - The permissions object
 * @returns {Array} - Array of module names user has access to
 */
export const getAccessibleModules = (permissions) => {
    if (!permissions) return [];

    return Object.keys(permissions).filter(module => {
        return canRead(permissions, module) || canWrite(permissions, module);
    });
};

/**
 * Default permissions structure for new admin users
 */
export const DEFAULT_PERMISSIONS = {
    blogs: { read: false, write: false },
    services: { read: false, write: false },
    products: { read: false, write: false },
    enquiries: { read: false, write: false },
    careers: { read: false, write: false },
    contact: { read: false, write: false },
    legal: { read: false, write: false },
    seo: { read: false, write: false },
    admin_management: { read: false, write: false }
};

/**
 * Full permissions for head admin
 */
export const HEAD_ADMIN_PERMISSIONS = {
    blogs: { read: true, write: true },
    services: { read: true, write: true },
    products: { read: true, write: true },
    enquiries: { read: true, write: true },
    careers: { read: true, write: true },
    contact: { read: true, write: true },
    legal: { read: true, write: true },
    seo: { read: true, write: true },
    admin_management: { read: true, write: true }
};

/**
 * Read-only permissions for viewer admin (Enquiries, Careers, etc.)
 */
export const READ_ONLY_PERMISSIONS = {
    blogs: { read: true, write: false },
    services: { read: true, write: false },
    products: { read: true, write: false },
    enquiries: { read: true, write: false },
    careers: { read: true, write: false },
    contact: { read: true, write: false },
    legal: { read: true, write: false },
    seo: { read: true, write: false },
    // Admin management usually restricted for read-only users, but let's keep it strictly read-only or hidden? 
    // Usually viewers shouldn't see admin users list? 
    // Let's give read access so they can see who is admin but not edit.
    admin_management: { read: true, write: false }
};

/**
 * Module display names for UI
 */
export const MODULE_NAMES = {
    blogs: 'Blogs',
    services: 'Services',
    products: 'Products',
    enquiries: 'Enquiries',
    careers: 'Careers',
    contact: 'Contact',
    legal: 'Legal Pages',
    seo: 'SEO Management',
    admin_management: 'Admin Management'
};

/**
 * Get permission level for a module
 * @param {Object} permissions - The permissions object
 * @param {string} module - The module name
 * @returns {string} - 'none', 'read', 'write', or 'full'
 */
export const getPermissionLevel = (permissions, module) => {
    if (!permissions || !permissions[module]) return 'none';

    const { read, write } = permissions[module];

    if (read && write) return 'full';
    if (read) return 'read';
    if (write) return 'write';
    return 'none';
};
