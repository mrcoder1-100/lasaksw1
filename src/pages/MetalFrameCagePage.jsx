import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, ShieldCheck, Cpu, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import metalFrameCageImg from '../assets/metal-frame-cage.png';

const MetalFrameCagePage = () => {
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
        'ASTM A36 & Structural Carbon Steel Selection',
        'Weld Joint Penetration & Weldment Detailing',
        'Finite Element Analysis (FEA) Stress Mapping',
        'Static Structural & Buckling Calculations',
        'High-Strength Bolt Shear Joint Analysis',
        'Rust Prevention Powder Coating & Galvanization'
    ];

    const features = [
        {
            title: "Weldment Detailing",
            icon: <Layers />,
            desc: "Designed using structured CAD weldment layouts, defining exact fillet weld sizes and joint preparations.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        },
        {
            title: "FEA Stress Validation",
            icon: <Cpu />,
            desc: "Detailed structural FEA models evaluating Von Mises stress profiles under maximum working load factors.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Shear Bolt Analysis",
            icon: <Factory />,
            desc: "Engineered flange joints with high-tensile Grade 8.8 bolts calculated to resist peak shear forces.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "Corrosion Shielding",
            icon: <ShieldCheck />,
            desc: "Surface protection using hot-dip galvanizing and electrostatic powder coats to block oxidation in damp areas.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        }
    ];

    const faqs = [
        {
            q: "What codes govern structural steel cage and frame designs?",
            a: "Structural steel designs are primarily governed by AISC (American Institute of Steel Construction) standards, AWS D1.1 (Structural Welding Code - Steel), and local OSHA safety requirements for guarding and containment enclosures."
        },
        {
            q: "How do you select the steel profile (I-beam, HSS, Angle) for a frame?",
            a: "HSS (Hollow Structural Sections / Square Tubing) are selected for columns and frames due to their high torsional stiffness and clean look. Angle iron is ideal for light supports, while I-beams are preferred for heavy primary load bending spans."
        },
        {
            q: "What is the importance of weld size calculations?",
            a: "Weld size must match the strength of the parent metal. Under-welded joints will fail due to stress concentrations. Over-welding increases manufacturing costs, causes thermal distortion, and adds residual stresses. Fillet weld throat thickness is calculated based on shear load profiles."
        },
        {
            q: "How does galvanizing protect structural frames from rust?",
            a: "Hot-dip galvanizing immerses the steel frame in molten zinc, creating a metallurgically bonded zinc-iron alloy coating. This coating acts as a physical barrier and provides sacrificial cathodic protection; even if scratched, the zinc corrodes in place of the steel."
        }
    ];

    const relatedBlogs = [
        {
            title: "EOT Crane Structural Engineering",
            slug: "eot-crane-project",
            desc: "Mechanical design details of high-capacity material handling systems.",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600"
        },
        {
            title: "Dynamic Reducer Assemblies",
            slug: "dynamic-reducer",
            desc: "Engineering planetary gearboxes and low-backlash speed reducers.",
            image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600"
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
                title="Metal Frame Cage Design & Structural Engineering - Lasak Technologies"
                description="Technical guide on metal frame cage design, structural steel weldments, AWS D1.1 compliance, FEA stress modeling, and corrosion protection."
                keywords="metal frame cage, structural steel, weldment design, AWS D1.1, FEA structural analysis, steel fabrication"
                canonical="/blogs/metal-frame-cage"
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
                            <Factory size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Retro Fitting</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Metal Frame Cage & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-black">Structural Steel Engineering</span>
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
                                src={metalFrameCageImg}
                                alt="Heavy Structural Steel Frame Cage Welds"
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
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Structural Frame Design?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide design validation, weldment drafting, structural FEA stress reports, and assembly layout optimizations.</p>
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
                                    Heavy machinery systems, material containment enclosures, safety barriers, and factory retrofitting platforms rely on heavy structural steel support. Designing a durable metal frame cage demands strict stress calculations, proper weld design under AWS guidelines, secure bolt connection shear calculations, and long-term corrosion shielding. A structural cage must resist static loads, dynamic vibrations, and localized impact loads. At Lasak Technologies, our engineering group utilizes advanced structural analysis software, weldment detailing suites, and finite element modeling (FEA) to engineer metal frame cages that combine high load margins with cost-effective manufacturing processes.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    Structural engineering for metal cages starts by analyzing load paths. The frame skeleton is built using standard steel profiles (such as Hollow Structural Sections (HSS), channel beams, and angle iron). 
                                </p>
                                <p>
                                    HSS tubing is preferred for the primary uprights and support beams due to its closed profile. This shape provides excellent torsional stiffness and strength-to-weight ratios. The structural steel grade is typically ASTM A36 carbon steel, which offers a yield strength of 250 MPa, good weldability, and mechanical ductility.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Weldment and Flange Joint Design</h3>
                                <p>
                                    The primary joints are modeled using weldment profiles. In our designs, we calculate joint geometries under <strong>AWS D1.1</strong> standards. Fillet welds are sized to match the shear strength of the steel tube walls. 
                                </p>
                                <p>
                                    To simplify transportation and installation, frames are designed in modular sub-assemblies. These modules connect using bolted flange joints. We perform shear bolt calculations on these connections, specifying high-tensile fasteners (such as ISO Grade 8.8 or ASTM A325 structural bolts) tightened to correct pre-torque values, preventing slip under peak dynamic loads.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">FEA Structural Stress Verification</h3>
                                <p>
                                    To confirm the design's safety factor, we subject the 3D model to Finite Element Analysis (FEA). We apply static loads representing equipment weight, combined with dynamic load factors (typically 1.5 to 2.0 to account for vibrations and shocks). 
                                </p>
                                <p>
                                    The analysis flags localized bending stresses and buckling risks in slender columns. If stresses exceed allowable limits, we reinforce joints with triangular gusset plates and thicken mounting flanges, optimizing material distribution.
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
                                    Structural metal cages are utilized across various manufacturing and energy sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Plant Machinery Enclosures", desc: "Heavy cages designed to surround dangerous rotating equipment, preventing accidents and containing failures." },
                                        { title: "CNG Storage Skid Frames", desc: "Reinforced structural steel frames built to securely bundle and support heavy high-pressure cylinder cascades." },
                                        { title: "Retrofitting Platforms", desc: "Custom access platforms and structural walkways welded onto existing factory steel grids." }
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
                                        { title: "High Structural Safety Factor", desc: "FEA validated member profiles and gusset reinforcements guarantee safety margins exceeding 2.0." },
                                        { title: "Modular, Bolt-Together Setup", desc: "Prefabricated sub-frames simplify shipping and enable fast on-site bolt assembly without hot welding." },
                                        { title: "Exceptional Vibration Fatigue Life", desc: "AWS D1.1-certified weld designs minimize stress concentrations, preventing dynamic crack propagation." },
                                        { title: "Long-Term Corrosion Shielding", desc: "Hot-dip galvanizing prevents structural rust and paint peeling in harsh outdoor plants." }
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
                                    Metal frame and cage structures form the physical backbone of factory safety and machinery containment. Utilizing closed-profile steel sections, AWS D1.1 weld geometries, structural FEA stress tests, and hot-dip galvanizing yields highly durable assemblies. Lasak Technologies remains a leading provider of structural steel design, piping calculations, and mechanical engineering for manufacturing facilities.
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

export default MetalFrameCagePage;
