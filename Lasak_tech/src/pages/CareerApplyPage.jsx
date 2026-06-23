import React from 'react';
import { motion } from 'framer-motion';

const CareerApplyPage = () => {
    return (
        <div className="min-h-screen pt-20 bg-slate-950">
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
                            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            We are always looking for talented individuals to help us build the future.
                            Fill out the form below to apply.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl h-[800px]"
                    >
                        <iframe
                            src="https://links.lasak.in/widget/form/LZpNHT0klgWaMTBU1lIr"
                            className="w-full h-full border-0"
                            title="Career Application Form"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CareerApplyPage;
