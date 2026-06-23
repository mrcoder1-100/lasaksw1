import React from 'react';
import { Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionMission = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 shadow-2xl"
                >

                    {/* Abstract Background Elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl opacity-50 mix-blend-overlay"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl opacity-50 mix-blend-overlay"></div>
                        {/* 3D Sphere placeholders */}
                        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-40 animate-pulse"></div>
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left: Title */}
                        <div className="text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-2">
                                Vision & Mission
                            </h2>
                            <h3 className="text-2xl md:text-4xl font-light text-blue-200 mb-6">
                                of our company
                            </h3>
                            <div className="w-20 h-1 bg-white/20 rounded-full"></div>
                        </div>

                        {/* Right: Cards */}
                        <div className="space-y-8">

                            {/* Vision */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col sm:flex-row gap-6 items-start bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors"
                            >
                                <div className="p-3 bg-white/20 rounded-xl text-white shrink-0">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Vision</h4>
                                    <p className="text-blue-50 leading-relaxed text-sm md:text-base">
                                        To be a global leader in technology solutions, driving digital transformation and empowering businesses to achieve their full potential.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col sm:flex-row gap-6 items-start bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors"
                            >
                                <div className="p-3 bg-white/20 rounded-xl text-white shrink-0">
                                    <Rocket className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Mission</h4>
                                    <p className="text-blue-50 leading-relaxed text-sm md:text-base">
                                        Our mission is to deliver exceptional value by providing cutting-edge technology services and building long-lasting partnerships based on trust.
                                    </p>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionMission;
