import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, Layers, Monitor, FileCode, Printer, Rotate3d } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import scanModelImg from '../assets/3d-scan-model.png';
import modelingHeroBg from '../assets/modeling-hero-bg.png';

const ThreeDModelingPage = () => {
    const services = [
        {
            title: "Parametric Modeling",
            description: "Creating intelligent, history-based 3D models that can be easily modified and updated.",
            icon: <Box size={32} />
        },
        {
            title: "Surface Modeling",
            description: "Designing complex, freeform shapes and organic geometries for aesthetic products.",
            icon: <Layers size={32} />
        },
        {
            title: "Assembly Modeling",
            description: "Building complete mechanical assemblies to check fit, interference, and range of motion.",
            icon: <Rotate3d size={32} />
        },
        {
            title: "2D to 3D Conversion",
            description: "Converting legacy 2D drawings into modern 3D CAD models for better visualization and analysis.",
            icon: <Monitor size={32} />
        },
        {
            title: "Photorealistic Rendering",
            description: "Generating high-quality images of your products for marketing and presentations before manufacturing.",
            icon: <FileCode size={32} />
        },
        {
            title: "Design for 3D Printing",
            description: "Optimizing 3D models specifically for additive manufacturing processes.",
            icon: <Printer size={32} />
        }
    ];

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            <SEO
                title="Professional 3D Modeling Services - Precision CAD Designs"
                description="High-fidelity 3D CAD modeling for manufacturing, design verification, and marketing. From parametric to assembly modeling, we deliver accuracy."
                canonical="/services/3d-modeling"
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden px-4">
                {/* Visual Background Enhancement */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={modelingHeroBg}
                        alt="3D Modeling Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
                    <div className="absolute inset-0 bg-[#0a0f1c]/40"></div>
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        {/* 3D Sphere/Icon Placeholder */}
                        <div className="w-40 h-40 md:w-64 md:h-64 mx-auto relative group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                            <Rotate3d className="w-full h-full text-blue-500 p-12 relative z-10 animate-float" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.5rem] sm:text-6xl md:text-8xl font-black text-white tracking-[0.1em] md:tracking-[0.2em] uppercase mb-6 drop-shadow-2xl leading-[1.1] md:leading-tight break-words"
                    >
                        3D MODELING <br />
                        <span className="text-blue-500 text-outline-blue font-black">SERVICES</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-300 max-w-4xl text-lg md:text-xl mb-10 leading-relaxed opacity-80 px-4"
                    >
                        "Visualize, analyze, and communicate your design intent. We create precise 3D CAD models that serve as the foundation for manufacturing and innovation."
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
                                PRECISION <br />
                                <span className="text-blue-500 text-outline-blue font-black">3D MODELING</span> <br />
                                SERVICES
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-[2.5rem] overflow-hidden border border-white/10 mt-8 group h-64 shadow-2xl relative"
                            >
                                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
                                <img src={scanModelImg} alt="3D Laser Scanning" className="rounded-lg w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-slate-900/60 backdrop-blur-md border-t border-white/5 text-center translate-y-full group-hover:translate-y-0 transition-transform">
                                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Precision 3D Data Capture</p>
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
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Accurate Topography</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> History-Based CAD</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Interference Checks</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> High-Fidelity Rendering</li>
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
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614730341194-75c60740a2d3?q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                                Bring Your Concepts to Reality with High-Fidelity 3D Models
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                                Whether you need design verification, marketing assets, or manufacturing data, our expert 3D modeling services deliver accuracy and versatility.
                            </p>
                            <Link to="/contact">
                                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Get Started Today
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

export default ThreeDModelingPage;
