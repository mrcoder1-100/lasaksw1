import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool, Cpu, FileJson, FlaskConical, Box } from 'lucide-react';
import Clients from '../components/Clients';

const MechanicalPage = () => {
    const services = [
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
                        {/* 3D Sphere Placeholder - Using CSS */}
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
                        Patent Drawing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-2xl text-lg md:text-xl"
                    >
                        Turn rough sketches into professional patent drawings. We help inventors and attorneys secure intellectual property with precision illustrations.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Intro text card */}
                    <div className="md:col-span-1 lg:col-span-1 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            We Offer<br />
                            <span className="text-blue-500">Patent Drawings</span><br />
                            Like
                        </h2>
                        {/* Blueprint Image Placeholder */}
                        <div className="rounded-xl overflow-hidden border border-white/10 mt-4 bg-white/5 p-4">
                            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=400&auto=format&fit=crop" alt="Blueprints" className="rounded-lg w-full object-cover opacity-80" />
                        </div>
                    </div>

                    {/* Service Cards */}
                    <div className="md:col-span-1 lg:col-span-2 grid gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#1a2236] p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group"
                            >
                                <div className="mb-4 text-blue-400 group-hover:text-blue-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                                    <li>Professional and accurate</li>
                                    <li>Accepted by patent offices</li>
                                    <li>Quick turnaround time</li>
                                </ul>
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
                                Bring Your Mechanical Innovations to Life with Precision Patent Drawings
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                                At Lasak Technologies, we combine engineering expertise with artistic skill to create drawings that meet the strictest USPTO standards.
                            </p>
                            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get a Quote Now
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

export default MechanicalPage;
