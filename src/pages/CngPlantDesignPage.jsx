import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, ShieldAlert, Cpu, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import cngPlantImg from '../assets/cng-plant.jpg';

const CngPlantDesignPage = () => {
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
        'Process Flow Diagram (PFD) Optimization',
        'Piping and Instrumentation Diagram (P&ID) Layouts',
        'ASME & API Standard Safety Compliance',
        'High-Pressure Cylinder Cascade Storage Calculations',
        'Dual-Compressor Redundancy System Engineering',
        'Hazard and Operability (HAZOP) Risk Mitigation'
    ];

    const features = [
        {
            title: "Multi-Stage Compression",
            icon: <Cpu />,
            desc: "Highly efficient multi-stage compressor design with intercoolers to manage thermodynamics and pressure up to 250 bar.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Intelligent Cascade Control",
            icon: <Layers />,
            desc: "Automated sequential refueling sequence that optimizes priority cylinder groups for maximum refueling speeds.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "Explosion-Proof Safety",
            icon: <ShieldAlert />,
            desc: "ATEX/IECEx certified containment barriers, gas detection loops, and emergency shut-off valves (ESVs) integrated at source.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "Modular Layout Design",
            icon: <Factory />,
            desc: "Pre-fabricated skid designs that minimize civil works, simplify site logistics, and enable rapid deployment.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        }
    ];

    const faqs = [
        {
            q: "What codes and standards govern CNG station design?",
            a: "CNG station design is primarily governed by NFPA 52 (Vehicular Natural Gas Fuel Systems Code), ASME B31.3 (Process Piping), ASME Section VIII (Pressure Vessels), and API standards for compressors and storage cascades."
        },
        {
            q: "How does a cascade storage system optimize refueling?",
            a: "A cascade system divides gas storage into high, medium, and low-pressure cylinder groups. Electronic priority panels route gas sequentially to the dispenser, utilizing natural differential pressures to fill vehicles rapidly without running the compressor continuously."
        },
        {
            q: "What safety systems are mandatory in high-pressure CNG environments?",
            a: "Mandatory systems include flame and gas leak detectors, emergency shutdown (ESD) networks, break-away couplings on dispensers, pressure safety valves (PSVs) on cylinders, and explosion-resistant containment barriers around compressors."
        },
        {
            q: "What are the spacing requirements for plant equipment?",
            a: "Per NFPA 52, minimum safety clearances (typically 3 to 15 meters) must be maintained between the compressor skid, storage cascades, dispensers, property lines, and nearby electrical equipment to reduce hazards."
        }
    ];

    const relatedBlogs = [
        {
            title: "Dew Point Sensor In Gas Systems",
            slug: "dew-point-sensor",
            desc: "Managing moisture content is crucial for preventing pipeline corrosion and hydrides in CNG systems.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600"
        },
        {
            title: "Vibration Sensor Plant Monitoring",
            slug: "vibration-sensor",
            desc: "Prevent compressor failures by monitoring vibration thresholds in real-time.",
            image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600"
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
                title="CNG Plant Design and Development - Lasak Technologies"
                description="Technical guide on high-pressure CNG plant design, process piping, compressor skids, storage cascades, and safety compliance under ASME and NFPA standards."
                keywords="CNG plant design, mechanical piping, ASME B31.3, cascade storage system, natural gas compressor, HAZOP safety"
                canonical="/blogs/cng-plant-design"
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
                            <Factory size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">New Product Development</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            CNG Plant Design & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Development Engineering</span>
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
                                src={cngPlantImg}
                                alt="High-Pressure Natural Gas Plant Design"
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
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Design Focuses</h3>
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
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Piping or Plant Layout Design?</h4>
                                <p className="text-xs text-slate-400 mb-6">Our senior engineers specialize in process validation, structural integrity, and CAD-modeling for clean energy plants.</p>
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
                                    Compressed Natural Gas (CNG) stations are essential assets in the modern transition toward alternative fuels. However, designing and developing a CNG plant demands strict mechanical design validation, precise hydraulic profiling, and high-pressure system safety integration. Delivering a scalable CNG plant requires combining compressor engineering, storage cascade configurations, gas dispensing controls, and extensive regulatory compliance. At Lasak Technologies, our engineering group utilizes advanced 3D CAD modeling, piping calculations, and thermodynamic simulations to design CNG plants that operate with maximum efficiency, safety, and reliability.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    A standard CNG plant functions by taking low-pressure natural gas from a pipeline network, passing it through filtration systems, compressing it to ultra-high pressures (typically 200–250 bar), and storing it in Cascade Cylinder Banks before dispensing it into vehicles. The design of these systems involves complex mechanical engineering and thermodynamic equations.
                                </p>
                                <p>
                                    The core compressor design uses reciprocating, multi-stage compressors. Since compressing gas generates intense thermal energy, we incorporate interstage gas coolers (heat exchangers) to maintain temperatures below critical levels, preventing seal damage and minimizing gas density loss. During the design phase, our engineers conduct transient pipe stress analysis under <strong>ASME B31.3</strong> to ensure the high-pressure piping manifolds can withstand vibrational stresses and pressure surges during start-stop cycles.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Pressure Vessel & Cascade Storage Design</h3>
                                <p>
                                    To balance supply and demand without cycling the compressor too frequently, plants use a Cascade Storage System. The structural design of these storage cylinders falls under <strong>ASME Section VIII, Division 1 or 2</strong>. We design these banks into Low, Medium, and High-pressure zones. The physical layout must account for wind loading, seismic activities, and structural weight supports. In our CAD models, we detail the structural skids using finite element analysis (FEA) to confirm that the steel frame cages can safely contain the mass of the cylinders under catastrophic failure conditions.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Hydraulics and Flow Control Piping</h3>
                                <p>
                                    Flow control design is critical to avoid major pressure drops. High-pressure tubing must be sized accurately. Our hydraulic piping designs utilize fluid velocity calculations to avoid erosion-corrosion. Priority refill panels and dispenser interfaces use fast-acting pneumatic control valves, mass flow meters (Coriolis effect), and digital signal processors to regulate flow, ensuring safe and accurate metering at the dispenser nozzles.
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
                                    High-pressure natural gas plant configurations are customized to fit distinct industrial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Retail CNG Stations", desc: "Fast-filling dispensers designed for commercial cars, taxis, and domestic vehicles with high-speed dispensing loops." },
                                        { title: "Bus & Truck Depots", desc: "High-capacity plants using heavy-duty industrial compressors to fuel massive fleets of heavy commercial transport vehicles." },
                                        { title: "Mother-Daughter Station Networks", desc: "Utilizing massive storage cascades to transport gas to remote locations without direct pipeline access." }
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
                                        { title: "High Mechanical Efficiency", desc: "Optimized compressor stages reduce operational power consumption by up to 15%." },
                                        { title: "Uncompromising Safety Integration", desc: "Continuous gas monitoring and automatic isolation ensure emergency shut-offs execute in milliseconds." },
                                        { title: "Robust Durability & Structural Design", desc: "FEA validated skid mounts and high-grade stainless steel piping eliminate vibration cracking issues." },
                                        { title: "Fast Vehicle Turnaround", desc: "Hydraulically optimized cascade paths deliver fast filling speeds without pressure drop delays." }
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
                                    Designing and developing a CNG plant is a multi-disciplinary effort that requires combining structural safety, mechanical piping, control systems, and process engineering. As cleaner fuels continue to grow in global importance, implementing high-pressure plants with strict ASME and NFPA compliance becomes vital. Through advanced engineering methodologies, Lasak Technologies continues to lead the design of reliable, efficient, and clean natural gas infrastructure.
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

export default CngPlantDesignPage;
