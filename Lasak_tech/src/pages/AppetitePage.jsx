import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Clients from '../components/Clients';

const AppetitePage = () => {
    return (
        <div className="min-h-screen pt-24 flex flex-col justify-between">
            {/* Hero Section */}
            <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden min-h-[60vh]">

                {/* Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

                {/* 3D Sphere Representations (CSS) */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 md:left-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-900 shadow-xl opacity-80 blur-sm"
                ></motion.div>
                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-40 right-10 md:right-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-900 shadow-xl opacity-60 blur-md"
                ></motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Lasak Appetite</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl">
                        We're Launching <br /> Soon
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                        We're working hard to bring you something amazing. <br className="hidden md:block" /> Stay tuned for the launch.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-2xl animate-bounce">
                        <Rocket className="w-8 h-8" />
                        <span>We Will Be Live Soon!</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-2">We are live now!</p>

                </motion.div>
            </section>

            {/* Clients / Footer Area */}
            <div className="pb-12">
                <Clients />
            </div>
        </div>
    );
};

export default AppetitePage;
