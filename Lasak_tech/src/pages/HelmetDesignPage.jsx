import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, Award, HardHat, Sliders, Cpu, User, Calendar, Tag } from 'lucide-react';
import Clients from '../components/Clients';
import helmetDesignImg from '../assets/helmet-design.png';

const HelmetDesignPage = () => {
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Patent Innovation</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-gray-500">Helmet Design</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Adjustable Helmet Cover for Hair Safety & Maximum Comfort.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-slate-400" />
                                <span>Brindhaa A</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-slate-400" />
                                <span>Mechanical Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <span>September 22, 2025</span>
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
                            src={helmetDesignImg}
                            alt="Innovative Helmet Design"
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
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-slate-500 pl-4">Adjustable Helmet Cover for Hair Safety</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    Our patented helmet design introduces an adjustable cover system that protects hair health while ensuring rider comfort. This feature is ideal for motorcycle users, industrial workers, and sports enthusiasts who face long hours of helmet usage.
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Ergonomic Design",
                                            icon: <Crosshair />,
                                            desc: "Engineered with ergonomic principles, making it lightweight yet durable. It minimizes pressure points, ensuring long-lasting comfort during extended use.",
                                            color: "text-blue-400",
                                            bgColor: "bg-blue-500/10"
                                        },
                                        {
                                            title: "Patent-Backed",
                                            icon: <Award />,
                                            desc: "Backed by intellectual property protection, our helmet showcases unique safety features that set new benchmarks in the wearable technology industry.",
                                            color: "text-yellow-400",
                                            bgColor: "bg-yellow-500/10"
                                        },
                                        {
                                            title: "Multi-Industry",
                                            icon: <HardHat />,
                                            desc: "Beyond motorcycles, this patented helmet design can be adapted for sports safety, industrial use, and construction environments.",
                                            color: "text-orange-400",
                                            bgColor: "bg-orange-500/10"
                                        },
                                        {
                                            title: "Customizable Fit",
                                            icon: <Sliders />,
                                            desc: "With its adjustable mechanism, the helmet provides a personalized fit, enhancing both safety and user satisfaction, reducing risks in critical conditions.",
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
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-slate-300 transition-colors">{item.title}</h3>
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
                                className="bg-gradient-to-r from-slate-800 to-gray-800 p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Cpu className="w-10 h-10 text-white" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Future of Smart Safety Gear</h2>
                                </div>
                                <p className="text-slate-300 mb-6 font-light italic border-l-2 border-white pl-4">
                                    "Blending smart design, user comfort, and sustainable materials."
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Our helmet project reflects the future of protective equipment. We are committed to evolving safety gear to meet modern needs without compromising on style or sustainability.
                                </p>
                            </motion.div>

                        </div>

                        {/* Sidebar / Table of Contents (Sticky) */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Highlights</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Hair Safety',
                                            'Ergonomic Comfort',
                                            'Patented Tech',
                                            'Industrial Use',
                                            'Customizable Fit',
                                            'Sustainable'
                                        ].map((item, i) => (
                                            <li key={i} className="text-slate-400 hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-500/50"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-br from-slate-700 to-gray-700 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">Upgrade Your Gear</h3>
                                    <p className="text-slate-300 text-sm mb-4">Discover the next generation of protective technology.</p>
                                    <button className="bg-white text-slate-800 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-200 transition-colors">
                                        Explore More
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

export default HelmetDesignPage;
