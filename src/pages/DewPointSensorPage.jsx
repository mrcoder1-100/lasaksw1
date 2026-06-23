import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Thermometer, Gauge, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import dewPointSensorImg from '../assets/dew-point-sensor.png';

const DewPointSensorPage = () => {
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
        'Capacitive Polymer Sensor Electrodes',
        'Chilled Mirror Condensation Principles',
        'Trace Moisture Analysis in High-Pressure Gases',
        'ISO 8573-1 Compressed Air Quality Standards',
        'Temperature Compensation Algorithm Calibration',
        'Intrinsically Safe Ex d & Ex ia Hazardous Design'
    ];

    const features = [
        {
            title: "Planar Capacitive Element",
            icon: <Cpu />,
            desc: "Highly sensitive thin-film metal oxide layer that changes capacitance dynamically based on water vapor absorption.",
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10"
        },
        {
            title: "Integrated Temperature Probe",
            icon: <Thermometer />,
            desc: "On-chip high-accuracy PT100/PT1000 RTD sensor to calculate dew point variations relative to ambient temperatures.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "High Pressure Rating",
            icon: <Gauge />,
            desc: "Robust mechanical containment sleeve rated up to 350 bar, ensuring durability in main distribution lines.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "Micro-Processor Filtering",
            icon: <ShieldCheck />,
            desc: "DSP module with built-in digital filters that ignore transient spikes, oil aerosol contaminants, and trace solvents.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        }
    ];

    const faqs = [
        {
            q: "What is the difference between relative humidity and dew point temperature?",
            a: "Relative humidity (RH) represents the percentage of water vapor present in gas relative to its maximum saturation capacity at a specific temperature. Dew point is the absolute temperature to which a gas must be cooled (at constant pressure) for water vapor to condense into liquid water. Dew point provides an absolute measure of moisture, independent of gas temperature fluctuations."
        },
        {
            q: "Why is dew point measurement critical in compressed air systems?",
            a: "Excess moisture in compressed air leads to pipe corrosion, pneumatic valve failures, sensor degradation, and ice blockage in cold environments. According to ISO 8573-1, specific industries require dew points as low as -40°C to -70°C to protect delicate equipment and product quality."
        },
        {
            q: "How does a capacitive dew point sensor detect trace moisture?",
            a: "A capacitive sensor uses a porous polymer or aluminum oxide dielectric layer sandwiched between two conductive plates. Water molecules from the gas enter the porous dielectric, altering its dielectric constant and changing the sensor's capacitance, which is measured and calibrated to dew point."
        },
        {
            q: "How often should dew point sensors be calibrated?",
            a: "Due to contamination from compressor oil aerosols, particulate matter, and sensor drift, we recommend calibrating capacitive sensors annually against certified NIST traceable dew point generators."
        }
    ];

    const relatedBlogs = [
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
                title="Dew Point Sensor Design & Trace Moisture Analysis - Lasak Technologies"
                description="Technical analysis of dew point sensors, trace moisture measurement, capacitive polymer technology, chilled mirrors, and calibration for high-pressure systems."
                keywords="dew point sensor, trace moisture, chilled mirror hygrometer, capacitive humidity sensor, ISO 8573-1, process automation"
                canonical="/blogs/dew-point-sensor"
            />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
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
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                            <Gauge size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Reverse Engineering</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Dew Point Sensor & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-black">Trace Moisture Engineering</span>
                        </motion.h1>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-slate-400 font-light">
                            <span className="flex items-center gap-2">
                                <User size={14} className="text-indigo-500" />
                                Lasak Engineering Team
                            </span>
                            <span className="flex items-center gap-2">
                                <Tag size={14} className="text-indigo-500" />
                                Mechanical Projects
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-indigo-500" />
                                June 23, 2026
                            </span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="mt-10 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl aspect-[21/9]"
                        >
                            <img
                                src={dewPointSensorImg}
                                alt="Industrial Dew Point Sensor Testing"
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
                                            <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-[2rem] p-8 text-center">
                                <h4 className="font-bold text-white text-lg mb-2">Need Precise Sensor Integration?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide expert reverse engineering, PCB design, and calibration protocols for industrial sensor manifolds.</p>
                                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-[0_4px_20px_rgba(99,102,241,0.4)] w-full">
                                    Contact Project Office <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Scrollable Content Column */}
                        <div className="lg:col-span-8 space-y-16">
                            
                            {/* Introduction */}
                            <div className="pl-6 border-l-4 border-indigo-500 space-y-4">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Introduction</h2>
                                <p className="text-slate-300 leading-relaxed text-lg font-light">
                                    Moisture is a highly damaging contaminant in industrial gas pipelines, clean rooms, petrochemical processes, and compressed air grids. Left unchecked, water vapor condenses inside metal pipes, triggering rapid chemical oxidation (corrosion), forming solid methane-water structures (hydrates) that clog lines, and damaging sensitive downstream pneumatic tools. Determining absolute moisture levels under pressure requires measuring the dew point temperature. A modern dew point sensor must combine material physics, mechanical packaging, digital signal filters, and precise calibration algorithms to register trace moisture levels accurately down to parts per million (ppm).
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    To measure dew point down to extreme dry-air limits (e.g. -60°C or -80°C), modern instrumentation relies on two main sensor styles: capacitive metal-oxide/polymer sensors and high-precision optoelectronic chilled mirror hygrometers.
                                </p>
                                <p>
                                    Capacitive sensors feature a planar capacitor structure fabricated on a silicon substrate. The dielectric layer consists of a highly porous polymer or a ceramic metal-oxide (typically aluminum oxide, Al2O3). The top electrode is a gas-permeable thin gold layer, which allows moisture to diffuse into the pores of the dielectric layer. Because water has a very high relative permittivity (permittivity constant of approx. 80 at room temperature) compared to the polymer or air, even minute volumes of absorbed moisture change the overall dielectric constant. This alters the sensor's electrical capacitance.
                                </p>
                                <p>
                                    However, capacitance changes are non-linear and highly temperature-dependent. To resolve this, our engineering group integrates an on-board high-precision platinum Resistance Temperature Detector (RTD) alongside the capacitive sensor. A localized microcontroller runs dynamic polynomial interpolation algorithms to continuously apply temperature compensation to the measured capacitance, deriving absolute dew point temperature calculations.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Chilled Mirror Technology</h3>
                                <p>
                                    For laboratory calibration standards, we utilize the chilled mirror approach. In this mechanism, a small copper mirror is cooled by a thermoelectric Peltier element while a photodetector monitors light reflected from the mirror surface. As the temperature drops, the condensation point is reached, causing dew to form on the mirror, which scatters light. The photodetector monitors this scatter, and the Peltier element is adjusted dynamically to maintain a stable, thin film of dew. The mirror's temperature is then recorded exactly at this threshold, providing a direct physical measurement of the dew point.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Mechanical Enclosure & Sampling Systems</h3>
                                <p>
                                    Protecting the sensing elements from oil droplets, rust flakes, and high flow velocities requires designing a robust mechanical sampling block. In our mechanical models, we specify 316L stainless steel chambers with internal sintered metal particulate filters (0.5 to 5 microns) to prevent mechanical abrasion of the porous capacitor.
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
                                    Dew point sensors are essential components across various industrial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Compressed Air Systems", desc: "Installed in desiccant dryers and main air distribution headers to guarantee ISO 8573-1 Class 1/2 moisture limits." },
                                        { title: "Semiconductor Fab Rooms", desc: "Continuous sub-ppb level moisture monitoring in pure nitrogen and argon purge gas lines during wafer manufacturing." },
                                        { title: "CNG Station Protection", desc: "Monitoring moisture content in high-pressure CNG storage loops to block water condensation and hydrate clogging." }
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
                                        { title: "Prevents Infrastructure Degradation", desc: "Detecting moisture before it condenses blocks corrosion in pipelines and carbon-steel storage manifolds." },
                                        { title: "Energy Savings in Dryers", desc: "Enables demand-driven regeneration control of desiccant air dryers, cutting energy bills by up to 25%." },
                                        { title: "Long-Term Operational Stability", desc: "Porous ceramic oxide layers provide high chemical resistance, reducing calibration drift over time." },
                                        { title: "Fast Dew Point Recovery", desc: "Specially designed planar substrates dry out rapidly after liquid water exposure events." }
                                    ].map((b, i) => (
                                        <div key={i} className="flex gap-4 bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50">
                                            <span className="text-indigo-500 font-bold text-lg">0{i+1}.</span>
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
                                    Managing trace moisture is a fundamental pillar of process engineering in industrial gas networks. By developing advanced dew point transmitters utilizing thin-film polymer and ceramic capacitors, coupled with high-durability stainless steel sampling skids, we enable robust, accurate, and repeatable moisture measurements. Lasak Technologies remains dedicated to engineering high-precision sensor systems for the alternative energy and automation sectors.
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
                                                    <HelpCircle size={18} className="text-indigo-500 flex-shrink-0" />
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
                                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col"
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
                                                    <h4 className="font-bold text-white group-hover:text-indigo-400 transition-colors text-sm uppercase tracking-tight leading-snug line-clamp-2">
                                                        {blog.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mt-2 font-light">
                                                        {blog.desc}
                                                    </p>
                                                </div>
                                                <span className="text-indigo-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
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

export default DewPointSensorPage;
