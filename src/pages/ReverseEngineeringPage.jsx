import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Cpu, FileJson, FlaskConical, Factory, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import Button from '../components/ui/Button';
import reHeroBg from '../assets/re-hero-bg.png';
import { EditableText } from '../components/cms';

const ReverseEngineeringPage = ({ isEditable = false }) => {
    // Initial hardcoded data serving as defaults for the CMS
    const defaultServices = [
        {
            title: "Mechanical Reverse Engineering",
            description: "Digitize legacy parts, recreate CAD models from physical objects, and analyze material properties for reproduction.",
            features: ["Detailed Analysis", "Precision Modeling", "Complete Documentation"],
            icon: <Settings size={32} />
        },
        {
            title: "Electrical & Electronic Reverse Engineering",
            description: "PCB Delayering, Circuit Extraction, and component analysis to understand and recreate electronic systems.",
            features: ["Circuit Extraction", "Component Analysis", "PCB Delayering"],
            icon: <Cpu size={32} />
        },
        {
            title: "Software & Firmware Reverse Engineering",
            description: "Binary analysis, protocol decoding, and algorithm reconstruction to understand legacy codebases.",
            features: ["Protocol Decoding", "Binary Analysis", "Algorithm Reconstruction"],
            icon: <FileJson size={32} />
        },
        {
            title: "Automotive Reverse Engineering",
            description: "Detailed analysis of vehicle components, engine parts, and transmission systems for reproduction or improvement.",
            features: ["Engine Analysis", "Component Redesign", "Spare Part Replication"],
            icon: <Activity size={32} />
        },
        {
            title: "Industrial Product Reverse Engineering",
            description: "Reverse engineering of consumer goods and industrial equipment to improve efficiency and reduce costs.",
            features: ["Cost Efficiency", "Equipment Replication", "Process Optimization"],
            icon: <Factory size={32} />
        },
        {
            title: "Medical Device Reverse Engineering",
            description: "Specialized reverse engineering for medical devices ensuring compliance and precision.",
            features: ["Compliance Checks", "Precision Measurement", "Material Analysis"],
            icon: <FlaskConical size={32} />
        }
    ];

    // Helper to conditionally render EditableText or static Content
    const Content = ({ id, defaultText, className, as = "span" }) => {
        if (isEditable) {
            return <EditableText id={id} defaultText={defaultText} className={`${className} outline-none cursor-text`} />;
        }
        const Tag = as;
        return <Tag className={className} dangerouslySetInnerHTML={{ __html: defaultText }} />; // Using dangerouslySetInnerHTML to match EditableText behavior
    };

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            <SEO
                title="Industrial Reverse Engineering Services - Lasak Tech"
                description="Unlock the secrets of existing products and legacy parts. We provide mechanical, electrical, and software reverse engineering solutions."
                canonical="/services/reverse-engineering"
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden px-4">
                {/* Visual Background Enhancement */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={reHeroBg}
                        alt="Reverse Engineering Background"
                        className="w-full h-full object-cover opacity-30 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
                    <div className="absolute inset-0 bg-[#0a0f1c]/40"></div>
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        {/* 3D Sphere Replacement (CSS Glow) */}
                        <div className="w-40 h-40 md:w-64 md:h-64 mx-auto relative group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                            <Settings className="w-full h-full text-blue-500 p-12 relative z-10 animate-float" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 drop-shadow-2xl"
                    >
                        <h1 className="text-[2.2rem] sm:text-6xl md:text-[8rem] font-black text-white tracking-[0.1em] md:tracking-[0.2em] uppercase leading-[1.1] md:leading-none break-words">
                            <Content id="re_hero_title_1" defaultText="REVERSE" as="span" /> <br />
                            <Content id="re_hero_title_2" defaultText="ENGINEERING" as="span" />
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-300 max-w-4xl text-lg md:text-xl mb-10 leading-relaxed opacity-80 px-4"
                    >
                        "<Content id="re_hero_desc" defaultText="Unlock the secrets of existing products. We deconstruct, analyze, and document complex systems to drive innovation and recovery." />"
                    </motion.div>
                </div>
            </section>

            {/* Main Content with Sticky Layout */}
            <section className="py-20 px-4 relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Fixed Content (Sticky) */}
                        <div className="lg:sticky lg:top-40 h-fit lg:col-span-2 py-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 uppercase tracking-tighter"
                            >
                                <h2>
                                    <Content id="re_side_title_1" defaultText="INDUSTRIAL" /> <br />
                                    <span className="text-blue-500 text-outline-blue font-black">
                                        <Content id="re_side_title_2" defaultText="REVERSE" />
                                    </span> <br />
                                    <Content id="re_side_title_3" defaultText="ENGINEERING" />
                                </h2>
                            </motion.div>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Our Capabilities</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Mechanical RE',
                                        'Electrical & Electronics',
                                        'Software & Firmware',
                                        'Product Benchmarking',
                                        'Plant & Layout RE',
                                        'Medical Device RE'
                                    ].map((tag, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                                            <span className="group-hover:text-white transition-colors">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 p-1 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600">
                                    <div className="bg-[#0f172a] p-6 rounded-xl h-full text-center">
                                        <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">Need RE Services?</h3>
                                        <div className="text-slate-400 text-sm mb-4">
                                            "<Content id="re_side_cta_text" defaultText="Deconstructing complexity to drive smarter, more efficient industrial designs." />"
                                        </div>
                                        <Link to="/contact">
                                            <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-bold text-sm w-full hover:bg-slate-100 transition-colors">
                                                Inquire Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content - Service Detail Cards */}
                        <div className="lg:col-span-3 space-y-12">
                            {/* Section Intro */}
                            <div className="pl-8 border-l-4 border-blue-500/50 mb-16">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                                    <Content id="re_intro_title" defaultText="We Offer Reverse Engineering like" />
                                </h3>
                                <div className="text-slate-300 leading-relaxed text-lg md:text-xl font-light italic">
                                    "<Content id="re_intro_desc" defaultText="Unlocking the secrets of existing products through deconstruction, analysis, and precision documentation." />"
                                </div>
                            </div>

                            {defaultServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/10 hover:border-blue-500/30 transition-all group shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        {React.cloneElement(service.icon, { size: 120 })}
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                        <div className="p-6 bg-blue-600/10 rounded-[2rem] text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 h-fit">
                                            {React.cloneElement(service.icon, { size: 40 })}
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight leading-none">
                                                <Content id={`re_service_${index}_title`} defaultText={service.title} />
                                            </h3>
                                            <div className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                                                <Content id={`re_service_${index}_desc`} defaultText={service.description} />
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                            <Content id={`re_service_${index}_feat_${i}`} defaultText={feature} />
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="relative rounded-[3rem] overflow-hidden bg-[#0f172a] p-10 md:p-24 text-center border border-white/10 shadow-3xl">
                        {/* Background with abstract CSS glows */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
                            <div className="absolute -left-20 -top-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 max-w-5xl mx-auto leading-tight uppercase tracking-tighter">
                                <Content id="re_footer_title" defaultText="Let’s Innovate Your Products Through Reverse Engineering" />
                            </h2>
                            <div className="text-blue-100 max-w-4xl mx-auto mb-12 text-lg md:text-xl leading-relaxed opacity-80">
                                "<Content id="re_footer_desc" defaultText="Reverse engineering is more than analyzing existing products — it’s a pathway to smarter, more efficient designs." />"
                            </div>
                            <Link to="/contact">
                                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 text-xl font-bold shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1">
                                    Start Your Project →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients */}
            <Clients />

        </div>
    );
};

export default ReverseEngineeringPage;
