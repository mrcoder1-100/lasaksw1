import React from 'react';
import ContactPage from '../../pages/ContactPage';

import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';

const AdminContactPage = () => {
    const { permissions, role, loading } = useAdmin();

    if (loading) return <div className="text-center p-20 text-slate-400">Loading...</div>;

    const canEdit = role === 'head_admin' || checkPermission(permissions, 'contact', 'write');

    return <ContactPage editable={canEdit} />;
};

export default AdminContactPage;
