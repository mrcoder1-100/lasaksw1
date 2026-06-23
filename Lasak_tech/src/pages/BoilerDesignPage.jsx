import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Settings, ShieldCheck, Factory, Award, Truck, User, Calendar, Tag } from 'lucide-react';
import Clients from '../components/Clients';
import boilerDesignImg from '../assets/boiler-design.png';

const BoilerDesignPage = () => {
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-400 mb-6">
                            <Flame className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Industrial Engineering</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Boiler Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Innovations</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Precision Engineering for customized, efficient, and reliable boiler systems.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-orange-500" />
                                <span>Brindhaa A</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-orange-500" />
                                <span>Mechanical Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-orange-500" />
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
                            src={boilerDesignImg}
                            alt="Precision Boiler Design"
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
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-orange-500 pl-4">Customized Boiler Design for Industry Needs</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    Our boiler projects are engineered to meet unique client requirements, ensuring efficiency, reliability, and compliance with strict industry standards. We focus on delivering solutions that optimize performance and safety.
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Rice Pulling Innovation",
                                            icon: <Factory />,
                                            desc: "This specialized design focuses on optimized energy use and high performance in rice pulling applications, delivering maximum operational value.",
                                            color: "text-orange-400",
                                            bgColor: "bg-orange-500/10"
                                        },
                                        {
                                            title: "Patent Registered",
                                            icon: <Award />,
                                            desc: "Patent-backed designs showcase our commitment to innovation, protecting client solutions while ensuring world-class quality.",
                                            color: "text-red-400",
                                            bgColor: "bg-red-500/10"
                                        },
                                        {
                                            title: "Standard Compliance",
                                            icon: <ShieldCheck />,
                                            desc: "Our designs are developed with strict adherence to Indian safety and regulatory standards, guaranteeing safe and sustainable operations.",
                                            color: "text-green-400",
                                            bgColor: "bg-green-500/10"
                                        },
                                        {
                                            title: "Engineering Excellence",
                                            icon: <Settings />,
                                            desc: "We acknowledge and celebrate the skill and innovation of our expert engineers who make these successful projects possible.",
                                            color: "text-blue-400",
                                            bgColor: "bg-blue-500/10"
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
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors">{item.title}</h3>
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
                                className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Truck className="w-10 h-10 text-orange-400" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Driving Industrial Future</h2>
                                </div>
                                <p className="text-slate-300 mb-6 font-light italic border-l-2 border-red-500 pl-4">
                                    "Pushing the boundaries of industrial engineering for smarter, safer systems."
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    At LASAK Technologies, we continue to innovate in industrial boiler design, creating systems that not only meet today's demands but are ready for the challenges of tomorrow.
                                </p>
                            </motion.div>

                        </div>

                        {/* Sidebar / Table of Contents (Sticky) */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Capabilities</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Custom Boiler Design',
                                            'Energy Optimization',
                                            'Safety Compliance',
                                            'Patent Protection',
                                            'High Performance',
                                            'Sustainable Ops'
                                        ].map((item, i) => (
                                            <li key={i} className="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">Industrial Solutions</h3>
                                    <p className="orange-100 text-sm mb-4">Partner with us for advanced engineering projects.</p>
                                    <button className="bg-white text-orange-700 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                        Contact Enigneers
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

export default BoilerDesignPage;
