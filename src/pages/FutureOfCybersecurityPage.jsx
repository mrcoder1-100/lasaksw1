import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Cloud, Wifi, Database, UserCheck, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';

const FutureOfCybersecurityPage = () => {
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
                title="The Future of Cybersecurity: Trends & Technologies"
                description="Explore emerging trends in cybersecurity, from AI and machine learning to quantum-resistant encryption. Stay ahead of digital threats with Lasak Tech."
                canonical="/blogs/future-of-cybersecurity"
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 mb-6">
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Cybersecurity Trends</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Cybersecurity</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            Emerging Trends and Technologies shaping the digital defense landscape.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction & Content */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content Column */}
                        <div className="lg:col-span-8 space-y-16">

                            {/* Intro */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-blue-500 pl-4">Navigating the Digital World</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    As we continue to navigate the complexities of the digital world, the importance of cybersecurity has never been more pressing. With the rise of technology and the increasing reliance on online platforms, the threat of cyberattacks has become a major concern for individuals, businesses, and governments alike.
                                </p>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    In this blog post, we will delve into the future of cybersecurity, exploring the emerging trends and technologies that will shape the industry in the years to come.
                                </p>
                            </motion.div>

                            {/* Current State */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
                                    <AlertTriangle className="text-yellow-500" />
                                    The Current State of Cybersecurity
                                </h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Before we look to the future, it’s essential to understand the current state of cybersecurity. The industry has experienced significant growth in recent years, with the global cybersecurity market projected to reach <strong>$300 billion by 2024</strong>.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Despite this growth, the number of cyberattacks continues to rise, with hackers becoming increasingly sophisticated in their methods. The most common types of cyberattacks include <strong>phishing, ransomware, and denial-of-service (DoS) attacks</strong>, which can have devastating consequences.
                                </p>
                            </motion.div>

                            {/* Emerging Trends Grid */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black mb-10 text-center md:text-left">Emerging Trends</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "AI & Machine Learning", icon: <Cpu />, desc: "Automating threat detection enabling faster and more accurate responses compared to traditional labor-intensive measures.", color: "text-blue-400" },
                                        { title: "Cloud Security", icon: <Cloud />, desc: "Critical measures to ensure the security of data, applications, and infrastructure as businesses move to cloud environments.", color: "text-purple-400" },
                                        { title: "IoT Security", icon: <Wifi />, desc: "Addressing new vulnerabilities created by the growing number of connected devices to prevent exploitation.", color: "text-green-400" },
                                        { title: "Quantum Computing", icon: <Database />, desc: "Developing quantum-resistant encryption methods to counter potential threats from quantum computing power.", color: "text-pink-400" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/80 transition-colors group"
                                        >
                                            <div className={`${item.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                                {React.cloneElement(item.icon, { size: 40 })}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{item.title}</h3>
                                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black mb-8">Advances in Technologies</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Blockchain", desc: "Providing a secure and transparent way to store and manage data through decentralized technology." },
                                        { title: "Biometric Authentication", desc: "Facial recognition and fingerprint scanning offering more secure alternatives to traditional passwords." },
                                        { title: "SOAR", desc: "Security Orchestration, Automation, and Response solutions streamlining operations and improving incident response times." },
                                        { title: "VPNs", desc: "Virtual Private Networks providing secure and encrypted connections, essential for remote work security." }
                                    ].map((tech, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-blue-400 font-bold">{idx + 1}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                                                <p className="text-slate-400">{tech.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* The Human Element */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <UserCheck className="w-10 h-10 text-blue-400" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">The Human Element</h2>
                                </div>
                                <p className="text-slate-300 mb-6 font-light border-l-2 border-purple-500 pl-4">
                                    "Cybersecurity awareness and training are essential for preventing cyberattacks, as many attacks rely on human error or deception."
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span><strong>Phishing Awareness:</strong> Educating on identifying scams.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        <span><strong>Security Best Practices:</strong> Strong passwords, software updates.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span><strong>Incident Response Planning:</strong> Preparing for effective reaction.</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Conclusion */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    The future of cybersecurity is complex and ever-evolving. As technology continues to advance, the threat of cyberattacks will only continue to grow. However, by staying ahead of emerging trends and technologies, individuals and organizations can reduce the risk of cyberattacks and protect themselves in the digital world.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Ultimately, the future of cybersecurity requires a collaborative effort between individuals, businesses, and governments to stay one step ahead of the threats and protect the integrity of our digital world.
                                </p>
                            </motion.div>

                        </div>

                        {/* Sidebar / Table of Contents (Sticky) */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">In this article</h3>
                                    <ul className="space-y-3">
                                        {['Current State', 'Emerging Trends', 'New Technologies', 'Human Element', 'Conclusion'].map((item, i) => (
                                            <li key={i} className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">Need Security Solutions?</h3>
                                    <p className="text-blue-100 text-sm mb-4">Contact Lasak Tech for cutting-edge security integration in your next project.</p>
                                    <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                        Contact Us
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

export default FutureOfCybersecurityPage;
