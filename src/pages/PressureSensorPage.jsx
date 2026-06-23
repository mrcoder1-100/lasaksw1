import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Gauge, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import pressureSensorImg from '../assets/pressure-sensor.jpg';

const PressureSensorPage = () => {
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
        'Piezoresistive Silicon Chip Infusion',
        'Wheatstone Bridge Circuit Balancing',
        '316L Stainless Steel Diaphragm Design',
        'Silicon Oil Fill Mechanical Coupling',
        'Hart Protocol Digital Communications',
        'Temperature Compensation Drift Correction'
    ];

    const features = [
        {
            title: "Piezoresistive Die",
            icon: <Cpu />,
            desc: "Highly sensitive semiconductor piezoresistors diffused onto a silicon diaphragm for ultra-precise pressure-to-electrical mapping.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "Isolation Diaphragm",
            icon: <Layers />,
            desc: "Ultra-thin 316L stainless steel isolating diaphragm that separates the corrosive process fluid from the delicate sensor core.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "ASIC Conditioning",
            icon: <Gauge />,
            desc: "Application-Specific Integrated Circuit that provides active offset, span calibration, and temperature compensation.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "Welded Steel Containment",
            icon: <ShieldCheck />,
            desc: "All-welded robust housing providing IP67/IP68 dust-moisture ingress sealing, suitable for harsh outdoor plant setups.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        }
    ];

    const faqs = [
        {
            q: "How does a piezoresistive pressure sensor work?",
            a: "A piezoresistive pressure sensor uses semiconductor strain gauges diffused onto a silicon diaphragm. When pressure bends the diaphragm, the atomic lattice of the silicon strain gauges deforms, altering their electrical resistivity. This resistance change is measured using a balanced Wheatstone bridge circuit."
        },
        {
            q: "What is the role of the isolation diaphragm and fill fluid?",
            a: "The process fluid is often corrosive or abrasive. An ultra-thin metal isolation diaphragm seals the sensor housing. The cavity behind the metal diaphragm is filled with silicone oil. When process pressure acts on the isolation diaphragm, it compresses the silicone oil, which hydraulically transfers the pressure to the inner silicon chip."
        },
        {
            q: "What is the difference between gauge, absolute, and differential pressure sensors?",
            a: "Gauge pressure sensors measure pressure relative to ambient atmospheric pressure. Absolute pressure sensors measure pressure relative to a sealed, full-vacuum reference chamber. Differential pressure sensors measure the difference between two separate pressure inputs on opposite sides of a single sensor diaphragm."
        },
        {
            q: "What triggers zero-point drift in pressure transmitters?",
            a: "Zero-point drift is caused by temperature-induced expansion of the internal silicone oil, mechanical stress on the housing during mounting, and long-term crystal relaxation. Integrating active thermal compensation circuits (ASICs) minimizes this drift."
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
            title: "Vibration Sensor Plant Monitoring",
            slug: "vibration-sensor",
            desc: "Prevent compressor failures by monitoring vibration thresholds in real-time.",
            image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600"
        },
        {
            title: "Humidity Sensor Instrumentation",
            slug: "humidity-sensor",
            desc: "Exploring relative humidity and temperature transmitter engineering.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 pt-20 relative overflow-hidden">
            <SEO
                title="Pressure Sensor Design & Transmitter Engineering - Lasak Technologies"
                description="Technical analysis of piezoresistive pressure sensors, Wheatstone bridge circuits, isolation diaphragms, and industrial transmitter calibration protocols."
                keywords="pressure sensor, pressure transmitter, piezoresistive silicon, isolation diaphragm, Wheatstone bridge, industrial instrumentation"
                canonical="/blogs/pressure-sensor"
            />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
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
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400">
                            <Gauge size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Reverse Engineering</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Pressure Sensor & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 font-black">Transmitter Instrumentation</span>
                        </motion.h1>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-slate-400 font-light">
                            <span className="flex items-center gap-2">
                                <User size={14} className="text-rose-500" />
                                Lasak Engineering Team
                            </span>
                            <span className="flex items-center gap-2">
                                <Tag size={14} className="text-rose-500" />
                                Mechanical Projects
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-rose-500" />
                                June 23, 2026
                            </span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="mt-10 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl aspect-[21/9]"
                        >
                            <img
                                src={pressureSensorImg}
                                alt="Industrial Pressure Transmitter Details"
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
                                            <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-rose-900/40 to-slate-900 border border-rose-500/20 rounded-[2rem] p-8 text-center">
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Pressure Transmitter Design?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide expert reverse engineering, finite element analysis for diaphragms, and calibration protocols for hazardous process environments.</p>
                                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-[0_4px_20px_rgba(244,63,94,0.4)] w-full">
                                    Contact Project Office <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Scrollable Content Column */}
                        <div className="lg:col-span-8 space-y-16">
                            
                            {/* Introduction */}
                            <div className="pl-6 border-l-4 border-rose-500 space-y-4">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Introduction</h2>
                                <p className="text-slate-300 leading-relaxed text-lg font-light">
                                    Pressure measurement is the single most critical variable monitored in process control networks, fluid storage facilities, clean water lines, and oil-gas distribution skids. Accurate readings prevent line overpressurization, manage pump speed cycles, and record mass flow profiles. Delivering a reliable industrial pressure transmitter requires combining silicon microstructure physics, robust metallic diaphragm engineering, stable analog-to-digital signal converters (ASICs), and vibration-resistant thread packaging. At Lasak Technologies, our engineering team details, designs, and validates pressure transmitters built to operate with high repeatability in harsh industrial conditions.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    At the heart of modern industrial pressure transmitters is the piezoresistive transducer chip. This sensor uses high-purity single-crystal silicon. Piezoresistive structures are diffused directly onto the silicon diaphragm using photolithographic masking and boron doping techniques. 
                                </p>
                                <p>
                                    When process pressure is applied, the silicon diaphragm deforms slightly. This bending strains the boron-doped resistors. The physical strain alters the electrical resistivity of the silicon. To detect this change accurately, the resistors are configured as a Wheatstone Bridge circuit. This layout translates small resistance changes into a differential voltage signal (millivolts) that is proportional to the applied pressure.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Isolation Diaphragm and Hydraulic Fluid Mechanics</h3>
                                <p>
                                    Because process fluids are often corrosive, hot, or full of abrasive particles, the delicate silicon chip cannot be exposed directly to the fluid. Instead, we design a metal Isolation Diaphragm using corrosion-resistant materials like 316L Stainless Steel, Hastelloy C-276, or Monel. 
                                </p>
                                <p>
                                    This thin metal diaphragm is welded to the transmitter's process connection. Behind it, a sealed capillary cavity is filled with silicone or fluorocarbon oil. When the process fluid exerts pressure on the isolation diaphragm, it compresses the oil, hydraulically transferring the force to the silicon sensor die.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">ASIC Signal Conditioning and Calibration</h3>
                                <p>
                                    The millivolt output from the Wheatstone bridge must be converted into standard industrial loop signals (such as 4–20 mA or 0–10 V). We integrate an Application-Specific Integrated Circuit (ASIC) that digitizes the signal, applies polynomial calibration math to compensate for zero and span thermal drift, and outputs the conditioned signal. Many advanced transmitters also superimpose a digital communication protocol (like HART) over the analog 4–20 mA loop, allowing remote diagnostic calibration.
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
                                    Pressure transmitters are utilized across a wide variety of industrial settings:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Hydraulic System Monitoring", desc: "High-frequency sensors that track pressure drops in hydraulic machinery loops to detect cylinder wear." },
                                        { title: "Boiler Safety Loops", desc: "High-temperature transmitters that monitor steam pressure inside boilers, triggering safety overrides if limits are exceeded." },
                                        { title: "Oil & Gas Pipeline Flow", desc: "Differential pressure transmitters placed across orifice plates to measure gas mass flow rates in distribution grids." }
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
                                        { title: "High Measuring Accuracy", desc: "Diffused silicon sensor diaphragms provide excellent repeatability and low hysteresis (under 0.075% of span)." },
                                        { title: "Excellent Chemical Resistance", desc: "Hastelloy and 316L process seals ensure long life in highly corrosive chemical pipelines." },
                                        { title: "Long-Term System Stability", desc: "Advanced internal ASICs maintain calibration values over long periods, reducing zero-drift maintenance." },
                                        { title: "Rugged Mechanical Design", desc: "Shock-proof laser-welded housings prevent damage from high piping vibrations and pressure spikes." }
                                    ].map((b, i) => (
                                        <div key={i} className="flex gap-4 bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50">
                                            <span className="text-rose-500 font-bold text-lg">0{i+1}.</span>
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
                                    Pressure transmitters form the bedrock of clean energy, petrochemical, and manufacturing process control. Incorporating high-purity silicon chips, isolated oil cavities, and advanced signal processing ASICs ensures high accuracy and safety. Lasak Technologies remains committed to engineering premium sensor skids and process instrumentation for alternative fuels and automated plants.
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
                                                    <HelpCircle size={18} className="text-rose-500 flex-shrink-0" />
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
                                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-rose-500/50 transition-all flex flex-col"
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
                                                    <h4 className="font-bold text-white group-hover:text-rose-400 transition-colors text-sm uppercase tracking-tight leading-snug line-clamp-2">
                                                        {blog.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mt-2 font-light">
                                                        {blog.desc}
                                                    </p>
                                                </div>
                                                <span className="text-rose-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
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

export default PressureSensorPage;
