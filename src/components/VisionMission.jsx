import React from 'react';
import { Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { CMSText } from './cms';

const VisionMission = ({ editable = false }) => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#0f172a]">
            {/* Background Glows (CSS Only) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[3rem] bg-[#1e293b]/50 border border-white/10 p-8 md:p-16 shadow-3xl backdrop-blur-sm"
                >

                    {/* Abstract Background Elements (CSS Only) */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left: Title */}
                        <div className="text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-2 uppercase tracking-tight">
                                <CMSText id="vision_mission_title_1" defaultText="Vision &" editable={editable} /> <br /><span className="text-blue-500"><CMSText id="vision_mission_title_2" defaultText="Mission" editable={editable} /></span>
                            </h2>
                            <h3 className="text-xl md:text-2xl font-light text-blue-200 mt-4 uppercase tracking-[0.2em]">
                                <CMSText id="vision_mission_subtitle" defaultText="of our company" editable={editable} />
                            </h3>
                        </div>

                        {/* Right: Cards */}
                        <div className="space-y-8">

                            {/* Vision */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex flex-col sm:flex-row gap-6 items-start bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all shadow-xl"
                            >
                                <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 shrink-0">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">Vision</h4>
                                    <div className="text-slate-300 leading-relaxed font-light text-lg">
                                        <CMSText id="vision_text" defaultText="To be a global leader in technology solutions, driving digital transformation and empowering businesses to achieve their full potential." editable={editable} />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex flex-col sm:flex-row gap-6 items-start bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all shadow-xl"
                            >
                                <div className="p-4 bg-indigo-600/10 rounded-2xl text-indigo-500 shrink-0">
                                    <Rocket className="w-8 h-8" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">Mission</h4>
                                    <div className="text-slate-300 leading-relaxed font-light text-lg">
                                        <CMSText id="mission_text" defaultText="Our mission is to deliver exceptional value by providing cutting-edge technology services and building long-lasting partnerships based on trust." editable={editable} />
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionMission;
