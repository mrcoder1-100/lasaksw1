import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ShieldCheck, Sun, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import solarPanelUmbrellaImg from '../assets/solar-panel-umbrella.jpg';

const SolarPanelUmbrellaPage = () => {
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
        'Kinematic Folding Linkage Mechanisms',
        'FEA Wind Load Structural Simulations',
        'Monocrystalline Solar Cell Panel Mounting',
        'Telescoping Aluminum Pole Segment Tolerances',
        'Internal Wiring Channel & Slip-Ring Junctions',
        'Integrated Battery Hub & Inverter Bases'
    ];

    const features = [
        {
            title: "Kinematic Folding Ribs",
            icon: <Layers />,
            desc: "Linked structural ribs that expand and contract smoothly, aligning panels without wire twisting.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        },
        {
            title: "Flexible Monocrystalline",
            icon: <Sun />,
            desc: "Highly efficient solar cells mounted on lightweight, flexible backings that fold without cell cracking.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Wind Load FEA",
            icon: <Lightbulb />,
            desc: "Linkage geometry optimized in wind tunnel simulations to survive drag loads up to 50 km/h.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "Telescopic Lock",
            icon: <ShieldCheck />,
            desc: "Lightweight aluminum central shaft using locking detents and internal cable runs for clean wiring.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        }
    ];

    const faqs = [
        {
            q: "How does the solar panel umbrella fold without damaging the cells?",
            a: "The umbrella uses flexible monocrystalline solar panels mounted on segmented structural ribs. The ribs rotate on precise pivot pins, folding the panels face-to-face. Slip rings in the hinge joints prevent internal wiring from twisting and breaking."
        },
        {
            q: "What wind load safety factors are used in the structural design?",
            a: "We design the central aluminum pole and support ribs with a safety factor of 2.0 under drag forces from 50 km/h winds. FEA simulations verify stress limits at the pivot brackets, using gussets where necessary."
        },
        {
            q: "What is the solar conversion efficiency of this folding system?",
            a: "We specify flexible monocrystalline panels with a conversion efficiency of 21–23%. The umbrella canopy is shaped to capture direct sunlight and diffuse sky radiation, maximizing output throughout the day."
        },
        {
            q: "How is power transferred from the moving canopy to the base?",
            a: "We run high-durability, flexible copper wiring through the center of the hollow support ribs. At the top pivot joint, we install a sealed mechanical slip ring, transferring power down the telescoping shaft to a battery charging bank in the base."
        }
    ];

    const relatedBlogs = [
        {
            title: "Solar Dryer Agriculture Innovation",
            slug: "solar-dryer",
            desc: "Solar-thermal design and air convection optimization for agricultural processing.",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600"
        },
        {
            title: "Electric Vehicles (EVs) Future Mobility",
            slug: "electric-vehicles",
            desc: "Sustainable mobile battery configurations and mechanical layouts.",
            image: "https://images.unsplash.com/photo-1558441719-ff34b0524a24?q=80&w=600"
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
                title="Solar Panel Umbrella Design & Kinematic Engineering - Lasak Technologies"
                description="Technical analysis of solar panel umbrellas, kinematic folding mechanisms, FEA wind load calculations, and integrated battery charging hubs."
                keywords="solar umbrella, folding solar panel, kinematic mechanism, FEA structural design, clean energy, industrial design"
                canonical="/blogs/solar-panel-umbrella"
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
                            <Sun size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">New Product Development</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Solar Panel Umbrella & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-black">Kinematic Canopy Engineering</span>
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
                                src={solarPanelUmbrellaImg}
                                alt="Folding Solar Panel Shade Canopy Layout"
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
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Kinematic Mechanism Design?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide design validations, 3D kinematic linkages CAD modeling, FEA stress analyses under wind loading, and electrical routing skids.</p>
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
                                    Clean energy deployment in public spaces, EV charging stations, and eco-resorts requires integrating solar panels into outdoor furniture. However, rigid solar panels are bulky and vulnerable to wind damage. Designing a folding solar panel umbrella canopy demands a combination of kinematic linkages, structural engineering (FEA wind loads), flexible solar cell integration, and clean internal wiring. The umbrella must expand smoothly, maximize solar harvest, and fold into a secure configuration during storms. At Lasak Technologies, our engineering group utilizes advanced CAD modeling and structural simulations to design folding solar canopy structures.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    A folding solar panel umbrella uses a kinematic linkage mechanism to fold solar modules into a compact shape around a central shaft.
                                </p>
                                <p>
                                    The primary mechanism consists of a central sliding collar, support struts, and segmented canopy ribs. In our CAD models, we design these joints as double-shear pivots using stainless steel pins. Flexible monocrystalline solar panels, which offer a high conversion efficiency of 22%, are bonded to the segmented canopy panels. These panels can bend slightly, allowing them to follow the curves of the ribs without cracking.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">FEA Structural Wind Load Validation</h3>
                                <p>
                                    Outdoor umbrellas act like sails in high winds, generating significant uplift forces. We perform structural FEA simulations on the canopy. We apply lift forces from 50 km/h winds, analyzing stress distribution at the pivots. 
                                </p>
                                <p>
                                    To withstand these forces, we specify 6061-T6 structural aluminum for the telescoping shaft and support ribs, incorporating gusset plates at critical joints to prevent bending.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Electrical Routing and Battery Integration</h3>
                                <p>
                                    Running wiring through folding joints can lead to cable wear and short circuits. We resolve this by routing high-durability, flexible copper wiring through the hollow support ribs. 
                                </p>
                                <p>
                                    At the main pivot junction, we install a sealed mechanical slip ring. This allows the canopy to rotate freely without twisting the cables, directing power down the central shaft to a battery charging bank located in the base.
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
                                    Solar panel umbrellas are utilized across various outdoor and urban settings:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Public Park Charging", desc: "Urban umbrellas featuring USB ports and LED lighting, powered entirely by the solar canopy." },
                                        { title: "Eco-Resort Shade", desc: "Premium shade structures that power patio cooling fans and device chargers without external grid lines." },
                                        { title: "Emergency Power Hubs", desc: "Rapid-deployment folding units designed to provide communications power in disaster relief zones." }
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
                                        { title: "Off-Grid Power Supply", desc: "Harvests solar energy to charge integrated batteries, providing independent power for devices." },
                                        { title: "Folds for Wind Protection", desc: "The kinetic canopy folds shut during high winds to protect the panels and structure from damage." },
                                        { title: "Durable Aluminum Frame", desc: "6061-T6 aluminum and stainless steel hardware prevent rust and mechanical binding." },
                                        { title: "Clean Internal Wiring", desc: "Internal channels and slip rings prevent cable wear and short circuits during repeated folding." }
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
                                    Solar panel umbrellas represent a blend of kinematic mechanisms, structural engineering, and solar energy. Utilizing folding aluminum ribs, flexible monocrystalline panels, wind load calculations, and slip rings yields highly reliable clean energy shade systems. Lasak Technologies remains a key partner, developing innovative mechanical structures for clean energy and smart urban furniture.
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

export default SolarPanelUmbrellaPage;
