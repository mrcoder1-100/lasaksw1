import React from 'react';
import VisionSection from '../components/VisionSection';
import Services from '../components/Services';
import GoalSection from '../components/GoalSection';
import QualityAssurance from '../components/QualityAssurance';
import Clients from '../components/Clients';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0f172a]">
            <SEO
                title="Home - Innovative Design & Engineering Solutions"
                description="Lasak Tech provides cutting-edge design and engineering solutions, including mechanical design, web development, and AI integration."
                canonical="/"
            />

            <Hero />

            {/* Vision Section with Stats */}
            <VisionSection editable={false} />

            {/* Services Section */}
            <Services editable={false} />

            {/* Goal Section */}
            <GoalSection editable={false} />

            {/* Quality Assurance */}
            <QualityAssurance editable={false} />

            {/* Clients */}
            <Clients editable={false} />

        </div>
    );
};

export default Home;
