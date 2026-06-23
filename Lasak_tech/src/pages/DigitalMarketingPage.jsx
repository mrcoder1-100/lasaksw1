import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Share2, FileText, Mail, BarChart2, Search } from 'lucide-react';
import Clients from '../components/Clients';

const DigitalMarketingPage = () => {
    const services = [
        {
            title: "SEO (Search Engine Optimization)",
            description: "Connect with your audience on Facebook, Instagram, LinkedIn, and more. We create campaigns that increase engagement, build brand awareness, and drive conversions.",
            icon: <Search size={32} />
        },
        {
            title: "Social Media Marketing",
            description: "Engage your audience with compelling content and targeted strategies across all major social platforms to build a loyal community.",
            icon: <Share2 size={32} />
        },
        {
            title: "Content Marketing",
            description: "Create valuable, relevant content to attract and retain a clearly defined audience, driving profitable customer action.",
            icon: <FileText size={32} />
        },
        {
            title: "Pay-Per-Click (PPC)",
            description: " Targeted ad campaigns that deliver immediate traffic and results, maximizing your ROI through data-driven bidding strategies.",
            icon: <TrendingUp size={32} />
        },
        {
            title: "Email Marketing",
            description: "Personalized email campaigns that nurture leads, retain customers, and drive repeat business with high automation.",
            icon: <Mail size={32} />
        },
        {
            title: "Analytics & Reporting",
            description: "In-depth analysis of campaign performance to optimize strategies and ensure you are getting the best results.",
            icon: <BarChart2 size={32} />
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden px-4">
                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

                    {/* 3D Sphere/Icon Placeholder - Adjusted to match top of screenshot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-blue-400 to-blue-800 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)] mb-8 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=500')] opacity-50 bg-cover mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-wide uppercase mb-8 drop-shadow-xl max-w-6xl leading-tight"
                    >
                        Digital Marketing<br />Services That Drive<br /><span className="text-blue-500">Growth</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-4xl text-lg md:text-xl leading-relaxed mx-auto"
                    >
                        At Lasak Technologies, we dissect your brand to build strategies that deliver measurable results. Our digital marketing services are designed to increase visibility, generate leads, and drive real business growth. From SEO and social media marketing to content creation and paid advertising, we handle every aspect of your online presence to reach the right audience at the right time.
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
                                Digital<br />
                                Marketing<br />
                                Services
                            </h2>
                            <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
                                <video
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    style={{ maxWidth: '100%' }}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source type="video/mp4" src="https://lasak.in/wp-content/uploads/2025/10/AZn1uhWeKzIOXrMIPCSY5A-AZn1uhWeOgoLDQx5duCAUQ.mp4#579" />
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

            {/* CTA Section (Visual Match from bottom of screenshot - Blue Sphere) */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-[#3b82f6] p-10 md:p-24 text-center">
                        {/* Background */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-700 opacity-90"></div>
                            {/* Placeholder for the large sphere texture */}
                            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[url('https://images.unsplash.com/photo-1614730341194-75c60740a2d3?q=80')] bg-cover bg-center opacity-40 mix-blend-overlay blur-sm"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 max-w-5xl mx-auto leading-tight">
                                Ready To Grow Your Brand?
                            </h2>
                            <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                                Start Your Digital Marketing Project <span className="text-xl">→</span>
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

export default DigitalMarketingPage;
