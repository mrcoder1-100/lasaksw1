import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Settings, Database, Activity, Cpu, Shield, Cog, BarChart, Server } from 'lucide-react';
import { CMSText, CMSIcon } from './cms';
import { Link } from 'react-router-dom';

const appImages = [
    { icon: Cloud, alt: 'Cloud', delay: 0 },
    { icon: Settings, alt: 'Mechanical', delay: 2 },
    { icon: Database, alt: 'Database', delay: 4 },
    { icon: Activity, alt: 'Automation', delay: 6 },
    { icon: Cpu, alt: 'Chip', delay: 8 },
    { icon: Shield, alt: 'Security', delay: 10 },
    { icon: Cog, alt: 'Gears', delay: 12 },
    { icon: BarChart, alt: 'Analysis', delay: 14 },
    { icon: Server, alt: 'Server', delay: 16 },
];


const OrbitPath = ({ radius, duration, reverse = false }) => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="absolute w-[120%] h-[120%]" style={{ overflow: 'visible' }}>
            <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                stroke="rgba(59, 130, 246, 0.15)"
                strokeWidth="1"
                className="opacity-50"
            />
        </svg>
    </div>
);

const CharacterReveal = ({ text, delay = 0, className = "" }) => {
    return (
        <span className={`inline-flex ${className}`} style={{ perspective: "1000px" }}>
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50, z: -100, filter: 'blur(10px)', rotateX: 45 }}
                    animate={{
                        opacity: 1,
                        y: [0, -8, 0],
                        z: 0,
                        filter: 'blur(0px)',
                        rotateX: 0
                    }}
                    whileHover={{
                        scale: 1.2,
                        z: 100,
                        y: -15,
                        rotateX: 15,
                        rotateY: 15,
                        transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    transition={{
                        opacity: { duration: 1, delay: delay + (i * 0.08) },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: delay + (i * 0.1)
                        },
                        default: {
                            duration: 0.8,
                            delay: delay + (i * 0.08),
                            ease: [0.2, 0.65, 0.3, 0.9],
                        }
                    }}
                    className="inline-block cursor-pointer select-none"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
};

const Hero = ({ editable = false }) => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#0a0f1e] py-16 md:py-24 lg:py-32 text-white min-h-[100svh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-center"
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&family=Bricolage+Grotesque:wght@800&family=Syne:wght@800&display=swap');
                
                .shimmer-text {
                    background: linear-gradient(
                        90deg,
                        rgba(255,255,255,0) 0%,
                        rgba(255,255,255,0.8) 50%,
                        rgba(255,255,255,0) 100%
                    );
                    background-size: 200% auto;
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    animation: shimmer 4s linear infinite;
                }

                @keyframes shimmer {
                    to { background-position: 200% center; }
                }

                .liquid-shimmer {
                    background: linear-gradient(
                        -45deg, 
                        #fff 30%, 
                        #60a5fa 50%, 
                        #fff 70%
                    );
                    background-size: 400% 400%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: liquid 8s ease infinite;
                }

                @keyframes liquid {
                    0% { background-position: 0% 50% }
                    50% { background-position: 100% 50% }
                    100% { background-position: 0% 50% }
                }

                .btn-shimmer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(
                        120deg,
                        transparent,
                        rgba(255, 255, 255, 0.4),
                        transparent
                    );
                    transition: all 0.6s;
                }

                .btn-shimmer:hover::before {
                    left: 100%;
                }

                .elevated-text {
                    text-shadow: 
                        0 1px 0 #ccc,
                        0 2px 0 #c9c9c9,
                        0 3px 0 #bbb,
                        0 4px 0 #b9b9b9,
                        0 5px 0 #aaa,
                        0 6px 1px rgba(0,0,0,.1),
                        0 0 5px rgba(0,0,0,.1),
                        0 1px 3px rgba(0,0,0,.3),
                        0 3px 5px rgba(0,0,0,.2),
                        0 5px 10px rgba(0,0,0,.25),
                        0 10px 10px rgba(0,0,0,.2),
                        0 20px 20px rgba(0,0,0,.15);
                }

                .premium-glow {
                    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
                }
            `}</style>

            {/* Premium Code-Only Background Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Dynamic Glowing Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"
                ></motion.div>

                {/* Technical Drift Lines */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] bg-blue-400/10"
                        style={{
                            width: Math.random() * 300 + 100,
                            top: `${Math.random() * 100}%`,
                            left: `-20%`,
                        }}
                        animate={{
                            x: ['0vw', '120vw'],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: 'linear'
                        }}
                    />
                ))}

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -40, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full"
                ></motion.div>

                {/* Noise and Gradient Overlays */}
                <div className="absolute inset-0 bg-[#0a0f1e]/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-transparent to-[#0a0f1e]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
            </div>

            {/* Pure Code-Driven Orbital System */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="relative w-full h-full max-w-7xl flex items-center justify-center">
                    {/* SVG Orbital Rings */}
                    <OrbitPath radius={300} duration={40} />
                    <OrbitPath radius={450} duration={60} />

                    {/* Rotating Icon Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {appImages.map((item, index) => {
                            const isInner = index % 2 === 0;
                            const radius = isInner ? 300 : 450;
                            const duration = isInner ? 50 : 70;
                            const angleStep = 360 / (isInner ? 5 : 4);
                            const initialAngle = (index * angleStep);

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute"
                                    animate={{
                                        rotate: [initialAngle, initialAngle + (isInner ? 360 : -360)],
                                    }}
                                    transition={{
                                        duration: duration,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{
                                        width: radius * 2,
                                        height: radius * 2,
                                        originX: "50%",
                                        originY: "50%",
                                    }}
                                >
                                    <div
                                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-20 lg:h-20"
                                    >
                                        <motion.div
                                            className="w-full h-full p-3 lg:p-4 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center"
                                            animate={{
                                                rotate: [(-initialAngle), (-(initialAngle + (isInner ? 360 : -360)))]
                                            }}
                                            transition={{
                                                duration: duration,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        >
                                            <item.icon className="w-full h-full text-blue-400 drop-shadow-[0_0_8px_rgba(186,230,253,0.5)]" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Central Minimalist Content */}
            <div className="w-full max-w-7xl relative z-10 pointer-events-auto mt-20">
                <div className="flex flex-col items-center space-y-2">
                    <h1
                        className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white uppercase selection:bg-blue-500/30 leading-none elevated-text premium-glow"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            letterSpacing: "-0.05em"
                        }}
                    >
                        <CharacterReveal text="Innovation" delay={0.2} />
                    </h1>

                    <h1
                        className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase selection:bg-blue-500/30 leading-none liquid-shimmer elevated-text"
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                            letterSpacing: "-0.02em"
                        }}
                    >
                        <CharacterReveal text="Creativity" delay={0.6} />
                    </h1>

                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotateX: -5,
                                rotateY: 5,
                                z: 50
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{ perspective: "1000px" }}
                        >
                            <Link
                                to="/services"
                                className="btn-shimmer relative bg-blue-600/90 hover:bg-blue-600 px-10 py-5 rounded-full flex items-center gap-4 group transition-all shadow-[0_20px_50px_rgba(37,99,235,0.5)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.7)] border border-blue-400/40 backdrop-blur-md overflow-hidden"
                            >
                                <span
                                    className="text-2xl md:text-4xl font-bold text-white uppercase"
                                    style={{
                                        fontFamily: "'Syne', sans-serif"
                                    }}
                                >
                                    <CMSText id="home_hero_effect" defaultText="Effect" editable={editable} />
                                </span>
                                <ArrowRight className="text-white w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
