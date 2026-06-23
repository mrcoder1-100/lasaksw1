import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, DollarSign, Battery, Smartphone, Globe, User, Calendar, Tag } from 'lucide-react';
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
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-green-500 pl-4">Eco-Friendly and Zero Emissions</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    Electric Vehicles (EVs) are designed to reduce carbon footprints by eliminating harmful tailpipe emissions. They play a vital role in combating climate change, ensuring cleaner air, and promoting sustainable urban living.
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Cost-Effective Transportation",
                                            icon: <DollarSign />,
                                            desc: "Compared to petrol and diesel vehicles, EVs offer significantly lower running costs. With fewer moving parts and reduced maintenance, EV owners save money in the long term while enjoying efficient performance.",
                                            color: "text-green-400",
                                            bgColor: "bg-green-500/10"
                                        },
                                        {
                                            title: "Advanced Battery Tech",
                                            icon: <Battery />,
                                            desc: "Modern EVs are powered by high-capacity lithium-ion batteries that deliver long driving ranges. Rapid charging stations and home charging solutions make it more convenient than ever.",
                                            color: "text-cyan-400",
                                            bgColor: "bg-cyan-500/10"
                                        },
                                        {
                                            title: "Smart & Connected",
                                            icon: <Smartphone />,
                                            desc: "Today’s EVs come equipped with AI-driven navigation, regenerative braking, mobile app integration, and advanced safety systems. These smart features enhance driving comfort and safety.",
                                            color: "text-purple-400",
                                            bgColor: "bg-purple-500/10"
                                        },
                                        {
                                            title: "Government Support",
                                            icon: <Globe />,
                                            desc: "Many governments provide subsidies, tax rebates, and incentives to encourage EV adoption. This makes electric vehicles more affordable and accelerates the shift toward greener mobility.",
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
                                            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/80 transition-colors group"
                                        >
                                            <div className={`${item.color} ${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                                {React.cloneElement(item.icon, { size: 24 })}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors">{item.title}</h3>
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
                                className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Leaf className="w-10 h-10 text-green-400" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Future of Sustainable Mobility</h2>
                                </div>
                                <p className="text-slate-300 mb-6 font-light italic border-l-2 border-cyan-500 pl-4">
                                    "EVs are not just a trend—they are the future of transportation."
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    With growing innovation in autonomous driving, wireless charging, and renewable energy integration, electric mobility is set to redefine the way we travel.
                                </p>
                            </motion.div>

                        </div>

                        {/* Sidebar / Table of Contents (Sticky) */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Key Highlights</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Eco-Friendly',
                                            'Cost-Effective',
                                            'Battery Tech',
                                            'Smart Features',
                                            'Incentives',
                                            'Future Mobility'
                                        ].map((item, i) => (
                                            <li key={i} className="text-slate-400 hover:text-green-400 cursor-pointer transition-colors flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-br from-green-600 to-cyan-600 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">Drive the Future</h3>
                                    <p className="green-100 text-sm mb-4">Explore our EV optimization and design services for the next generation of transport.</p>
                                    <button className="bg-white text-green-700 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-100 transition-colors">
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

export default ElectricVehiclesPage;
