import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Gauge, Leaf, Plane, Settings2, Users, User, Calendar, Tag } from 'lucide-react';
import Clients from '../components/Clients';
import teslaValveImg from '../assets/tesla-valve.png';

const TeslaValvePage = () => {
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 mb-6">
                            <Wind className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Fluid Dynamics</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Tesla Valve <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">Fluid Optimization</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Innovative Fluid Flow & Reverse Engineering Insights.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-cyan-500" />
                                <span>Brindhaa A</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-cyan-500" />
                                <span>Mechanical Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-cyan-500" />
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
                            src={teslaValveImg}
                            alt="Tesla Valve Fluid Optimization"
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
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-cyan-500 pl-4">The Future of Flow Control</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    Tesla valves enable one-way fluid movement without moving parts, making them highly durable and low-maintenance. By applying reverse engineering and CFD simulations, we optimize flow efficiency, reduce turbulence, and enhance overall performance.
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Reverse Engineering",
                                            icon: <Settings2 />,
                                            desc: "Our approach goes beyond replication — we analyze, redesign, and improve existing systems to deliver cutting-edge solutions for industries requiring precision.",
                                            color: "text-cyan-400",
                                            bgColor: "bg-cyan-500/10"
                                        },
                                        {
                                            title: "Sustainable Design",
                                            icon: <Leaf />,
                                            desc: "We integrate eco-friendly materials and manufacturing methods, creating fluid optimization solutions that boost efficiency and reduce environmental impact.",
                                            color: "text-green-400",
                                            bgColor: "bg-green-500/10"
                                        },
                                        {
                                            title: "Multi-Industry Use",
                                            icon: <Plane />,
                                            desc: "From aerospace to medical devices, Tesla valves are redefining performance. Their unique design makes them adaptable to critical applications.",
                                            color: "text-sky-400",
                                            bgColor: "bg-sky-500/10"
                                        },
                                        {
                                            title: "Smart Engineering",
                                            icon: <Gauge />,
                                            desc: "Through computational testing and redesign, we improve non-return valves to achieve better fluid control, reduced pressure drops, and increased lifespan.",
                                            color: "text-purple-400",
                                            bgColor: "bg-purple-500/10"
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
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
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
                                className="bg-gradient-to-r from-cyan-900/20 to-teal-900/20 p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Users className="w-10 h-10 text-cyan-400" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Partnering for Innovation</h2>
                                </div>
                                <p className="text-slate-300 mb-6 font-light italic border-l-2 border-teal-500 pl-4">
                                    "Co-creating customized values for complex fluid systems."
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    At LASAK Technologies, we collaborate with clients to co-create customized solutions. Our hands-on expertise ensures that optimized designs fit seamlessly into complex systems, improving productivity, sustainability, and reliability.
                                </p>
                            </motion.div>

                        </div>

                        {/* Sidebar / Table of Contents (Sticky) */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Expertise</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Fluid Optimization',
                                            'CFD Analysis',
                                            'Reverse Engineering',
                                            'Eco-Friendly Design',
                                            'Aerospace & Medical',
                                            'Non-Return Valves'
                                        ].map((item, i) => (
                                            <li key={i} className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-600 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">CFD Solutions</h3>
                                    <p className="cyan-100 text-sm mb-4">Optimize your fluid systems with Lasak Tech.</p>
                                    <button className="bg-white text-cyan-700 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                        Learn More
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

export default TeslaValvePage;
