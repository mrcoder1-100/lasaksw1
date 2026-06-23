import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import VisionSection from '../components/VisionSection';
import Services from '../components/Services';
import GoalSection from '../components/GoalSection';
import QualityAssurance from '../components/QualityAssurance';
import Clients from '../components/Clients';

const Home = () => {
    return (
        <div className="min-h-screen">

            {/* NEW HERO SECTION */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-[10%] w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto relative z-10 px-4 flex flex-col items-center gap-8 md:gap-12">

                    {/* INNOVATION */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-2 md:gap-4"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-white tracking-widest uppercase drop-shadow-lg">
                            Innovation
                        </h1>
                        <Lightbulb className="w-8 h-8 md:w-20 md:h-20 text-white animate-pulse" strokeWidth={1.5} />
                    </motion.div>

                    {/* CREATIVITY */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-white/90 tracking-widest uppercase drop-shadow-lg blur-[1px] hover:blur-none transition-all duration-500 cursor-default">
                            Creativity
                        </h1>
                        <Sparkles className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-6 h-6 md:w-10 md:h-10 text-blue-400 animate-spin-slow" />
                    </motion.div>

                    {/* EFFECT */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-blue-600 rounded-full px-8 py-3 md:px-20 md:py-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-2xl shadow-blue-600/50 cursor-pointer group">
                            <h1 className="text-2xl sm:text-4xl md:text-7xl font-black text-white tracking-widest uppercase flex items-center gap-2 md:gap-4">
                                Effect <ArrowRight className="w-6 h-6 md:w-16 md:h-16 group-hover:translate-x-4 transition-transform" />
                            </h1>
                        </div>
                    </motion.div>

                </div>

                {/* Floating 3D Spheres (CSS Only representation) */}
                <div className="hidden md:block absolute top-32 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-800 shadow-xl z-20 animate-bounce-slow"></div>
                <div className="hidden md:block absolute bottom-32 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-900 shadow-xl z-20 animate-float"></div>
            </section>

            {/* Vision Section with Stats */}
            <VisionSection />

            {/* Services Section */}
            <Services />

            {/* Goal Section */}
            <GoalSection />

            {/* Quality Assurance */}
            <QualityAssurance />

            {/* Clients */}
            <Clients />

        </div>
    );
};

export default Home;
