import React from 'react';
import { motion } from 'framer-motion';

import sharanImage from '../assets/team/sharan_gautham_sakthivel.png';
import KarthiImage from '../assets/team/kar.png'
import elavarasan from '../assets/team/ela.png'
import sasi from '../assets/team/sas.png'
import brindha from '../assets/team/bri.png'
import shamli from '../assets/team/sham.png'
import swathi from '../assets/team/swa.png'

const Team = () => {
    const teamMembers = [
        {
            name: "Mr. Sharan Gautham Sakthivel",
            role: "Managing Director",
            image: sharanImage,
            description: "A visionary leader bridging industry innovation with practical education to build scalable, future-ready digital solutions."
        },
        { name: "Mr. Karthikeyan S", role: "Senior Design Engineer", image: KarthiImage, description: "Specializes in industry-standard mechanical design and 3D modeling, delivering high-quality, manufacturing-ready engineering solutions." },
        { name: "Mr. Elavarasan E", role: "Senior Design Engineer", image: elavarasan, description: "Expert in CAD-driven product development and optimization, transforming concepts into validated, production-ready mechanical solutions." },
        { name: "Ms. Sasi Keerthika R", role: "Senior Software Tester", image: sasi, description: "Maintains software excellence through rigorous manual and automated testing to ensure stable, high-performance digital products." },
        { name: "Ms. Brindha A", role: "Full Stack Web Developer", image: brindha, description: "Develops scalable, end-to-end web applications by integrating modern frontend frameworks with robust backend and database architectures." },
        { name: "Ms. Shamli Samporna S", role: "AI Engineer Intern", image: shamli, description: "Develops and integrates intelligent AI agents and automation workflows to solve complex business challenges and enhance operational efficiency." },
        { name: "Ms. Swathi M", role: "Software Developer Intern", image: swathi, description: "Builds secure and scalable server-side systems by integrating robust databases and modern backend technologies into high-performance web applications." },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">Meet Our Team</h2>
                <p className="text-center text-slate-400 mb-16 uppercase tracking-widest text-sm">
                    Everything is simple when you are crazy about it
                </p>

                <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                    {teamMembers
                        .filter(member => !member.name?.toUpperCase().includes('RASIKA'))
                        .map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all group cursor-pointer"
                            >
                                <div className="shrink-0">
                                    <motion.img
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        src={member.image}
                                        alt={member.name}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-slate-600 group-hover:border-secondary transition-colors"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{member.name}</h3>
                                    <p className="text-sm font-medium text-blue-400 mb-1">{member.role}</p>
                                    <p className="text-xs md:text-sm text-slate-400 line-clamp-2 md:line-clamp-none group-hover:text-slate-300 transition-colors">
                                        {member.description || "Dedicated professional with a passion for excellence and innovation in their field."}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
