import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, ShieldCheck, PenTool, Layers, User, Calendar, Tag, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import miniatureModelImg from '../assets/miniature-model.jpg';

const MiniatureModelPage = () => {
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
        'Scale Factor Dimensional Calculations',
        'SLA/DLP Photopolymer Resin Printing',
        'FDM Filament Layer Profile Settings',
        'Laser-Cut Vector Alignment Plates',
        'CNC Acrylic Panel Micro-Machining',
        'Surface Post-Processing & Paint Primers'
    ];

    const features = [
        {
            title: "Precision SLA Prints",
            icon: <Layers />,
            desc: "Utilizing liquid resin photopolymerization to create microscopic details and smooth surface finishes down to 25-micron layers.",
            color: "text-amber-400",
            bgColor: "bg-amber-500/10"
        },
        {
            title: "Laser-Cut Frameworks",
            icon: <PenTool />,
            desc: "Using vector-based laser cutting on acrylic and MDF sheets to form rigid, flat backing plates and wall grids.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Modular Split Layout",
            icon: <Box />,
            desc: "Splitting massive plant models into transportable structural modules that slide together using alignment pins.",
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            title: "High-Accuracy Scaling",
            icon: <ShieldCheck />,
            desc: "Direct conversion of full-scale plant CAD models to 1:50 or 1:100 scale models without losing key details.",
            color: "text-rose-400",
            bgColor: "bg-rose-500/10"
        }
    ];

    const faqs = [
        {
            q: "What scale factors are standard in industrial plant modeling?",
            a: "Standard scale factors are 1:50 and 1:100 for process plant skids and buildings. This balances physical transportability with the ability to resolve fine piping, valve, and structural features clearly."
        },
        {
            q: "Why is SLA printing preferred over FDM for miniature details?",
            a: "SLA (stereolithography) uses an ultraviolet laser to cure liquid photopolymer resin, allowing layer heights of 25 to 50 microns with no visible layer lines. FDM (fused deposition modeling) melts plastic filament, which leaves visible layer lines and struggles with fine features like small valves."
        },
        {
            q: "How are CAD models prepared for miniature physical fabrication?",
            a: "Full-scale CAD models are too detailed; thin walls would scale down to paper-thin structures that break easily. We simplify the CAD by thickening structural columns, scaling pipe diameters up slightly for strength, and splitting the assembly into interlocking modules."
        },
        {
            q: "What bonding agents are used for acrylic scale models?",
            a: "We use solvent cements (like acrylic-based methyl ethyl ketone). Unlike standard glue that sits on top of the plastic, solvent cement chemically melts the mating surfaces, fusing the parts into a single structural piece."
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
            title: "Toy Modeling Design Services",
            slug: "toy-modeling",
            desc: "Bringing imaginative toy concepts to life with realistic 3D modeling and prototyping.",
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
                title="Miniature Model Design & Scale Prototyping - Lasak Technologies"
                description="Technical analysis of industrial miniature scale modeling, SLA 3D printing tolerances, laser-cut vector layouts, and material scaling physics."
                keywords="miniature model, scale model, SLA 3D printing, laser cutting, acrylic fabrication, CAD simplification"
                canonical="/blogs/miniature-model"
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
                            Miniature Model & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400 font-black">Industrial Scale Engineering</span>
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
                                src={miniatureModelImg}
                                alt="High-Precision SLA Resin Miniature Scale Model"
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
                                <h4 className="font-bold text-white text-lg mb-2">Need Custom Scale Model Development?</h4>
                                <p className="text-xs text-slate-400 mb-6">We specialize in converting process plant layouts, mechanical assemblies, and architectural files into physical scale prototypes.</p>
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
                                    Presenting a massive industrial plant, a complex offshore oil platform, or a detailed building development to stakeholders requires clear visualization. While digital 3D renders are useful, a physical scale miniature model provides a tactile perspective that digital screens cannot match. However, fabricating a high-fidelity miniature model requires more than printing shapes. It involves dimensional scale conversions, preparing CAD models for physical printing, utilizing high-precision SLA resin methods, and aligning laser-cut acrylic structures. At Lasak Technologies, our design group specializes in scaling and fabricating high-precision physical models of complex systems.
                                </p>
                            </div>

                            {/* Detailed Technical Content */}
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Detailed Technical Content</h2>
                                <p>
                                    The engineering of a miniature scale model begins by scaling down the master CAD model of the facility. If the scale is 1:100, a pipe with a 100mm diameter scales down to exactly 1.0mm. 
                                </p>
                                <p>
                                    At this size, wall thicknesses of structural steel members, handrails, and piping manifolds become paper-thin. If directly fabricated, the components would warp or break during handling. 
                                </p>
                                <p>
                                    To solve this, our engineers review the CAD design, systematically thickening structural members and widening small clearances to ensure strength while maintaining the visual appearance of the original equipment.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">High-Precision SLA and FDM 3D Printing</h3>
                                <p>
                                    For high-detail parts (valves, pumps, engines, instruments), we utilize Stereolithography (SLA) 3D printing. SLA printers cure liquid photopolymer resin layer-by-layer using a UV laser, achieving layer thicknesses of 25 to 50 microns. This ensures exceptionally smooth surface finishes. 
                                </p>
                                <p>
                                    For large structural bases and buildings, we use Fused Deposition Modeling (FDM) with PLA filament. This provides cost-effective, rigid foundations for the model.
                                </p>
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">Laser Cutting and Acrylic Assembly</h3>
                                <p>
                                    Structural frames, grid lines, and access walkways are created by laser-cutting acrylic and MDF sheets. Using vector-based graphics files, the laser cuts parts with tolerances of 0.05mm. 
                                </p>
                                <p>
                                    To assemble these components, we use solvent cements that chemically melt and fuse acrylic faces together, forming strong joints. The model is finished with fine sandpapers, plastic primers, and electrostatic airbrushes to apply accurate color schemes.
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
                                    Miniature model engineering is widely used across various commercial sectors:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Exhibition Models", desc: "Eye-catching models designed for manufacturing and engineering companies to showcase machinery at trade shows." },
                                        { title: "Process Flow Verification", desc: "Physical models used by piping and mechanical engineers to walk through plant operations and review layouts." },
                                        { title: "Architectural Planning", desc: "Detailed building models showing spatial layouts to municipal authorities and real estate investors." }
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
                                        { title: "High Visual Impact", desc: "Physical models engage clients and investors, helping them visualize project layouts quickly." },
                                        { title: "Clear Spatial Insights", desc: "Allows mechanical engineers to verify clearance heights, structural layouts, and maintenance spaces." },
                                        { title: "Interlocking Modular Design", desc: "Splitting models into sub-assemblies simplifies shipping and allows fast on-site re-assembly." },
                                        { title: "Durable, Light Construction", desc: "Combining acrylic plates, SLA resins, and internal ribs yields highly durable, lightweight models." }
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
                                    Physical scale models are a valuable tool for industrial and structural visualization. Preparing CAD models, using SLA printing for details, and assembling laser-cut acrylic parts yields highly accurate scale models. Lasak Technologies remains a leading partner, converting digital CAD files into high-quality physical scale models.
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

export default MiniatureModelPage;
