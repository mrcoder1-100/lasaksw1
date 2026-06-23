import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, PenTool, Box, Cog, CheckCircle, Rocket, Plus, Trash2, Pencil } from 'lucide-react';
import SEO from '../components/SEO';
import Clients from '../components/Clients';
import Button from '../components/ui/Button';
import { db } from '../firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useAdmin } from '../contexts/AdminContext';
import { checkPermission } from '../utils/permissions';

// Icon mapping helper
const getIcon = (iconName) => {
    const icons = {
        Lightbulb: <Lightbulb size={32} />,
        PenTool: <PenTool size={32} />,
        Box: <Box size={32} />,
        Cog: <Cog size={32} />,
        CheckCircle: <CheckCircle size={32} />,
        Rocket: <Rocket size={32} />,
    };
    return icons[iconName] || <Rocket size={32} />;
};

const NewProductDevelopmentPage = () => {
    const { permissions, role } = useAdmin();
    // Allow editing if user is head_admin or has services write permission
    const canWrite = role === 'head_admin' || checkPermission(permissions, 'services', 'write');
    const isEditable = canWrite;

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    const defaultProcessSteps = [
        {
            title: "From Concept to Design",
            description: "We begin with Ideation & Concept Development. Our team conducts thorough market research and competitor analysis to validate your ideas. Subsequently, we move to Product & Industrial Design. This phase focuses on both aesthetics and ergonomics to enhance user experience. We create detailed design mock-ups and renderings so you can visualize the final product."
        },
        {
            title: "Precise 3D Modeling and Prototyping",
            description: "Next, we use advanced software for precise 3D Modeling & Prototyping. Our team is skilled in SOLIDWORKS, Fusion 360, and CATIA. We then use rapid prototyping methods like 3D printing, CNC machining, and casting. This allows us to produce functional prototypes for rigorous testing and feedback."
        },
        {
            title: "Expert Engineering for Manufacturing",
            description: "Our Engineering & Product Development phase integrates key expertise. This includes mechanical, electrical, and electronic engineering. We meticulously select materials and analyze product durability. We also implement a \"Design for Manufacturability\" (DFM) approach. This streamlines the production process, making your product both high-performance and efficient to manufacture."
        },
        {
            title: "Rigorous Testing and Validation",
            description: "Thorough Testing & Validation is a critical step. We perform stress tests and compliance checks on all prototypes. This ensures your product meets important safety standards like CE, ISO, and FDA. We also incorporate user feedback to perfect the final design."
        },
        {
            title: "Manufacturing and Market Launch Support",
            description: "We provide complete Manufacturing Support. Our team assists with vendor sourcing, production documentation, and cost optimization. This guarantees a smooth transition to full-scale production. For your Market Launch, we develop go-to-market strategies and design effective packaging. We also offer post-launch support for continuous improvement."
        }
    ];

    useEffect(() => {
        const fetchService = async () => {
            try {
                const q = query(collection(db, 'services'), where('slug', '==', 'new-product-development'));
                const snap = await getDocs(q);

                if (snap.empty) {
                    console.error("Error fetching service: Not found");
                } else {
                    const data = { id: snap.docs[0].id, ...snap.docs[0].data() };
                    // Use defaults if sub_services is empty
                    if (!data.sub_services || data.sub_services.length === 0) {
                        data.sub_services = defaultProcessSteps;
                    }
                    setService(data);
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, []);

    if (loading) return <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center text-white">Loading...</div>;
    if (!service) return <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center text-white">Service data not found. Please ensure a service with slug 'new-product-development' exists.</div>;

    // Helper for inline editing
    const ServiceField = ({ field, className, as = "span", placeholder = "Edit text..." }) => {
        const content = service[field] || "";
        const Tag = as;

        if (!isEditable) {
            return <Tag className={className}>{content}</Tag>;
        }

        const handleBlur = async (e) => {
            const newValue = e.target.innerText;
            if (newValue === content) return;

            setService(prev => ({ ...prev, [field]: newValue }));
            try {
                await updateDoc(doc(db, 'services', service.id), { [field]: newValue });
            } catch (error) {
                console.error(`Error updating ${field}:`, error);
            }
        };

        return (
            <Tag
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur}
                className={`${className} outline-none cursor-text focus:ring-2 focus:ring-blue-500/20 rounded-lg whitespace-pre-wrap`}
                placeholder={placeholder}
            >
                {content}
            </Tag>
        );
    };

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c] relative">
            <SEO
                title="New Product Development (NPD) - From Concept to Launch"
                description="Transform your mechanical product ideas into market-ready innovations. Our comprehensive NPD process ensures functionality, durability, and performance."
                canonical="/services/new-product-development"
            />
            {isEditable && (
                <div className="fixed top-20 left-0 right-0 z-[100] bg-blue-600 backdrop-blur-md text-white px-4 py-2 text-center font-bold shadow-lg border-b border-white/10">
                    <Pencil className="inline mr-2" size={16} />
                    EDIT MODE ENABLED - Changes save automatically
                </div>
            )}

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden px-4 flex items-center justify-center min-h-[80vh]">
                {/* Visual Background Enhancement */}
                <div className="absolute inset-0 z-0">
                    {/* High-Impact Innovation/NPD Image */}
                    <img
                        src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2000&auto=format&fit=crop"
                        alt="Product Development Strategy"
                        className="w-full h-full object-cover opacity-50 scale-105"
                    />

                    {/* Technical Grid Overlay (CSS) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>

                    {/* Cinematic Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
                    <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[#0a0f1c]/60"></div>

                    {/* Focal Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[130px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-10"
                    >
                        {/* 3D Sphere Replacement (CSS Glow) */}
                        <div className="w-44 h-44 md:w-64 md:h-64 mx-auto relative group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-10 border border-blue-500/10 rounded-full animate-reverse-spin"></div>
                            <Rocket className="w-full h-full text-blue-500 p-14 relative z-10 animate-float" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight uppercase mb-8 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] leading-none max-w-6xl mx-auto"
                    >
                        <ServiceField field="title" placeholder="ENTER HERO TITLE" />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-200 max-w-4xl text-lg md:text-xl mb-12 leading-relaxed opacity-90 drop-shadow-2xl mx-auto"
                    >
                        <ServiceField field="description" placeholder="ENTER HERO DESCRIPTION" />
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link to="/contact">
                            <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-bold shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1">
                                Start Your Project →
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Proven Process Section (Editable Sub-Services) */}
            <section className="py-24 px-4 bg-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
                            Proven Process for <br />
                            <span className="text-blue-500">New Product Development</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                            LASAK Technologies specializes in transforming your mechanical product ideas into market-ready innovations. Our comprehensive new product development process guides you from concept to final production. We ensure functionality, durability, and cutting-edge performance at every stage.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {(service.sub_services || []).map((step, index) => {
                            // Define colors for border based on index
                            const colors = ['border-blue-500', 'border-indigo-500', 'border-purple-500', 'border-pink-500', 'border-orange-500', 'border-green-500'];
                            const borderColor = colors[index % colors.length];

                            return (
                                <div key={index} className={`border-l-4 ${borderColor} pl-8 md:pl-12 relative group`}>
                                    {isEditable && (
                                        <div className="absolute -left-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                                            <button
                                                onClick={async () => {
                                                    if (window.confirm("Remove this step?")) {
                                                        const newSub = service.sub_services.filter((_, i) => i !== index);
                                                        setService(prev => ({ ...prev, sub_services: newSub }));
                                                        await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                    }
                                                }}
                                                className="p-2 bg-red-600/20 text-red-500 rounded hover:bg-red-600 hover:text-white"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    )}
                                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                                        {isEditable ? (
                                            <input
                                                value={step.title}
                                                onChange={async (e) => {
                                                    const newSub = [...service.sub_services];
                                                    newSub[index].title = e.target.value;
                                                    setService(prev => ({ ...prev, sub_services: newSub }));
                                                    await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                }}
                                                className="bg-transparent border-none outline-none w-full text-white placeholder-white/50"
                                                placeholder="Step Title"
                                            />
                                        ) : step.title}
                                    </h3>
                                    <div className="text-lg md:text-xl text-slate-400 leading-relaxed">
                                        {isEditable ? (
                                            <textarea
                                                value={step.description}
                                                onChange={async (e) => {
                                                    const newSub = [...service.sub_services];
                                                    newSub[index].description = e.target.value;
                                                    setService(prev => ({ ...prev, sub_services: newSub }));
                                                    await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                }}
                                                className="bg-transparent border-none outline-none w-full text-slate-400 h-24 placeholder-slate-600 resize-none"
                                                placeholder="Step Description"
                                            />
                                        ) : step.description}
                                    </div>
                                </div>
                            );
                        })}

                        {isEditable && (
                            <button
                                onClick={async () => {
                                    const newSub = [...(service.sub_services || []), { title: "New Step Title", description: "New step description..." }];
                                    setService(prev => ({ ...prev, sub_services: newSub }));
                                    await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                }}
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all font-bold uppercase tracking-widest border border-blue-500/30"
                            >
                                <Plus size={20} /> Add Proven Process Step
                            </button>
                        )}

                        {/* Static footer text within the process section as per original design */}
                        <p className="text-xl md:text-2xl text-white font-bold leading-relaxed mt-12">
                            This complete lifecycle management ensures your mechanical innovations achieve lasting success. <span className="text-blue-500">Partner with LASAK Technologies and let us bring your vision to life.</span>
                        </p>
                    </div>
                </div>
            </section>

            <Clients />

        </div>
    );
};

export default NewProductDevelopmentPage;
