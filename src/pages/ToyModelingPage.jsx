import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, PenTool, Sparkles, User, Calendar, Tag, Package, Lightbulb } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';

const ToyModelingPage = () => {
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
                title="Creative Toy Modeling & Design Services"
                description="Bringing imaginative toy concepts to life with realistic 3D modeling, prototyping, and character design. Expert industrial design for the toy industry."
                canonical="/blogs/toy-modeling"
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-900/30 border border-pink-500/30 text-pink-400 mb-6">
                            <Box className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Prototyping Services</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Toy Modeling <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">Design Services</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Creative & Realistic Prototypes: Bringing Imaginative Ideas to Life
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-pink-500" />
                                <span>Brindhaa A</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-pink-500" />
                                <span>Mechanical Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-pink-500" />
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
                                CREATIVE <br />
                                <span className="text-pink-500 text-outline-pink font-black">TOY</span> <br />
                                MODELING
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Services</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Concept Development',
                                        '3D Modeling & Rendering',
                                        'Prototype Design',
                                        'Character Modeling',
                                        'Educational Toys',
                                        'Packaging & Branding'
                                    ].map((tag, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-pink-500 group-hover:scale-150 transition-transform"></div>
                                            <span className="group-hover:text-white transition-colors">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 p-1 rounded-2xl bg-gradient-to-br from-pink-600 to-orange-600">
                                    <div className="bg-[#0f172a] p-6 rounded-xl h-full text-center">
                                        <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">Have a Toy Idea?</h3>
                                        <p className="text-slate-400 text-sm mb-4">"Bring your imaginative concepts to life with Lasak Tech's expert prototyping and industrial design."</p>
                                        <button className="bg-white text-pink-700 px-6 py-2 rounded-lg font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content */}
                        <div className="lg:col-span-3 space-y-16">
                            {/* Section Intro */}
                            <div className="pl-8 border-l-4 border-pink-500/50">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Concept Development</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                                    "Transforming imaginative ideas into unique toy concepts, ensuring every product stands out in both design and function."
                                </p>
                            </div>

                            {/* Service Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "3D Rendering",
                                        icon: <Box />,
                                        desc: "Realistic toy models and high-quality renders to visualize products before mass production.",
                                        color: "text-pink-400",
                                        bgColor: "bg-pink-500/10"
                                    },
                                    {
                                        title: "Prototype Design",
                                        icon: <Layers />,
                                        desc: "Functional prototypes to test durability, safety, and aesthetics against industry standards.",
                                        color: "text-orange-400",
                                        bgColor: "bg-orange-500/10"
                                    },
                                    {
                                        title: "Character Design",
                                        icon: <User />,
                                        desc: "From action figures to figurines with accurate proportions and engaging aesthetic appeal.",
                                        color: "text-green-400",
                                        bgColor: "bg-green-500/10"
                                    },
                                    {
                                        title: "Smart Play",
                                        icon: <Lightbulb />,
                                        desc: "Modeling toys that combine education with fun to create meaningful play experiences.",
                                        color: "text-blue-400",
                                        bgColor: "bg-blue-500/10"
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
                                        <h3 className="text-xl md:text-2xl font-black mb-4 text-white group-hover:text-pink-300 transition-colors uppercase tracking-tight">{item.title}</h3>
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

export default ToyModelingPage;
