import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PenTool, Layout, Users, Smartphone, Eye, Layers } from 'lucide-react';
import Clients from '../components/Clients';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';

const UIUXPage = () => {
    const services = [
        {
            title: "User Research & Wireframing",
            description: "We start by understanding your users. Through in-depth research and wireframing, we build a solid foundation that ensures your product meets real user needs and business goals.",
            icon: <Users size={32} />
        },
        {
            title: "UI Design & Prototyping",
            description: "We create stunning, high-fidelity interfaces that captivate users. Our interactive prototypes bring your vision to life, allowing you to test and refine the experience before development.",
            icon: <Layout size={32} />
        },
        {
            title: "Usability Testing & Optimization",
            description: "We don't guess; we test. Rigorous usability testing helps us identify friction points and optimize the user journey for maximum engagement and conversion.",
            icon: <Eye size={32} />
        },
        {
            title: "Mobile App Design",
            description: "Designing intuitive and responsive mobile experiences for iOS and Android that users love to touch and swipe.",
            icon: <Smartphone size={32} />
        },
        {
            title: "Design Systems",
            description: "Creating comprehensive design systems and style guides to ensure consistency and scalability across all your digital products.",
            icon: <Layers size={32} />
        }
    ];

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            <SEO
                title="UI/UX Design - User-Centric Experiences"
                description="Create intuitive and captivating digital products with our UI/UX design services. From research to interactive prototyping."
                canonical="/services/ui-ux-design"
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden px-4 flex items-center justify-center">
                {/* Visual Background Enhancement */}
                <div className="absolute inset-0 z-0">
                    {/* High-Impact UI/UX Image */}
                    <img
                        src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop"
                        alt="UI/UX Design Excellence"
                        className="w-full h-full object-cover opacity-80 scale-105"
                    />

                    {/* Technical Grid Overlay (CSS) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>

                    {/* Cinematic Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[#0a0f1c]/40"></div>

                    {/* Focal Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-10"
                    >
                        {/* 3D Sphere Replacement (CSS Glow) */}
                        <div className="w-44 h-44 md:w-64 md:h-64 mx-auto relative group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-10 border border-blue-500/10 rounded-full animate-reverse-spin"></div>
                            <PenTool className="w-full h-full text-blue-500 p-14 relative z-10 animate-float" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.5rem] sm:text-6xl md:text-[8rem] font-black text-white tracking-[0.1em] md:tracking-[0.25em] uppercase mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] leading-[1.1] md:leading-none break-words"
                    >
                        UI/UX<br /><span className="text-blue-500">DESIGN</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-200 max-w-5xl text-lg md:text-xl mb-12 leading-relaxed opacity-90 drop-shadow-2xl px-4"
                    >
                        "We create seamless, user-centric digital experiences that blend aesthetics with functionality. From research to pixel-perfect design."
                    </motion.p>
                </div>
            </section>

            {/* Services List - Split Layout */}
            <section className="py-20 px-4 relative">
                <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Title & Image (Sticky) */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="lg:sticky lg:top-40 h-fit">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] uppercase tracking-tighter">
                                Design<br />
                                <span className="text-blue-500 text-outline-blue">Solutions</span><br />
                                Redefined
                            </h2>
                            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group aspect-video bg-blue-950/20">
                                <video
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source type="video/mp4" src="https://lasak.in/wp-content/uploads/2025/10/AZn1yXFmuQET8yIDKhvjPQ-AZn1yXFmFk5E4BTULr7nZg.mp4#577" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                                        <p className="text-white text-lg font-bold uppercase tracking-widest">Pixel Perfect Precision</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vertical List */}
                    <div className="lg:col-span-8 space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-all group cursor-default"
                            >
                                <div className="flex items-start gap-8">
                                    <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight leading-none">{service.title}</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed font-light">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="relative rounded-[3rem] overflow-hidden bg-[#0f172a] p-10 md:p-24 text-center border border-white/10 shadow-3xl">
                        {/* Background with abstract CSS glows */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
                            <div className="absolute -left-20 -top-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 max-w-5xl mx-auto leading-tight uppercase tracking-tighter">
                                Ready to Elevate Your User Experience?
                            </h2>
                            <p className="text-blue-100 max-w-4xl mx-auto mb-12 text-lg md:text-xl leading-relaxed opacity-80">
                                "Let's turn your ideas into intuitive, high-impact digital experiences."
                            </p>
                            <Link to="/contact">
                                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-5 text-lg md:text-xl font-bold shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 whitespace-nowrap">
                                    Start Your Design Project →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients */}
            <Clients />

        </div>
    );
};

export default UIUXPage;
