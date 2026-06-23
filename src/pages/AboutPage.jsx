import React from 'react';
import SEO from '../components/SEO';
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
        { value: "5+", label: "Years Of Experience" }
    ];

    return (
        <>
            <SEO
                title="About Us - Our Mission & Vision"
                description="Learn about Lasak Tech, our mission to simplify complexity, and our team of experts dedicated to innovative solutions."
                canonical="/about"
            />
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
