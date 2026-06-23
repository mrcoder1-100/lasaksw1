import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import {
    Trash2, Plus, ArrowLeft, Settings, Cpu, FileJson, FlaskConical, Factory, Activity, Code, BarChart3,
    Palette, Globe, ArrowRight, Pencil, Construction, Zap, ShieldCheck, RefreshCw,
    Lightbulb, PenTool, Box, Cog, CheckCircle, Rocket, Layers, Monitor, FileCode,
    Printer, Rotate3d, Wind, Thermometer, TrendingUp, BarChart2, Shield, FileText, Image, Grid,
    Brain, Bot, LineChart, Search, Share2, Mail,
    ShoppingCart, Eye, Users, Smartphone, Layout, Server, Database
} from 'lucide-react';
import Clients from '../components/Clients';
import Button from '../components/ui/Button';
import { EditableText } from '../components/cms';
import SEO from '../components/SEO';

// Icon mapping helper
const getIcon = (iconName) => {
    const icons = {
        Settings: <Settings className="w-full h-full" />,
        Cpu: <Cpu className="w-full h-full" />,
        FileJson: <FileJson className="w-full h-full" />,
        FlaskConical: <FlaskConical className="w-full h-full" />,
        Factory: <Factory className="w-full h-full" />,
        Activity: <Activity className="w-full h-full" />,
        Code: <Code className="w-full h-full" />,
        BarChart3: <BarChart3 className="w-full h-full" />,
        Palette: <Palette className="w-full h-full" />,
        Globe: <Globe className="w-full h-full" />,
        Construction: <Construction className="w-full h-full" />,
        Zap: <Zap className="w-full h-full" />,
        ShieldCheck: <ShieldCheck className="w-full h-full" />,
        RefreshCw: <RefreshCw className="w-full h-full" />,
        Lightbulb: <Lightbulb className="w-full h-full" />,
        PenTool: <PenTool className="w-full h-full" />,
        Box: <Box className="w-full h-full" />,
        Cog: <Cog className="w-full h-full" />,
        CheckCircle: <CheckCircle className="w-full h-full" />,
        Rocket: <Rocket className="w-full h-full" />,
        Layers: <Layers className="w-full h-full" />,
        Monitor: <Monitor className="w-full h-full" />,
        FileCode: <FileCode className="w-full h-full" />,
        Printer: <Printer className="w-full h-full" />,
        Rotate3d: <Rotate3d className="w-full h-full" />,
        Wind: <Wind className="w-full h-full" />,
        Thermometer: <Thermometer className="w-full h-full" />,
        TrendingUp: <TrendingUp className="w-full h-full" />,
        BarChart2: <BarChart2 className="w-full h-full" />,
        Shield: <Shield className="w-full h-full" />,
        FileText: <FileText className="w-full h-full" />,
        Image: <Image className="w-full h-full" />,
        Grid: <Grid className="w-full h-full" />,
        Brain: <Brain className="w-full h-full" />,
        Bot: <Bot className="w-full h-full" />,
        LineChart: <LineChart className="w-full h-full" />,
        Search: <Search className="w-full h-full" />,
        Share2: <Share2 className="w-full h-full" />,
        Mail: <Mail className="w-full h-full" />,
        ShoppingCart: <ShoppingCart className="w-full h-full" />,
        Eye: <Eye className="w-full h-full" />,
        Users: <Users className="w-full h-full" />,
        Smartphone: <Smartphone className="w-full h-full" />,
        Layout: <Layout className="w-full h-full" />,
        Server: <Server className="w-full h-full" />,
        Database: <Database className="w-full h-full" />
    };
    return icons[iconName] || <Settings className="w-full h-full" />;
};

import { useAdmin } from '../contexts/AdminContext';
import { checkPermission } from '../utils/permissions';

