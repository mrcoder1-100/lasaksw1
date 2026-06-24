import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, PlayCircle, Star, User, Calendar, Tag, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';

const LasakEduPage = () => {
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
                title="Lasak Edu Landing Page - Digital Learning Redefined"
                description="Lasak Edu is an innovative educational platform landing page designed to host, market, and manage professional online courses."
                canonical="/blogs/lasak-edu-landing-page"
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
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wider uppercase">Static Projects</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Lasak Edu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Landing Page Design</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Empowering educators and universities through modern, responsive, and performance-first static web design.
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
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
                            alt="Lasak Edu Learning Landing Page"
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
                                EDUCATION <br />
                                <span className="text-blue-500 text-outline-blue font-black">LANDING</span> <br />
                                HUB
                            </motion.h2>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Core Modules</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Interactive Course Catalogs',
                                        'Teacher Profiles & Intro Videos',
                                        'Structured Syllabus Accordions',
                                        'Student Testimonial Carousels',
                                        'Direct Mailchimp/Newsletter Signups',
                                        'Modern FAQ Sections'
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
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Designed for High Student Engagement</h3>
                                <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                                    "Lasak Edu landing page presents professional training courses with highly-structured, clear informational grids, giving potential students access to core curriculum information instantly."
                                </p>
                            </div>

                            {/* Detailed Blog Content */}
                            <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                                <p>
                                    The educational landscape has shifted rapidly towards digital classrooms and specialized online courses. However, marketing these courses requires a digital portal that balances information-rich layouts with quick visual highlights. Lasak Edu is our specialized landing page design created to serve this exact balance, allowing educational institutions and online universities to showcase curriculum tracks and convert visitors into active enrollments.
                                </p>
                                <p>
                                    Our design methodology focuses on reducing friction. By arranging course paths in accordion grids, potential students can inspect syllabus metrics, hours, and prerequisites without navigating to separate sub-pages. High-quality inline video widgets allow students to view introductory trailers or message transcripts directly from the teachers, adding a human touch to the automated process.
                                </p>
                                <p>
                                    Finally, trust is built through organized testimonial carousels and certification badges. The entire landing page is designed as a static website, guaranteeing fast load speeds and minimal server requirements. This architecture ensures that even in remote regions with low bandwidth, prospective students can access all course material seamlessly.
                                </p>
                            </div>

                            {/* Detail Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Structured Syllabus",
                                        icon: <BookOpen />,
                                        desc: "Accordions that break down modules and learning hours step-by-step for absolute clarity.",
                                        color: "text-blue-400",
                                        bgColor: "bg-blue-500/10"
                                    },
                                    {
                                        title: "Video Integration",
                                        icon: <PlayCircle />,
                                        desc: "Inline modal video players optimized to play course trailers and student introductory clips.",
                                        color: "text-cyan-400",
                                        bgColor: "bg-cyan-500/10"
                                    },
                                    {
                                        title: "Credibility Badges",
                                        icon: <Award />,
                                        desc: "Structured grids displaying certification logos, awards, and trust signals.",
                                        color: "text-sky-400",
                                        bgColor: "bg-sky-500/10"
                                    },
                                    {
                                        title: "Responsive Grids",
                                        icon: <ShieldCheck />,
                                        desc: "Optimized mobile layout making course enrollment fast and secure on any screen.",
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

export default LasakEduPage;
