import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Clients from '../components/Clients';

const Wrapper = ({ link, children }) => link ? <Link to={link}>{children}</Link> : <>{children}</>;

const ProductsPage = () => {
    const products = [
        { id: 1, title: "Industrial Conveyor Solutions", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" },
        { id: 2, title: "Automated Process Lines", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop" },
        { id: 3, title: "CNC Machined Parts", image: "https://images.unsplash.com/photo-1622979135228-5b7430dc4f9f?q=80&w=2670&auto=format&fit=crop" },
        { id: 4, title: "Robotic Arms Assembly", image: "https://images.unsplash.com/photo-1612815154858-60aa4c4603e1?q=80&w=2670&auto=format&fit=crop" },
        { id: 5, title: "Precision Gear Systems", image: "https://images.unsplash.com/photo-1531297461136-82lw9z2x3b8r?q=80&w=2670&auto=format&fit=crop" },
        { id: 6, title: "Custom Textile Machinery", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" },
        { id: 7, title: "Heavy Duty Compressors", image: "https://images.unsplash.com/photo-1580983556046-6598cc639e4a?q=80&w=2670&auto=format&fit=crop" },
        { id: 8, title: "Smart Factory Integration", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2670&auto=format&fit=crop" },
        { id: 9, title: "Ergonomic Office Solutions", image: "https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=2670&auto=format&fit=crop" },
        { id: 10, title: "Medical Equipment Design", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2670&auto=format&fit=crop" },
        { id: 11, title: "AI Powered Process Automation", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop", link: "/services/ai-automation" },
    ];

    return (
        <div className="min-h-screen pt-20">

            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider max-w-4xl mx-auto leading-tight"
                    >
                        A Showcase of Our Creative Excellence and Innovation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-blue-200 uppercase tracking-widest text-sm"
                    >
                        Lasak Technologies
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 aspect-[4/3] cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
                            >
                                <Wrapper link={product.link}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase">{product.title}</h3>
                                        <p className="text-slate-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project Details</p>
                                    </div>
                                </Wrapper>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900/20 to-transparent border-t border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Commitment to Quality</h2>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                Quality is at the heart of everything we do. We adhere to strict global standards to ensure our products and services exceed expectations. Our commitment to excellence is unwavering.
                            </p>
                            <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder Certification Logos */}
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2"><span className="text-xs font-bold text-black text-center">ISO 9001</span></div>
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2"><span className="text-xs font-bold text-black text-center">IAF</span></div>
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2"><span className="text-xs font-bold text-black text-center">UKAS</span></div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-blue-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 relative overflow-hidden">
                                <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Trusted Standard</h3>
                                <p className="text-blue-100 relative z-10">We deliver meaningful solutions that are fueled by vision and commitment.</p>
                                <div className="mt-8 relative z-10">
                                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop" alt="Quality" className="rounded-xl shadow-lg border border-white/20" />
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

export default ProductsPage;
