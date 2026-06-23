import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Box, Layers, Monitor, CheckSquare, ArrowRight } from 'lucide-react';
import Clients from '../components/Clients';
import architecturalDesignImg from '../assets/architectural-design.png';

const ArchitecturalDesignPage = () => {
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
        <div className="min-h-screen bg-[#0a0f1c] text-white pt-20 selection:bg-cyan-500/30">

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
                {/* Aurora Glows */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse-slow delay-1000"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 mb-6 backdrop-blur-sm">
                            <Palette className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Architecture & Interior</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight">
                            Architectural & <br />
                            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300">Interior Design Projects</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                            Transforming spaces into functional, aesthetic, and inspiring environments through innovation and precision.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Content Column */}
                        <div className="lg:col-span-8 space-y-16">

                            {/* Introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="relative group rounded-2xl overflow-hidden mb-10 border border-white/10 shadow-2xl shadow-cyan-900/20">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-60 z-10"></div>
                                    <img
                                        src={architecturalDesignImg}
                                        alt="Architectural Design"
                                        className="w-full h-80 md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <p className="text-sm font-mono text-cyan-300 mb-2">PROJECT SHOWCASE</p>
                                        <h3 className="text-2xl font-bold text-white">Modern Living Spaces</h3>
                                    </div>
                                </div>

                                <div className="pl-6 border-l-2 border-cyan-500/50">
                                    <h2 className="text-3xl font-light mb-6 text-white">Crafting <span className="font-bold">Experiences</span></h2>
                                    <p className="text-slate-300 leading-relaxed text-lg font-light">
                                        At Lasak Technologies, we transform spaces into functional, aesthetic, and inspiring environments. Our architectural and interior design projects focus on creating innovative solutions tailored to our clients’ needs.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Services List */}
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Creative Concept Development",
                                        icon: <Palette className="w-6 h-6" />,
                                        desc: "We begin by understanding your vision and requirements, translating them into unique and practical design concepts.",
                                    },
                                    {
                                        title: "Space Planning & Layouts",
                                        icon: <Layers className="w-6 h-6" />,
                                        desc: "Efficient and thoughtful space planning ensures optimal functionality while enhancing visual appeal.",
                                    },
                                    {
                                        title: "Interior Design & Styling",
                                        icon: <Box className="w-6 h-6" />,
                                        desc: "Our team carefully selects materials, colors, lighting, and furniture to bring harmony and style to every space.",
                                    },
                                    {
                                        title: "3D Visualization & Rendering",
                                        icon: <Monitor className="w-6 h-6" />,
                                        desc: "Using the latest design software, we create realistic 3D models, helping you visualize the final result before implementation.",
                                    },
                                    {
                                        title: "Project Execution & Supervision",
                                        icon: <CheckSquare className="w-6 h-6" />,
                                        desc: "We ensure that every detail is executed perfectly, maintaining high standards of quality and timeliness.",
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 p-8 rounded-xl transition-all duration-300"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl"></div>
                                        <div className="flex gap-6 items-start">
                                            <div className="p-3 bg-white/5 rounded-lg text-cyan-300 group-hover:text-white group-hover:bg-cyan-500/20 transition-colors">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">{item.title}</h3>
                                                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Closing Statement */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-10 rounded-2xl border border-white/5 text-center"
                            >
                                <p className="text-xl text-slate-200 font-light italic mb-6">
                                    "Our projects span residential, commercial, and office spaces, each reflecting a blend of creativity, innovation, and practicality. At Lasak Technologies, we don’t just design spaces—we create experiences that inspire and impress."
                                </p>
                                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-cyan-50 transition-colors">
                                    Start Your Project <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-6">
                                {/* Glass Card */}
                                <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Project Highlights</h3>
                                    <ul className="space-y-4">
                                        {['Residential', 'Commercial', 'Office Spaces', 'Sustainable Design'].map((tag, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                                <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></div>
                                                <span className="group-hover:text-white transition-colors">{tag}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500">
                                    <div className="bg-[#0a0f1c] p-6 rounded-xl h-full">
                                        <h3 className="font-bold text-white text-lg mb-2">Visualizing Logic?</h3>
                                        <p className="text-slate-400 text-sm mb-4">Explore our 3D modeling capabilities for engineering and product design.</p>
                                        <button className="w-full py-2 rounded-lg border border-white/20 text-white hover:bg-white hover:text-black transition-all text-sm font-semibold">
                                            View 3D Services
                                        </button>
                                    </div>
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

export default ArchitecturalDesignPage;
