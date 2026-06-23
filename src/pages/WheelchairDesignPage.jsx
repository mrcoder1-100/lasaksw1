import React from 'react';
import { motion } from 'framer-motion';
import { Accessibility, ShieldCheck, Heart, PenTool, TrendingUp, Users, User, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import wheelchairDesignImg from '../assets/wheelchair-design.png';

const WheelchairDesignPage = () => {
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
                title="Specialised Wheelchair Design & Inclusive Mobility"
                description="Engineering innovative solutions for inclusive mobility. We specialize in adaptive wheelchair design meeting safety and regulatory standards."
                canonical="/blogs/wheelchair-design"
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 mb-6">
                            <Accessibility className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Mechanical Projects</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Specialised <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Wheelchair Design</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Innovation for Inclusive Mobility and Patent Registration.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-purple-500" />
                                <span>Sasikeerthika R</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-purple-500" />
                                <span>Mechanical Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-purple-500" />
                                <span>September 20, 2025</span>
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
                            src={wheelchairDesignImg}
                            alt="Specialised Wheelchair Design"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
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
                                INCLUSIVE <br />
                                <span className="text-purple-500 text-outline-purple font-black">MOBILITY</span> <br />
                                SYSTEMS
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Highlights</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Specialised Design',
                                        'Patent Registration',
                                        'Safety Standards',
                                        'Enhanced Durability',
                                        'User Comfort',
                                        'Inclusive Solution'
                                    ].map((tag, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform"></div>
                                            <span className="group-hover:text-white transition-colors">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 p-1 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600">
                                    <div className="bg-[#0f172a] p-6 rounded-xl h-full text-center">
                                        <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">Patent Design?</h3>
                                        <p className="text-slate-400 text-sm mb-4">"We help bring your inventions to life with professional engineering and documentation services."</p>
                                        <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                            Consult Experts
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content */}
                        <div className="lg:col-span-3 space-y-16">
                            {/* Project Image Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl aspect-video"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
                                <img
                                    src={wheelchairDesignImg}
                                    alt="Wheelchair Design"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute bottom-10 left-10 z-20">
                                    <p className="text-sm font-mono text-purple-400 mb-2 uppercase tracking-[0.2em]">Mechanical Projects</p>
                                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Adaptive Mobility</h3>
                                </div>
                            </motion.div>

                            {/* Section Intro */}
                            <div className="pl-8 border-l-4 border-purple-500/50">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Client-Specific Spec</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                                    "Meeting performance, safety, and regulatory standards (including Indian vehicle regulations) with specialized adaptive design."
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Compliance",
                                        icon: <ShieldCheck />,
                                        desc: "Quality emphasis and strict compliance with vehicle regulations for top-tier mobility solutions.",
                                        color: "text-purple-400",
                                        bgColor: "bg-purple-500/10"
                                    },
                                    {
                                        title: "Precision Craft",
                                        icon: <PenTool />,
                                        desc: "Providing comfort and enhanced durability through a blend of mechanical innovation and precision.",
                                        color: "text-pink-400",
                                        bgColor: "bg-pink-500/10"
                                    },
                                    {
                                        title: "Human Centered",
                                        icon: <Heart />,
                                        desc: "Contributing to inclusive mobility solutions that improve accessibility and everyday lives.",
                                        color: "text-red-400",
                                        bgColor: "bg-red-500/10"
                                    },
                                    {
                                        title: "Expert Dev",
                                        icon: <Users />,
                                        desc: "Creative attention to detail ensuring that complex adaptive requirements are flawlessly executed.",
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
                                        className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group shadow-2xl"
                                    >
                                        <div className={`${item.color} ${item.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                            {React.cloneElement(item.icon, { size: 28 })}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black mb-4 text-white group-hover:text-purple-300 transition-colors uppercase tracking-tight">{item.title}</h3>
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

export default WheelchairDesignPage;
