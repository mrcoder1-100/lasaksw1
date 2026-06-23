import React from 'react';
import { motion } from 'framer-motion';
import { Settings, RefreshCw, Scan, Factory, TrendingUp, ShieldCheck, User, Calendar, Tag, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';

const SensorValvePage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-20">
            <SEO
                title="Sensor Valve Reverse Engineering & Optimization"
                description="Expert reverse engineering for sensor valves. We recreate, optimize, and enhance valve performance for industrial and automotive uses."
                canonical="/services/sensor-valve-re"
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-400 mb-6">
                            <RefreshCw className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Reverse Engineering</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Sensor Valve <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Reverse Engineering</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Design Services for optimization, recreation, and performance enhancement.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-indigo-500" />
                                <span>Brindhaa A</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-indigo-500" />
                                <span>Mechanical Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-indigo-500" />
                                <span>September 22, 2025</span>
                            </div>
                        </motion.div>
                    </motion.div>
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
                                SENSOR <br />
                                <span className="text-indigo-500 text-outline-indigo font-black">VALVE</span> <br />
                                OPTIMIZATION
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Services</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Valve Analysis',
                                        '3D Scanning',
                                        'CAD Modeling',
                                        'Fluid Dynamics',
                                        'Material Testing',
                                        'Prototype Design'
                                    ].map((tag, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform"></div>
                                            <span className="group-hover:text-white transition-colors">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 p-1 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600">
                                    <div className="bg-[#0f172a] p-6 rounded-xl h-full text-center">
                                        <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">Need Reverse Engineering?</h3>
                                        <p className="text-slate-400 text-sm mb-4">"Contact Lasak Tech for precise and efficient sensor valve solutions and mechanical optimization."</p>
                                        <button className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content */}
                        <div className="lg:col-span-3 space-y-16">
                            {/* Section Intro */}
                            <div className="pl-8 border-l-4 border-indigo-500/50">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Component recreation</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                                    "Analyzing existing sensor valves to improve, or redesign for better performance across mechanical and electronic properties."
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Design Importance",
                                        icon: <Settings />,
                                        desc: "Reproducing sensor valves when documentation is unavailable for repair, upgrade, or replacement.",
                                        color: "text-indigo-400",
                                        bgColor: "bg-indigo-500/10"
                                    },
                                    {
                                        title: "Advanced Tech",
                                        icon: <Scan />,
                                        desc: "Utilizing 3D scanning and fluid dynamics simulation to analyze complex valve geometry.",
                                        color: "text-violet-400",
                                        bgColor: "bg-violet-500/10"
                                    },
                                    {
                                        title: "Industrial Uses",
                                        icon: <Factory />,
                                        desc: "Reliable performance in oil & gas, chemical processing, and automotive fluid flow control.",
                                        color: "text-sky-400",
                                        bgColor: "bg-sky-500/10"
                                    },
                                    {
                                        title: "Execution Benefits",
                                        icon: <TrendingUp />,
                                        desc: "Cost savings and faster prototyping through modern material upgrades and extended lifespan.",
                                        color: "text-teal-400",
                                        bgColor: "bg-teal-500/10"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group shadow-2xl"
                                    >
                                        <div className={`${item.color} ${item.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                            {React.cloneElement(item.icon, { size: 28 })}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black mb-4 text-white group-hover:text-indigo-300 transition-colors uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clients />
        </div>
    );
};

export default SensorValvePage;
