import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, PenTool, Sparkles, User, Calendar, Tag, Package, Lightbulb } from 'lucide-react';
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

            {/* Introduction & Content */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content Column */}
                        <div className="lg:col-span-8 space-y-16">

                            {/* Intro Paragraph */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-pink-500 pl-4">Custom Toy Concept Development</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    Our team transforms your imaginative ideas into unique toy concepts. From sketches to digital models, we ensure your toys stand out in both design and function. We believe that every great toy starts with a spark of imagination, and our goal is to fan that spark into a flame that captures the hearts of children and collectors alike.
                                </p>
                            </motion.div>

                            {/* Service Details Grid */}
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "3D Toy Modeling & Rendering",
                                            icon: <Box />,
                                            desc: "Using advanced 3D software, we create detailed and realistic toy models. High-quality renders help you visualize your product before moving into production.",
                                            color: "text-pink-400",
                                            bgColor: "bg-pink-500/10"
                                        },
                                        {
                                            title: "Prototype Design & Testing",
                                            icon: <Layers />,
                                            desc: "We build functional prototypes that allow you to test durability, safety, and aesthetics, ensuring the toy meets industry standards before launch.",
                                            color: "text-orange-400",
                                            bgColor: "bg-orange-500/10"
                                        },
                                        {
                                            title: "Character & Figurine Modeling",
                                            icon: <User />,
                                            desc: "From action figures to collectible characters, we design detailed figurines with accurate proportions, creative details, and engaging appeal.",
                                            color: "text-green-400",
                                            bgColor: "bg-green-500/10"
                                        },
                                        {
                                            title: "Educational & Interactive Design",
                                            icon: <Lightbulb />,
                                            desc: "We specialize in designing toys that enhance learning and engagement. Our models combine fun with education to create meaningful play experiences.",
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
                                            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/80 transition-colors group"
                                        >
                                            <div className={`${item.color} ${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                                {React.cloneElement(item.icon, { size: 24 })}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-pink-300 transition-colors">{item.title}</h3>
                                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Packaging Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-pink-900/20 to-orange-900/20 p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Package className="w-10 h-10 text-pink-400" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Product Packaging & Branding</h2>
                                </div>
                                <p className="text-slate-300 mb-6 font-light italic border-l-2 border-orange-500 pl-4">
                                    "Beyond toy design, we also provide creative packaging and branding solutions that enhance product appeal and improve market reach."
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Great packaging is the silent salesman. We ensure that your toy's packaging not only protects the product but also tells a compelling story on the shelf, attracting the eyes of potential buyers and creating a memorable unboxing experience.
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
                                            'Concept Development',
                                            '3D Modeling & Rendering',
                                            'Prototype Design',
                                            'Character Modeling',
                                            'Educational Toys',
                                            'Packaging & Branding'
                                        ].map((item, i) => (
                                            <li key={i} className="text-slate-400 hover:text-pink-400 cursor-pointer transition-colors flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-pink-500/50"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-br from-pink-600 to-orange-600 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">Have a Toy Idea?</h3>
                                    <p className="text-pink-100 text-sm mb-4">Let's bring your concept to life with Lasak Tech's expert design services.</p>
                                    <button className="bg-white text-pink-700 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                        Get Started
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

export default ToyModelingPage;
