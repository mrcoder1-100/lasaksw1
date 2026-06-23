import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Code, Smartphone, Database, Server, Layout } from 'lucide-react';
import Clients from '../components/Clients';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';

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
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            <SEO
                title="Web Development Services - Custom & Scalable Solutions"
                description="Our expert web development services include custom feature creation, ecommerce solutions, mobile-first design, and API integration."
                canonical="/services/web-development"
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden px-4 flex items-center justify-center">
                {/* Visual Background Enhancement */}
                <div className="absolute inset-0 z-0">
                    {/* High-Impact Web Dev Image */}
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
                        alt="Web Development Excellence"
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
                            <Globe className="w-full h-full text-blue-500 p-14 relative z-10 animate-float" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.5rem] sm:text-6xl md:text-[8rem] font-black text-white tracking-[0.1em] md:tracking-[0.25em] uppercase mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] leading-[1.1] md:leading-none break-words"
                    >
                        WEB<br /><span className="text-blue-500">DEVELOPMENT</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-200 max-w-5xl text-lg md:text-xl mb-12 leading-relaxed opacity-90 drop-shadow-2xl px-4"
                    >
                        "Transforming your digital vision into high-performance, visually stunning realities that drive growth and engagement."
                    </motion.p>
                </div>
            </section>

            {/* Services List - Split Layout */}
            <section className="py-20 px-4 relative">
                <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Title & Image (Sticky) */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="lg:sticky lg:top-40 h-fit">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] uppercase tracking-tighter">
                                Web<br />
                                <span className="text-blue-500 text-outline-blue">Solutions</span><br />
                                Experts
                            </h2>
                            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group aspect-video bg-blue-950/20">
                                <video
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source type="video/mp4" src="https://lasak.in/wp-content/uploads/2025/10/AZn1xXcQysH0SzKHWwRHEQ-AZn1xXcQUgywzaH8tWRtzw.mp4#578" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                                        <p className="text-white text-lg font-bold uppercase tracking-widest">Scalable & Secure Foundations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vertical List */}
                    <div className="lg:col-span-8 space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-all group cursor-default"
                            >
                                <div className="flex items-start gap-8">
                                    <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight leading-none">{service.title}</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed font-light">{service.description}</p>
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
                    <div className="relative rounded-[3rem] overflow-hidden bg-[#0f172a] p-10 md:p-24 text-center border border-white/10 shadow-3xl">
                        {/* Background with abstract CSS glows */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
                            <div className="absolute -left-20 -top-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 max-w-5xl mx-auto leading-tight uppercase tracking-tighter">
                                Ready to Establish a Powerful Online Presence?
                            </h2>
                            <p className="text-blue-100 max-w-4xl mx-auto mb-12 text-lg md:text-xl leading-relaxed opacity-80">
                                "Whether you need a simple portfolio or a complex enterprise platform, our expert developers are ready to bring your vision to life."
                            </p>
                            <Link to="/contact">
                                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-5 text-lg md:text-xl font-bold shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 whitespace-nowrap">
                                    Start Your Web Project →
                                </Button>
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
