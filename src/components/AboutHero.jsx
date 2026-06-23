import React from 'react';
import { motion } from 'framer-motion';
import { CMSText, CMSImage } from './cms';

const AboutHero = ({ editable = false }) => {
    return (
        <section className="relative pt-40 md:pt-52 pb-20 md:pb-32 overflow-hidden flex justify-center items-center bg-[#0a1120]">
            {/* Background Glows (CSS Only) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Framed Image Overlay */}
            <div className="absolute inset-0 z-10 w-full h-full overflow-hidden opacity-60">
                <CMSImage
                    id="about_hero_image"
                    defaultSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                    alt="Team"
                    className="w-full h-full object-cover"
                    editable={editable}
                />
                <div className="absolute inset-0 bg-blue-950/40 pointer-events-none"></div>
            </div>

            <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase mb-8 leading-tight drop-shadow-2xl"
                    >
                        <CMSText id="about_hero_title_1" defaultText="Innovating for a" editable={editable} /><br />
                        <span className="text-blue-500 text-outline-blue font-black"><CMSText id="about_hero_title_2" defaultText="Better Future" editable={editable} /></span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto drop-shadow-md"
                    >
                        "<CMSText id="about_hero_desc" defaultText="At Lasak Technologies, we are driven by a passion for innovation and a commitment to excellence. We build solutions that empower businesses to thrive in the digital age, creating a lasting impact on industries and communities alike." editable={editable} />"
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
