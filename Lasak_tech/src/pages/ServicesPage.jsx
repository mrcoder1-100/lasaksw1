import React from 'react';
import Services from '../components/Services';
import Clients from '../components/Clients';

const ServicesPage = () => {
    return (
        <div className="pt-20">
            <div className="bg-gradient-to-b from-hero-end to-primary py-12 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-4">
                    We provide a wide range of digital services to help your business thrive in the modern era.
                </p>
            </div>
            <Services />
            <Clients />
        </div>
    );
};

export default ServicesPage;
