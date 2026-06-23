import React from 'react';
import AboutHero from '../../components/AboutHero';
import Statistics from '../../components/Statistics';
import VisionMission from '../../components/VisionMission';
import Careers from '../../components/Careers';
import Team from '../../components/Team';
import QualityAssurance from '../../components/QualityAssurance';
import Clients from '../../components/Clients';

import { useAdmin } from '../../contexts/AdminContext';

const AdminAboutPage = () => {
    const { role, loading } = useAdmin();

    if (loading) return <div className="text-center p-20 text-slate-400">Loading...</div>;

    // Only Head Admin can edit About Page layout/content
    const canEdit = role === 'head_admin';



    return (
        <>
            <AboutHero editable={canEdit} />
            <Statistics editable={canEdit} />
            <VisionMission editable={canEdit} />
            <Careers editable={canEdit} />
            <Team editable={canEdit} />
            <QualityAssurance editable={canEdit} />
            <Clients editable={canEdit} />
        </>
    );
};

export default AdminAboutPage;
