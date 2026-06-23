import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Lock, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import sensorLockImg from '../assets/sensor-lock.png';

const SensorLockPage = () => {
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
        'Electromagnetic Solenoid Plunger Physics',
        'Optical & Hall-Effect Lock Status Sensors',
        'High-Strength Zinc Alloy Deadbolt Casting',
        'DFM Injection Molding Enclosure Shells',
        'Ultra-Low Standby Power Microcontroller Loops',
        'FCC/CE ESD Electrostatic Discharge Shielding'
    ];

    const features = [
        {
            title: "Solenoid Locking Bolt",
            icon: <Lock />,
            desc: "Custom low-power solenoid actuator that extends a hardened steel bolt, resisting high mechanical forcing loads.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "Triple-Status Sensors",
            icon: <Cpu />,
            desc: "Dual Hall-effect and micro-switch sensors to verify deadbolt extension, retraction, and door alignment status.",
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10"
        },
        {
            title: "Compact DFM Shell",
            icon: <Layers />,
            desc: "Injection-molded PC-ABS housing designed with strict draft angles (1.5°), snap hinges, and internal guide tracks.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Secure Override Dial",
            icon: <ShieldCheck />,
            desc: "Mechanical manual override lock cylinder bypassing the electronics for safety during power failures.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        }
    ];

    const faqs = [
        {
            q: "How does a sensor lock verify that the door is locked, not just closed?",
            a: "A standard smart lock only knows if the solenoid fired. A sensor lock uses a triple-sensor check: a door-frame reed switch confirms the door is closed, a Hall-effect sensor checks the solenoid bolt position, and a tailpiece micro-switch confirms the deadbolt has entered the strike plate."
        },
        {
            q: "What materials are selected for the mechanical deadbolt and gears?",
            a: "The deadbolt is cast from high-strength zinc alloy or stainless steel to resist shear. Internal transmission gears are molded from POM (Polyoxymethylene / Acetal) due to its self-lubricating properties, wear resistance, and high dimensional stability."
        },
        {
            q: "How is the plastic enclosure designed for injection molding?",
            a: "The PC-ABS housing uses a uniform wall thickness of 2.0mm to avoid sink marks. We add draft angles of 1.5° on all vertical walls and design internal screw bosses with gussets to withstand the high torque from mounting screws."
        },
        {
            q: "How does the lock manage power consumption?",
            a: "The microcontroller operates in a deep sleep state (drawing under 10 microamps). It wakes up only when an external trigger (like an RFID swipe or keypad press) is detected, activating the solenoid for less than 500 milliseconds to conserve battery."
        }
    ];

    const relatedBlogs = [
        {
            title: "JCB Toy Modelling & CAD Prototyping",
            slug: "jcb-toy-modelling",
            desc: "Excavator toy modeling, mechanical linkages, and DFM injection molding parameters.",
            image: "https://images.unsplash.com/photo-1581091870627-849cc7c1b525?q=80&w=600"
        },
        {
            title: "Miniature Model Development",
            slug: "miniature-model",
            desc: "High-precision scale modeling and assembly engineering processes.",
            image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600"
        },
        {
            title: "Sensor Valve Reverse Engineering",
            slug: "sensor-valve-design",
            desc: "Technical review of fluid control valves, solenoid actuators, and structural design.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 pt-20 relative overflow-hidden">
            <SEO
                title="Sensor Lock Design & Smart Hardware Engineering - Lasak Technologies"
                description="Technical analysis of smart sensor locks, electromagnetic solenoids, Hall-effect status checks, PC-ABS enclosure DFM, and power management loops."
                keywords="sensor lock, smart lock, solenoid actuator, Hall-effect sensor, DFM injection molding, product design"
                canonical="/blogs/sensor-lock"
            />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
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
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400">
                            <Lock size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">New Product Development</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Sensor Lock Design & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400 font-black">Smart Hardware Engineering</span>
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
                                src={sensorLockImg}
                                alt="Smart Sensor Lock System Testing"
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
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Smart Hardware Design?</h4>
                                <p className="text-xs text-slate-400 mb-6">We specialize in electronic lock layout design, injection molding optimization, mechanism validation, and low-power circuit tuning.</p>
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
                                    Smart building security, safe locker containment, automated access control loops, and logistics container seals require rugged, low-power, and secure locking mechanisms. Standard mechanical locks lack digital logs and remote override verification. Delivering a secure, smart sensor lock demands integrating electromagnetic solenoids, precise deadbolt position sensors, impact-safe metal castings, and weather-proof injection-molded enclosures. At Lasak Technologies, our engineering team designs smart locking devices that combine high mechanical shear limits with robust electronic status monitoring.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    A sensor lock functions by driving a mechanical bolt into a strike plate using an electrical actuator, while utilizing a sensor loop to verify lock status.
                                </p>
                                <p>
                                    The primary actuator is a low-power linear solenoid. It features a copper wire coil wrapped around a steel plunger. When pulsed with current, it generates a magnetic field that pulls the plunger, moving the deadbolt. A return spring retracts the bolt when power is cut. For fail-secure locks, a motor-driven gear mechanism is preferred. We design a high-reduction gearbox using Polyoxymethylene (POM) gears, which provides self-lubrication, silent operation, and resists binding.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Integrated Position Feedback Sensor Array</h3>
                                <p>
                                    To verify the lock is secure, we integrate a sensor array. A magnetic reed sensor or Hall-effect IC tracks a magnet inside the door frame, confirming the door is closed. 
                                </p>
                                <p>
                                    Additionally, a reflective optical switch or mechanical micro-switch detects the deadbolt's position. This prevents false lock signals if the deadbolt is blocked by a misaligned door frame.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">PC-ABS Enclosure DFM and ESD Protection</h3>
                                <p>
                                    The lock's housing must withstand physical attacks and weather conditions. We select a PC-ABS blend, combining the impact strength of polycarbonate with the injection molding ease of ABS. 
                                </p>
                                <p>
                                    We design the enclosure with uniform wall thickness, internal reinforcing ribs, and draft angles (1.5°) to ensure clean molding. Internal slots hold the battery pack, circuit board, and drive motor securely. The design also incorporates ESD shielding to protect the microcontroller from electrostatic shocks up to 15 kV.
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
                                    Smart sensor lock devices are used across several commercial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Smart Office Security", desc: "Keyless door locks integrated with card readers, NFC, and centralized management software." },
                                        { title: "Safe Deposit Lockers", desc: "Dual-access control locks requiring both digital code input and master keys to open." },
                                        { title: "Logistics Cargo Seals", desc: "Heavy-duty tracking locks on shipping container doors that log GPS and lock-status data." }
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
                                        { title: "Positive Status Feedback", desc: "Embedded sensor loops eliminate false status readings, confirming the deadbolt is securely engaged." },
                                        { title: "Highly Secure Deadbolt", desc: "Zinc alloy castings and hardened steel pins resist hammer attacks and sawing." },
                                        { title: "Extremely Long Battery Life", desc: "Deep sleep controller states and fast solenoid pulses extend battery life to over a year on AA batteries." },
                                        { title: "Manual Safety Override", desc: "Integrated mechanical key cylinders ensure access is maintained during flat battery emergencies." }
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
                                    Smart sensor locks represent the integration of mechanical design, electronic sensors, and digital controls. By combining solenoid drives, Hall-effect sensors, and DFM-optimized PC-ABS enclosures, we build secure, durable, and highly reliable locking devices. Lasak Technologies remains a key engineering partner, helping clients bring smart hardware products from concept to manufacturing.
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

export default SensorLockPage;
