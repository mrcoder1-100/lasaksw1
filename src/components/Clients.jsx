import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CMSText } from './cms';

const ClientLogo = ({ logo }) => {
    const [imgErr, setImgErr] = useState(false);

    return (
        <div className={`flex-shrink-0 mx-4 md:mx-6 relative group ${imgErr ? 'hidden' : ''}`}>
            <div className="w-24 h-16 md:w-36 md:h-24 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center p-3 md:p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                <img
                    src={logo.image_url}
                    alt="Client Logo"
                    className={`w-full h-full object-contain transition-all duration-500`}
                    onError={() => setImgErr(true)}
                />
            </div>
        </div>
    );
};

const MarqueeRow = ({ logos, direction = 1, speed = 30, className = "" }) => {
    // Duplicate logos to ensure seamless loop
    const displayLogos = logos.length < 10 ? [...logos, ...logos, ...logos, ...logos] : [...logos, ...logos];

    return (
        <div className={`flex overflow-hidden py-4 select-none ${className}`}>
            <motion.div
                animate={{
                    x: direction > 0 ? [-2000, 0] : [0, -2000],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
                className="flex whitespace-nowrap"
            >
                {displayLogos.map((logo, index) => (
                    <ClientLogo key={`${logo.id}-${index}`} logo={logo} />
                ))}
            </motion.div>
        </div>
    );
};

const Clients = ({ editable = false }) => {
    // Hardcoded logos to display automatically entirely from code
    const defaultLogos = Array.from({ length: 20 }, (_, i) => {
        const num = i + 1;
        const ext = num <= 5 ? 'png' : 'jpeg';
        return `/assets/client%20logo%20${num}.${ext}`;
    });

    const clients = defaultLogos.map((url, i) => ({ id: `local-${i}`, image_url: url }));

    return (
        <section className="py-24 relative overflow-hidden bg-[#0a1120]">
            {/* Background Glows (CSS Only) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto relative z-10 px-4 md:px-6 mb-16">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-8xl font-black text-center text-white uppercase tracking-tight leading-none">
                            <CMSText id="clients_title_1" defaultText="OUR" editable={editable} /> <span className="text-blue-500 text-outline-blue"><CMSText id="clients_title_2" defaultText="CLIENTS" editable={editable} /></span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-[2px] w-24 bg-blue-500 mt-6 md:mt-8 rounded-full"
                    />
                </div>
            </div>

            {/* Marquee Container or Grid */}
            <div className="relative z-10">
                {/* Edge Fades */}
                {!editable && (
                    <>
                        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0a1120] to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0a1120] to-transparent z-20 pointer-events-none" />
                    </>
                )}

                <div className="flex flex-wrap justify-center gap-4 py-4">
                    {editable ? (
                        <div className="flex flex-wrap justify-center gap-4 py-4">
                            {clients.map((logo, index) => (
                                <ClientLogo key={logo.id || index} logo={logo} />
                            ))}
                            <div className="w-full text-center mt-4">
                                <p className="text-yellow-500 text-sm font-bold">Client logos are now hardcoded in code and cannot be edited via database.</p>
                            </div>
                        </div>
                    ) : (
                        clients.length > 0 ? (
                            <div className="w-full">
                                <MarqueeRow logos={clients} direction={1} speed={60} />
                                <MarqueeRow logos={clients} direction={-1} speed={70} />
                                <MarqueeRow logos={clients} direction={1} speed={65} className="hidden md:flex" />
                            </div>
                        ) : (
                            <div className="text-center text-slate-500 py-10 w-full">No clients available.</div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Clients;
