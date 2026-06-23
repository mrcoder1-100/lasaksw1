import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Anchor, Truck, CheckCircle, Package } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import eotCraneImg from '../assets/eot-crane.png'; // Assuming this import exists based on BlogsPage usage

const EOTCranePage = () => {
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
                title="EOT Crane & Material Handling Systems"
                description="Heavy-lift crane systems and industrial material handling solutions. Engineered for safety and extreme load management."
                canonical="/services/eot-crane"
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
                {/* Industrial Orange/Blue Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-400 mb-6">
                            <Settings className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Mechanical Projects</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            EOT Crane, Weight Lifter & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">Handler Project</span>
                        </motion.h1>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm md:text-base mb-8">
                            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">By Brindhaa A</span>
                            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">October 3, 2025</span>
                            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">Mechanical Engineering</span>
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
                                HEAVY LIFT <br />
                                <span className="text-orange-500 text-outline-orange font-black">CRANE</span> <br />
                                SYSTEMS
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Project Details</h3>
                                <div className="space-y-4 mb-8">
                                    <div>
                                        <span className="text-xs text-slate-500 uppercase tracking-widest">Client</span>
                                        <p className="text-white font-medium">Confidential Industrial Partner</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-500 uppercase tracking-widest">Location</span>
                                        <p className="text-white font-medium">Chennai, India</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-500 uppercase tracking-widest">Spec</span>
                                        <p className="text-white font-medium">High Load EOT Crane</p>
                                    </div>
                                </div>
                                <div className="p-1 rounded-2xl bg-gradient-to-br from-orange-600 to-red-700">
                                    <div className="bg-[#0f172a] p-6 rounded-xl h-full text-center">
                                        <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">Need a Solution?</h3>
                                        <p className="text-slate-400 text-sm mb-4">Contact us for custom heavy lifting solutions tailored to your facility.</p>
                                        <button className="bg-white text-orange-700 px-6 py-2 rounded-lg font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                            Get a Quote
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content */}
                        <div className="lg:col-span-3 space-y-16">
                            {/* Project Image Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl aspect-video"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
                                <img
                                    src={eotCraneImg}
                                    alt="EOT Crane Project"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute bottom-10 left-10 z-20">
                                    <p className="text-sm font-mono text-orange-400 mb-2 uppercase tracking-[0.2em]">Mechanical Engineering</p>
                                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Material Handling</h3>
                                </div>
                            </motion.div>

                            {/* Section Intro */}
                            <div className="pl-8 border-l-4 border-orange-500/50">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Industrial Lifting</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                                    "Specializing in innovative solutions for industries dealing with heavy load management, designed for safety and efficiency."
                                </p>
                            </div>

                            {/* Detail Cards */}
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "EOT Crane Projects",
                                        icon: <Anchor className="w-8 h-8" />,
                                        desc: "Engineered to handle heavy materials in factories and warehouses with robust construction and precision controls.",
                                        color: "text-blue-400",
                                        bg: "bg-blue-900/10",
                                        border: "border-blue-500/20"
                                    },
                                    {
                                        title: "Weight Lifter Systems",
                                        icon: <Package className="w-8 h-8" />,
                                        desc: "Minimizing manual effort and maximizing productivity through accurate, high-speed lifting technology.",
                                        color: "text-orange-400",
                                        bg: "bg-orange-900/10",
                                        border: "border-orange-500/20"
                                    },
                                    {
                                        title: "Handler Solutions",
                                        icon: <Truck className="w-8 h-8" />,
                                        desc: "Built for versatility—streamlining loading and unloading operations to reduce industrial downtime.",
                                        color: "text-green-400",
                                        bg: "bg-green-900/10",
                                        border: "border-green-500/20"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-orange-500/50 transition-all group cursor-default shadow-3xl"
                                    >
                                        <div className="flex items-start gap-8">
                                            <div className="p-4 bg-orange-600/10 rounded-2xl text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                                                {item.icon}
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-orange-300 transition-colors uppercase tracking-tight leading-none">{item.title}</h4>
                                                <p className="text-slate-300 text-lg leading-relaxed font-light">{item.desc}</p>
                                            </div>
                                        </div>
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

export default EOTCranePage;
