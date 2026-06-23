import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Wind, Thermometer, TrendingUp, BarChart2, Shield } from 'lucide-react';
import Clients from '../components/Clients';

const AnalysisPage = () => {
    const services = [
        {
            title: "Finite Element Analysis (FEA)",
            description: "Simulating physical phenomena to predict how parts and assemblies behave under real-world conditions.",
            icon: <Activity size={32} />
        },
        {
            title: "Computational Fluid Dynamics (CFD)",
            description: "Analyzing fluid flow, heat transfer, and chemical reactions to optimize system performance.",
            icon: <Wind size={32} />
        },
        {
            title: "Thermal Analysis",
            description: "Evaluating temperature distribution and heat flow to ensure thermal management and reliability.",
            icon: <Thermometer size={32} />
        },
        {
            title: "Structural Analysis",
            description: "Assessing structural integrity to ensure designs can withstand applied loads and stresses.",
            icon: <TrendingUp size={32} />
        },
        {
            title: "Dynamic & Vibration Analysis",
            description: "Studying the effects of vibration and dynamic forces to prevent resonance and failure.",
            icon: <BarChart2 size={32} />
        },
        {
            title: "Fatigue & Durability Analysis",
            description: "Predicting product life and failure points under repeated loading cycles.",
            icon: <Shield size={32} />
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden px-4">
                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        {/* 3D Sphere/Icon Placeholder */}
                        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-blue-400 to-blue-800 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)] mb-8 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500')] opacity-50 bg-cover mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black text-white tracking-widest uppercase mb-6 drop-shadow-xl"
                    >
                        Analysis
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-2xl text-lg md:text-xl"
                    >
                        Data-driven engineering. We use advanced simulation and analysis tools to validate designs, optimize performance, and reduce physical testing costs.
                    </motion.p>
                </div>
            </section>

            {/* Services List - Split Layout */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Title & Image */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="sticky top-24">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                                We Offer<br />
                                <span className="text-blue-500">Analysis</span><br />
                                Like
                            </h2>
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=600&auto=format&fit=crop" alt="Engineering Analysis" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vertical List of Service Cards */}
                    <div className="lg:col-span-8 space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1e293b] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-900/10 group"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-10 md:p-20 text-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                                Validate Your Designs with Confidence
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                                Eliminate guesswork and mitigate risks. Our expert analysis services provide the insights you need to build better, safer, and more efficient products.
                            </p>
                            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get Your Analysis Report
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients */}
            <Clients />

        </div>
    );
};

export default AnalysisPage;
