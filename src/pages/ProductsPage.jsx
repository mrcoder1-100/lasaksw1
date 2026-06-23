
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Utensils, ArrowRight, Cpu } from 'lucide-react';
import Clients from '../components/Clients';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import CrmDashboard from '../assets/crm-graphic.png';
import AppPreview from '../assets/appetite-graphic.png';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const q = query(collection(db, 'products'), orderBy('created_at', 'asc'));
                const snap = await getDocs(q);
                const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Database': return <Database size={200} className="text-blue-500" />;
            case 'Utensils': return <Utensils size={200} className="text-orange-500" />;
            case 'Cpu': return <Cpu size={200} className="text-indigo-500" />;
            default: return <Database size={200} className="text-blue-500" />;
        }
    };

    const getAssetImage = (name) => {
        if (name.includes('CRM')) return CrmDashboard;
        if (name.includes('Appetite')) return AppPreview;
        if (name.includes('Automation')) return CrmDashboard; // Using CRM as temporary placeholder for Automation
        return null;
    };

    if (loading) return <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center text-white">Loading...</div>;

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            <SEO
                title="Our Products - AI-Powered Solutions"
                description="Discover our innovative products including CRM systems, food delivery apps (Appetite), and industrial automation tools."
                canonical="/products"
            />
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden flex items-center justify-center min-h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase mb-8 leading-none tracking-tight">
                            Our <span className="text-blue-500">Products</span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                            "Innovation packaged for performance. Explore our AI-powered solutions designed to elevate your business operations."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-20">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`bg-[#1e293b]/30 border border-white/5 rounded-[3rem] p-8 md:p-12 overflow-hidden relative group transition-all ${product.tag === 'Coming Soon' ? 'hover:border-orange-500/30' : 'hover:border-blue-500/30'}`}
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                                {getIcon(product.icon)}
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 space-y-6">
                                    <div className={`inline-block px-4 py-2 rounded-full border ${product.tag === 'Coming Soon' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}>
                                        <span className="text-xs font-bold uppercase tracking-widest">{product.tag}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">{product.name}</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed">{product.description}</p>

                                    {product.tag === 'Coming Soon' ? (
                                        <Button className="mt-8 border border-white/10 hover:bg-white/5 text-slate-300 rounded-full px-8 py-3 font-bold cursor-not-allowed opacity-70">
                                            Join Waitlist
                                        </Button>
                                    ) : (
                                        <a
                                            href={product.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-bold flex items-center gap-2 w-fit transition-colors"
                                        >
                                            View Product <ArrowRight size={18} />
                                        </a>
                                    )}
                                </div>
                                <div className="md:w-1/2 w-full h-64 md:h-80 bg-black/20 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm overflow-hidden p-8">
                                    {product.image_url ? (
                                        <img src={product.image_url} alt={product.name} className="w-full h-full object-contain opacity-100 hover:scale-105 transition-transform duration-500" />
                                    ) : getAssetImage(product.name) ? (
                                        <img src={getAssetImage(product.name)} alt={product.name} className="w-full h-full object-contain opacity-100 hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="text-slate-700 italic">No image available</div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Clients />
        </div>
    );
};

export default ProductsPage;
