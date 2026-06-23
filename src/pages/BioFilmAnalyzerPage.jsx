import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Microscope, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import bioFilmAnalyzerImg from '../assets/bio-film-analyzer.webp';

const BioFilmAnalyzerPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const highlights = [
        'PEEK & Biocompatible Materials Selection',
        'Laminar Flow Channel Hydrodynamic Design',
        'In-Situ Optical Coherence Tomography (OCT)',
        'Electrochemical Bio-Impedance Sensor Arrays',
        'High-Accuracy Peristaltic Pump Flow Rates',
        'Autoclavable High-Temperature Structural Sealings'
    ];

    const features = [
        {
            title: "Multi-Chamber Fluidics",
            icon: <Layers />,
            desc: "Independent parallel fluid channels designed to evaluate different shear stresses and biocides under identical conditions.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "In-Situ OCT Sensor",
            icon: <Microscope />,
            desc: "Optical interfaces allowing non-invasive thickness monitoring of the biofilm structure in real-time.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "Bio-Impedance Array",
            icon: <Cpu />,
            desc: "Gold microelectrodes deposited on the chamber floor to track biofilm cell growth via electrical resistance loops.",
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10"
        },
        {
            title: "Autoclavable Seals",
            icon: <ShieldCheck />,
            desc: "Constructed from PEEK polymers and Viton gaskets, allowing complete sterilization at 121°C.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        }
    ];

    const faqs = [
        {
            q: "What is a biofilm analyzer and why are multiple chambers used?",
            a: "A biofilm analyzer is a laboratory device designed to grow, monitor, and analyze bacterial biofilms under controlled fluid flow. Multiple chambers allow researchers to run parallel control groups and test different biocides, shear stresses, or nutrients simultaneously."
        },
        {
            q: "Why is laminar flow important inside the chambers?",
            a: "Laminar flow ensures a uniform velocity profile, allowing researchers to calculate exact shear stresses on the biofilm. Turbulent flow would generate random shear forces, causing uneven detachment and compromising test consistency."
        },
        {
            q: "What materials are selected for the flow cell construction?",
            a: "We select PEEK (Polyether ether ketone) for the chamber block because it is biocompatible, chemically inert, and autoclavable. Optically clear PMMA or borosilicate glass covers are used to allow microscopes and optical sensors to scan the biofilm."
        },
        {
            q: "How does electrical impedance measure biofilm thickness?",
            a: "As bacteria adhere and multiply on microelectrodes on the chamber floor, their cell membranes act as thin capacitors. This alters the overall electrical impedance of the chamber. Measuring this impedance shift tracks growth rates."
        }
    ];

    const relatedBlogs = [
        {
            title: "Methanogen Culture Jar Design",
            slug: "methanogen-culture-jar",
            desc: "Anaerobic culture vessel design, vacuum-tight sealing, and laboratory engineering.",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600"
        },
        {
            title: "Dew Point Sensor Moisture Control",
            slug: "dew-point-sensor",
            desc: "Exploring trace moisture analysis and calibration in high-pressure gas streams.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600"
        },
        {
            title: "Miniature Model Development",
            slug: "miniature-model",
            desc: "High-precision scale modeling and assembly engineering processes.",
            image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 pt-20 relative overflow-hidden">
            <SEO
                title="Bio Film Analyzer Design & Bioreactor Engineering - Lasak Technologies"
                description="Technical analysis of multi-chamber biofilm analyzers, microfluidic laminar flow channels, in-situ optical coherence sensors, and biocompatible PEEK design."
                keywords="biofilm analyzer, bioreactor design, microfluidics, PEEK polymer, bio-impedance sensor, laminar flow cell"
                canonical="/blogs/bio-film-analyzer"
            />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

            {/* Hero Section */}
            <section className="relative py-20 px-4 md:px-8 border-b border-slate-800 bg-[#0d1425]/50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center md:text-left space-y-6"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                            <Microscope size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">New Product Development</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Bio Film Analyzer & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-black">Microfluidic Bioreactor Design</span>
                        </motion.h1>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-slate-400 font-light">
                            <span className="flex items-center gap-2">
                                <User size={14} className="text-blue-500" />
                                Lasak Engineering Team
                            </span>
                            <span className="flex items-center gap-2">
                                <Tag size={14} className="text-blue-500" />
                                Mechanical Projects
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-blue-500" />
                                June 23, 2026
                            </span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="mt-10 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl aspect-[21/9]"
                        >
                            <img
                                src={bioFilmAnalyzerImg}
                                alt="Laboratory Biofilm Flow Cell System Testing"
                                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="py-20 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        
                        {/* Sticky Left Column */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-8">
                            <div className="bg-[#101726] border border-slate-800 rounded-[2rem] p-8">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Technical Focuses</h3>
                                <ul className="space-y-4">
                                    {highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-[2rem] p-8 text-center">
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Bioreactor Layouts?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide design validations, 3D microfluidic CAD modeling, flow profile analysis, and sensor housing integration.</p>
                                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-[0_4px_20px_rgba(37,99,235,0.4)] w-full">
                                    Contact Project Office <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Scrollable Content Column */}
                        <div className="lg:col-span-8 space-y-16">
                            
                            {/* Introduction */}
                            <div className="pl-6 border-l-4 border-blue-500 space-y-4">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Introduction</h2>
                                <p className="text-slate-300 leading-relaxed text-lg font-light">
                                    Bacterial biofilms present significant challenges in clean water grids, dental lines, heat exchangers, and medical implants. Biofilms are highly resistant to chemical biocides. Evaluating biocide efficacy and biofilm removal under dynamic conditions requires laboratory flow cells. A professional multi-chamber biofilm analyzer must combine biocompatible material selection, microfluidic laminar flow design, real-time sensor loops, and steam-sterilizable enclosures. At Lasak Technologies, our engineering team designs and details multi-chamber flow systems to support microbiological research and automated biocide analysis.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    Growing and testing biofilms requires replicating industrial fluid shear rates in a laboratory flow cell. The design features multiple parallel flow channels, allowing researchers to run comparative tests simultaneously.
                                </p>
                                <p>
                                    The microfluidic channels must maintain a laminar flow profile, preventing turbulence that would cause chaotic detachment. Our designs apply precise channel geometries and low flow velocities from peristaltic pumps, keeping the Reynolds number well below 2100. The flow cell block is machined from PEEK, which is biocompatible and resists harsh sterilization chemicals.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Non-Invasive Optical and Impedance Sensor Arrays</h3>
                                <p>
                                    To evaluate biofilm thickness without disrupting growth, we integrate non-invasive sensors. An optical window made of borosilicate glass allows high-resolution microscopes or Optical Coherence Tomography (OCT) sensors to scan the cell structure in real-time. 
                                </p>
                                <p>
                                    For electrical tracking, we deposit microelectrode arrays on the channel floor. As the bacterial film develops, it changes the electrical impedance across the electrodes, providing a direct measurement of cell growth rates.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Thermal Sterilization and Ingress Sealing</h3>
                                <p>
                                    To prevent cross-contamination, the entire bioreactor manifold must be autoclaved. We select Viton gaskets and high-temperature seals that maintain leak-tight performance at 121°C and 2 bar pressure during sterilization cycles.
                                </p>
                            </div>

                            {/* Features Section */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Key Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {features.map((f, i) => (
                                        <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] hover:bg-slate-800/30 transition-all group">
                                            <div className={`${f.color} ${f.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                {f.icon}
                                            </div>
                                            <h4 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">{f.title}</h4>
                                            <p className="text-sm text-slate-400 font-light leading-relaxed">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Applications Section */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Industrial Applications</h2>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    Biofilm analyzers are utilized across several key biological and industrial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Biocide Development", desc: "Testing anti-microbial treatments on bio-fouled industrial cooling towers in parallel flow cells." },
                                        { title: "Dental Ingress Research", desc: "Evaluating biofilm removal in dental tubing models under varying flow velocities." },
                                        { title: "Medical Implant Coatings", desc: "Analyzing bacterial adhesion on orthopedic and catheter materials in biocompatible chambers." }
                                    ].map((app, i) => (
                                        <div key={i} className="bg-[#101726] border border-slate-800 p-6 rounded-2xl">
                                            <h5 className="font-bold text-white text-base mb-2 uppercase tracking-tight">{app.title}</h5>
                                            <p className="text-xs text-slate-400 leading-relaxed font-light">{app.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits Section */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Key Benefits</h2>
                                <div className="space-y-4">
                                    {[
                                        { title: "Parallel Comparative Testing", desc: "Independent multi-chamber layouts allow running controls and variables under identical conditions." },
                                        { title: "Real-Time growth Tracking", desc: "Integrated micro-impedance and optical sensors track biofilm growth without sampling interruptions." },
                                        { title: "Stable Laminar Flow", desc: "Precise channel geometries maintain stable laminar profiles, providing constant shear stress." },
                                        { title: "100% Autoclavable Design", desc: "All-PEEK block and Viton seals withstand repeated steam cycles at 121°C, preventing cross-contamination." }
                                    ].map((b, i) => (
                                        <div key={i} className="flex gap-4 bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50">
                                            <span className="text-blue-500 font-bold text-lg">0{i+1}.</span>
                                            <div>
                                                <h5 className="font-bold text-white text-base mb-1">{b.title}</h5>
                                                <p className="text-sm text-slate-400 font-light leading-relaxed">{b.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Conclusion */}
                            <div className="space-y-4 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Conclusion</h2>
                                <p>
                                    Microfluidic flow cell systems are key tools in environmental and biological research. Designing laminar channels in PEEK blocks, combined with non-invasive sensors and autoclavable sealing, yields highly stable biofilm analyzers. Lasak Technologies remains a key partner, developing specialized bioreactors and fluid control instrumentation.
                                </p>
                            </div>

                            {/* FAQ Section */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, i) => (
                                        <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/20">
                                            <button
                                                onClick={() => toggleFaq(i)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900/50 transition-colors"
                                            >
                                                <span className="font-bold text-white text-base flex items-center gap-3">
                                                    <HelpCircle size={18} className="text-blue-500 flex-shrink-0" />
                                                    {faq.q}
                                                </span>
                                                <ChevronDown
                                                    size={18}
                                                    className={`text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {activeFaq === i && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="p-6 pt-0 border-t border-slate-800 text-slate-400 text-sm leading-relaxed font-light">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Related Blogs Section */}
                            <div className="space-y-6 pt-10 border-t border-slate-800">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Related Articles</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedBlogs.map((blog, i) => (
                                        <Link
                                            to={`/blogs/${blog.slug}`}
                                            key={i}
                                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col"
                                        >
                                            <div className="h-40 overflow-hidden relative">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                                                <div>
                                                    <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors text-sm uppercase tracking-tight leading-snug line-clamp-2">
                                                        {blog.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mt-2 font-light">
                                                        {blog.desc}
                                                    </p>
                                                </div>
                                                <span className="text-blue-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Read Article <ArrowRight size={12} />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
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

export default BioFilmAnalyzerPage;
