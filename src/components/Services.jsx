import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, BarChart3, Palette, ArrowRight, Settings, Trash2, Plus } from 'lucide-react';
import Button from './ui/Button';

import { CMSText } from './cms';

import { db } from '../firebase';
import { collection, query, where, orderBy, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Services = ({ editable = false }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const q = query(collection(db, 'services'), where('is_featured', '==', true));
                const snap = await getDocs(q);
                const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                // order by created_at in memory or add order by query if index exists
                data.sort((a, b) => (new Date(a.created_at || 0) > new Date(b.created_at || 0) ? 1 : -1));
                setServices(data);
            } catch (err) {
                console.error("Error fetching featured services", err);
            }
        };
        fetchServices();
    }, []);

    // Color/Theme configuration for the cards
    const cardThemes = [
        { color: 'blue', iconColor: 'text-blue-400', glow: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/50', shadow: 'shadow-blue-500/10' },
        { color: 'purple', iconColor: 'text-purple-400', glow: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/50', shadow: 'shadow-purple-500/10' },
        { color: 'pink', iconColor: 'text-pink-400', glow: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/50', shadow: 'shadow-pink-500/10' },
        { color: 'orange', iconColor: 'text-orange-400', glow: 'from-orange-500/20 to-yellow-500/20', border: 'border-orange-500/50', shadow: 'shadow-orange-500/10' },
    ];

    const getIcon = (iconName) => {
        const icons = {
            Settings: <Settings className="w-10 h-10" />,
            Code: <Code className="w-10 h-10" />,
            BarChart3: <BarChart3 className="w-10 h-10" />,
            Palette: <Palette className="w-10 h-10" />,
            // Add defaults or fallback
        };
        return icons[iconName] || <Settings className="w-10 h-10" />;
    };

    return (
        <section id="services" className="py-24 relative bg-[#0f172a]">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Fixed Content (Sticky) */}
                    <div className="lg:sticky lg:top-40 h-fit lg:col-span-2 py-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 uppercase tracking-tighter"
                        >
                            <CMSText id="services_title" defaultText="We don't just bridge the digital gap" editable={editable} /><br />
                            <span className="text-blue-500 text-outline-blue font-black">
                                <CMSText id="services_subtitle" defaultText="we build the highway to your future" editable={editable} />
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-light"
                        >
                            "<CMSText id="services_desc" defaultText="At Lasak Technologies, we don't just build solutions; we engineer the future of your business. Our comprehensive services are designed to propel your brand forward with speed, precision, and scalability." editable={editable} />"
                        </motion.p>
                    </div>

                    {/* Right Column: Stacked Dynamic Cards */}
                    <div className="flex flex-col space-y-6 lg:col-span-3">
                        {services
                            .sort((a, b) => {
                                const order = [
                                    "3D Modeling",
                                    "Reverse Engineering",
                                    "Retro Fitting",
                                    "Patent",
                                    "New Product",
                                    "Analysis"
                                ];
                                const indexA = order.findIndex(o => a.title?.toLowerCase().includes(o.toLowerCase()));
                                const indexB = order.findIndex(o => b.title?.toLowerCase().includes(o.toLowerCase()));
                                
                                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                                if (indexA !== -1) return -1;
                                if (indexB !== -1) return 1;
                                return (a.title || "").localeCompare(b.title || "");
                            })
                            .map((service, index) => {
                                const theme = cardThemes[index % cardThemes.length];
                                const safeTitle = service.title || "Untitled Service";
                                const titleWords = safeTitle.split(' ');
                                const titleTop = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ');
                                const titleBottom = titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ');

                                return (
                                    <motion.div
                                        key={service.id}
                                        whileHover={{ scale: 1.02 }}
                                        className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-3xl hover:${theme.shadow} transition-all cursor-pointer min-h-[350px] flex flex-col justify-between`}
                                    >
                                        {/* Un-feature Button (Editable Mode Only) */}
                                        {editable && (
                                            <button
                                                onClick={async (e) => {
                                                    e.preventDefault(); // Prevent navigation
                                                    if (window.confirm(`Remove "${service.title}" from Homepage? (This will NOT delete the service)`)) {
                                                        try {
                                                            await updateDoc(doc(db, 'services', service.id), { is_featured: false });
                                                            setServices(prev => prev.filter(s => s.id !== service.id));
                                                        } catch (err) {
                                                            alert("Failed to remove service.");
                                                            console.error(err);
                                                        }
                                                    }
                                                }}
                                                className="absolute top-8 left-8 p-3 bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white rounded-full z-20 transition-all opacity-0 group-hover:opacity-100"
                                                title="Remove from Homepage"
                                            >
                                                <Trash2 className="w-6 h-6" />
                                            </button>
                                        )}

                                        <motion.div 
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                            className={`absolute top-8 right-8 p-3 bg-gradient-to-br ${theme.glow} rounded-full group-hover:scale-110 transition-transform duration-500 ${theme.iconColor}`}
                                        >
                                            {getIcon(service.icon)}
                                        </motion.div>
                                        
                                        <motion.div 
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                                            className="mt-8 mb-8 relative z-10"
                                        >
                                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-2">
                                                {titleTop || service.title}
                                            </h3>
                                            {titleBottom && (
                                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                                                    {titleBottom}
                                                </h3>
                                            )}
                                        </motion.div>

                                        <motion.p 
                                            animate={{ y: [0, -3, 0] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                            className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed font-light relative z-10 line-clamp-3"
                                        >
                                            {service.description}
                                        </motion.p>
                                        <Link to={`/services/${service.category}/${service.slug}`} className="relative z-10">
                                            <Button size="lg" className={`rounded-full bg-transparent border ${theme.border} text-sm px-10 py-5 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group/btn w-fit shadow-lg ${theme.shadow}`}>
                                                View more <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-${theme.color}-500/10 blur-3xl -z-10 group-hover:bg-${theme.color}-500/20 transition-all`}></div>
                                    </motion.div>
                                );
                            })}

                        {/* Add Existing Service Card (CMS Mode Only) */}
                        {editable && (
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                onClick={async () => {
                                    const title = prompt("Enter the name of the EXISTING Service to feature:");
                                    if (title) {
                                        // 1. Find the service
                                        try {
                                            const q = query(
                                                collection(db, 'services'),
                                                // Firestore doesn't have ilike. So we might need to fetch all and filter client side
                                                // Or rely on exact match. We will fetch all and filter for search flexibility
                                            );
                                            const snap = await getDocs(q);
                                            const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));

                                            // ilike equivalent in JS
                                            const matched = data.filter(d => d.title && d.title.toLowerCase().includes(title.trim().toLowerCase()));

                                            if (matched.length > 0) {
                                                const serviceToAdd = matched[0];

                                                await updateDoc(doc(db, 'services', serviceToAdd.id), { is_featured: true });

                                                if (!services.some(s => s.id === serviceToAdd.id)) {
                                                    setServices([...services, serviceToAdd]);
                                                } else {
                                                    alert("This service is already featured!");
                                                }
                                            } else {
                                                alert(`Service "${title}" not found. Please create it in the Admin Dashboard first.`);
                                            }
                                        } catch (error) {
                                            alert("Error handling service featuring: " + error.message);
                                        }
                                    }
                                }}
                                className="group relative overflow-hidden rounded-3xl bg-blue-600/5 backdrop-blur-md border-2 border-dashed border-blue-500/30 p-8 shadow-inner hover:bg-blue-600/10 transition-all cursor-pointer min-h-[350px] flex flex-col items-center justify-center gap-6 text-center"
                            >
                                <div className="p-6 bg-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                                    <Plus className="w-12 h-12 text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">
                                    Add Existing Service
                                </h3>
                                <p className="text-slate-500 max-w-xs text-sm">
                                    Enter the name of an existing service to display it here.
                                </p>
                            </motion.div>
                        )}

                        {services.length === 0 && (
                            <div className="text-center text-slate-500 py-10">Loading services...</div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
