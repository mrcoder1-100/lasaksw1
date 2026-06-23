import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Construction, Zap, Settings, ShieldCheck, RefreshCw, Activity, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import Button from '../components/ui/Button';

const RetroFittingPage = () => {
    const services = [
        {
            title: "Structural Retrofitting",
            description: "Strengthening existing structures to increase load capacity and extend lifespan using modern materials.",
            icon: <Construction size={32} />
        },
        {
            title: "Seismic Retrofitting",
            description: "Modifying structures to make them more resistant to seismic activity, ground motion, or soil failure.",
            icon: <Activity size={32} />
        },
        {
            title: "Energy Efficiency Retrofitting",
            description: "Upgrading systems to reduce energy consumption, including HVAC, lighting, and insulation improvements.",
            icon: <Zap size={32} />
        },
        {
            title: "Mechanical Systems Upgrade",
            description: "Replacing outdated machinery with modern, high-efficiency alternatives to boost productivity.",
            icon: <Settings size={32} />
        },
        {
            title: "Safety Compliance Retrofitting",
            description: "Updating equipment and facilities to meet current safety standards and regulations.",
            icon: <ShieldCheck size={32} />
        },
        {
            title: "Automation Retrofitting",
            description: "Integrating modern automation and control systems into existing manual equipment.",
            icon: <RefreshCw size={32} />
        }
    ];

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            <SEO
                title="Expert Retrofitting Solutions - Modernize Your Infrastructure"
                description="Upgrade existing equipment and structures with advanced retrofitting. Improve efficiency, safety, and lifespan with our engineering expertise."
                canonical="/services/retro-fitting"
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden px-4 flex items-center justify-center">
                {/* Visual Background Enhancement */}
                <div className="absolute inset-0 z-0">
                    {/* High-Impact Industrial Image */}
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
                        alt="Retrofitting Innovation"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />

                    {/* Technical Grid Overlay (CSS) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

                    {/* Cinematic Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[#0a0f1c]/50"></div>

                    {/* Focal Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-10"
                    >
                        {/* 3D Sphere Replacement (CSS Glow) */}
                        <div className="w-44 h-44 md:w-72 md:h-72 mx-auto relative group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-10 border border-blue-500/10 rounded-full animate-reverse-spin"></div>
                            <Construction className="w-full h-full text-blue-500 p-14 relative z-10 animate-float" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.5rem] sm:text-7xl md:text-[9rem] font-black text-white tracking-[0.1em] md:tracking-[0.25em] uppercase mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] leading-[1.1] md:leading-none break-words"
                    >
                        RETRO<br />FITTING
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-200 max-w-5xl text-lg md:text-xl mb-12 leading-relaxed opacity-90 drop-shadow-2xl px-4"
                    >
                        "Modernize your assets. We upgrade existing equipment and structures to improve efficiency, safety, and performance."
                    </motion.p>
                </div>
            </section>

            {/* Main Content with Sticky Layout */}
            <section className="py-20 px-4 relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Fixed Content (Sticky) */}
                        <div className="lg:sticky lg:top-40 h-fit lg:col-span-2 py-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 uppercase tracking-tighter"
                            >
                                EXPERT <br />
                                <span className="text-blue-500 text-outline-blue font-black">RETRO FITTING</span> <br />
                                SOLUTIONS
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Capabilities</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Structural Upgrades',
                                        'Seismic Reinforcement',
                                        'Energy Management',
                                        'Mechanical Modernization',
                                        'Safety Compliance',
                                        'Industrial Automation'
                                    ].map((tag, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                                            <span className="group-hover:text-white transition-colors">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 p-1 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600">
                                    <div className="bg-[#0f172a] p-6 rounded-xl h-full text-center">
                                        <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">Need an Upgrade?</h3>
                                        <p className="text-slate-400 text-sm mb-4">"Extend the life of your infrastructure with our advanced engineering solutions."</p>
                                        <Link to="/contact">
                                            <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                                Consult Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content */}
                        <div className="lg:col-span-3 space-y-16">

                            {/* Section Intro */}
                            <div className="pl-8 border-l-4 border-blue-500/50 mb-16">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Modernizing Assets</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                                    "Retrofitting is more than just modernizing equipment—it’s about enhancing efficiency, performance, and reliability for long-term value."
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="space-y-8">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/10 hover:border-blue-500/30 transition-all group cursor-default shadow-2xl relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                            {React.cloneElement(service.icon, { size: 120 })}
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                            <div className="p-6 bg-blue-600/10 rounded-[2rem] text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 h-fit">
                                                {React.cloneElement(service.icon, { size: 40 })}
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight leading-none">{service.title}</h3>
                                                <p className="text-slate-300 text-lg leading-relaxed font-light mb-6">{service.description}</p>
                                                <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                                                    Learn More <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients */}
            <Clients />
        </div>
    );
};

export default RetroFittingPage;
