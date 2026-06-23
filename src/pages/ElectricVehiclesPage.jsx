import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, DollarSign, Battery, Smartphone, Globe, User, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';

const ElectricVehiclesPage = () => {
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
            <SEO
                title="Electric Vehicles (EV) - Sustainable Mobility Solutions"
                description="Explore the future of mobility with our EV design and optimization services. Sustainable, smart, and emission-free transportation technology."
                canonical="/services/electric-vehicles"
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 mb-6">
                            <Zap className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Sustainable Mobility</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Electric <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Vehicles (EVs)</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Sustainable, Smart & Future-Ready Mobility
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-green-500" />
                                <span>Brindhaa A</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-green-500" />
                                <span>Mechanical Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-green-500" />
                                <span>September 22, 2025</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content with Sticky Layout */}
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
                                SUSTAINABLE <br />
                                <span className="text-green-500 text-outline-green font-black">MOBILITY</span> <br />
                                FUTURE
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Key Highlights</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Eco-Friendly',
                                        'Cost-Effective',
                                        'Battery Tech',
                                        'Smart Features',
                                        'Incentives',
                                        'Future Mobility'
                                    ].map((tag, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-150 transition-transform"></div>
                                            <span className="group-hover:text-white transition-colors">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 p-1 rounded-2xl bg-gradient-to-br from-green-600 to-cyan-600">
                                    <div className="bg-[#0f172a] p-6 rounded-xl h-full text-center">
                                        <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">Drive the Future</h3>
                                        <p className="text-slate-400 text-sm mb-4">"Explore our EV optimization and design services for the next generation of transport."</p>
                                        <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content */}
                        <div className="lg:col-span-3 space-y-16">
                            {/* Section Intro */}
                            <div className="pl-8 border-l-4 border-green-500/50">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Emission-Free Tech</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                                    "EVs are designed to reduce carbon footprints by eliminating harmful tailpipe emissions, promoting sustainable urban living."
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Cost-Effective",
                                        icon: <DollarSign />,
                                        desc: "Lower running costs and fewer moving parts lead to long-term savings and efficient industrial performance.",
                                        color: "text-green-400",
                                        bgColor: "bg-green-500/10"
                                    },
                                    {
                                        title: "Advanced Battery",
                                        icon: <Battery />,
                                        desc: "High-capacity lithium-ion tech delivering long driving ranges with rapid charging solutions.",
                                        color: "text-cyan-400",
                                        bgColor: "bg-cyan-500/10"
                                    },
                                    {
                                        title: "Smart & Connected",
                                        icon: <Smartphone />,
                                        desc: "AI-driven navigation, regenerative braking, and advanced safety systems for enhanced comfort.",
                                        color: "text-purple-400",
                                        bgColor: "bg-purple-500/10"
                                    },
                                    {
                                        title: "Global Incentives",
                                        icon: <Globe />,
                                        desc: "Government subsidies and tax rebates accelerating the shift toward greener mobility across markets.",
                                        color: "text-orange-400",
                                        bgColor: "bg-orange-500/10"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group shadow-2xl"
                                    >
                                        <div className={`${item.color} ${item.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                            {React.cloneElement(item.icon, { size: 28 })}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black mb-4 text-white group-hover:text-green-300 transition-colors uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clients />
        </div>
    );
};

export default ElectricVehiclesPage;
