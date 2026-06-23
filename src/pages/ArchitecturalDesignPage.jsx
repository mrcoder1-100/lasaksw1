import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Box, Layers, Monitor, CheckSquare, ArrowRight } from 'lucide-react';
import Clients from '../components/Clients';
import SEO from '../components/SEO';
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
            <SEO
                title="Architectural & Interior Design - Innovative Spaces"
                description="Transforming environments through architectural excellence and modern interior design. 3D visualization, space planning, and creative concepts."
                canonical="/services/architectural-design"
            />

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
                                CRAFTING <br />
                                <span className="text-cyan-400 text-outline-cyan font-black">SPACES</span> <br />
                                DESIGNED
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Project Highlights</h3>
                                <ul className="space-y-4">
                                    {['Residential Mastery', 'Commercial Innovation', 'Sustainable Design', '3D Visualization'].map((tag, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></div>
                                            <span className="group-hover:text-white transition-colors">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 p-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500">
                                    <div className="bg-[#0a0f1c] p-6 rounded-xl h-full">
                                        <p className="text-slate-400 text-sm mb-4">"Creating experiences that inspire and impress through architectural excellence."</p>
                                        <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-black rounded-lg font-bold hover:bg-cyan-50 transition-colors text-sm">
                                            Start Your Project <ArrowRight className="w-4 h-4" />
                                        </Link>
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
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-60 z-10"></div>
                                <img
                                    src={architecturalDesignImg}
                                    alt="Architectural Design"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute bottom-10 left-10 z-20">
                                    <p className="text-sm font-mono text-cyan-300 mb-2 uppercase tracking-[0.2em]">Legacy of Innovation</p>
                                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Modern Living Spaces</h3>
                                </div>
                            </motion.div>

                            {/* Section Intro */}
                            <div className="pl-8 border-l-4 border-cyan-500/50">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Redefining Environments</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light italic">
                                    "Transforming spaces into functional, aesthetic, and inspiring environments through innovation and precision. We don’t just design spaces—we create experiences."
                                </p>
                            </div>

                            {/* Detail Cards */}
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Creative Concept Development",
                                        icon: <Palette className="w-8 h-8" />,
                                        desc: "We begin by understanding your vision and requirements, translating them into unique and practical design concepts that serve both form and function."
                                    },
                                    {
                                        title: "Space Planning & Layouts",
                                        icon: <Layers className="w-8 h-8" />,
                                        desc: "Efficient and thoughtful space planning ensures optimal functionality while enhancing visual appeal in every corner of the property."
                                    },
                                    {
                                        title: "Interior Design & Styling",
                                        icon: <Box className="w-8 h-8" />,
                                        desc: "Our team carefully selects materials, colors, lighting, and furniture to bring harmony and style to every space, ensuring a cohesive brand or living identity."
                                    },
                                    {
                                        title: "3D Visualization & Rendering",
                                        icon: <Monitor className="w-8 h-8" />,
                                        desc: "Using the latest design software, we create realistic 3D models, helping you visualize the final result before implementation with pixel-perfect accuracy."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-cyan-500/50 transition-all group cursor-default shadow-3xl"
                                    >
                                        <div className="flex items-start gap-8">
                                            <div className="p-4 bg-cyan-600/10 rounded-2xl text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                                                {item.icon}
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors uppercase tracking-tight leading-none">{item.title}</h4>
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

export default ArchitecturalDesignPage;
