import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const start = 0;
        // Parse the end value to a number, removing non-numeric characters for calculation
        const endNum = parseInt(end.toString().replace(/\D/g, ''));
        const suffix = end.toString().replace(/[0-9]/g, '');

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
            {count}{end.toString().replace(/[0-9]/g, '')}
        </span>
    );
};

const Statistics = ({ items }) => {
    const defaultStats = [
        { value: "50+", label: "Projects Completed" },
        { value: "100+", label: "Happy Clients" },
        { value: "2+", label: "Years Experience" },
        { value: "150+", label: "Team Members" }
    ];

    const statsToDisplay = items || defaultStats;

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">

                {/* Description Text from Screenshot */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                        Lasak Technologies is committed to delivering top-quality services, ensuring excellence through our ISO certification. This certification reflects our dedication to maintaining the highest industry standards in every project we undertake.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {statsToDisplay.map((stat, index) => {
                        // Highlight the second card (Projects) or based on content if dynamic
                        // The screenshot has the 2nd card (150+ Projects) highlighted in bright blue
                        const isHighlighted = index === 1;

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
                                    <AnimatedCounter end={stat.value} />
                                </h3>
                                <p className={`text-sm font-bold uppercase tracking-widest ${isHighlighted ? 'text-blue-100' : 'text-slate-300'}`}>
                                    {stat.label}
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
