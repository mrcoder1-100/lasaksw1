import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Gauge, Activity, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import dynamicFlowMeterImg from '../assets/dynamic-flow-meter.jpg';

const DynamicFlowMeterPage = () => {
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
        'Vortex Shedding & Von Kármán Effect',
        'Ultrasonic Transit-Time Transducers',
        'Reynolds Number Velocity Profile Corrections',
        'Coriolis Mass Flow Sensing Principles',
        'DSP Filter In-Line Noise Mitigation',
        'Gas Expansion Factor Thermodynamics'
    ];

    const features = [
        {
            title: "Piezoelectric Shedder",
            icon: <Activity />,
            desc: "Robust internal bluff body designed to generate alternating Von Kármán vortices, detected by piezo sensors.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Dual-Transit Sensors",
            icon: <Cpu />,
            desc: "Ultrasonic transducers transmitting high-frequency pulses upstream and downstream to measure transit-time delta.",
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10"
        },
        {
            title: "Embedded Flow DSP",
            icon: <Gauge />,
            desc: "On-board DSP processor that recalculates fluid density, viscosity, and expansion variables in real-time.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "Rugged Flanged Body",
            icon: <ShieldCheck />,
            desc: "One-piece cast 316L stainless steel body rated for high pipeline pressures, with no moving parts to wear out.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        }
    ];

    const faqs = [
        {
            q: "How does a vortex shedding flow meter work?",
            a: "A vortex shedding flow meter places a vertical obstruction (called a bluff body) in the flow path. As fluid passes, it splits, generating alternating low-pressure swirls called Von Kármán vortices. The shedding frequency is directly proportional to the fluid velocity and is detected by an embedded sensor."
        },
        {
            q: "What is transit-time ultrasonic flow measurement?",
            a: "Transit-time measurement uses two ultrasonic transducers placed diagonally across a pipe. Pulses sent downstream travel faster because they are aided by flow, while pulses sent upstream travel slower. The time difference (transit-time delta) is directly proportional to the average flow velocity."
        },
        {
            q: "Why do flow meters require straight pipe runs upstream and downstream?",
            a: "Elbows, valves, and expanders generate fluid swirls and non-uniform velocity profiles. To ensure accurate measurements, flow meters require straight piping (typically 10 to 20 pipe diameters upstream and 5 diameters downstream) to allow the velocity profile to stabilize."
        },
        {
            q: "How does temperature and pressure affect gas flow measurement?",
            a: "Unlike liquids, gases are highly compressible. A change in pressure or temperature shifts gas density. Flow meters must use temperature and pressure sensors (often called multivariable transmitters) to calculate mass flow rate."
        }
    ];

    const relatedBlogs = [
        {
            title: "Dew Point Sensor Moisture Control",
            slug: "dew-point-sensor",
            desc: "Exploring trace moisture analysis and calibration in high-pressure gas streams.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600"
        },
        {
            title: "Pressure Sensor Engineering Design",
            slug: "pressure-sensor",
            desc: "Deep dive into piezoresistive pressure transmitters and diaphragm structures.",
            image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600"
        },
        {
            title: "CNG Plant Design & Engineering",
            slug: "cng-plant-design",
            desc: "Technical guide on high-pressure CNG plant design and process piping layouts.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 pt-20 relative overflow-hidden">
            <SEO
                title="Dynamic Flow Meter Design & Fluid Instrumentation - Lasak Technologies"
                description="Technical analysis of dynamic flow meters, vortex shedding, ultrasonic transit-time sensors, and velocity profile corrections in pipeline systems."
                keywords="flow meter, vortex shedding, ultrasonic flow meter, transit-time sensor, Von Karman effect, fluid dynamics"
                canonical="/blogs/dynamic-flow-meter"
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
                            <Gauge size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">New Product Development</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Dynamic Flow Meter & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-black">Fluid Measurement Instrumentation</span>
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
                                src={dynamicFlowMeterImg}
                                alt="High-Performance Industrial Flow Meter Testing"
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
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Fluid Instrumentation?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide design validations, 3D CAD modeling, CFD velocity profile analysis, and DSP filtering optimization.</p>
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
                                    Accurate measurement of fluid and gas velocity inside piping networks is critical in energy metering, chemical processing, municipal water grids, and CNG dispensing systems. Under high pressures and shifting velocities, standard turbine flow meters with mechanical gears wear out and fail. Modern flow measurement relies on dynamic, solid-state flow meters. Designing these instruments requires combining fluid mechanics, piezoelectric or ultrasonic sensor systems, digital signal noise filtering, and high-pressure metallic flanged casings. At Lasak Technologies, our engineering team designs and calibrates high-performance flow meters built for dynamic systems.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    Dynamic flow meters achieve measurement accuracy by using advanced fluid dynamics principles, primarily vortex shedding and ultrasonic transit-time techniques.
                                </p>
                                <p>
                                    Vortex shedding meters operate based on the <strong>Von Kármán Effect</strong>. When fluid flows past a non-streamlined vertical barrier (a bluff body), it cannot follow the contours. This causes boundary layers to separate, generating alternating low-pressure swirls (vortices) downstream. The frequency of these vortices is directly proportional to the fluid velocity. Our designs incorporate piezoelectric sensors behind the bluff body. These sensors register microscopic pressure oscillations, converting them to electrical frequencies that translate to volumetric flow rates.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Transit-Time Ultrasonic Sensing</h3>
                                <p>
                                    For clean fluids and gas networks, we design Transit-Time Ultrasonic Flow Meters. This layout utilizes pairs of piezoelectric transducers mounted at an angle across the pipe. 
                                </p>
                                <p>
                                    By transmitting high-frequency sound waves (0.5 to 4 MHz) upstream and downstream, the system calculates the time difference. Since sound waves travel faster downstream with the flow, the transit-time delta directly yields flow velocity. High-performance DSP algorithms correct for the fluid's Reynolds number, compensating for laminar or turbulent velocity profiles.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Mechanical Skid Design and Calibration</h3>
                                <p>
                                    The structural integrity of the flow meter housing must withstand high pressures (rated up to 250 bar in gas stations). We design flanged housings using CF8M (316 stainless cast steel) validated with finite element analysis to ensure high safety margins against bursting.
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
                                    Dynamic flow meters are utilized across various industrial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "CNG Fuel Dispensers", desc: "Mass flow meters measuring high-pressure CNG flow during high-speed refueling cycles." },
                                        { title: "Steam Pipeline Monitoring", desc: "Shedder vortex meters tracking high-temperature steam lines in power plants without pressure drop penalties." },
                                        { title: "Water Distribution Headers", desc: "Ultrasonic clamp-on meters measuring water velocity in municipal grid pipes without cut-in works." }
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
                                        { title: "Zero Moving Parts", desc: "Solid-state vortex and ultrasonic designs eliminate mechanical wear, extending operating lifetime." },
                                        { title: "High Turn-Down Ratio", desc: "Accurately measures low flow rates down to 0.3 m/s and high velocities up to 10 m/s." },
                                        { title: "Minimal Pressure Drop", desc: "Streamlined flow profiles and clamp-on options minimize piping energy losses." },
                                        { title: "Real-Time Digital Diagnostics", desc: "Internal microprocessors output diagnostic error codes if bubble bubbles or sediment disrupt the signal." }
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
                                    Reliable flow instrumentation is key for process efficiency and billing accuracy. Eliminating physical wear points by utilizing vortex shedding and ultrasonic sensors, combined with DSP processors, delivers robust flow measurement. Lasak Technologies remains a key provider of engineering support, CFD profiling, and hardware development for alternative energy and industrial fluids.
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

export default DynamicFlowMeterPage;
