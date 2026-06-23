import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Anchor, Truck, CheckCircle, Package } from 'lucide-react';
import Clients from '../components/Clients';
import eotCraneImg from '../assets/eot-crane.png'; // Assuming this import exists based on BlogsPage usage

const EOTCranePage = () => {
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
                {/* Industrial Orange/Blue Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-400 mb-6">
                            <Settings className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Mechanical Projects</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            EOT Crane, Weight Lifter & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">Handler Project</span>
                        </motion.h1>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm md:text-base mb-8">
                            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">By Brindhaa A</span>
                            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">October 3, 2025</span>
                            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">Mechanical Engineering</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Content Column */}
                        <div className="lg:col-span-8 space-y-16">

                            {/* Introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src={eotCraneImg}
                                    alt="EOT Crane Project"
                                    className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 border border-white/10 shadow-2xl"
                                />
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-orange-500 pl-4">Introduction to Material Handling Solutions</h2>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    At Lasak Technologies, we specialize in providing innovative solutions for industries that deal with heavy load management. Our projects focus on EOT Cranes, Weight Lifters, and Handlers, designed to make lifting and transporting safe, efficient, and reliable.
                                </p>
                            </motion.div>

                            {/* Solutions Grid */}
                            <div className="grid grid-cols-1 gap-8">
                                {[
                                    {
                                        title: "EOT Crane Projects",
                                        icon: <Anchor className="w-8 h-8" />,
                                        desc: "Our Electric Overhead Traveling (EOT) Cranes are engineered to handle heavy materials in factories, warehouses, and workshops. With robust construction and precision controls, they ensure smooth and safe material movement.",
                                        color: "text-blue-400",
                                        bg: "bg-blue-900/10",
                                        border: "border-blue-500/20"
                                    },
                                    {
                                        title: "Weight Lifter Systems",
                                        icon: <Package className="w-8 h-8" />,
                                        desc: "We design and install weight lifter systems that minimize manual effort and maximize productivity. These systems allow industries to handle loads with accuracy, speed, and enhanced safety.",
                                        color: "text-orange-400",
                                        bg: "bg-orange-900/10",
                                        border: "border-orange-500/20"
                                    },
                                    {
                                        title: "Handler Solutions",
                                        icon: <Truck className="w-8 h-8" />,
                                        desc: "Our handlers are built for versatility—streamlining operations such as moving, loading, and unloading. They reduce downtime and improve operational efficiency across multiple industrial applications.",
                                        color: "text-green-400",
                                        bg: "bg-green-900/10",
                                        border: "border-green-500/20"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className={`p-8 rounded-2xl ${item.bg} border ${item.border} hover:bg-slate-800/50 transition-colors`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-xl bg-slate-900 ${item.color}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                                <p className="text-slate-300 leading-relaxed text-lg">{item.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Why Choose Lasak */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-slate-900 to-slate-900 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

                                <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Lasak Technologies?</h2>
                                <div className="space-y-4">
                                    <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                        With a strong focus on quality, durability, and customer satisfaction, we deliver projects that meet international standards. Our expert team ensures every solution is tailored to client needs, making us a trusted partner in material handling innovation.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {['Quality Assurance', 'Durability', 'Customer Satisfaction', 'International Standards'].map((tag, i) => (
                                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-blue-300">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="sticky top-24 space-y-6">
                                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Project Details</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-xs text-slate-500 uppercase tracking-widest">Client</span>
                                            <p className="text-white font-medium">Confidential Industrial Partner</p>
                                        </div>
                                        <div>
                                            <span className="text-xs text-slate-500 uppercase tracking-widest">Location</span>
                                            <p className="text-white font-medium">Chennai, India</p>
                                        </div>
                                        <div>
                                            <span className="text-xs text-slate-500 uppercase tracking-widest">Year</span>
                                            <p className="text-white font-medium">2025</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-600 to-red-700 text-white shadow-lg">
                                    <h3 className="font-bold text-xl mb-2">Need a Similar Solution?</h3>
                                    <p className="text-orange-100 text-sm mb-4">Contact us for custom EOT Crane and heavy lifting solutions tailored to your facility.</p>
                                    <button className="bg-white text-orange-700 px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                        Get a Quote
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

export default EOTCranePage;
