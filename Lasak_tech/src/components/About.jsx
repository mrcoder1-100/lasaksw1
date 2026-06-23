import React from 'react';
import Button from './ui/Button';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-200">
                        {/* Placeholder for About Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            About Us Image
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-block rounded-lg bg-blue-900/50 px-3 py-1 text-sm text-secondary font-medium border border-blue-800">
                            About Us
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                            A Journey of Vision and Commitment
                        </h2>
                        <p className="text-lg text-slate-300">
                            It has been 3 years since we began our journey—a journey fueled by vision, commitment, and the drive to deliver meaningful solutions.
                        </p>
                        <p className="text-slate-400">
                            We are a trusted name in Mechanical and Civil CAD design, process automation, website development, and digital marketing. Our diverse expertise allows us to offer comprehensive solutions that drive growth and efficiency for our clients.
                        </p>
                        <div className="pt-4">
                            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-white">Read Our Story</Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
