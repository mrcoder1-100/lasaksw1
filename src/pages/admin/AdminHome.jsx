import React from 'react';
import VisionSection from '../../components/VisionSection';
import Services from '../../components/Services';
import GoalSection from '../../components/GoalSection';
import QualityAssurance from '../../components/QualityAssurance';
import Clients from '../../components/Clients';
import Hero from '../../components/Hero';

import { useAdmin } from '../../contexts/AdminContext';

const AdminHome = () => {
    const { permissions, role, loading } = useAdmin();

    if (loading) return <div className="text-center p-20 text-slate-400">Loading...</div>;

    // Only Head Admins and Admins can edit the homepage structure/content
    const canEdit = role === 'head_admin' || role === 'admin';

    return (
        <div className="min-h-screen bg-[#0f172a]">
            {/* Use the centralized Hero component with editing enabled */}
            <Hero editable={canEdit} />

            <VisionSection editable={canEdit} />
            <Services editable={canEdit} />
            <GoalSection editable={canEdit} />
            <QualityAssurance editable={canEdit} />
            <Clients editable={canEdit} />
        </div>
    );
};

export default AdminHome;
