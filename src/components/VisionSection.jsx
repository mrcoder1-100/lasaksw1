import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import Button from './ui/Button';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { CMSText, CMSVideo } from './cms';

const Counter = ({ from = 0, to, duration = 2, suffix = "+", cmsKey }) => {
    const nodeRef = useRef();
    const [finalTo, setFinalTo] = useState(to);

    useEffect(() => {
        if (cmsKey) {
            const fetch = async () => {
                try {
                    const docSnap = await getDoc(doc(db, 'site_content', cmsKey));
                    if (docSnap.exists() && docSnap.data().value !== undefined) {
                        const val = Number(docSnap.data().value);
                        if (!isNaN(val)) setFinalTo(val);
                    }
                } catch (err) { console.error(err); }
            }
            fetch();
        }
    }, [cmsKey]);

    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        const controls = animate(from, finalTo, {
            duration: duration,
            ease: "easeOut",
            onUpdate: (value) => {
                node.textContent = Math.round(value) + suffix;
            }
        });

        return () => controls.stop();
    }, [from, finalTo, duration, inView, suffix]);

    return <span ref={nodeRef} className="tabular-nums">{from}{suffix}</span>;
};

const VisionSection = ({ editable = false }) => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-[#0a1120]">
            {/* Background Glow (CSS Only) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>
            <div className="container mx-auto relative z-10 px-4 md:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Title and Image (Sticky) */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight uppercase">
                                <CMSText id="vision_title" defaultText="We take your vision to the next level" editable={editable} />
                            </h2>
                        </div>

                        <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-blue-900/20 border border-white/10 aspect-video group shadow-3xl">
                            {/* Visual Placeholder for VR Headset Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1120]/80 via-transparent to-blue-500/20 z-10 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none"></div>
                            <CMSVideo 
                                id="vision_video" 
                                defaultSrc="/assets/Home%20video.mp4" 
                                className="absolute inset-0 w-full h-full object-cover opacity-90" 
                                editable={editable} 
                            />

                            {/* Animated particles overlay placeholder */}
                            <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right Column: Text and Stats */}
                    <div className="flex flex-col justify-center h-full pt-4">
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
                            "<CMSText id="vision_desc" defaultText="It has been 5 years since we began our journey — a journey fueled by vision, commitment, and the drive to deliver meaningful solutions. From humble beginnings to a trusted name in Mechanical and Civil CAD design, process automation, website development, and digital marketing, Lasak Technologies has consistently pushed boundaries to help our clients stay ahead." editable={editable} />"
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                            {/* Stat Card 1 */}
                            <div className="bg-[#1e293b]/50 border border-white/5 p-8 rounded-3xl flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:bg-[#1e293b]/80 transition-all hover:border-blue-500/30">
                                <div className="absolute top-4 right-4 text-white/20 text-xl group-hover:text-blue-500/50 transition-colors">•</div>
                                <h3 className="text-5xl font-black text-white mb-3 tracking-tighter">
                                    {editable ? <CMSText id="stat_1_count" defaultText="50" editable={true} /> : <Counter to={50} cmsKey="stat_1_count" />}
                                </h3>
                                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] leading-relaxed font-bold">
                                    <CMSText id="stat_1_label" defaultText="Marketing that connects, converts, and delivers" editable={editable} />
                                </p>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="bg-gradient-to-br from-[#4f46e5] to-[#3b82f6] border border-blue-400/20 p-8 rounded-3xl flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 transition-all">
                                <div className="absolute top-4 right-4 text-white/40 text-xl">•</div>
                                <h3 className="text-5xl font-black text-white mb-3 tracking-tighter">
                                    {editable ? <CMSText id="stat_2_count" defaultText="100" editable={true} /> : <Counter to={100} cmsKey="stat_2_count" />}
                                </h3>
                                <p className="text-blue-100 text-xs uppercase tracking-[0.2em] leading-relaxed font-bold">
                                    <CMSText id="stat_2_label" defaultText="Engineering precision that powers real-world solutions" editable={editable} />
                                </p>
                            </div>

                            {/* Stat Card 3 */}
                            <div className="bg-[#1e293b]/50 border border-white/5 p-8 rounded-3xl flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:bg-[#1e293b]/80 transition-all hover:border-blue-500/30">
                                <div className="absolute top-4 right-4 text-white/20 text-xl group-hover:text-blue-500/50 transition-colors">•</div>
                                <h3 className="text-5xl font-black text-white mb-3 tracking-tighter">
                                    {editable ? <CMSText id="stat_3_count" defaultText="2" editable={true} suffix="" /> : <Counter to={2} suffix="" cmsKey="stat_3_count" />}
                                </h3>
                                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] leading-relaxed font-bold">
                                    <CMSText id="stat_3_label" defaultText="Worldwide projects. One trusted standard" editable={editable} />
                                </p>
                            </div>

                            {/* Stat Card 4 */}
                            <div className="bg-[#1e293b]/50 border border-white/5 p-8 rounded-3xl flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:bg-[#1e293b]/80 transition-all hover:border-blue-500/30">
                                <div className="absolute top-4 right-4 text-white/20 text-xl group-hover:text-blue-500/50 transition-colors">•</div>
                                <h3 className="text-5xl font-black text-white mb-3 tracking-tighter">
                                    {editable ? <CMSText id="stat_4_count" defaultText="150" editable={true} /> : <Counter to={150} cmsKey="stat_4_count" />}
                                </h3>
                                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] leading-relaxed font-bold">
                                    <CMSText id="stat_4_label" defaultText="Success stories start with satisfied clients" editable={editable} />
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
