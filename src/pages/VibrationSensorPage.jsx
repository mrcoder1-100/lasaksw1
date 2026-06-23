import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Activity, Settings, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import vibrationSensorImg from '../assets/vibration-sensor.jpg';

const VibrationSensorPage = () => {
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
        'Piezoelectric Ceramic Crystal Physics',
        'MEMS Accelerometer Mass-Spring Systems',
        'Fast Fourier Transform (FFT) Amplitude Spectrums',
        'ISO 10816 Mechanical Vibration Standards',
        'High-Frequency Resonance Peak Monitoring',
        'Intrinsically Safe Industrial IP68 Enclosures'
    ];

    const features = [
        {
            title: "Piezoelectric Element",
            icon: <Activity />,
            desc: "High-grade shear-mode quartz crystals that output proportional micro-charge values during mechanical strain.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "Embedded FFT Processor",
            icon: <Cpu />,
            desc: "Low-power microcontroller computing frequency spectrums directly on the sensor node to minimize data bandwidth.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Wide Frequency Band",
            icon: <Settings />,
            desc: "Flat frequency response from 2 Hz up to 15 kHz, catching low-speed unbalances and high-frequency bearing wear.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "Hermetic Stainless Enclosure",
            icon: <ShieldCheck />,
            desc: "Laser-welded 316L housing that isolates the sensor from hot oil sprays, steam washdowns, and industrial dust.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        }
    ];

    const faqs = [
        {
            q: "What is the difference between displacement, velocity, and acceleration in vibration monitoring?",
            a: "Displacement measures structural movement distance (mils/microns), useful for low-frequency structural analysis. Velocity (inches/sec or mm/sec) represents the rate of displacement change, showing mechanical fatigue, and is the standard metric for ISO 10816 machinery health. Acceleration (g-forces) measures velocity change, ideal for detecting high-frequency bearing and gear tooth defects."
        },
        {
            q: "Why are piezoelectric sensors preferred over MEMS for high-frequency measurements?",
            a: "Piezoelectric accelerometers offer wider frequency responses (up to 15 kHz or higher) and significantly lower noise floors than standard MEMS chips. They also withstand extreme temperature fluctuations (up to 260°C or higher), making them standard in heavy industrial monitoring."
        },
        {
            q: "What are the common mounting methods for vibration transmitters?",
            a: "Mounting methods include threaded studs (highest frequency response/accuracy), quick-mount magnetic bases (moderate accuracy, great for route-based monitoring), and adhesive epoxy mounts (semi-permanent, moderate frequency response limit)."
        },
        {
            q: "How does spectral analysis (FFT) detect specific machinery failures?",
            a: "FFT converts raw time-domain vibration signals into a frequency spectrum. Specific faults appear at precise frequencies: imbalance at the running speed (1X), misalignment at 2X, mechanical looseness at sub-harmonics, and bearing faults at specific non-integer ball-pass frequencies."
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
            title: "Humidity Sensor Instrumentation",
            slug: "humidity-sensor",
            desc: "Exploring relative humidity and temperature transmitter engineering.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 pt-20 relative overflow-hidden">
            <SEO
                title="Vibration Sensor Design & Machine Health Analysis - Lasak Technologies"
                description="Engineering overview of vibration sensors, accelerometers, FFT spectrum calculations, predictive maintenance, and mounting methods in compliance with ISO 10816 standards."
                keywords="vibration sensor, accelerometer, FFT analysis, predictive maintenance, ISO 10816, industrial automation"
                canonical="/blogs/vibration-sensor"
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
                            <Activity size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Reverse Engineering</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Vibration Sensor & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black">Machinery Health Monitoring</span>
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
                                src={vibrationSensorImg}
                                alt="Industrial Vibration Sensor Installation"
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
                                <h4 className="font-bold text-white text-lg mb-2">Need Predictive Maintenance Analysis?</h4>
                                <p className="text-xs text-slate-400 mb-6">We specialize in designing sensor brackets, reverse engineering sensor systems, and setting up FFT processing modules.</p>
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
                                    Industrial rotating machinery, including massive multi-stage compressors, high-speed turbines, water pumps, and gearboxes, generates signature mechanical forces. When a component degrades—such as a bearing developing fatigue cracks, a shaft running out of alignment, or a rotor losing mass balance—the mechanical vibration signature changes. Detecting these microscopic shifts before catastrophic mechanical failure occurs is the goal of predictive maintenance. The design of industrial vibration sensors and accelerometers combines high-speed structural dynamics, crystal material physics, digital signal processing algorithms, and robust hermetic packaging.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    Modern industrial vibration monitoring uses accelerometers that convert mechanical motion into electrical voltage. There are two primary types used: Piezoelectric Accelerometers and MEMS (Micro-Electro-Mechanical Systems) Accelerometers.
                                </p>
                                <p>
                                    Piezoelectric sensors utilize a seismic mass preloaded against a piezoelectric crystal element (such as quartz or lead zirconate titanate, PZT). When subjected to acceleration, the seismic mass exerts a dynamic force on the crystal. This compressive or shear stress shifts ion charges within the crystal lattice, creating an electrical charge proportional to the acceleration force. These raw charges are amplified and converted into a voltage signal inside the sensor using an internal micro-amplifier (typically called an IEPE or ICP circuit).
                                </p>
                                <p>
                                    For lower-cost wireless sensors, MEMS accelerometers are designed on silicon wafers. They use tiny capacitive structures where a microscopic mass-spring system moves relative to fixed fingers. This movement changes capacitance, which is converted to acceleration data.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">DSP and Fast Fourier Transform (FFT) Analysis</h3>
                                <p>
                                    A simple overall vibration level (RMS velocity) can tell if a machine is vibrating heavily, but pinpointing the exact failure requires frequency domain analysis. In our smart sensor designs, we integrate a dedicated digital signal processor (DSP) that samples the time-domain signal at high frequencies (up to 48 kHz). The processor runs a windowed Fast Fourier Transform (FFT) algorithm, transforming the signal into a frequency spectrum. 
                                </p>
                                <p>
                                    By analyzing the resulting peaks at exact running speed harmonics, engineers can diagnose:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                                    <li><strong>Unbalance:</strong> Strong radial vibration at the shaft rotation frequency (1X).</li>
                                    <li><strong>Misalignment:</strong> High vibration at twice the rotation frequency (2X) with strong axial phase differences.</li>
                                    <li><strong>Bearing Wear:</strong> High-frequency noise floor rises and ball-pass frequencies emerge (BPFI, BPFO).</li>
                                </ul>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Mounting Stiffness and Sensor Calibration</h3>
                                <p>
                                    The mounting configuration changes the sensor's frequency limit. Stud mounting offers a rigid mechanical connection, ensuring high-frequency transmission up to 15 kHz. Magnetic bases introduce mechanical compliance, creating a low-pass filter effect that limits accurate readings to under 2-3 kHz.
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
                                    Predictive vibration analysis is applied across critical manufacturing machinery:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Power Plant Turbines", desc: "Continuous monitoring of steam turbine bearing housings to catch critical oil whip and shaft misalignments." },
                                        { title: "Cooling Towers & Fans", desc: "Wireless vibration sensors mounted on top of cooling tower fan gearboxes to detect structural unbalances." },
                                        { title: "CNG Compressor Blocks", desc: "High-frequency shock monitoring on reciprocating compressor cylinders to detect valve failures instantly." }
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
                                        { title: "Eliminate Unscheduled Downtime", desc: "Advanced warnings of rotating component wear allow maintenance scheduling during planned plant shutdowns." },
                                        { title: "Reduce Maintenance Cost", desc: "Replacing a single worn bearing is up to 90% cheaper than repairing a catastrophic rotor casing failure." },
                                        { title: "Improved Machine Safety", desc: "Auto-trip control outputs trigger shutdown sequences if vibrations exceed structural limits, avoiding major damage." },
                                        { title: "Accurate Structural Diagnostics", desc: "Full spectrum spectral analysis removes guesswork, pointing technicians directly to the root engineering failure." }
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
                                    Vibration transmitters act as the critical nervous system of industrial rotating machinery. Incorporating high-durability piezoelectric crystals, integrated DSP processors for real-time FFT calculation, and laser-welded stainless housing guarantees data integrity in the harshest factory settings. Lasak Technologies remains a leading developer of condition-monitoring hardware for alternative energy and industrial automation plants.
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

export default VibrationSensorPage;
