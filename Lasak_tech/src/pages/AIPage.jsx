import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, BarChart, Clock, Shield, Laptop, Lightbulb, Car, Stethoscope, ShoppingBag, Landmark, Plane, Factory, Gem } from 'lucide-react';
import Clients from '../components/Clients';

const AIPage = () => {

    const benefits = [
        { icon: <Zap className="w-8 h-8 text-blue-400" />, title: "Increased Efficiency", desc: "Automate repetitive tasks to speed up operations and reduce manual errors." },
        { icon: <BarChart className="w-8 h-8 text-purple-400" />, title: "Real-Time Insights", desc: "Gain actionable data instantly to make informed business decisions." },
        { icon: <Clock className="w-8 h-8 text-pink-400" />, title: "Boost Productivity", desc: "Focus your team on high-value strategy while AI handles the routine work." },
        { icon: <Shield className="w-8 h-8 text-cyan-400" />, title: "Data Security", desc: "Enterprise-grade security protocols to keep your automated processes safe." },
        { icon: <Laptop className="w-8 h-8 text-indigo-400" />, title: "Predictive Maintenance", desc: "Anticipate system needs before they become critical issues." },
        { icon: <Lightbulb className="w-8 h-8 text-yellow-400" />, title: "Seamless Innovation", desc: "Adopt new technologies faster with our flexible AI framework." },
    ];

    const industries = [
        { icon: <Car className="w-6 h-6" />, label: "Automotive" },
        { icon: <Stethoscope className="w-6 h-6" />, label: "Healthcare" },
        { icon: <ShoppingBag className="w-6 h-6" />, label: "E-commerce" },
        { icon: <Landmark className="w-6 h-6" />, label: "Finance" },
        { icon: <Plane className="w-6 h-6" />, label: "Aerospace" },
        { icon: <Factory className="w-6 h-6" />, label: "Manufacturing" },
        { icon: <Gem className="w-6 h-6" />, label: "Retail" },
    ];

    return (
        <div className="min-h-screen pt-24">

            {/* Hero Section */}
            <section className="relative py-12 md:py-24 overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

                <div className="container mx-auto px-4 md:px-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-7xl font-bold text-white uppercase mb-6 leading-none tracking-tighter"
                    >
                        AI Powered Process <br /> <span className="text-blue-500">Automation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg mb-12"
                    >
                        Transform your business operations with intelligent automation that learns, adapts, and scales.
                    </motion.p>

                    <Link to="/contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 inline-block">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-left">
                        Why Choose <br />
                        <span className="text-blue-400">AI-Powered Automation?</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#1a2236] p-8 rounded-3xl border border-white/5 hover:border-blue-500/40 transition-all group"
                            >
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-blue-500/20 transition-colors">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all">{benefit.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transform Your Manufacturing Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 skew-y-3 transform origin-bottom-left scale-110"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur-xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670"
                                alt="Industry 4.0"
                                className="relative rounded-2xl border border-white/10 shadow-2xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Transform Your Manufacturing with <span className="text-blue-500">Industry 4.0</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Embrace the power of connected systems and data-driven decision making. Our AI solutions bridge the gap between physical production and digital intelligence, optimizing every step of your workflow.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Smart Optimization</h4>
                                        <p className="text-slate-400 text-sm">Algorithms that continuously improve your throughput.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Quality Assurance</h4>
                                        <p className="text-slate-400 text-sm">Computer vision that detects defects with 99.9% accuracy.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400">
                                        <BarChart className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Predictive Analytics</h4>
                                        <p className="text-slate-400 text-sm">Forecast trends and maintenance needs weeks in advance.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who Can Benefit */}
            <section className="py-24 bg-gradient-to-t from-blue-900/10 to-transparent">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Who Can Benefit?</h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <div className="w-20 h-20 rounded-full bg-[#1a2236] border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all shadow-xl">
                                    {industry.icon}
                                </div>
                                <span className="text-slate-300 font-medium tracking-wide uppercase text-sm">{industry.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-20 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">Ready To Automate Your Future?</h2>
                        <Link to="/contact" className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold shadow-2xl hover:bg-slate-100 transition-colors relative z-10 inline-block">
                            Get In Touch
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Clients />
        </div>
    );
};

export default AIPage;
