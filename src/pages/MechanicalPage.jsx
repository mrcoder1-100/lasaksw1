import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, PenTool, Cpu, FileJson, FlaskConical, Box } from 'lucide-react';
import Clients from '../components/Clients';
import SEO from '../components/SEO';

const MechanicalPage = () => {
    const services = [
        {
            title: "3D Modeling",
            description: "Precision 3D CAD modeling for manufacturing, design verification, and organic geometry creation using advanced industry tools.",
            icon: <Box size={32} />
        },
        {
            title: "Utility Patent Drawings",
            description: "Detailed illustrations showing the functional aspects of an invention. We ensure every component is accurately represented.",
            icon: <Settings size={32} />
        },
        {
            title: "Design Patent Drawings",
            description: "Focusing on the aesthetic appearance of an object. Precision shading and contouring to capture the unique design.",
            icon: <PenTool size={32} />
        },
        {
            title: "Mechanical Patent Drawings",
            description: "Complex machinery and device illustrations. Exploded views and cross-sections to explain specific mechanisms.",
            icon: <Box size={32} />
        },
        {
            title: "Electrical & Electronic Patent Drawings",
            description: "Schematics and circuit diagrams. Clear representation of electrical connections and components.",
            icon: <Cpu size={32} />
        },
        {
            title: "Software & Process Flowcharts",
            description: "Flow diagrams representing algorithms and software processes. standardized symbols for clarity.",
            icon: <FileJson size={32} />
        },
        {
            title: "Biotechnology & Chemical Patent Drawings",
            description: "DNA sequences, chemical structures, and lab equipment illustrations. Accurate scientific representation.",
            icon: <FlaskConical size={32} />
        }
    ];

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            <SEO
                title="Mechanical Engineering Services - Precision Patent Drawings"
                description="High-quality mechanical engineering services specializing in utility and design patent drawings, machinery illustrations, and scientific representations."
                canonical="/services/mechanical"
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden px-4 flex items-center justify-center">
                {/* Visual Background Enhancement */}
                <div className="absolute inset-0 z-0">
                    {/* High-Impact Mechanical Image */}
                    <img
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
                        alt="Mechanical Engineering Excellence"
                        className="w-full h-full object-cover opacity-70 scale-105"
                    />

                    {/* Technical Grid Overlay (CSS) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

                    {/* Cinematic Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[#0a0f1c]/50"></div>

                    {/* Focal Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-10"
                    >
                        {/* 3D Sphere Replacement (CSS Glow) */}
                        <div className="w-44 h-44 md:w-64 md:h-64 mx-auto relative group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-10 border border-blue-500/10 rounded-full animate-reverse-spin"></div>
                            <Settings className="w-full h-full text-blue-500 p-14 relative z-10 animate-float" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.5rem] sm:text-6xl md:text-8xl font-black text-white tracking-[0.1em] md:tracking-[0.25em] uppercase mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] leading-[1.1] md:leading-none break-words"
                    >
                        Mechanical<br /><span className="text-blue-500">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-200 max-w-5xl text-lg md:text-xl mb-12 leading-relaxed opacity-90 drop-shadow-2xl px-4"
                    >
                        "From detailed patent drawings to complex system optimization, we bridge the gap between concept and high-performance reality."
                    </motion.p>
                </div>
            </section>

            {/* Services Section with Sticky Layout */}
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
                                WE OFFER <br />
                                <span className="text-blue-500 text-outline-blue font-black">PATENT DRAWINGS</span> <br />
                                SOLUTIONS
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-[2.5rem] overflow-hidden border border-white/10 mt-8 group h-64 shadow-2xl"
                            >
                                <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop" alt="Blueprints" className="rounded-lg w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                            </motion.div>
                        </div>

                        {/* Right Column: Stacked Cards */}
                        <div className="flex flex-col space-y-8 lg:col-span-3">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-[#1a2236]/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-all group cursor-default shadow-3xl"
                                >
                                    <div className="flex items-start gap-8">
                                        <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                            {service.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight leading-none">{service.title}</h3>
                                            <p className="text-slate-300 text-lg leading-relaxed font-light mb-6">{service.description}</p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-400 text-sm font-bold uppercase tracking-widest bg-white/5 p-6 rounded-2xl border border-white/5">
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Professional and accurate</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Accepted by patent offices</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Quick turnaround time</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> USPTO Standards</li>
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
                                Bring Your Mechanical Innovations to Life with Precision Patent Drawings
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                                At Lasak Technologies, we combine engineering expertise with artistic skill to create drawings that meet the strictest USPTO standards.
                            </p>
                            <Link to="/contact">
                                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Get a Quote Now
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

export default MechanicalPage;
