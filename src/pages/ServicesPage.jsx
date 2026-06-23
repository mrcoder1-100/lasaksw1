import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import Clients from '../components/Clients';
import SEO from '../components/SEO';
import { CMSText } from '../components/cms';

const ServicesPage = ({ isEditable = false }) => {
    return (
        <div className="min-h-screen pt-20 bg-[#0f172a]">
            <SEO
                title="Our Services - Digital & Industrial Solutions"
                description="Explore our wide range of services including Mechanical Design, Web Development, Ecommerce, and Digital Marketing."
                canonical="/services"
            />

            {/* Edit Mode Indicator */}
            {isEditable && (
                <div className="fixed top-20 left-0 right-0 z-[100] bg-green-600 backdrop-blur-md text-white px-4 py-2 text-center font-bold shadow-lg border-b border-white/10">
                    ✏️ EDIT MODE - Click on any text to edit. Changes save automatically.
                </div>
            )}

            {/* Page Header */}
            <section className="relative py-16 md:py-24 overflow-hidden text-center block px-4">
                {/* Background Glows (CSS Only) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 mb-8 animate-float relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse"></div>
                        <div className="absolute inset-2 border-2 border-blue-400/20 rounded-full animate-spin-slow"></div>
                        <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center bg-blue-900/10 backdrop-blur-sm">
                            <span className="text-4xl">🚀</span>
                        </div>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-8xl font-black text-white tracking-tight md:tracking-[0.2em] uppercase mb-4"
                    >
                        <CMSText id="services_page_title" defaultText="OUR SERVICES" editable={isEditable} />
                    </motion.h1>
                    <div className="h-1.5 w-24 md:w-32 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 max-w-3xl text-lg md:text-xl"
                    >
                        "<CMSText id="services_page_description" defaultText="Empowering your business with cutting-edge digital and industrial solutions tailored for the future." editable={isEditable} />"
                    </motion.p>
                </div>
            </section>

            <Services editable={isEditable} />
            <Clients />
        </div>
    );
};

export default ServicesPage;
