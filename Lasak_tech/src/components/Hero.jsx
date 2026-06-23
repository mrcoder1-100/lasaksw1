import React from 'react';
import Button from './ui/Button';
import { Rocket, Lightbulb } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-hero-start to-hero-end py-20 md:py-32 lg:py-40 text-white min-h-[90vh] flex items-center">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-3xl animate-pulse"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-3xl animate-pulse delay-1000"></div>
                {/* Floating elements mimicking the 3D spheres in the reference */}
                <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-blue-600 opacity-60 blur-sm animate-bounce duration-[3000ms]"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-blue-400 opacity-60 blur-sm animate-bounce duration-[4000ms]"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                <div className="space-y-2 mb-8 select-none">
                    {/* Stacked Keywords */}
                    <div className="relative group">
                        <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 block transform hover:scale-105 transition-transform duration-300">
                            INNOVATION
                        </span>
                        <Lightbulb className="absolute -right-8 top-1/2 -translate-y-1/2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12" />
                    </div>

                    <div className="relative group">
                        <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 block transform hover:scale-105 transition-transform duration-300">
                            CREATIVITY
                        </span>
                    </div>

                    <div className="relative group flex items-center justify-center gap-4">
                        <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 block transform hover:scale-105 transition-transform duration-300">
                            EFFECT
                        </span>
                        <div className="bg-secondary/20 p-3 rounded-full hover:bg-secondary/40 transition-colors">
                            <Rocket className="text-white w-8 h-8 md:w-12 md:h-12" />
                        </div>
                    </div>
                </div>

                <p className="max-w-[700px] text-lg text-slate-300 md:text-2xl font-light tracking-wide mb-10">
                    We take your vision to the next level
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90 text-white border-2 border-transparent">
                        Get Started
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 border-2 text-white border-white/20 hover:bg-white/10 hover:text-white bg-transparent">
                        Our Portfolio
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
