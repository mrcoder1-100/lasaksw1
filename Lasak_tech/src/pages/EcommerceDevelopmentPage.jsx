import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Smartphone, Users, Globe, Layout, Code2, User, Calendar, Tag } from 'lucide-react';
import Clients from '../components/Clients';
import ecommerceDevelopmentImg from '../assets/ecommerce-development.png';

const EcommerceDevelopmentPage = () => {
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 mb-6">
                            <ShoppingCart className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">IT Projects</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-500">Future</span> of Online Shopping
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            A Story of Innovation, Collaboration, and Digital Excellence.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-emerald-500" />
                                <span>Brindhaa A</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-emerald-500" />
                                <span>IT Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-emerald-500" />
                                <span>September 21, 2025</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-16 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                        <img
                            src={ecommerceDevelopmentImg}
                            alt="E-Commerce Website Development"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
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
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-emerald-500 pl-4">Developing a Custom E-Commerce Platform</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    At LASAK Technologies, we are committed to delivering excellence. Our team recently undertook an exciting project: developing a custom e-commerce website for a client specializing in t-shirts and men’s apparel, transforming their vision into a fully functional online platform.
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Client Vision",
                                            icon: <Layout />,
                                            desc: "The client prioritized a visually appealing design, intuitive navigation, and a seamless user experience to differentiate their brand in the competitive fashion market.",
                                            color: "text-emerald-400",
                                            bgColor: "bg-emerald-500/10"
                                        },
                                        {
                                            title: "Seamless Experience",
                                            icon: <Globe />,
                                            desc: "We developed a clean, modern layout with intuitive navigation, advanced search, and a streamlined shopping cart to improve the overall shopping experience.",
                                            color: "text-lime-400",
                                            bgColor: "bg-lime-500/10"
                                        },
                                        {
                                            title: "Mobile First",
                                            icon: <Smartphone />,
                                            desc: "Acknowledging user behavior, we prioritized mobile responsiveness. Rigorous testing ensured consistent performance across all platforms and devices.",
                                            color: "text-teal-400",
                                            bgColor: "bg-teal-500/10"
                                        },
                                        {
                                            title: "Team Collaboration",
                                            icon: <Users />,
                                            desc: "Working closely with fellow design engineers fostered the exchange of creative ideas, ensuring our designs remained aligned with the client’s vision.",
                                            color: "text-green-400",
                                            bgColor: "bg-green-500/10"
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
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Future Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-emerald-900/20 to-lime-900/20 p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Code2 className="w-10 h-10 text-emerald-400" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Client-Centric Results</h2>
                                </div>
                                <p className="text-slate-300 mb-6 font-light italic border-l-2 border-lime-500 pl-4">
                                    "A high-quality platform that exceeded expectations."
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Thorough testing ensured every feature worked flawlessly. The successful launch has positioned our client to showcase their apparel to a broader audience. LASAK Technologies is ready to help bring your digital vision to life.
                                </p>
                            </motion.div>

                        </div>

                        {/* Sidebar / Table of Contents (Sticky) */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Project Keypoints</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Custom E-Commerce',
                                            'User-Centric Design',
                                            'Mobile Responsiveness',
                                            'Intuitive Navigation',
                                            'Rigorous Testing',
                                            'Successful Launch'
                                        ].map((item, i) => (
                                            <li key={i} className="text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-600 to-lime-600 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">Build Your Store</h3>
                                    <p className="emerald-100 text-sm mb-4">Launch your custom e-commerce platform.</p>
                                    <button className="bg-white text-emerald-700 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                        Start Project
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

export default EcommerceDevelopmentPage;