const ServiceTemplate = ({ isEditable: propIsEditable = false }) => {
    const { permissions, role } = useAdmin();
    // Only allow manual editing if passed prop is true AND user has write permissions
    const canWrite = role === 'head_admin' || checkPermission(permissions, 'services', 'write');
    const isEditable = propIsEditable && canWrite;

    const { category, slug } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            console.log("Fetching service with slug:", slug);
            try {
                const q = query(collection(db, 'services'), where('slug', '==', slug));
                const snap = await getDocs(q);

                if (snap.empty) throw new Error("Service not found");
                const data = { id: snap.docs[0].id, ...snap.docs[0].data() };

                console.log("Firebase Response:", { data });

                setService(data);
            } catch (error) {
                console.error("Error fetching service:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [slug]);

    if (loading) return <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center text-white">Loading...</div>;
    if (!service) return <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center text-white">Service not found.</div>;

    // Helper for automatic coloring without altering database text
    const HighlightedText = ({ text, type = 'hero' }) => {
        if (!text) return null;
        const words = text.split(' ');
        if (words.length <= 1) return text;

        if (type === 'hero') {
            // Last word blue for Hero
            const last = words.pop();
            return (
                <>
                    {words.join(' ')} <span className="text-blue-500">{last}</span>
                </>
            );
        }

        if (type === 'sidebar') {
            // Second word blue for Sidebar
            if (words.length >= 3) {
                return (
                    <>
                        {words[0]} <span className="text-blue-500">{words[1]}</span> {words.slice(2).join(' ')}
                    </>
                );
            }
            return (
                <>
                    {words[0]} <span className="text-blue-500">{words[1]}</span>
                </>
            );
        }

        return text;
    };

    // Helper for inline editing of single-line fields with LIVE highlighting
    const ServiceField = ({ field, className, as = "span", multiline = false, highlightType = null }) => {
        const content = service[field] || "";
        const Tag = as;

        if (!isEditable) {
            return (
                <Tag className={className}>
                    {highlightType ? <HighlightedText text={content} type={highlightType} /> : content}
                </Tag>
            );
        }

        const handleBlur = async (e) => {
            const newValue = e.target.innerText;
            if (newValue === content) return;

            // Optimistic update
            setService(prev => ({ ...prev, [field]: newValue }));

            try {
                await updateDoc(doc(db, 'services', service.id), { [field]: newValue });
            } catch (error) {
                console.error(`Error updating ${field}:`, error);
                alert("Failed to save changes.");
            }
        };

        return (
            <Tag
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur}
                className={`${className} outline-none cursor-text focus:ring-2 focus:ring-blue-500/20 rounded-lg whitespace-normal`}
                placeholder={`ENTER ${field.toUpperCase()}`}
            >
                {highlightType ? <HighlightedText text={content} type={highlightType} /> : content}
            </Tag>
        );
    };

    // Helper for HTML content editing (Content Body)
    const HTMLServiceField = ({ field, className }) => {
        if (!isEditable) {
            return <div className={className} dangerouslySetInnerHTML={{ __html: service[field] }} />;
        }

        const handleBlur = async (e) => {
            const newValue = e.target.innerHTML;
            if (newValue === service[field]) return;

            // Optimistic update
            setService(prev => ({ ...prev, [field]: newValue }));

            try {
                await updateDoc(doc(db, 'services', service.id), { [field]: newValue });
            } catch (error) {
                console.error(`Error updating ${field}:`, error);
                alert("Failed to save changes.");
            }
        };

        return (
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur}
                // Removed visible outline cues to maintain "original" look. Interaction is still possible.
                className={`${className} outline-none`}
                dangerouslySetInnerHTML={{ __html: service[field] }}
            />
        );
    };

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c] relative">
            <SEO
                title={service.title}
                description={service.description}
                canonical={`/services/${category}/${slug}`}
            />
            {/* Edit Mode Indicator */}
            {isEditable && (
                <div className="fixed top-20 left-0 right-0 z-[100] bg-blue-600 backdrop-blur-md text-white px-4 py-2 text-center font-bold shadow-lg border-b border-white/10">
                    <Pencil className="inline mr-2" size={16} />
                    ULTRA-EDIT MODE - All sections are now live-syncing to Firebase
                </div>
            )}

            {/* Hero Section with High-End Background Image */}
            <section className="relative py-12 md:py-32 lg:py-48 overflow-hidden px-4 flex items-center justify-center min-h-[50vh] md:min-h-[70vh]">
                <div className="absolute inset-0 z-0">
                    {(() => {
                        const url = service.hero_bg_image;
                        const isVideo = url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg') || url.endsWith('.mov'));

                        if (isVideo) {
                            return (
                                <div className="absolute inset-0">
                                    <video
                                        src={url}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover opacity-30 mix-blend-screen"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0a0f1c]/40 to-[#0a0f1c]"></div>
                                </div>
                            );
                        } else if (url) {
                            return (
                                <div className="absolute inset-0">
                                    <img
                                        src={url}
                                        alt="Hero Background"
                                        className="w-full h-full object-cover opacity-30 mix-blend-screen"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0a0f1c]/40 to-[#0a0f1c]"></div>
                                </div>
                            );
                        } else {
                            return <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-blue-900/10 to-[#0a0f1c]"></div>;
                        }
                    })()}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
                </div>

                {isEditable && (
                    <button
                        onClick={async () => {
                            const newUrl = prompt("Enter new Hero Background Media URL (Image or Video):", service.hero_bg_image || "");
                            if (newUrl !== null) {
                                setService(prev => ({ ...prev, hero_bg_image: newUrl }));
                                await updateDoc(doc(db, 'services', service.id), { hero_bg_image: newUrl });
                            }
                        }}
                        className="absolute bottom-10 right-10 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold border border-white/20 transition-all"
                    >
                        📸 Change Hero Media
                    </button>
                )}

                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 md:mb-12"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse"></div>
                            {/* Spinning outer ring */}
                            <div className="absolute inset-2 border-2 border-blue-400/20 rounded-full animate-spin-slow"></div>
                            {/* Main circle container with visible border */}
                            <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center bg-blue-900/10 backdrop-blur-sm">
                                <div className="w-12 h-12 md:w-16 md:h-16 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    {getIcon(service.icon)}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4 md:mb-8"
                    >
                        <ServiceField
                            field="title"
                            as="h1"
                            highlightType="hero"
                            className="text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-black text-white tracking-widest uppercase leading-tight text-center drop-shadow-3xl max-w-[95vw] md:max-w-6xl mx-auto break-normal"
                        />
                        <div className="h-1 md:h-1.5 w-10 md:w-24 lg:w-32 bg-blue-600 mx-auto rounded-full mt-4 md:mt-8 lg:mt-12 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-200 max-w-7xl text-sm md:text-lg lg:text-xl mt-4 md:mt-6 leading-relaxed opacity-90 drop-shadow-2xl px-2 md:px-4"
                    >
                        "<ServiceField field="description" className="whitespace-pre-wrap" />"
                    </motion.div>
                </div>
            </section>

            {/* Main Interactive Content */}
            <section className="py-24 px-4 relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

                        {/* Sidebar with Large Title Overlay */}
                        <div className="lg:sticky lg:top-40 h-fit lg:col-span-2 space-y-12">
                            <div className="relative mb-8 text-center lg:text-left">
                                <h2 className="text-sm sm:text-base md:text-xl lg:text-4xl font-black text-white leading-tight uppercase tracking-widest opacity-100 mb-8 break-normal px-4">
                                    <ServiceField field="sidebar_title" highlightType="sidebar" placeholder="ENTER SIDE TITLE" />
                                </h2>
                                <div className="h-1.5 w-16 bg-blue-600 mx-auto lg:mx-0 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>

                                <div className="relative group/sidebar-img">
                                    {service.sidebar_image && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="rounded-[2.5rem] overflow-hidden border border-white/10 mt-10 h-72 shadow-2xl relative"
                                        >
                                            <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay z-10"></div>
                                            {(() => {
                                                const url = service.sidebar_image;
                                                const isVideo = url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg') || url.endsWith('.mov'));

                                                if (isVideo) {
                                                    return (
                                                        <video
                                                            src={url}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            className="w-full h-full object-cover transform scale-110 opacity-70"
                                                        />
                                                    );
                                                }
                                                return (
                                                    <img
                                                        src={url}
                                                        alt="Service Visual"
                                                        className="w-full h-full object-cover transform group-hover/sidebar-img:scale-105 transition-transform duration-700 opacity-70"
                                                    />
                                                );
                                            })()}
                                        </motion.div>
                                    )}

                                    {isEditable && (
                                        <button
                                            onClick={async () => {
                                                const newUrl = prompt("Enter new Sidebar Media URL (Image or Video):", service.sidebar_image || "");
                                                if (newUrl !== null) {
                                                    setService(prev => ({ ...prev, sidebar_image: newUrl }));
                                                    await updateDoc(doc(db, 'services', service.id), { sidebar_image: newUrl });
                                                }
                                            }}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg opacity-0 group-hover/sidebar-img:opacity-100 transition-opacity"
                                        >
                                            📸 Change Media
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 p-10 rounded-[3rem] shadow-3xl">
                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Core Capabilities</h3>
                                <ul className="space-y-6">
                                    {(service.features || []).map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-slate-300 group">
                                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                            {isEditable ? (
                                                <div className="flex-1 flex items-center justify-between">
                                                    <input
                                                        value={feature}
                                                        onChange={async (e) => {
                                                            const newFeatures = [...service.features];
                                                            newFeatures[idx] = e.target.value;
                                                            setService(prev => ({ ...prev, features: newFeatures }));
                                                            await updateDoc(doc(db, 'services', service.id), { features: newFeatures });
                                                        }}
                                                        className="bg-transparent border-none text-white w-full outline-none focus:bg-white/10 rounded px-2 py-1"
                                                    />
                                                    <button onClick={async () => {
                                                        const newFeatures = service.features.filter((_, i) => i !== idx);
                                                        setService(prev => ({ ...prev, features: newFeatures }));
                                                        await updateDoc(doc(db, 'services', service.id), { features: newFeatures });
                                                    }} className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2">×</button>
                                                </div>
                                            ) : (
                                                <span className="text-lg group-hover:text-white transition-colors">{feature}</span>
                                            )}
                                        </li>
                                    ))}
                                    {isEditable && (
                                        <button
                                            onClick={async () => {
                                                const newFeatures = [...(service.features || []), "New Point"];
                                                setService(prev => ({ ...prev, features: newFeatures }));
                                                await updateDoc(doc(db, 'services', service.id), { features: newFeatures });
                                            }}
                                            className="text-blue-500 text-sm font-bold mt-4 hover:bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 transition-all"
                                        >+ Add Point</button>
                                    )}
                                </ul>

                                <div className="mt-12 p-1 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500">
                                    <div className="bg-[#0f172a] p-8 rounded-[1.8rem] text-center">
                                        <h3 className="font-black text-white text-xl mb-4 uppercase">Direct Inquiry</h3>
                                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">Let our engineering experts assist you with your project requirements.</p>
                                        <Link to="/contact">
                                            <Button className="bg-blue-600 text-white w-full py-5 font-black uppercase tracking-widest text-sm rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40">
                                                Consult Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Premium Service Cards */}
                        <div className="lg:col-span-3 space-y-20">
                            {/* Service Details Section Header */}
                            <div className="mb-20 text-center">
                                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                                    Detailed Solutions
                                </h3>
                                <div className="h-1.5 w-32 bg-blue-600 mx-auto rounded-full mb-12"></div>
                                <HTMLServiceField
                                    field="content"
                                    className="prose prose-invert prose-2xl max-w-none text-center text-slate-300 leading-relaxed font-light marker:text-blue-500"
                                />
                            </div>

                            {/* Sub-Services Cards (Iterated from Firebase Firestore) */}
                            <div className="space-y-12">
                                {(service.sub_services || []).map((sub, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-14 hover:border-blue-500/40 transition-all duration-500 shadow-3xl overflow-hidden"
                                    >
                                        {/* Large Animated Ghost Icon */}
                                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] transition-opacity group-hover:opacity-[0.08] text-white">
                                            {getIcon(sub.icon)}
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                                            <div className="relative group/icon">
                                                <div className="p-8 bg-blue-600/15 rounded-[2.5rem] text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 shadow-2xl">
                                                    {getIcon(sub.icon)}
                                                </div>
                                                {isEditable && (
                                                    <button
                                                        onClick={async (e) => {
                                                            e.stopPropagation();
                                                            const iconName = prompt("Enter icon name (e.g. Settings, Cpu, Code, Globe, Shield...):", sub.icon);
                                                            if (iconName) {
                                                                const newSub = [...service.sub_services];
                                                                newSub[sIdx].icon = iconName;
                                                                setService(prev => ({ ...prev, sub_services: newSub }));
                                                                await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                            }
                                                        }}
                                                        className="absolute inset-0 bg-black/50 rounded-[2.5rem] flex items-center justify-center opacity-0 group-hover/icon:opacity-100 transition-opacity cursor-pointer z-50 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-sm"
                                                    >
                                                        <div className="flex flex-col items-center gap-2">
                                                            <Pencil size={24} />
                                                            <span>Change Icon</span>
                                                        </div>
                                                    </button>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-tight group-hover:text-blue-400 transition-colors">
                                                    {isEditable ? (
                                                        <div className="flex items-center gap-4 w-full">
                                                            <input
                                                                value={sub.title}
                                                                onChange={async (e) => {
                                                                    const newSub = [...service.sub_services];
                                                                    newSub[sIdx].title = e.target.value;
                                                                    setService(prev => ({ ...prev, sub_services: newSub }));
                                                                    await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                                }}
                                                                className="bg-transparent border-none text-white w-full outline-none"
                                                            />
                                                            <button
                                                                onClick={async () => {
                                                                    if (window.confirm("Delete this solution?")) {
                                                                        const newSub = service.sub_services.filter((_, i) => i !== sIdx);
                                                                        setService(prev => ({ ...prev, sub_services: newSub }));
                                                                        await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                                    }
                                                                }}
                                                                className="text-red-500 hover:text-red-400 transition-colors p-2"
                                                                title="Delete Solution"
                                                            >
                                                                <Trash2 size={24} />
                                                            </button>
                                                        </div>
                                                    ) : sub.title}
                                                </h4>
                                                <div className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                                                    {isEditable ? (
                                                        <textarea
                                                            value={sub.description}
                                                            onChange={async (e) => {
                                                                const newSub = [...service.sub_services];
                                                                newSub[sIdx].description = e.target.value;
                                                                setService(prev => ({ ...prev, sub_services: newSub }));
                                                                await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                            }}
                                                            className="bg-transparent border-none text-slate-400 w-full outline-none min-h-[100px]"
                                                        />
                                                    ) : sub.description}
                                                </div>
                                                <div className="flex flex-wrap gap-4 mt-auto pt-6">
                                                    {(sub.features || []).map((f, fIdx) => (
                                                        <span key={fIdx} className="px-5 py-2.5 bg-white/5 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border border-white/5 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all flex items-center gap-2">
                                                            {isEditable ? (
                                                                <>
                                                                    <input
                                                                        value={f}
                                                                        onChange={async (e) => {
                                                                            const newSub = [...service.sub_services];
                                                                            newSub[sIdx].features[fIdx] = e.target.value;
                                                                            setService(prev => ({ ...prev, sub_services: newSub }));
                                                                            await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                                        }}
                                                                        className="bg-transparent border-none text-blue-400 w-fit outline-none"
                                                                        style={{ width: `${(f.length * 1.5) + 2}ch` }}
                                                                    />
                                                                    <button
                                                                        onClick={async () => {
                                                                            const newSub = [...service.sub_services];
                                                                            newSub[sIdx].features = newSub[sIdx].features.filter((_, i) => i !== fIdx);
                                                                            setService(prev => ({ ...prev, sub_services: newSub }));
                                                                            await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                                        }}
                                                                        className="hover:text-red-500 transition-colors"
                                                                    >×</button>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                                    {f}
                                                                </>
                                                            )}
                                                        </span>
                                                    ))}
                                                    {isEditable && (
                                                        <button
                                                            onClick={async () => {
                                                                const newSub = [...service.sub_services];
                                                                if (!newSub[sIdx].features) newSub[sIdx].features = [];
                                                                newSub[sIdx].features.push("NEW PHASE");
                                                                setService(prev => ({ ...prev, sub_services: newSub }));
                                                                await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                                            }}
                                                            className="px-5 py-2.5 bg-blue-600/10 rounded-full text-[10px] font-black text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all"
                                                        >
                                                            + ADD PHASE
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {isEditable && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="flex justify-center pt-8"
                                    >
                                        <button
                                            onClick={async () => {
                                                const newSub = [...(service.sub_services || []), {
                                                    title: "NEW SOLUTION",
                                                    description: "Enter a description for this service solution.",
                                                    features: ["Feature 1"],
                                                    icon: "Settings"
                                                }];
                                                setService(prev => ({ ...prev, sub_services: newSub }));
                                                await updateDoc(doc(db, 'services', service.id), { sub_services: newSub });
                                            }}
                                            className="group flex items-center gap-3 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white px-10 py-5 rounded-[2rem] border-2 border-dashed border-blue-500/30 hover:border-blue-500 transition-all font-black uppercase tracking-widest text-lg shadow-2xl"
                                        >
                                            <Plus size={28} />
                                            Add New Solution
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom CTA Section */}
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <div className="bg-gradient-to-br from-[#0f172a] to-[#0a0f1c] rounded-[4rem] border border-white/10 p-12 md:p-32 text-center shadow-4xl relative overflow-hidden">
                        {/* Animated Ambient Glows */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full animate-float"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-8xl font-black text-white mb-6 max-w-6xl mx-auto uppercase leading-none tracking-tighter shadow-text">
                                <ServiceField field="footer_title" placeholder="ENTER FOOTER TITLE" />
                            </h2>
                            <div className="h-2 w-24 md:w-32 bg-blue-600 mx-auto rounded-full mb-12 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
                            <p className="text-slate-300 text-lg md:text-xl max-w-7xl mx-auto mb-16 opacity-80 leading-relaxed">
                                "<ServiceField field="footer_description" placeholder="Enter footer description..." className="whitespace-pre-wrap" />"
                            </p>
                            <Link to="/contact">
                                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-blue-600 text-white font-black text-sm md:text-xl uppercase tracking-widest shadow-[0_20px_60px_rgba(59,130,246,0.5)] hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
                                    Start Your Project →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Clients />
        </div>
    );
};

export default ServiceTemplate;
