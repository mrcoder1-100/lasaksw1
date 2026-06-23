import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, PenTool, Box, Cog, CheckCircle, Rocket } from 'lucide-react';
import Clients from '../components/Clients';

const NewProductDevelopmentPage = () => {
    const services = [
        {
            title: "Market Research & Strategy",
            description: "Identifying market gaps and user needs to defining a winning product strategy.",
            icon: <Lightbulb size={32} />
        },
        {
            title: "Concept Generation",
            description: "Brainstorming and sketching innovative ideas that solve real problems.",
            icon: <PenTool size={32} />
        },
        {
            title: "3D CAD Modeling",
            description: "Creating detailed 3D models to visualize form, fit, and function before manufacturing.",
            icon: <Box size={32} />
        },
        {
            title: "Rapid Prototyping",
            description: "Building physical prototypes to test ergonomics, aesthetics, and functionality.",
            icon: <Cog size={32} />
        },
        {
            title: "Design for Manufacturing (DFM)",
            description: "Optimizing designs for efficient, cost-effective, and scalable manufacturing.",
            icon: <CheckCircle size={32} />
        },
        {
            title: "Production Support",
            description: "Assisting with tooling, sourcing, and quality control during the manufacturing process.",
            icon: <Rocket size={32} />
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden px-4">
                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        {/* 3D Sphere/Icon Placeholder */}
                        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-blue-400 to-blue-800 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)] mb-8 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500')] opacity-50 bg-cover mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black text-white tracking-widest uppercase mb-6 drop-shadow-xl"
                    >
                        New Product<br />Development
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-2xl text-lg md:text-xl"
                    >
                        From nap-kin sketch to shelf-ready product. We bring your ideas to life with a comprehensive end-to-end development process.
                    </motion.p>
                </div>
            </section>

            {/* Services List - Split Layout */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Title & Image */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="sticky top-24">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                                We Offer<br />
                                <span className="text-blue-500">New Product<br />Development</span><br />
                                Like
                            </h2>
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=600&auto=format&fit=crop" alt="Product Sketches" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vertical List of Service Cards */}
                    <div className="lg:col-span-8 space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1e293b] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-900/10 group"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-blue-600 p-10 md:p-24 text-center">
                        {/* Background with abstract blue spheres */}
                        <div className="absolute inset-0 bg-blue-600">
                            {/* Central Blue Sphere Graphic - Approximated with CSS radial gradient/image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80')] bg-cover bg-center rounded-full opacity-40 blur-sm mix-blend-overlay"></div>
                            {/* Additional blue overlay for text readability */}
                            <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-5xl mx-auto leading-tight">
                                Let’s Bring Your Mechanical Innovations to Life
                            </h2>
                            <p className="text-blue-50 max-w-4xl mx-auto mb-10 text-lg md:text-xl font-light leading-relaxed">
                                From concept to creation, LASAK Technologies guides your mechanical projects through every stage of new product development. We combine engineering expertise, advanced prototyping, and rigorous testing to deliver products that are reliable, efficient, and market-ready.
                                <br /><br />
                                Ready to transform your ideas into tangible, high-performance mechanical solutions?
                            </p>
                            <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                                Start Your Project <span className="text-xl">→</span>
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

export default NewProductDevelopmentPage;
