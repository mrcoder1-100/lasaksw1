import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, BarChart3, Palette, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Services = () => {
    return (
        <section id="services" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Fixed Content */}
                    <div className="sticky top-32 flex flex-col justify-center h-fit lg:col-span-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 uppercase"
                        >
                            We don't just bridge the digital gap<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">we build the highway to your future</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed"
                        >
                            At Lasak Technologies, we don't just build solutions; we engineer the future of your business. Our comprehensive services are designed to propel your brand forward with speed, precision, and scalability.
                        </motion.p>
                    </div>

                    {/* Right Column: Stacked Cards */}
                    <div className="flex flex-col space-y-6 lg:col-span-3">

                        {/* Card 1: Web Development */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer min-h-[350px] flex flex-col justify-between"
                        >
                            <div className="absolute top-8 right-8 p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                                <Code className="w-10 h-10 text-blue-400" />
                            </div>
                            <div className="mt-8 mb-8">
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-2">WEB</h3>
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">DEVELOPMENT</h3>
                            </div>
                            <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed font-light">
                                At Lasak Technologies, we specialize in crafting high-performance, visually engaging, and business-focused websites that empower brands to grow and thrive online.
                            </p>
                            <Link to="/services/it/web-development">
                                <Button className="rounded-full bg-transparent border border-blue-500/50 text-sm px-8 py-4 text-white hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center gap-2 group/btn w-fit">
                                    View more <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Card 2: Digital Marketing */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer min-h-[350px] flex flex-col justify-between"
                        >
                            <div className="absolute top-8 right-8 p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                                <BarChart3 className="w-10 h-10 text-purple-400" />
                            </div>
                            <div className="mt-8 mb-8">
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-2">DIGITAL</h3>
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">MARKETING</h3>
                            </div>
                            <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed font-light">
                                At Lasak Technologies, we deliver powerful digital marketing strategies designed to grow your business online and reach your target audience effectively.
                            </p>
                            <Link to="/services/it/digital-marketing">
                                <Button className="rounded-full bg-transparent border border-blue-500/50 text-sm px-8 py-4 text-white hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center gap-2 group/btn w-fit">
                                    View more <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Card 3: UI/UX Design */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-3xl bg-[#111827] border border-white/10 p-8 shadow-lg hover:shadow-pink-500/10 transition-all cursor-pointer min-h-[350px] flex flex-col justify-between"
                        >
                            <div className="absolute top-8 right-8 p-3 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                                <Palette className="w-10 h-10 text-pink-400" />
                            </div>
                            <div className="mt-8 mb-8">
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-2">UI/UX</h3>
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">DESIGN</h3>
                            </div>
                            <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed font-light">
                                At Lasak, we believe great products begin with outstanding design. Our UI/UX focuses on visually appealing, modern, and brand-aligned interfaces that users love.
                            </p>
                            <Link to="/services/ui-ux">
                                <Button className="rounded-full bg-transparent border border-blue-500/50 text-sm px-8 py-4 text-white hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center gap-2 group/btn w-fit">
                                    View more <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
