import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Clients from '../components/Clients';

import eotCraneImg from '../assets/eot-crane.png';

import architecturalDesignImg from '../assets/architectural-design.png';

import toyModelingImg from '../assets/toy-modeling.png';
import electricVehiclesImg from '../assets/electric-vehicles.png';
import sensorValveImg from '../assets/sensor-valve.png';
import crabRobotImg from '../assets/crab-robot.png';
import poultryVaccinatorImg from '../assets/poultry-vaccinator.png';
import helmetDesignImg from '../assets/helmet-design.png';
import boilerDesignImg from '../assets/boiler-design.png';
import teslaValveImg from '../assets/tesla-valve.png';
import jacquardMachineImg from '../assets/jacquard-machine.png';
import eccentricGearImg from '../assets/eccentric-gear.png';
import ecommerceDevelopmentImg from '../assets/ecommerce-development.png';
import ecommerceDevelopmentImg2 from '../assets/ecommerce-development-2.png';
import solarDryerImg from '../assets/solar-dryer.png';
import waterBottleImg from '../assets/water-bottle.png';
import realEstateImg from '../assets/real-estate.png';
import financeAdvisoryImg from '../assets/finance-advisory.png';
import wheelchairDesignImg from '../assets/wheelchair-design.png';

// Wrapper for linkable cards
const Wrapper = ({ link, children }) => link ? <Link to={link}>{children}</Link> : <>{children}</>;

const BlogsPage = () => {
    const blogs = [
        { id: 1, title: "Future of Cybersecurity", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", category: "Cybersecurity", link: "/blogs/future-of-cybersecurity" },
        { id: 2, title: "EOT Crane, Weight Lifter & Handler Project", image: eotCraneImg, category: "Industrial Engineering", link: "/blogs/eot-crane-project" },
        { id: 3, title: "Architectural & Interior Design Projects at Lasak Technologies", image: architecturalDesignImg, category: "Architecture & Interior", link: "/blogs/architectural-design" },
        { id: 4, title: "Toy Modeling Design Services – Creative & Realistic Prototypes", image: toyModelingImg, category: "Product Design", link: "/blogs/toy-modeling" },
        { id: 5, title: "Electric Vehicles (EVs) – Sustainable, Smart & Future-Ready Mobility", image: electricVehiclesImg, category: "Sustainable Mobility", link: "/blogs/electric-vehicles" },
        { id: 6, title: "Sensor Valve Reverse Engineering Design Services", image: sensorValveImg, category: "Reverse Engineering", link: "/blogs/sensor-valve-design" },
        { id: 7, title: "Crab Robot Patent Design – Coconut Harvesting Innovation & Remote Control Technology", image: crabRobotImg, category: "Robotics", link: "/blogs/crab-robot-design" },
        { id: 8, title: "Automated Poultry Vaccinator Design", image: poultryVaccinatorImg, category: "AgriTech", link: "/blogs/poultry-vaccinator" },
        { id: 9, title: "Innovative Helmet Design Patent", image: helmetDesignImg, category: "Safety Innovation", link: "/blogs/helmet-design" },
        { id: 10, title: "Precision Engineering & Boiler Design Innovations", image: boilerDesignImg, category: "Industrial", link: "/blogs/boiler-design" },
        { id: 11, title: "Tesla Valve Fluid Optimization", image: teslaValveImg, category: "Fluid Dynamics", link: "/blogs/tesla-valve" },
        { id: 12, title: "Role in Designing a Jacquard Machine", image: jacquardMachineImg, category: "Textile Machinery", link: "/blogs/jacquard-machine" },
        { id: 13, title: "Role in Designing an Eccentric Gear Mechanism", image: eccentricGearImg, category: "Mechanical", link: "/blogs/eccentric-gear" },
        { id: 14, title: "Building the Future of Online Shopping: E-Commerce Website", image: ecommerceDevelopmentImg, category: "E-Commerce", link: "/blogs/ecommerce-development" },
        { id: 15, title: "Solar Dryer Agriculture Innovation", image: solarDryerImg, category: "Sustainability", link: "/blogs/solar-dryer" },
        { id: 16, title: "Water Bottle Design: A Blend of Innovation and Precision", image: waterBottleImg, category: "Product Design", link: "/blogs/water-bottle-design" },
        { id: 17, title: "Real Estate Website", image: realEstateImg, category: "Web Development", link: "/blogs/real-estate" },
        { id: 18, title: "Designing a Specialised Wheelchair(Patent Registration)", image: wheelchairDesignImg, category: "Patent Design", link: "/blogs/wheelchair-design" },
        { id: 19, title: "Delivering Excellence in Finance and Business Advisory Website Development", image: financeAdvisoryImg, category: "Web Development", link: "/blogs/finance-advisory" },
        { id: 20, title: "Building the Future of Online Shopping: Our E-Commerce Development Story", image: ecommerceDevelopmentImg2, category: "E-Commerce", link: "/blogs/closense-ecommerce" },
    ];

    return (
        <div className="min-h-screen pt-20">

            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-wider max-w-5xl mx-auto leading-tight drop-shadow-2xl"
                    >
                        A Showcase of Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Creative Excellence</span> <br />
                        and Innovation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
                    >
                        Explore the latest trends, creative showcases, and technical achievements where we demonstrate our commitment to excellence, industry innovation, and the success of our clients' unique visions.
                    </motion.p>
                </div>
            </section>

            {/* Blogs Grid */}
            <section className="py-12 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 aspect-[16/9] cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
                            >
                                <Wrapper link={blog.link}>
                                    {/* Image Background */}
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                                    />

                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                    {/* Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                            {blog.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-none mb-2 drop-shadow-md">
                                            {blog.title}
                                        </h3>
                                        {/* Optional: Code-like decorations if category is Development */}
                                        {blog.category === 'Development' && (
                                            <div className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500/20 font-mono text-6xl font-bold select-none pointer-events-none">
                                                {"</>"}
                                            </div>
                                        )}
                                    </div>
                                </Wrapper>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment Section (Reused) */}
            <section className="py-20 bg-gradient-to-r from-blue-900/20 to-transparent border-t border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-purple-600 rounded-3xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10 relative overflow-hidden">
                                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl"></div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Stay Informed</h3>
                                <p className="text-purple-100 relative z-10">Subscribe to our newsletter to get the latest insights directly to your inbox.</p>
                                <div className="mt-8 relative z-10 flex gap-2">
                                    <input type="email" placeholder="Enter your email" className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 flex-1" />
                                    <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-slate-100 transition-colors">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 justify-end mb-8">
                                {/* Placeholder Certification Logos */}
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2"><span className="text-[10px] font-bold text-black text-center">M</span></div>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2"><span className="text-[10px] font-bold text-black text-center">T</span></div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Commitment to <br /> <span className="text-purple-400">Knowledge</span></h2>
                            <p className="text-slate-400 leading-relaxed ml-auto max-w-lg">
                                We believe in sharing our expertise to empower businesses and individuals. Our blogs cover a wide range of topics, from technical deep dives to industry trends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Clients />
        </div>
    );
};

export default BlogsPage;
