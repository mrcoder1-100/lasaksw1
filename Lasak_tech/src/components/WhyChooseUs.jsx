import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
    {
        title: 'Expert Team',
        description: 'Our developers and designers are industry veterans with a proven track record.'
    },
    {
        title: 'Agile Methodology',
        description: 'We adapt to changes quickly and deliver regular updates to keep you in the loop.'
    },
    {
        title: '24/7 Support',
        description: 'We provide round-the-clock support to ensure your systems are always running.'
    },
    {
        title: 'Cost Effective',
        description: 'Competitive pricing without compromising on quality or performance.'
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="bg-slate-900 py-20 md:py-32 text-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Why Choose Lasak Tech?
                        </h2>
                        <p className="max-w-[600px] text-slate-400 md:text-xl/relaxed">
                            We don't just write code; we build partnerships. Here is why clients trust us with their critical projects.
                        </p>
                        <ul className="grid gap-6 py-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex gap-4">
                                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                                    <div>
                                        <h3 className="font-bold">{feature.title}</h3>
                                        <p className="text-slate-400">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative aspect-square overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50 p-8">
                        {/* Abstract visual or stats */}
                        <div className="h-full w-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="text-6xl font-bold text-accent">98%</div>
                            <div className="text-xl font-medium">Client Satisfaction</div>
                            <div className="w-16 h-1 bg-slate-700 rounded-full"></div>
                            <div className="text-6xl font-bold text-accent mt-8">50+</div>
                            <div className="text-xl font-medium">Projects Delivered</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
