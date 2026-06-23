import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Settings, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import dynamicReducerImg from '../assets/dynamic-reducer.jpg';

const DynamicReducerPage = () => {
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
        'Planetary Gear System Layout Optimization',
        'AGMA Gear Strength & Stress Calculations',
        'FEA Contact Stress & Torsional Analysis',
        'Dynamic Backlash Control Mechanisms',
        'High-Efficiency Hydrodynamic Lubrication',
        'Thermal Heat Dissipation Housing Ribs'
    ];

    const features = [
        {
            title: "Sun & Planet Assembly",
            icon: <Settings />,
            desc: "Precision-machined helical gear set offering balanced load distribution and superior torque transmission.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        },
        {
            title: "Low-Backlash Design",
            icon: <Layers />,
            desc: "Eccentric adjustment rings that reduce rotational backlash to under 3 arc-minutes for highly precise positioning.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Internal Lube Channels",
            icon: <Cpu />,
            desc: "Integrated centrifugal oil pathways that force splash lubrication into needle bearings under high rotation speeds.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "High-Strength Housing",
            icon: <ShieldCheck />,
            desc: "Nodular cast iron casing modeled with structural cooling fins to double convective heat dissipation.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        }
    ];

    const faqs = [
        {
            q: "What is a dynamic reducer and how does it differ from a standard gearbox?",
            a: "A dynamic reducer is a high-precision speed reducer optimized for highly dynamic motion profiles (rapid acceleration, deceleration, and high-frequency reversing). Unlike standard gearboxes that focus purely on torque multiplication, dynamic reducers prioritize low rotational inertia, extremely low backlash, and high torsional stiffness."
        },
        {
            q: "Why is helical gear configuration preferred over spur gears in reducers?",
            a: "Helical gear teeth are cut at an angle, allowing progressive contact between teeth rather than sudden impacts. This gradual tooth meshing reduces noise and vibration, increases load-carrying capacity, and provides a smoother, quieter torque transfer."
        },
        {
            q: "What is backlash and why is it critical in automation?",
            a: "Backlash is the clearance gap between mating gear teeth. In robotic arms or CNC axes, backlash causes positioning errors whenever rotation reverses. Keeping backlash low (typically under 1 to 3 arc-minutes) ensures high positioning repeatability."
        },
        {
            q: "How does lubricant viscosity affect dynamic reducer efficiency?",
            a: "Highly viscous oils provide thick protective films for high loads but increase fluid friction, raising operating temperatures and lowering efficiency. Low viscosity oils reduce friction losses but risk metal-to-metal contact. Selecting the correct oil viscosity grade (ISO VG) is key to balancing wear and efficiency."
        }
    ];

    const relatedBlogs = [
        {
            title: "Role in Designing an Eccentric Gear Mechanism",
            slug: "eccentric-gear",
            desc: "Advanced mechanical engineering analysis of high-torque eccentric gear assemblies.",
            image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600"
        },
        {
            title: "EOT Crane Structural Engineering",
            slug: "eot-crane-project",
            desc: "Mechanical design details of high-capacity material handling systems.",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600"
        },
        {
            title: "Dynamic Flow Meter Technologies",
            slug: "dynamic-flow-meter",
            desc: "Accurately measuring mass flow rate under fluctuating compressor discharge pressure.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 pt-20 relative overflow-hidden">
            <SEO
                title="Dynamic Reducer Gearbox Design & Engineering - Lasak Technologies"
                description="Technical analysis of dynamic planetary gear reducers, torque calculations under AGMA guidelines, FEA stress modeling, and backlash management."
                keywords="dynamic reducer, planetary gearbox, gear design, backlash control, mechanical engineering, AGMA standards"
                canonical="/blogs/dynamic-reducer"
            />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
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
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
                            <Settings size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Retro Fitting</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Dynamic Reducer & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-black">Planetary Gearbox Engineering</span>
                        </motion.h1>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-slate-400 font-light">
                            <span className="flex items-center gap-2">
                                <User size={14} className="text-amber-500" />
                                Lasak Engineering Team
                            </span>
                            <span className="flex items-center gap-2">
                                <Tag size={14} className="text-amber-500" />
                                Mechanical Projects
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-amber-500" />
                                June 23, 2026
                            </span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="mt-10 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl aspect-[21/9]"
                        >
                            <img
                                src={dynamicReducerImg}
                                alt="High-Precision Planetary Gearbox Manufacturing"
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
                                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-amber-900/40 to-slate-900 border border-amber-500/20 rounded-[2rem] p-8 text-center">
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Speed Reducer Engineering?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide design calculation validation, 3D CAD modeling, FEA gear stress mapping, and dynamic backlash tuning.</p>
                                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-[0_4px_20px_rgba(245,158,11,0.4)] w-full">
                                    Contact Project Office <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Scrollable Content Column */}
                        <div className="lg:col-span-8 space-y-16">
                            
                            {/* Introduction */}
                            <div className="pl-6 border-l-4 border-amber-500 space-y-4">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Introduction</h2>
                                <p className="text-slate-300 leading-relaxed text-lg font-light">
                                    Heavy-duty automation, dynamic crane drives, CNC machining centers, and electric vehicle drivetrains demand high mechanical efficiency, extreme torque density, and rapid angular acceleration. Meeting these specs is impossible with legacy parallel-shaft worm gearboxes. Instead, modern mechanical engineering utilizes planetary dynamic reducers. Designing these high-performance gearboxes combines micro-profile gear geometry, contact stress calculations (AGMA standards), dynamic backlash control mechanisms, and advanced hydrodynamic lubrication layouts. At Lasak Technologies, our engineering group designs, simulates, and optimizes dynamic reducers built for heavy duty profiles.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    A planetary gear reducer consists of a central sun gear, multiple planet gears rotating on needle bearings supported by a carrier frame, and an outer ring gear housing. Input torque drives the sun gear, which transfers torque to the planet gears. The planets mesh with the fixed outer ring gear, driving the carrier frame linked to the output shaft.
                                </p>
                                <p>
                                    This coaxial layout balances mechanical loads across multiple planet gears, providing superior torque density compared to spur gear assemblies. To maximize load capacities, we specify helical gear teeth profile designs. The helical tooth helix angle (typically 15° to 20°) ensures progressive tooth contact, reducing noise and vibrational shocks.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Stress Analysis and AGMA Compliance</h3>
                                <p>
                                    During the mechanical design validation phase, our engineers execute detailed fatigue and contact stress simulations under <strong>AGMA 2001-D04</strong> guidelines. Using finite element analysis (FEA), we model gear teeth contact points to evaluate bending stress concentrations at the root fillet and pitting risks on the active tooth profiles. This math directs material selection, leading us to specify carburized alloy steels (such as 18CrNiMo7-6 or 8620) that combine case-hardened tooth wear surfaces (HRC 58-62) with tough, shock-absorbing cores.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Backlash Management</h3>
                                <p>
                                    High-precision applications require controlling gear backlash (clearance). We design eccentric adjustment rings and spring-loaded split gear profiles to limit backlash to under 3 arc-minutes. 
                                </p>
                                <p>
                                    Furthermore, our thermal models account for housing heat expansion. The cast iron casing includes vertical cooling fins and dual rotary shaft lip seals to retain synthetic lubricants while dissipating thermal energy during continuous heavy loads.
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
                                    Dynamic gear reducers are key components across precision automation sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Robotic Joint Drives", desc: "Compact planetary reducers mounted inside articulation joints to ensure repeatable arm positioning." },
                                        { title: "EOT Crane Hoist Gears", desc: "Heavy-duty helical reducers delivering high torque multiplication safety margins for heavy material handling." },
                                        { title: "CNC Axis Actuators", desc: "Low-backlash gearboxes coupled to servo motors, providing rigid mechanical links for high feed-rate accuracy." }
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
                                        { title: "97% Mechanical Efficiency", desc: "Coaxial load sharing design reduces gear friction losses, improving energy conservation." },
                                        { title: "Superior Torque Density", desc: "Planetary configurations provide double the torque capacity of spur gearboxes in the same envelope." },
                                        { title: "Zero Position Drift", desc: "Backlash values under 3 arc-minutes guarantee precise servo-position tracking and alignment." },
                                        { title: "Extremely Long Wear Life", desc: "Carburized gear teeth and hydrodynamic lubrication skids extend operation to over 20,000 hours." }
                                    ].map((b, i) => (
                                        <div key={i} className="flex gap-4 bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50">
                                            <span className="text-amber-500 font-bold text-lg">0{i+1}.</span>
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
                                    Speed reducers are a key pillar of precision machinery. Utilizing planetary gear layouts, helical gear profiles, AGMA contact stress formulas, and low-backlash adjustments yields highly efficient dynamic gearboxes. Lasak Technologies remains a leading mechanical design engineering firm, building robust solutions for the robotics, automation, and material handling sectors.
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
                                                    <HelpCircle size={18} className="text-amber-500 flex-shrink-0" />
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
                                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all flex flex-col"
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
                                                    <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors text-sm uppercase tracking-tight leading-snug line-clamp-2">
                                                        {blog.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mt-2 font-light">
                                                        {blog.desc}
                                                    </p>
                                                </div>
                                                <span className="text-amber-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
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

export default DynamicReducerPage;
