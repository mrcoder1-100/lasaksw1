import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, PenTool, Cpu, FileJson, FlaskConical, Factory, Activity } from 'lucide-react';
import Clients from '../components/Clients';

const ReverseEngineeringPage = () => {
    const services = [
        {
            title: "Mechanical Reverse Engineering",
            description: "Digitize legacy parts, recreate CAD models from physical objects, and analyze material properties for reproduction.",
            features: ["Detailed Analysis", "Precision Modeling", "Complete Documentation"],
            icon: <Settings size={32} />
        },
        {
            title: "Electrical & Electronics Reverse Engineering",
            description: "PCB Delayering, Circuit Extraction, and component analysis to understand and recreate electronic systems.",
            features: ["Circuit Extraction", "Component Analysis", "PCB Delayering"],
            icon: <Cpu size={32} />
        },
        {
            title: "Software & Firmware Reverse Engineering",
            description: "Binary analysis, protocol decoding, and algorithm reconstruction to understand legacy codebases.",
            features: ["Protocol Decoding", "Binary Analysis", "Algorithm Reconstruction"],
            icon: <FileJson size={32} />
        },
        {
            title: "Competitor Product Benchmarking",
            description: "Analyze competitor products to understand performance, cost, and features against your own.",
            features: ["Feature Comparison", "Cost Analysis", "Performance Testing"],
            icon: <Activity size={32} />
        },
        {
            title: "Industrial & Plant Reverse Engineering",
            description: "Scanning and modeling of entire industrial plants for layout optimization and retrofitting.",
            features: ["Plant Scanning", "Layout Optimization", "As-Built Documentation"],
            icon: <Factory size={32} />
        },
        {
            title: "Medical Device Reverse Engineering",
            description: "Specialized reverse engineering for medical devices ensuring compliance and precision.",
            features: ["Compliance Checks", "Precision Measurement", "Material Analysis"],
            icon: <FlaskConical size={32} />
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
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
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500')] opacity-50 bg-cover mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase mb-6 drop-shadow-xl max-w-5xl"
                    >
                        Reverse<br />Engineering
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-4xl text-lg md:text-xl leading-relaxed"
                    >
                        Unlock the secrets of existing products. We deconstruct, analyze, and document complex systems to drive innovation and recovery.
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
                                <span className="text-blue-500">Reverse Engineering</span><br />
                                Like
                            </h2>
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop" alt="Reverse Engineering" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
                                        <ul className="list-disc list-inside text-slate-400 space-y-1 mb-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
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
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-blue-600 p-10 md:p-24 text-center">
                        {/* Background with abstract blue spheres */}
                        <div className="absolute inset-0 bg-blue-600">
                            {/* Central Blue Sphere Graphic - Approximated with CSS radial gradient/image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80')] bg-cover bg-center rounded-full opacity-40 blur-sm mix-blend-overlay"></div>
                            {/* Additional blue overlay for text readability */}
                            <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-5xl mx-auto leading-tight">
                                Let’s Innovate Your Products Through Reverse Engineering
                            </h2>
                            <p className="text-blue-50 max-w-4xl mx-auto mb-10 text-lg md:text-xl font-light leading-relaxed">
                                Reverse engineering is more than analyzing existing products — it’s a pathway to smarter, more efficient designs. At LASAK Technologies, we dissect, understand, and improve products to enhance performance, reduce costs, and accelerate development.
                                <br /><br />
                                Ready to transform your ideas into optimized, market-ready solutions?
                            </p>
                            <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                                Start Your Project <span className="text-xl">→</span>
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

export default ReverseEngineeringPage;
