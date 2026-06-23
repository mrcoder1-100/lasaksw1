import React from 'react';
import { motion } from 'framer-motion';
import { Settings, RefreshCw, Scan, Factory, TrendingUp, ShieldCheck, User, Calendar, Tag, ChevronRight } from 'lucide-react';
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

            {/* Content Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content Column */}
                        <div className="lg:col-span-8 space-y-16">

                            {/* Understanding RE */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-indigo-500 pl-4">Understanding Sensor Valve Reverse Engineering</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    Sensor valve reverse engineering involves analyzing existing sensor valves to recreate, improve, or redesign them for better performance. By studying the mechanical, electronic, and material properties, engineers can identify design flaws and optimize them for cost-efficiency, durability, and functionality.
                                </p>
                            </motion.div>

                            {/* Features/Aspects Grid */}
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Importance in Design",
                                            icon: <Settings />,
                                            desc: "Allows industries to reproduce sensor valves when original designs or documentation are unavailable. Helps in repairing, upgrading, or replacing old valves without relying on the original manufacturer.",
                                            color: "text-indigo-400",
                                            bgColor: "bg-indigo-500/10"
                                        },
                                        {
                                            title: "Advanced Techniques",
                                            icon: <Scan />,
                                            desc: "Cutting-edge technologies such as 3D scanning, CAD modeling, and simulation software are used to analyze valve geometry, material properties, and fluid dynamics.",
                                            color: "text-violet-400",
                                            bgColor: "bg-violet-500/10"
                                        },
                                        {
                                            title: "Industrial Applications",
                                            icon: <Factory />,
                                            desc: "Widely applied in oil & gas, chemical processing, water treatment, automotive, and manufacturing. Ensures reliable performance in fluid flow control and safety.",
                                            color: "text-sky-400",
                                            bgColor: "bg-sky-500/10"
                                        },
                                        {
                                            title: "Key Benefits",
                                            icon: <TrendingUp />,
                                            desc: "Provides cost savings, faster prototyping, improved performance, and extended equipment lifespan. Supports innovation by enabling upgrades with modern materials.",
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
                                            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/80 transition-colors group"
                                        >
                                            <div className={`${item.color} ${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                                {React.cloneElement(item.icon, { size: 24 })}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Partner Selection Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-indigo-900/20 to-violet-900/20 p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <ShieldCheck className="w-10 h-10 text-indigo-400" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Choosing the Right Partner</h2>
                                </div>
                                <p className="text-slate-300 mb-6 font-light italic border-l-2 border-violet-500 pl-4">
                                    "Selecting the right engineering partner is crucial for successful reverse engineering."
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Look for expertise in CAD modeling, valve simulation, material testing, and industry standards compliance to ensure the redesigned sensor valve meets performance and safety requirements.
                                </p>
                            </motion.div>

                        </div>

                        {/* Sidebar / Table of Contents (Sticky) */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Services</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Valve Analysis',
                                            '3D Scanning',
                                            'CAD Modeling',
                                            'Fluid Dynamics',
                                            'Material Testing',
                                            'Prototype Design'
                                        ].map((item, i) => (
                                            <li key={i} className="text-slate-400 hover:text-indigo-400 cursor-pointer transition-colors flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 text-indigo-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">Need Reverse Engineering?</h3>
                                    <p className="indigo-100 text-sm mb-4">Contact Lasak Tech for precise and efficient sensor valve solutions.</p>
                                    <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                        Contact Us
                                    </button>
                                </div>
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
