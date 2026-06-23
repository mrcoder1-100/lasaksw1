import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Code, Smartphone, Database, Server, Layout } from 'lucide-react';
import Clients from '../components/Clients';

const WebDevelopmentPage = () => {
    const services = [
        {
            title: "Custom Features",
            description: "We create user-friendly, robust, and scalable custom features that align perfectly with your business goals.",
            icon: <Code size={32} />
        },
        {
            title: "E-commerce Solutions",
            description: "Robust online stores with secure payment gateways, inventory management, and seamless user experience.",
            icon: <Layout size={32} />
        },
        {
            title: "Web Application Development",
            description: "Scalable and interactive web apps that streamline business processes and engage users.",
            icon: <Globe size={32} />
        },
        {
            title: "Mobile-First Design",
            description: "Responsive designs that ensure your site looks and performs perfectly on all devices.",
            icon: <Smartphone size={32} />
        },
        {
            title: "CMS Integration",
            description: "Easy-to-manage content management systems like WordPress, Shopify, or custom solutions.",
            icon: <Server size={32} />
        },
        {
            title: "API Development & Integration",
            description: "Connecting your web ecosystem with third-party services and custom APIs for enhanced functionality.",
            icon: <Database size={32} />
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
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=500')] opacity-50 bg-cover mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase mb-6 drop-shadow-xl max-w-5xl"
                    >
                        Our Website<br />Development Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-4xl text-lg md:text-xl leading-relaxed"
                    >
                        We create high-performance, visually stunning websites that drive growth. Our team combines technical expertise with creative design to deliver custom solutions tailored to your business goals. From simple landing pages to complex enterprise platforms, we build the digital foundation for your success.
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
                                Web<br />
                                Development<br />
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
                                    <source type="video/mp4" src="https://lasak.in/wp-content/uploads/2025/10/AZn1xXcQysH0SzKHWwRHEQ-AZn1xXcQUgywzaH8tWRtzw.mp4#578" />
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
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547658719-da2b51169166?q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                                Ready to Establish a Powerful Online Presence?
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                                Whether you need a simple portfolio or a complex enterprise platform, our expert developers are ready to bring your vision to life.
                            </p>
                            <Link to="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                                Start Your Web Project
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

export default WebDevelopmentPage;
