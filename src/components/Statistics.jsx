import React, { useState, useEffect } from 'react';
import { CMSText } from './cms';

const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const start = 0;
        // Parse the end value to a number, removing non-numeric characters for calculation
        // If end is not a string (e.g. initially loading), handle gracefully
        const strEnd = end ? end.toString() : "0";
        const endNum = parseInt(strEnd.replace(/\D/g, '')) || 0;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (endNum - start) + start));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [end, duration]);

    return (
        <span>
            {count}{end ? end.toString().replace(/[0-9]/g, '') : '+'}
        </span>
    );
};

const Statistics = ({ editable = false }) => {

    // We statically define these IDs for the CMS
    const statsConfig = [
        { id: "stats_1", labelId: "stats_label_1", defaultVal: "100+", defaultLabel: "Clients" },
        { id: "stats_2", labelId: "stats_label_2", defaultVal: "150+", defaultLabel: "Projects", highlighted: true },
        { id: "stats_3", labelId: "stats_label_3", defaultVal: "25+", defaultLabel: "Team Members" },
        { id: "stats_4", labelId: "stats_label_4", defaultVal: "3+", defaultLabel: "Years Of Experience" }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">

                {/* Description Text */}
                <div className="max-w-5xl mx-auto mb-20 text-center px-4">
                    <div className="inline-block p-1 bg-gradient-to-r from-blue-500/20 via-blue-500/0 to-blue-500/20 rounded-full mb-6 w-32 h-1"></div>
                    <div className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed drop-shadow-sm">
                        "<CMSText id="stats_description" defaultText="Lasak Technologies is committed to delivering top-quality services, ensuring excellence through our ISO certification. This certification reflects our dedication to maintaining the highest industry standards in every project we undertake." editable={editable} />"
                    </div>
                    <div className="inline-block p-1 bg-gradient-to-r from-blue-500/20 via-blue-500/0 to-blue-500/20 rounded-full mt-6 w-32 h-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {statsConfig.map((stat, index) => {
                        const isHighlighted = stat.highlighted;

                        return (
                            <div
                                key={index}
                                className={`
                                    relative p-8 rounded-[2rem] flex flex-col justify-center min-h-[220px] overflow-hidden group transition-all duration-300
                                    ${isHighlighted
                                        ? 'bg-[#4f46e5] text-white shadow-xl shadow-blue-500/20'
                                        : 'bg-[#1e2333] text-white border border-white/5 hover:border-white/10'
                                    }
                                `}
                            >
                                {/* Dot Indicator */}
                                <div className={`absolute top-6 right-6 w-3 h-3 rounded-full ${isHighlighted ? 'bg-white' : 'bg-white'} opacity-90`}></div>

                                <h3 className="text-5xl font-black mb-3 tracking-tight">
                                    {editable ? (
                                        <CMSText id={stat.id} defaultText={stat.defaultVal} editable={true} />
                                    ) : (
                                        // For view mode, we ideally want the animation. 
                                        // But AnimatedCounter needs a number. 
                                        // Complex solution: Check if we can fetch value inside AnimatedCounter or wrap it.
                                        // Simple solution for now: Just show the text using CMSText to ensure consistency.
                                        // Ideally, we'd fetch the value, feed it to AnimatedCounter.
                                        // Let's use CMSText for now to ensure it works, we can add animation back if needed by creating a CMSAnimatedCounter.
                                        <CMSText id={stat.id} defaultText={stat.defaultVal} editable={false} />
                                    )}
                                </h3>
                                <p className={`text-sm font-bold uppercase tracking-widest ${isHighlighted ? 'text-blue-100' : 'text-slate-300'}`}>
                                    <CMSText id={stat.labelId} defaultText={stat.defaultLabel} editable={editable} />
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
