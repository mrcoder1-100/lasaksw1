import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, message } = formData;
        const subject = `New Contact from ${firstName} ${lastName}`;
        const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@lasak.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    };

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="py-12 md:py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* ... (Existing Hero Content) ... */}
                    {/* Note: I'm preserving the surrounding structure but focussing on the form logic below */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-8"
                        >
                            Let's Talk About <br /> The Next Big <br /> <span className="text-blue-500">Thing</span>
                        </motion.h1>
                    </div>

                    <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-[#000080] group">
                        {/* ... (Existing Image & Pills) ... */}
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            alt="Abstract 3D"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/80 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6">
                            <div className="flex flex-wrap justify-center gap-4 w-full">
                                <motion.a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lasak.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center gap-3 hover:bg-white/20 transition-all cursor-pointer"
                                >
                                    <span className="text-white font-bold text-lg md:text-xl">info@lasak.in</span>
                                </motion.a>

                                <motion.a
                                    href="tel:+918870842929"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center gap-3 hover:bg-white/20 transition-all cursor-pointer"
                                >
                                    <span className="text-white font-bold text-lg md:text-xl">+91 8870842929</span>
                                </motion.a>
                            </div>

                            <motion.a
                                href="https://www.google.com/maps/place/LASAK+TECHNOLOGIES+PRIVATE+LIMITED/@11.0218787,76.9929138,20z/data=!4m9!1m2!2m1!1s111%2F24A,+Stv+Nagar,+Peelamedu,+Coimbatore-641004!3m5!1s0x3ba8574c3c675d29:0xa96be278a234895b!8m2!3d11.0218787!4d76.9933349!16s%2Fg%2F11w33nhnw6?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 w-full max-w-lg text-center hover:bg-white/20 transition-all cursor-pointer block"
                            >
                                <p className="text-white font-bold text-sm md:text-base">111/24A, Stv Nagar, Peelamedu, Coimbatore-641004</p>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-[#0b1120] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase mb-6 leading-none">
                            Let's Work <br /> <span className="text-blue-500">Together!</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-md">
                            We'd love to hear from you. Fill out the form below and we'll get back to you soon.
                        </p>
                        <div className="h-64 w-64 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    </div>

                    <div className="bg-[#1e293b]/30 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm ml-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors h-32 resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 group">
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <Clients />
            {/* Footer is already included in Layout, but keeping here if Layout structure is different or for explicit placement */}
        </div>
    );
};

export default ContactPage;
