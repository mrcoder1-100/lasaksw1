import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover opacity-40 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-transparent"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight"
                    >
                        Innovating for a<br />
                        <span className="text-blue-400">Better Future</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
                    >
                        At Lasak Technologies, we are driven by a passion for innovation and a commitment to excellence.
                        We build solutions that empower businesses to thrive in the digital age, creating a lasting impact on industries and communities alike.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
