import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Droplets, Thermometer, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import humiditySensorImg from '../assets/humidity-sensor.jpg';

const HumiditySensorPage = () => {
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
        'Capacitive Polymer Thin-Film Technology',
        'Relative Humidity vs Dew Point Calculations',
        'Porous Gold Electrode Layer Deposition',
        'On-Chip Temperature Sensor Integration',
        'Calibration Loops in Environmental Chambers',
        'Hydrophobic Protective Filter Assemblies'
    ];

    const features = [
        {
            title: "Capacitive Polymer",
            icon: <Droplets />,
            desc: "Highly stable thin-film polymer dielectric layer that absorbs moisture selectively, changing its relative permittivity.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "RTD Thermal Sensor",
            icon: <Thermometer />,
            desc: "Embedded bandgap or RTD sensor to track real-time temperatures, enabling accurate relative humidity calculations.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "Digital Processing",
            icon: <Cpu />,
            desc: "Integrated logic board that linearizes the non-linear capacitive curve and outputs standard Modbus or analog signals.",
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10"
        },
        {
            title: "Hydrophobic Shield",
            icon: <ShieldCheck />,
            desc: "Gore-Tex or porous PTFE filter cap that permits gas passage while blocking liquid water droplets and dust.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        }
    ];

    const faqs = [
        {
            q: "How does a capacitive humidity sensor work?",
            a: "A capacitive relative humidity (RH) sensor features a porous polymer dielectric layer sandwiched between two metal electrodes on a ceramic substrate. When water vapor enters the polymer, it increases the dielectric constant, changing the electrical capacitance. This change is measured and mapped directly to RH %."
        },
        {
            q: "What is relative humidity (RH) and how is it calculated?",
            a: "Relative humidity is the ratio of the actual water vapor pressure in a gas to the saturation vapor pressure of that gas at the same temperature, expressed as a percentage. It is highly temperature-dependent; a change in temperature changes the RH even if the absolute moisture level remains constant."
        },
        {
            q: "How does dust or oil contamination affect humidity sensors?",
            a: "Contamination blocks the pores of the polymer dielectric or forms a chemical barrier on the gold electrode, slow down response speeds, generating zero offsets, and causing calibration drift. Using porous PTFE sintered filters prevents this."
        },
        {
            q: "What is the difference between capacitive and resistive humidity sensors?",
            a: "Capacitive sensors measure moisture by tracking dielectric changes, working well across 0-100% RH and in dry conditions. Resistive sensors measure changes in electrical conductivity of a hygroscopic medium, are cheaper, but are limited to mid-range humidity (20-90% RH) and have high temperature sensitivity."
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
            title: "Pressure Sensor Engineering Design",
            slug: "pressure-sensor",
            desc: "Deep dive into piezoresistive pressure transmitters and diaphragm structures.",
            image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 pt-20 relative overflow-hidden">
            <SEO
                title="Humidity Sensor Design & Relative Humidity Analysis - Lasak Technologies"
                description="Technical analysis of capacitive humidity sensors, thin-film polymer layers, RTD temperature matching, and industrial calibration standards."
                keywords="humidity sensor, relative humidity, polymer sensor, RTD sensor, calibration chamber, process automation"
                canonical="/blogs/humidity-sensor"
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
                            <Droplets size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Reverse Engineering</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Humidity Sensor & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-black">Relative Humidity Instrumentation</span>
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
                                src={humiditySensorImg}
                                alt="Industrial Humidity Sensor Calibration"
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
                                <h4 className="font-bold text-white text-lg mb-2">Need High-Reliability Humidity Sensors?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide custom PCB design, reverse engineering for thin-film polymer elements, and calibration setup development.</p>
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
                                    Humidity levels are a critical variable in environmental control, pharmaceutical packing, agricultural storage, and meteorological monitoring. Excessive relative humidity (RH) fosters biological mold growth, corrodes electrical contacts, and ruins dry powders. Conversely, low humidity generates electrostatic discharge risks in semiconductor factories. Designing a high-accuracy, long-term stable humidity transmitter requires blending polymer materials science, circuit design, thermal modeling, and dust-resistant packaging. At Lasak Technologies, our engineering team designs and calibrates relative humidity instruments configured to deliver rapid response times and minimal drift.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    Relative humidity is a dynamic measurement. The actual capacitance of the sensor depends on the number of water molecules absorbed, which changes with ambient temperature.
                                </p>
                                <p>
                                    Most high-performance humidity instruments use capacitive thin-film polymer sensors. The structure is built on a ceramic or silicon substrate. First, a base metal electrode (usually platinum or chromium) is deposited. Then, a thin dielectric layer of hygroscopic polymer (such as polyimide or polymethyl methacrylate) is coated over the base electrode. Finally, a gas-permeable top gold electrode is deposited.
                                </p>
                                <p>
                                    As ambient humidity changes, water molecules pass through the top gold layer into the polymer. The dielectric constant of water (approx. 80) is much higher than that of the polymer (approx. 3). Consequently, capacitance increases as relative humidity rises. The sensor electronics convert this capacitance curve into a digital signal.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Integrated Temperature Compensation and ASIC Logic</h3>
                                <p>
                                    Because relative humidity is highly temperature-dependent, a humidity sensor must be paired with a temperature sensor. We integrate a high-precision RTD probe directly onto the sensor tip.
                                </p>
                                <p>
                                    The internal ASIC reads both the capacitance and temperature values. It runs calculation algorithms to map these inputs to accurate relative humidity values, compensating for thermal curves. This chip can also calculate secondary variables, such as absolute humidity, mixing ratio, or dew point, and output them via Modbus RTU or 4-20 mA interfaces.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">PTFE Hydrophobic Filters & Ingress Sealing</h3>
                                <p>
                                    To protect the delicate gold layer from dust, salt spray, and liquid droplets, we design custom screw-on filter caps. We utilize porous polytetrafluoroethylene (PTFE) membranes with a pore size of 1 micron. This membrane allows water vapor molecules to diffuse rapidly for quick readings, while blocking liquid water droplets and dust particles.
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
                                    Relative humidity instrumentation is vital across several major industrial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "HVAC Clean Rooms", desc: "Controlling relative humidity within ±2% RH in pharmaceutical labs to prevent dynamic chemical powder clumping." },
                                        { title: "Agricultural Greenhouses", desc: "Automated climate control loops regulating mist nozzles and extraction fans based on humidity thresholds." },
                                        { title: "Industrial Drying Chambers", desc: "High-temperature humidity probes tracking water removal profiles in ceramic and wood drying kilns." }
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
                                        { title: "Excellent Measuring Accuracy", desc: "Thin-film polyimide elements provide high repeatability (±1.5% RH accuracy) across the entire range." },
                                        { title: "Fast Sensor Response Time", desc: "Thin polymer layers absorb and release moisture in seconds, avoiding slow lag errors." },
                                        { title: "High Chemical Resistance", desc: "Specially formulated polymers resist common gaseous solvents, chemical cleaners, and ammonia." },
                                        { title: "Integrated Temp Calculation", desc: "On-board RTD eliminates the need for separate temperature transmitters, reducing installation costs." }
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
                                    Accurate and repeatable humidity measurement is essential to prevent product defects and system failures. By utilizing thin-film polymer capacitive structures and integrated thermal sensors, we deliver robust relative humidity transmitters. Lasak Technologies remains a key partner in developing high-performance sensing systems for agricultural, HVAC, and clean room applications.
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

export default HumiditySensorPage;
