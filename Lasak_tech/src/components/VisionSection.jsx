import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import Button from './ui/Button';

const Counter = ({ from = 0, to, duration = 2, suffix = "+" }) => {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        const controls = animate(from, to, {
            duration: duration,
            ease: "easeOut",
            onUpdate: (value) => {
                node.textContent = Math.round(value) + suffix;
            }
        });

        return () => controls.stop();
    }, [from, to, duration, inView, suffix]);

    return <span ref={nodeRef} className="tabular-nums">{from}{suffix}</span>;
};

const VisionSection = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Title and Image */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                                We take your vision to the next level
                            </h2>
                        </div>

                        <div className="relative w-full overflow-hidden rounded-2xl bg-blue-900/20 border border-white/10 aspect-[4/3] group">
                            {/* Visual Placeholder for VR Headset Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
                            {/* Video Background */}
                            <video
                                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                poster=""
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source type="video/mp4" src="https://lasak.in/wp-content/uploads/2025/09/Untitled-design.mp4#385" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Animated particles overlay placeholder */}
                            <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right Column: Text and Stats */}
                    <div className="flex flex-col justify-center h-full pt-4">
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
                            It has been 3 years since we began our journey — a journey fueled by vision, commitment, and the drive to deliver meaningful solutions. From humble beginnings to a trusted name in Mechanical and Civil CAD design, process automation, website development, and digital marketing, Lasak Technologies has consistently pushed boundaries to help our clients stay ahead.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                            {/* Stat Card 1 */}
                            <div className="bg-[#1e293b]/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:bg-[#1e293b]/80 transition-all hover:border-blue-500/30">
                                <div className="absolute top-4 right-4 text-white/20 text-xl group-hover:text-blue-500/50 transition-colors">•</div>
                                <h3 className="text-4xl font-bold text-white mb-3">
                                    <Counter to={50} />
                                </h3>
                                <p className="text-slate-400 text-xs uppercase tracking-wide leading-relaxed">
                                    Marketing that connects, converts, and delivers
                                </p>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="bg-gradient-to-br from-[#4f46e5] to-[#3b82f6] border border-blue-400/20 p-6 rounded-2xl flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                                <div className="absolute top-4 right-4 text-white/40 text-xl">•</div>
                                <h3 className="text-4xl font-bold text-white mb-3">
                                    <Counter to={100} />
                                </h3>
                                <p className="text-blue-100 text-xs uppercase tracking-wide leading-relaxed">
                                    Engineering precision that powers real-world solutions
                                </p>
                            </div>

                            {/* Stat Card 3 */}
                            <div className="bg-[#1e293b]/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:bg-[#1e293b]/80 transition-all hover:border-blue-500/30">
                                <div className="absolute top-4 right-4 text-white/20 text-xl group-hover:text-blue-500/50 transition-colors">•</div>
                                <h3 className="text-4xl font-bold text-white mb-3">
                                    <Counter to={2} />
                                </h3>
                                <p className="text-slate-400 text-xs uppercase tracking-wide leading-relaxed">
                                    Worldwide projects. One trusted standard
                                </p>
                            </div>

                            {/* Stat Card 4 */}
                            <div className="bg-[#1e293b]/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:bg-[#1e293b]/80 transition-all hover:border-blue-500/30">
                                <div className="absolute top-4 right-4 text-white/20 text-xl group-hover:text-blue-500/50 transition-colors">•</div>
                                <h3 className="text-4xl font-bold text-white mb-3">
                                    <Counter to={150} />
                                </h3>
                                <p className="text-slate-400 text-xs uppercase tracking-wide leading-relaxed">
                                    Success stories start with satisfied clients
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionSection;
