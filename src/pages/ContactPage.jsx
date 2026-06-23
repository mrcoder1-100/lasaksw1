import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Plus, Trash2, Edit2, Save } from 'lucide-react';
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import BlueGlow from '../assets/hero-glow-overlay.png';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import SEO from '../components/SEO';
import { CMSText } from '../components/cms';

const ContactPage = ({ editable = false }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [contactCards, setContactCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    // --- Data Fetching for Contact Cards ---
    const fetchContactCards = async () => {
        setLoading(true);
        try {
            const snap = await getDocs(collection(db, 'contact_cards'));
            const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            data.sort((a, b) => (a.id > b.id ? 1 : -1));
            setContactCards(data);
        } catch (e) { console.error(e); }
        setLoading(false);
    };

    useEffect(() => {
        fetchContactCards();
    }, []);

    const handleImportDefaults = async () => {
        if (!confirm("Reset to default contact info?")) return;
        const defaultCard = {
            title: "Headquarters",
            email: "info@lasak.in",
            phone: "+91 88708 42929",
            address: "Peelamedu, Coimbatore, India",
            google_maps_link: "https://www.google.com/maps/search/?api=1&query=Lasak+Technologies+Pvt+Ltd+Peelamedu+Coimbatore"
        };
        try {
            const batch = writeBatch(db);
            const snap = await getDocs(collection(db, 'contact_cards'));
            snap.docs.forEach(document => {
                if (document.id !== '0') batch.delete(doc(db, 'contact_cards', document.id));
            });
            batch.set(doc(collection(db, 'contact_cards')), defaultCard);
            await batch.commit();
            fetchContactCards();
        } catch (e) { alert("Failed to reset: " + e.message); }
        fetchContactCards();
    };

    const handleAddCard = async () => {
        const title = prompt("Enter Branch Name (e.g., 'London Office'):");
        if (!title) return;

        try {
            await addDoc(collection(db, 'contact_cards'), {
                title,
                email: "email@example.com",
                phone: "+1 234 567 890",
                address: "123 Street, City, Country",
                google_maps_link: "https://maps.google.com"
            });
            fetchContactCards();
        } catch (e) { alert("Error adding: " + e.message); }
        fetchContactCards();
    };

    const handleDeleteCard = async (id) => {
        if (!confirm("Delete this branch?")) return;
        try {
            await deleteDoc(doc(db, 'contact_cards', id));
            fetchContactCards();
        } catch (e) { console.error(e); }
        fetchContactCards();
    };

    const handleUpdateCard = async (id, field, value) => {
        try { await updateDoc(doc(db, 'contact_cards', id), { [field]: value }); } catch (e) { console.error(e); }
        // Optimistic update handled by refetch or local state update could be added here
    };


    // --- Form Handling ---
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, service, message } = formData;

        try {
            await addDoc(collection(db, 'enquiries'), {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone,
                service: service,
                message: message,
                status: 'new'
            });

            // Open Gmail for notification
            const subject = `New Inquiry from Lasak Technologies: ${firstName} ${lastName}`;
            const body = `Full Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService Interested: ${service}\n\nMessage Details:\n${message}`;
            const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@lasak.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailUrl, '_blank');

            setIsSubmitted(true);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
        } catch (error) {
            console.error('Error submitting enquiry:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen pt-24 bg-[#0a0f1c]">
            <SEO
                title="Contact Us - Let's Talk"
                description="Get in touch with Lasak Tech for your next project. We're ready to accelerate your business with our expertise."
                canonical="/contact"
            />
            {/* Hero Section */}
            <section className="py-12 md:py-24 container mx-auto px-4 relative">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-8 shadow-2xl break-words">
                            <CMSText id="contact_hero_title_1" defaultText="Ready to" editable={editable} /> <br />
                            <span className="text-blue-500"><CMSText id="contact_hero_title_2" defaultText="Accelerate?" editable={editable} /></span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-2xl font-light max-w-xl leading-relaxed">
                            <CMSText id="contact_hero_subtitle" defaultText="Whether you're deconstructing complexity or building the future, we're here to engineer your vision into reality." editable={editable} />
                        </p>

                        {editable && (
                            <div className="mt-8 flex gap-4">
                                <button onClick={handleImportDefaults} className="bg-white/10 text-white px-4 py-2 rounded uppercase text-xs font-bold">Reset</button>
                                <button onClick={handleAddCard} className="bg-blue-600 text-white px-4 py-2 rounded uppercase text-xs font-bold flex items-center gap-2">
                                    <Plus size={16} /> Add Branch
                                </button>
                            </div>
                        )}
                    </motion.div>

                    <div className="space-y-8">
                        {/* Dynamic Contact Cards */}
                        {contactCards.length === 0 && !loading && (
                            <div className="text-white/50 italic">No contact details found.</div>
                        )}

                        {contactCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-900/40 backdrop-blur-3xl group flex flex-col p-6 md:p-8"
                            >
                                {editable && (
                                    <button
                                        onClick={() => handleDeleteCard(card.id)}
                                        className="absolute top-6 right-6 text-red-500 hover:bg-red-500/10 p-2 rounded-full z-20"
                                        title="Delete Branch"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                )}

                                <h3
                                    className={`text-2xl text-white font-bold mb-6 pl-2 border-l-4 border-blue-500 ${editable ? 'cursor-text hover:bg-white/5' : ''}`}
                                    contentEditable={editable}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleUpdateCard(card.id, 'title', e.target.innerText)}
                                >
                                    {card.title || "Branch Name"}
                                </h3>

                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={BlueGlow}
                                        alt=""
                                        className="w-full h-full object-cover opacity-30 mix-blend-screen"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0a0f1c]/80 to-indigo-900/40"></div>
                                </div>

                                <div className="relative z-10 w-full space-y-4">
                                    {/* Email */}
                                    {editable ? (
                                        <div className="flex items-center gap-4 md:gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-blue-600 transition-all group/link">
                                            <div className="p-3 bg-blue-500/20 rounded-2xl group-hover/link:bg-white/20 shrink-0">
                                                <Mail className="w-6 h-6 text-blue-400 group-hover/link:text-white" />
                                            </div>
                                            <div className="min-w-0 flex-grow">
                                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Email</p>
                                                <p
                                                    className="text-lg text-white font-black truncate cursor-text hover:bg-white/20 p-1 -m-1 rounded"
                                                    contentEditable
                                                    suppressContentEditableWarning
                                                    onBlur={(e) => handleUpdateCard(card.id, 'email', e.target.innerText)}
                                                >
                                                    {card.email}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={`mailto:${card.email}`}
                                            className="flex items-center gap-4 md:gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-blue-600 transition-all group/link"
                                        >
                                            <div className="p-3 bg-blue-500/20 rounded-2xl group-hover/link:bg-white/20 shrink-0">
                                                <Mail className="w-6 h-6 text-blue-400 group-hover/link:text-white" />
                                            </div>
                                            <div className="min-w-0 flex-grow">
                                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Email</p>
                                                <p className="text-lg text-white font-black truncate">
                                                    {card.email}
                                                </p>
                                            </div>
                                        </a>
                                    )}

                                    {/* Phone */}
                                    <div className="flex items-center gap-4 md:gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-blue-600 transition-all group/link">
                                        <div className="p-3 bg-blue-500/20 rounded-2xl group-hover/link:bg-white/20 shrink-0">
                                            <Phone className="w-6 h-6 text-blue-400 group-hover/link:text-white" />
                                        </div>
                                        <div className="min-w-0 flex-grow">
                                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Phone</p>
                                            <p
                                                className={`text-lg text-white font-black truncate ${editable ? 'cursor-text hover:bg-white/20 p-1 -m-1 rounded' : ''}`}
                                                contentEditable={editable}
                                                suppressContentEditableWarning
                                                onBlur={(e) => handleUpdateCard(card.id, 'phone', e.target.innerText)}
                                            >
                                                {card.phone}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-center gap-4 md:gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-blue-600 transition-all group/link">
                                        <div className="p-3 bg-blue-500/20 rounded-2xl group-hover/link:bg-white/20 shrink-0">
                                            <MapPin className="w-6 h-6 text-blue-400 group-hover/link:text-white" />
                                        </div>
                                        <div className="min-w-0 flex-grow">
                                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Office</p>
                                            <p
                                                className={`text-base text-white font-medium italic leading-tight ${editable ? 'cursor-text hover:bg-white/20 p-1 -m-1 rounded' : ''}`}
                                                contentEditable={editable}
                                                suppressContentEditableWarning
                                                onBlur={(e) => handleUpdateCard(card.id, 'address', e.target.innerText)}
                                            >
                                                {card.address}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Google Maps Link Button - Always visible */}
                                    {card.google_maps_link && (
                                        <a
                                            // Force override for Headquarters if it has generic link or just always for safety if it matches default title
                                            href={card.title === "Headquarters" ? "https://www.google.com/maps/search/?api=1&query=Lasak+Technologies+Pvt+Ltd+Peelamedu+Coimbatore" : card.google_maps_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 p-4 rounded-3xl bg-blue-600 hover:bg-blue-700 border border-blue-500 transition-all group/map mt-4"
                                        >
                                            <MapPin className="w-5 h-5 text-white" />
                                            <span className="text-white font-bold uppercase tracking-wider text-sm">View on Google Maps</span>
                                            <ArrowRight className="w-4 h-4 text-white group-hover/map:translate-x-1 transition-transform" />
                                        </a>
                                    )}

                                    {editable && (
                                        <div className="text-right mt-2">
                                            <span className="text-xs text-slate-500">Google Maps Link: </span>
                                            <span
                                                className="text-xs text-blue-400 cursor-text hover:bg-white/10 border-b border-dashed border-blue-500"
                                                contentEditable
                                                suppressContentEditableWarning
                                                onBlur={(e) => handleUpdateCard(card.id, 'google_maps_link', e.target.innerText)}
                                            >
                                                {card.google_maps_link}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 bg-[#0a0f1c] relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-[#1e293b]/20 p-8 md:p-20 rounded-[4rem] border border-white/5 backdrop-blur-xl shadow-3xl relative overflow-hidden min-h-[600px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="w-full flex flex-col md:flex-row gap-20 items-center"
                                >
                                    <div className="md:w-1/3">
                                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 leading-none">
                                            <CMSText id="contact_form_title_1" defaultText="Start Your" editable={editable} /> <br />
                                            <span className="text-blue-500"><CMSText id="contact_form_title_2" defaultText="Journey" editable={editable} /></span>
                                        </h2>
                                        <p className="text-slate-400 text-lg leading-relaxed italic">
                                            <CMSText id="contact_form_subtitle" defaultText="Fill out your details and let's begin deconstructing your complex challenges." editable={editable} />
                                        </p>
                                        <div className="mt-12 flex gap-4">
                                            <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                                            <div className="w-4 h-1 bg-blue-500/30 rounded-full"></div>
                                            <div className="w-4 h-1 bg-blue-500/30 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="md:w-2/3 w-full">
                                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                                            <div className="space-y-3">
                                                <label className="text-white text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                    placeholder="Alex"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-white text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                    placeholder="Smith"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-white text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                    placeholder="alex@example.com"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-white text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                            <div className="md:col-span-2 space-y-3">
                                                <label className="text-white text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Service Interested In</label>
                                                <div className="relative">
                                                    <select
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full appearance-none bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                                    >
                                                        <option value="" disabled className="bg-[#1e2340] text-slate-400">Select a service...</option>
                                                        <optgroup label="Mechanical Services" className="bg-[#1e2340] text-blue-400 font-bold">
                                                            <option value="Reverse Engineering" className="text-white font-normal">Reverse Engineering</option>
                                                            <option value="Retro Fitting" className="text-white font-normal">Retro Fitting</option>
                                                            <option value="New Product Development" className="text-white font-normal">New Product Development</option>
                                                            <option value="3D Modeling" className="text-white font-normal">3D Modeling</option>
                                                            <option value="Analysis" className="text-white font-normal">Analysis</option>
                                                            <option value="Patent Drawing" className="text-white font-normal">Patent Drawing</option>
                                                        </optgroup>
                                                        <optgroup label="IT Services" className="bg-[#1e2340] text-blue-400 font-bold">
                                                            <option value="Web Development" className="text-white font-normal">Web Development</option>
                                                            <option value="Digital Marketing" className="text-white font-normal">Digital Marketing</option>
                                                            <option value="UI/UX Design" className="text-white font-normal">UI/UX Design</option>
                                                        </optgroup>
                                                        <optgroup label="Products" className="bg-[#1e2340] text-blue-400 font-bold">
                                                            <option value="Lasak CRM" className="text-white font-normal">Lasak CRM</option>
                                                            <option value="Process Automation" className="text-white font-normal">Process Automation</option>
                                                            <option value="Lasak Appetite" className="text-white font-normal">Lasak Appetite</option>
                                                        </optgroup>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-400">
                                                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:col-span-2 space-y-3">
                                                <label className="text-whitetext-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Your Message</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-40 resize-none placeholder:text-slate-700"
                                                    placeholder="Describe your vision..."
                                                ></textarea>
                                            </div>
                                            <div className="md:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl uppercase tracking-widest rounded-3xl transition-all shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1 flex items-center justify-center gap-4 group"
                                                >
                                                    Send Inquiry
                                                    <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center text-center space-y-8 p-12"
                                >
                                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                                        <CheckCircle className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-4xl md:text-6xl text-white font-black uppercase">Message Sent!</h3>
                                    <p className="text-slate-400 text-xl max-w-md font-light italic">
                                        Thank you for reaching out. We've opened your inquiry in Gmail to ensure secure delivery. Our team will be in touch shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-blue-500 font-bold flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest"
                                    >
                                        Send another response <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Clients />
        </div>
    );
};

export default ContactPage;
