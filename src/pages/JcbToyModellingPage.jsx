import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, ShieldCheck, PenTool, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import jcbToyModellingImg from '../assets/jcb-toy-modelling.jpg';

const JcbToyModellingPage = () => {
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
        '3D CAD Parametric Part Modeling',
        'Kinematic Linkage & Pivot Joint Rigging',
        'Injection Molding Draft Angle Optimization',
        'Parting Line & Mold Core-Cavity Layouts',
        'ABS & PP Plastic Shrinkage Coefficients',
        'FDM & SLA Prototyping Tolerances'
    ];

    const features = [
        {
            title: "Parametric Linkages",
            icon: <PenTool />,
            desc: "Accurately modeled backhoe boom and bucket linkages with defined assembly constraints, mimicking real excavators.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        },
        {
            title: "DFM Optimization",
            icon: <Layers />,
            desc: "Incorporating uniform wall thicknesses, internal ribs, and draft angles (1.5° to 2°) for injection mold release.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        },
        {
            title: "Snap-Fit Joints",
            icon: <Box />,
            desc: "Designing secure cantilever snap-fit connections that eliminate the need for screws, simplifying assembly.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "Parting Line Design",
            icon: <ShieldCheck />,
            desc: "Carefully placed core-cavity splitting planes to hide cosmetic flash lines and optimize mold longevity.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        }
    ];

    const faqs = [
        {
            q: "What is DFM in toy design and why is it important?",
            a: "Design for Manufacturing (DFM) adapts CAD shapes for high-volume production, typically injection molding. In toy design, this involves establishing uniform wall thicknesses to prevent sink marks, adding draft angles to allow parts to slip out of the mold, and optimizing parting lines to avoid cosmetic defects."
        },
        {
            q: "How are the functional joints on a toy JCB backhoe designed?",
            a: "The joints are designed as double-shear pin connections or snap-fit ball joints. We define exact clearance tolerances (0.1mm to 0.2mm) to ensure parts slide smoothly without being too loose or tight, considering polymer shrinkage during cooling."
        },
        {
            q: "What plastics are typically used for functional toy models?",
            a: "Acrylonitrile Butadiene Styrene (ABS) is used for structural chassis and booms due to its high impact resistance and rigid finish. Polypropylene (PP) is selected for flexible elements and low-friction hinges, while Polyethylene (PE) is ideal for heavy-duty wheels."
        },
        {
            q: "How are prototype models validated before tooling?",
            a: "We validate designs by 3D printing parts using FDM (fused deposition modeling) or SLA (stereolithography) resins. This lets us test snap-fits, mechanical limits, safety tests (such as drop tests), and overall ergonomic scale before manufacturing expensive steel molds."
        }
    ];

    const relatedBlogs = [
        {
            title: "Toy Modeling Design Services",
            slug: "toy-modeling",
            desc: "Bringing imaginative toy concepts to life with realistic 3D modeling and prototyping.",
            image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600"
        },
        {
            title: "Miniature Model Development",
            slug: "miniature-model",
            desc: "High-precision scale modeling and assembly engineering processes.",
            image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600"
        },
        {
            title: "Sensor Lock Product Design",
            slug: "sensor-lock",
            desc: "Design and injection moulding processes for smart security hardware.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 pt-20 relative overflow-hidden">
            <SEO
                title="JCB Toy Modelling & CAD Prototyping - Lasak Technologies"
                description="Technical guide on JCB excavator toy CAD modeling, kinematic joint constraints, design for manufacturing (DFM), and injection mold optimization."
                keywords="toy modeling, JCB CAD design, 3D prototyping, DFM injection molding, snap-fit design, solidworks assembly"
                canonical="/blogs/jcb-toy-modelling"
            />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

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
                            <Box size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">New Product Development</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            JCB Toy Modelling & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400 font-black">Mechanical CAD Prototyping</span>
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
                                src={jcbToyModellingImg}
                                alt="3D Parametric CAD Modeling of JCB Toy"
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
                                <h4 className="font-bold text-white text-lg mb-2">Need Prototyping or Toy CAD Design?</h4>
                                <p className="text-xs text-slate-400 mb-6">We provide design validation, kinematic testing, injection mold layout optimization, and physical 3D print checks.</p>
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
                                    Designing functional toy models of heavy industrial equipment like JCB excavators demands more than aesthetic scale duplication. It requires detailed mechanical joint design, structural wall thickness engineering, robust assembly snap-fits, and strict Design for Manufacturing (DFM) layout validation for injection molding. A functional toy model must look realistic, withstand impact drops, and operate smoothly. At Lasak Technologies, our engineering group utilizes parametric 3D CAD suites to design toy models that blend high visual detail with robust mechanical structures ready for tooling.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    The process of modeling a JCB toy begins by compiling structural dimensions and photo references of the full-scale machine. Using parametric CAD software (such as SolidWorks or Creo), our engineers reconstruct the chassis, driver cabin, front loader bucket, and rear backhoe boom as separate parts.
                                </p>
                                <p>
                                    The primary mechanical challenge lies in rigging the linkages. A real JCB backhoe uses hydraulic cylinders to move the boom and bucket. For a child's toy, these must be replaced with robust mechanical slide linkages or pin joints. 
                                </p>
                                <p>
                                    We model these joints with dual-shear brackets and custom clearances (typically 0.15mm) to account for plastic shrinkage while ensuring smooth manual movement. Pin connections are designed with snap-ring features to simplify assembly.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">DFM and Injection Molding Optimization</h3>
                                <p>
                                    To ensure mass-production feasibility, every part undergoes strict DFM reviews. We maintain uniform wall thickness (typically 2.0mm to 2.5mm for ABS parts) to prevent uneven cooling, which causes surface defects called sink marks. 
                                </p>
                                <p>
                                    Furthermore, we apply draft angles of 1.5° to 2° on all vertical walls and core ribs, allowing components to eject cleanly from steel mold cavities. Internal ribs are added to hollow structures like the front loader arms to double stiffness without increasing thickness.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Mold Parting Line Alignment</h3>
                                <p>
                                    We carefully analyze the parting line—where the mold core and cavity halves separate. Improperly placed parting lines generate sharp seams (flash) that ruin the toy's appearance and pose a safety risk. 
                                </p>
                                <p>
                                    By placing these seams along natural edges and contour lines, we conceal flash while ensuring mold reliability. Prototype parts are then printed using stereolithography (SLA) to test tolerances and mechanical paths.
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
                                    Parametric toy modeling principles are utilized across several commercial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Commercial Toy Tooling", desc: "Developing production-ready CAD files for toy manufacturers utilizing multi-cavity injection molds." },
                                        { title: "Promotional Scale Models", desc: "High-detail models designed for heavy equipment distributors to display at industrial exhibitions." },
                                        { title: "Educational Assemblies", desc: "Constructive model kits featuring assembly snaps to teach basic mechanical linkages to students." }
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
                                        { title: "Production-Ready Designs", desc: "DFM-optimized CAD files reduce tooling iteration loops, speeding up market launch." },
                                        { title: "High Durability", desc: "FEA validated structural ribs and impact-safe polymers prevent premature joint breakage." },
                                        { title: "Simplified Assembly", desc: "Using snap-fits and self-retaining pins simplifies assembly lines, cutting production costs." },
                                        { title: "High Scale Accuracy", desc: "Precise scaling maintains the brand identity and industrial look of real JCB equipment." }
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
                                    Toy engineering bridges creative concept design and production reality. Detailing realistic linkages, enforcing uniform wall thicknesses, adding draft angles, and aligning parting lines yields highly manufacturable scale toys. Lasak Technologies remains a key engineering partner, transforming product concepts into durable, production-ready designs.
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

export default JcbToyModellingPage;
