import React from 'react';
import AboutHero from '../components/AboutHero';
import Statistics from '../components/Statistics';
import VisionMission from '../components/VisionMission';
import Careers from '../components/Careers';
import Team from '../components/Team';
import QualityAssurance from '../components/QualityAssurance';
import Clients from '../components/Clients';

const AboutPage = () => {
    // Specific stats for About Page
    const aboutStats = [
        { value: "100+", label: "Clients" },
        { value: "150+", label: "Projects" },
        { value: "25+", label: "Team Members" },
        { value: "3+", label: "Years Of Experience" }
    ];

    return (
        <>
            <AboutHero />
            <Statistics items={aboutStats} />
            <VisionMission />
            <Careers />
            <Team />
            <QualityAssurance />
            <Clients />
        </>
    );
};

export default AboutPage;
