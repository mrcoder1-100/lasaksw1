import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './ui/Button'; // Ensure you have this component
import { ArrowRight, Briefcase, Code, GraduationCap } from 'lucide-react';

const Careers = () => {
    return (
        <section className="py-20 bg-blue-950/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">Careers</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Become part of our success team. We are looking for innovative minds to join us.
                    </p>
                </div>

                <div className="flex flex-col gap-6 max-w-4xl mx-auto">

                    {/* Recruitment Services */}
                    <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-transparent p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-blue-500/30 transition-all shadow-md hover:shadow-blue-900/20"
                    >
                        <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors">
                            <Briefcase size={32} />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Recruitment Services</h3>
                            <p className="text-slate-400 text-sm">
                                We are hiring talent acquisition specialists to help us grow our team and find the best candidates.
                            </p>
                        </div>
                        <div className="shrink-0 mt-4 md:mt-0">
                            <Link
                                to="/careers/apply"
                                className="flex items-center px-6 py-3 rounded-full border border-blue-500/30 text-sm font-medium text-blue-400 hover:bg-blue-500/10 transition-all inline-flex"
                            >
                                Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Software Development */}
                    <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-transparent p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-blue-500/30 transition-all shadow-md hover:shadow-blue-900/20"
                    >
                        <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors">
                            <Code size={32} />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Software Development</h3>
                            <p className="text-slate-400 text-sm">
                                Join our engineering team to build scalable and high-performance applications.
                            </p>
                        </div>
                        <div className="shrink-0 mt-4 md:mt-0">
                            <Link
                                to="/careers/apply"
                                className="flex items-center px-6 py-3 rounded-full border border-blue-500/30 text-sm font-medium text-blue-400 hover:bg-blue-500/10 transition-all inline-flex"
                            >
                                Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Internship */}
                    <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-transparent p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-blue-500/30 transition-all shadow-md hover:shadow-blue-900/20"
                    >
                        <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors">
                            <GraduationCap size={32} />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Internship</h3>
                            <p className="text-slate-400 text-sm">
                                Start your career with us. We offer internship programs for students and fresh graduates.
                            </p>
                        </div>
                        <div className="shrink-0 mt-4 md:mt-0">
                            <Link
                                to="/careers/apply"
                                className="flex items-center px-6 py-3 rounded-full border border-blue-500/30 text-sm font-medium text-blue-400 hover:bg-blue-500/10 transition-all inline-flex"
                            >
                                Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Careers;
