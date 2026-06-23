import React from 'react';

const GoalSection = () => {
    return (
        <section className="py-20 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] flex items-center justify-center text-center shadow-2xl">
                    {/* Background Image - Blue 3D Spheres */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1614730341194-75c60740a2d3?q=80&w=2000&auto=format&fit=crop"
                            alt="Blue 3D Spheres Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Fallback gradient/overlay in case image fails or to tint it to match exact blue */}
                        <div className="absolute inset-0 bg-blue-600/40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 mix-blend-multiply"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-5xl px-6">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter drop-shadow-2xl">
                            Our Mission is to Empower Your Business
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoalSection;
