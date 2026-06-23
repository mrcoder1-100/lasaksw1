import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenTool, Layout, Users, Smartphone, Eye, Layers } from 'lucide-react';
import Clients from '../components/Clients';

const UIUXPage = () => {
    const services = [
        {
            title: "User Research & Wireframing",
            description: "We start by understanding your users. Through in-depth research and wireframing, we build a solid foundation that ensures your product meets real user needs and business goals.",
            icon: <Users size={32} />
        },
        {
            title: "UI Design & Prototyping",
            description: "We create stunning, high-fidelity interfaces that captivate users. Our interactive prototypes bring your vision to life, allowing you to test and refine the experience before development.",
            icon: <Layout size={32} />
        },
        {
            title: "Usability Testing & Optimization",
            description: "We don't guess; we test. Rigorous usability testing helps us identify friction points and optimize the user journey for maximum engagement and conversion.",
            icon: <Eye size={32} />
        },
        {
            title: "Mobile App Design",
            description: "Designing intuitive and responsive mobile experiences for iOS and Android that users love to touch and swipe.",
            icon: <Smartphone size={32} />
        },
        {
            title: "Design Systems",
            description: "Creating comprehensive design systems and style guides to ensure consistency and scalability across all your digital products.",
            icon: <Layers size={32} />
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
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=500')] opacity-50 bg-cover mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black text-white tracking-widest uppercase mb-6 drop-shadow-xl"
                    >
                        UI/UX Design Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-3xl text-lg md:text-xl leading-relaxed"
                    >
                        We create seamless, user-centric digital experiences that blend aesthetics with functionality. From initial research to final pixel-perfect design, we ensure a delightful journey for your users.
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
                                UI/UX<br />
                                Services
                            </h2>
                            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                                <video
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    style={{ maxWidth: '100%' }}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source type="video/mp4" src="https://lasak.in/wp-content/uploads/2025/10/AZn1yXFmuQET8yIDKhvjPQ-AZn1yXFmFk5E4BTULr7nZg.mp4#577" />
                                </video>
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
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors uppercase">{service.title}</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section (Screenshot Matching) */}
            <section className="py-20 px-4 overflow-hidden">
                <div className="container mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                                Why Choose<br />
                                Our UI/UX<br />
                                Services?
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Great design is not just about how it looks, but how it works. We combine creative innovation with data-driven insights to build products that solve problems and delight users.
                            </p>
                        </div>
                        {/* Large Sphere Graphic on Right */}
                        <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end">
                            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop"
                                    alt="UI/UX Design Process"
                                    className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-white/10 relative z-10"
                                />
                                {/* Floating elements for 'not blank' feel */}
                                <div className="absolute -top-10 -right-10 bg-[#1e293b] p-4 rounded-xl border border-white/10 shadow-xl z-20 animate-float">
                                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <Users className="text-white" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-5 -left-5 bg-[#1e293b] p-4 rounded-xl border border-white/10 shadow-xl z-20 animate-float delay-1000">
                                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                                        <Layout className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Blue Sphere Bottom */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-[#3b82f6] p-10 md:p-24 text-center">
                        {/* Background */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-700 opacity-90"></div>
                            <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[url('https://images.unsplash.com/photo-1614730341194-75c60740a2d3?q=80')] bg-cover bg-center opacity-50 mix-blend-overlay blur-sm"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 max-w-5xl mx-auto leading-tight">
                                Let's Design Something Amazing Together
                            </h2>
                            <Link to="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block">
                                Start Your Design Project
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

export default UIUXPage;
