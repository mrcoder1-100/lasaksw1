import React from 'react';
import { motion } from 'framer-motion';
import { Layout, CheckCircle, Globe, MapPin, Eye, Star, User, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';

const SkylinePage = () => {
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
                title="Skyline - Modern Real Estate Landing Page"
                description="Skyline is a sleek, modern landing page designed for premium real estate projects and residential developments."
                canonical="/blogs/skyline-landing-page"
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 mb-6">
                            <Star className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Static Projects</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Skyline <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Real Estate Landing Page</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            A highly optimized, aesthetic landing page engineered to showcase ultra-premium properties.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-blue-500" />
                                <span>Lasak Web Team</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-blue-500" />
                                <span>Static Web Page</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                <span>June 24, 2026</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-16 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group aspect-video"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                            alt="Skyline Real Estate Landing Page"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
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
                                PREMIUM <br />
                                <span className="text-blue-500 text-outline-blue font-black">LANDING</span> <br />
                                DESIGN
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Key Sections</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Immersive Hero Section',
                                        'Interactive Virtual Tour Integration',
                                        'Detailed Floor Plans',
                                        'Neighborhood Map Integration',
                                        'Secure Consultation Form',
                                        'Agent Contact Profiles'
                                    ].map((tag, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                                            <span className="group-hover:text-white transition-colors">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content */}
                        <div className="lg:col-span-3 space-y-16">
                            {/* Project Intro */}
                            <div className="pl-8 border-l-4 border-blue-500/50">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Elegant Real Estate Branding</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                                    "Skyline elevates high-end properties through strategic UX architecture, minimalist visual styles, and ultra-high-resolution image galleries that drive customer conversion."
                                </p>
                            </div>

                            {/* Detailed Blog Content */}
                            <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                                <p>
                                    Skyline represents a major step forward in static landing page design for luxury real estate. In premium property sales, the digital storefront acts as the primary visual interface for high-net-worth buyers. Standard templates with low-quality compression and generic grids fail to project the required opulence. Skyline was architected to address this by prioritizing immersive visual aesthetics and performance-first static layouts.
                                </p>
                                <p>
                                    Our design system utilizes deep navy tones coupled with subtle gradients and crisp typography to create a sense of exclusivity. Rather than overwhelming users with text, Skyline uses high-fidelity imagery and interactive 3D floor plan viewers to let the architecture speak for itself. We optimized all visual assets to load instantly, ensuring that high-resolution property galleries do not degrade page performance or load speed.
                                </p>
                                <p>
                                    Additionally, Skyline integrates conversion-focused interfaces such as smooth consult scheduling forms and structured neighborhood guides. By placing nearby school, park, and transit metrics directly within clean visual cards, we provide potential residents with all essential context right on the landing page. Skyline proves that static websites can offer the same interactive elegance as complex applications, without sacrificing speed.
                                </p>
                            </div>

                            {/* Detail Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Fluid Animations",
                                        icon: <Eye />,
                                        desc: "Carefully calibrated scroll-triggered layouts that transition seamlessly for a premium digital experience.",
                                        color: "text-blue-400",
                                        bgColor: "bg-blue-500/10"
                                    },
                                    {
                                        title: "Floor Plan Viewers",
                                        icon: <Layout />,
                                        desc: "Tabbed UI widgets that permit prospective buyers to inspect diverse room layouts with high clarity.",
                                        color: "text-cyan-400",
                                        bgColor: "bg-cyan-500/10"
                                    },
                                    {
                                        title: "Aesthetic Maps",
                                        icon: <MapPin />,
                                        desc: "Custom Mapbox interfaces styled to match the dark theme and highlight neighborhood lifestyle amenities.",
                                        color: "text-sky-400",
                                        bgColor: "bg-sky-500/10"
                                    },
                                    {
                                        title: "Conversion Focused",
                                        icon: <CheckCircle />,
                                        desc: "Highly-visible, optimized consultation booking widgets styled to maximize premium lead generation.",
                                        color: "text-indigo-400",
                                        bgColor: "bg-indigo-500/10"
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
                                        <h3 className="text-xl md:text-2xl font-black mb-4 text-white group-hover:text-blue-300 transition-colors uppercase tracking-tight">{item.title}</h3>
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

export default SkylinePage;
