import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Microscope, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import methanogenCultureJarImg from '../assets/methanogen-culture-jar.webp';

const MethanogenCultureJarPage = () => {
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
        'Anaerobic Biological Environment Creation',
        'Gas-Tight Dual O-Ring Sealing Design',
        'Pressure Relief Safety Valve Calibrations',
        'Vacuum-Gas Manifold Purging Protocols',
        'Biocompatible Glass and Metal Structures',
        'Catalyst Sachet Humidity Management'
    ];

    const features = [
        {
            title: "Anaerobic Sealing",
            icon: <Layers />,
            desc: "Dual Viton O-ring grooves and heavy-duty clamp brackets designed to maintain vacuum seal integrity over long culture cycles.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "Gas Manifold Valves",
            icon: <Cpu />,
            desc: "Dual needle valves built into the lid, allowing precise vacuum evacuation and inert gas backfilling loops.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Safety Relief Valve",
            icon: <ShieldCheck />,
            desc: "Pre-set pressure safety valve (PSV) that vents gas automatically if internal pressure exceeds 0.5 bar.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "Borosilicate Body",
            icon: <Microscope />,
            desc: "Thick-walled borosilicate glass container providing optical clarity to monitor culture indicators safely.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        }
    ];

    const faqs = [
        {
            q: "What is a methanogen culture jar and why is it used?",
            a: "A methanogen culture jar is a laboratory pressure vessel used to cultivate methanogenic archaea (anaerobic organisms that produce methane). Because methanogens are strict anaerobes, even trace oxygen exposure kills them. The jar maintains a gas-tight, oxygen-free environment under pressure."
        },
        {
            q: "How is oxygen completely removed from the jar?",
            a: "The jar is connected to a vacuum manifold. We cycle through evacuating the chamber and backfilling it with oxygen-free gas (like a nitrogen-carbon dioxide blend). Additionally, an anaerobic catalyst sachet is added to react with any remaining trace oxygen."
        },
        {
            q: "Why is a pressure relief valve necessary on the jar?",
            a: "Methanogenesis produces methane and carbon dioxide, which increases pressure inside the sealed jar. To prevent the glass vessel from bursting under pressure, a spring-loaded safety valve is integrated, venting gas if pressure exceeds 0.5 bar."
        },
        {
            q: "What seal materials are selected for anaerobic gas jars?",
            a: "Viton (FKM) rubber O-rings are preferred. Viton has exceptionally low gas permeability compared to standard nitrile or silicone, preventing atmospheric oxygen from diffusing through the seal during long incubation runs."
        }
    ];

    const relatedBlogs = [
        {
            title: "Multi Chamber Bio Film Analyzer",
            slug: "bio-film-analyzer",
            desc: "Microfluidic flow cell design, bioreactor engineering, and biocompatible material selections.",
            image: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=600"
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
                title="Methanogen Culture Jar Design & Anaerobic Engineering - Lasak Technologies"
                description="Technical analysis of anaerobic culture jars, gas-tight seals, vacuum purging manifolds, pressure relief valves, and biological containment protocols."
                keywords="methanogen culture jar, anaerobic jar, pressure vessel design, Viton O-ring, vacuum manifold, biological engineering"
                canonical="/blogs/methanogen-culture-jar"
            />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

            {/* Hero Section */}
            <section className="relative py-20 px-4 md:px-8 border-b border-slate-800 bg-[#0d1425]/50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center md:text-left space-y-6"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                            <Microscope size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">New Product Development</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Methanogen Culture Jar & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black">Anaerobic Vessel Engineering</span>
                        </motion.h1>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-slate-400 font-light">
                            <span className="flex items-center gap-2">
                                <User size={14} className="text-emerald-500" />
                                Lasak Engineering Team
                            </span>
                            <span className="flex items-center gap-2">
                                <Tag size={14} className="text-emerald-500" />
                                Mechanical Projects
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-emerald-500" />
                                June 23, 2026
                            </span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="mt-10 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl aspect-[21/9]"
                        >
                            <img
                                src={methanogenCultureJarImg}
                                alt="Laboratory Anaerobic Glass Culturing Jar Vessel"
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
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/20 rounded-[2rem] p-8 text-center">
                                <h4 className="font-bold text-white text-lg mb-2">Need Sealed Pressure Vessel Design?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide design validations, 3D pressure vessel modeling, O-ring seal calculations, and valve integration.</p>
                                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-[0_4px_20px_rgba(16,185,129,0.4)] w-full">
                                    Contact Project Office <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Scrollable Content Column */}
                        <div className="lg:col-span-8 space-y-16">
                            
                            {/* Introduction */}
                            <div className="pl-6 border-l-4 border-emerald-500 space-y-4">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Introduction</h2>
                                <p className="text-slate-300 leading-relaxed text-lg font-light">
                                    Developing biological research vessels, anaerobic digestion systems, and biofuel reactors requires maintaining strict oxygen-free atmospheres. Cultivating methanogenic archaea (methanogens) presents significant engineering challenges, as these organisms are highly sensitive to oxygen. A professional methanogen culture jar must combine vacuum-tight structural integrity, reliable gas purge manifolds, overpressure relief safeties, and chemical-resistant glass bodies. At Lasak Technologies, our design team constructs and details anaerobic research vessels configured to maintain strict atmospheric isolation.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    Cultivating anaerobic methanogens in laboratory incubators requires using specialized gas-tight containers. The jar design must allow researchers to displace all oxygen, replacing it with an anaerobic gas mixture.
                                </p>
                                <p>
                                    The primary mechanical challenge is the seal between the lid and the glass body. We design dual concentric O-ring grooves in the anodized aluminum lid. Viton (FKM) rubber O-rings are selected for their low gas permeability, preventing atmospheric oxygen from diffusing into the vessel. Quick-release metal clamps apply even pressure to compress the seals, ensuring a tight seal.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Purging Manifold and Pressure Relief Valves</h3>
                                <p>
                                    The jar lid integrates a dual-valve gas manifold. Two brass needle valves allow researchers to connect the jar to a vacuum line to evacuate air, and then backfill the chamber with oxygen-free gas. 
                                </p>
                                <p>
                                    Because methanogenesis generates methane and carbon dioxide, pressure increases during incubation. To prevent the glass vessel from bursting, we integrate a spring-loaded pressure safety valve (PSV) that vents gas automatically if internal pressure exceeds 0.5 bar.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Structural Glass Design and Materials</h3>
                                <p>
                                    The jar body is made of thick-walled borosilicate glass. This material offers high mechanical strength and thermal shock resistance during autoclaving at 121°C. 
                                </p>
                                <p>
                                    The glass provides full optical clarity, allowing researchers to monitor color changes in chemical anaerobic indicators safely. A protective steel mesh cage surrounds the glass body to contain fragments in the event of an accidental overpressure failure.
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
                                    Anaerobic culture vessels are utilized across several key biological and industrial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Biofuel Research", desc: "Cultivating methane-producing microbes to optimize gas yields in waste-to-energy systems." },
                                        { title: "Clinical Microbiology", desc: "Isolating and identifying strict anaerobic pathogens in clinical specimens." },
                                        { title: "Waste Water Treatment", desc: "Analyzing anaerobic digestion processes to improve solid waste decomposition." }
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
                                        { title: "Reliable Anaerobic Seal", desc: "Dual Viton O-ring designs prevent oxygen diffusion, maintaining a strict anaerobic atmosphere." },
                                        { title: "Overpressure Protection", desc: "Integrated spring safety valves prevent overpressurization from microbial gas production." },
                                        { title: "Autoclavable Materials", desc: "Borosilicate glass and anodized aluminum lid withstand repeated sterilization cycles at 121°C." },
                                        { title: "Visual Growth Monitoring", desc: "Optically clear glass allows direct inspection of growth media and anaerobic indicators." }
                                    ].map((b, i) => (
                                        <div key={i} className="flex gap-4 bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50">
                                            <span className="text-emerald-500 font-bold text-lg">0{i+1}.</span>
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
                                    Anaerobic research vessels are key tools in environmental and biological research. Designing gas-tight seals with Viton O-rings, integrated manifolds, and safety relief valves yields highly reliable culture jars. Lasak Technologies remains a key partner, developing specialized bioreactors and biological containment instrumentation.
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
                                                    <HelpCircle size={18} className="text-emerald-500 flex-shrink-0" />
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
                                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col"
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
                                                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors text-sm uppercase tracking-tight leading-snug line-clamp-2">
                                                        {blog.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mt-2 font-light">
                                                        {blog.desc}
                                                    </p>
                                                </div>
                                                <span className="text-emerald-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
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

export default MethanogenCultureJarPage;
