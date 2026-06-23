import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, Monitor, FileCode, Printer, Rotate3d } from 'lucide-react';
import Clients from '../components/Clients';

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
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden px-4">
                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        {/* 3D Sphere/Icon Placeholder */}
                        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-blue-400 to-blue-800 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)] mb-8 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614730341194-75c60740a2d3?q=80&w=500')] opacity-50 bg-cover mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black text-white tracking-widest uppercase mb-6 drop-shadow-xl"
                    >
                        3D Modeling Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-2xl text-lg md:text-xl"
                    >
                        Visualize, analyze, and communicate your design intent. We create precise 3D CAD models that serve as the foundation for manufacturing and innovation.
                    </motion.p>
                </div>
            </section>

            {/* Services List - Split Layout */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Title & Image */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="sticky top-24">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                                We Offer<br />
                                <span className="text-blue-500">3D Modeling</span><br />
                                Like
                            </h2>
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1611174743420-3d7df880ce32?q=80&w=600&auto=format&fit=crop" alt="3D Wireframe Model" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vertical List of Service Cards */}
                    <div className="lg:col-span-8 space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1e293b] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-900/10 group"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get Started Today
                            </button>
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
