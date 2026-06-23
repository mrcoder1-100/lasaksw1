import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Wind, Thermometer, TrendingUp, BarChart2, Shield } from 'lucide-react';
import Clients from '../components/Clients';
import SEO from '../components/SEO';
import cfdAnalysisImg from '../assets/analysis-cfd.png';

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
        <div className="min-h-screen pt-20 bg-[#0a0f1c]">
            <SEO
                title="Engineering Analysis & FEA/CFD Simulation"
                description="Optimize your designs with advanced simulation. We provide FEA, CFD, thermal, and structural analysis to ensure product reliability."
                canonical="/services/engineering-analysis"
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden px-4 flex items-center justify-center">
                {/* Visual Background Enhancement */}
                <div className="absolute inset-0 z-0">
                    {/* High-Impact Analysis/Data Image */}
                    <img
                        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
                        alt="Engineering Analysis Excellence"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />

                    {/* Technical Grid Overlay (CSS) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

                    {/* Cinematic Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[#0a0f1c]/50"></div>

                    {/* Focal Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-10"
                    >
                        {/* 3D Sphere Replacement (CSS Glow) */}
                        <div className="w-44 h-44 md:w-64 md:h-64 mx-auto relative group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-10 border border-blue-500/10 rounded-full animate-reverse-spin"></div>
                            <Activity className="w-full h-full text-blue-500 p-14 relative z-10 animate-float" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.5rem] sm:text-6xl md:text-8xl font-black text-white tracking-[0.1em] md:tracking-[0.2em] uppercase mb-6 drop-shadow-2xl leading-[1.1] md:leading-tight break-words"
                    >
                        ENGINEERING <br />
                        <span className="text-blue-500 text-outline-blue font-black">ANALYSIS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-300 max-w-4xl text-lg md:text-xl mb-10 leading-relaxed opacity-80 px-4"
                    >
                        "Design with certainty. Our advanced simulation and analysis services ensure your products perform reliably under real-world conditions."
                    </motion.p>
                </div>
            </section>

            {/* Services Section with Sticky Layout */}
            <section className="py-20 px-4 relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Title & Image (Sticky) */}
                        <div className="lg:sticky lg:top-40 h-fit lg:col-span-2 py-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 uppercase tracking-tighter"
                            >
                                ENGINEERING <br />
                                <span className="text-blue-500 text-outline-blue font-black">ANALYSIS &</span> <br />
                                VALIDATION
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-[2.5rem] overflow-hidden border border-white/10 mt-8 group h-64 shadow-2xl relative"
                            >
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                                <img src={cfdAnalysisImg} alt="CFD Engineering Analysis" className="rounded-lg w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-slate-900/60 backdrop-blur-md border-t border-white/5 text-center translate-y-full group-hover:translate-y-0 transition-transform">
                                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Fluid Dynamics Simulation</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Vertical List of Service Cards */}
                        <div className="lg:col-span-3 space-y-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#1e293b]/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-900/10 group cursor-default shadow-3xl"
                                >
                                    <div className="flex items-start gap-8">
                                        <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                            {service.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight leading-none">{service.title}</h3>
                                            <p className="text-slate-300 text-lg leading-relaxed font-light mb-6">{service.description}</p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-400 text-sm font-bold uppercase tracking-widest bg-white/5 p-6 rounded-2xl border border-white/5">
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Accurate Simulation</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Performance Validation</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Risk Mitigation</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Design Optimization</li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
                            <Link to="/contact">
                                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Get Your Analysis Report
                                </button>
                            </Link>
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
