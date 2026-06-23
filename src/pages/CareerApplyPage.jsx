import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, ArrowRight, Upload, Briefcase, User, Mail, Phone, Link as LinkIcon } from 'lucide-react';
import SEO from '../components/SEO';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const CareerApplyPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: '',
        portfolio: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    };

    const uploadResume = async (file) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `resumes/${Date.now()}_${file.name.replace(/\s+/g, '_')}`;

        const storageRef = ref(storage, fileName);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUploading(true);
        const { firstName, lastName, email, phone, role, portfolio, message } = formData;

        try {
            let resumeUrl = null;
            if (resumeFile) {
                resumeUrl = await uploadResume(resumeFile);
            }

            await addDoc(collection(db, 'job_applications'), {
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                role,
                portfolio_url: portfolio,
                message,
                resume_url: resumeUrl
            });

            // 2. Prepare the Gmail link
            const subject = `Job Application: ${role} - ${firstName} ${lastName}`;
            const body = `Applicant Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Role Applying For: ${role}
Portfolio/LinkedIn: ${portfolio}
Resume: ${resumeUrl || "Not attached"}

Message:
${message}`;

            const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@lasak.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open Gmail in a new tab
            window.open(mailUrl, '_blank');

            // Show success state locally
            setIsSubmitted(true);

        } catch (error) {
            console.error(error);
            alert("Error submitting application: " + (error.message || "Unknown error"));
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="min-h-screen pt-20 bg-[#0a0f1c]">
            <SEO
                title="Careers - Join Lasak Technologies"
                description="Explore job opportunities and internships at Lasak Tech. We're looking for talented individuals in software development, mechanical design, and AI."
                canonical="/careers/apply"
            />
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
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            We are always looking for talented individuals to help us build the future.
                            Fill out the details below to start your journey with Lasak Technologies.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto bg-[#1e293b]/20 p-8 md:p-12 rounded-[3rem] border border-white/5 backdrop-blur-xl shadow-3xl overflow-hidden relative">
                        {/* Background Decorations */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">First Name <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                    placeholder="John"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Last Name <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Email Name <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Phone Number <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Role Applying For <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <select
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="text-slate-500">Select a position...</option>
                                                <option value="Frontend Developer">Frontend Developer</option>
                                                <option value="Backend Developer">Backend Developer</option>
                                                <option value="Full Stack Developer">Full Stack Developer</option>
                                                <option value="UI/UX Designer">UI/UX Designer</option>
                                                <option value="Mechanical Design Engineer">Mechanical Design Engineer</option>
                                                <option value="AI/ML Engineer">AI/ML Engineer</option>
                                                <option value="Internship">Internship</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Portfolio / LinkedIn URL</label>
                                        <div className="relative">
                                            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input
                                                type="url"
                                                name="portfolio"
                                                value={formData.portfolio}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                                                placeholder="https://linkedin.com/in/..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Cover Letter / Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32 resize-none placeholder:text-slate-700"
                                            placeholder="Tell us why you'd be a great fit..."
                                        ></textarea>
                                    </div>

                                    {/* Resume Upload */}
                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Upload Resume <span className="text-red-500">*</span></label>
                                        <div className={`bg-blue-500/10 border-2 border-dashed ${resumeFile ? 'border-green-500/50 bg-green-500/10' : 'border-blue-500/20 hover:border-blue-500/40'} rounded-2xl p-6 transition-all group cursor-pointer relative`}>
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                required
                                            />
                                            <div className="flex items-center gap-4">
                                                <div className={`p-3 rounded-full shrink-0 ${resumeFile ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                                    {resumeFile ? <CheckCircle className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
                                                </div>
                                                <div>
                                                    <h4 className={`font-bold text-sm uppercase tracking-wide mb-1 ${resumeFile ? 'text-green-400' : 'text-white'}`}>
                                                        {resumeFile ? 'Resume Attached' : 'Click to Upload Resume'}
                                                    </h4>
                                                    <p className="text-slate-400 text-sm leading-relaxed">
                                                        {resumeFile ? resumeFile.name : 'PDF, DOC, or DOCX (Max 5MB)'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isUploading}
                                        className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xl uppercase tracking-widest rounded-3xl transition-all shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isUploading ? (
                                            <>Submitting...</>
                                        ) : (
                                            <>
                                                Apply Now
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center text-center space-y-6 py-12"
                                >
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] mb-4">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl text-white font-black uppercase tracking-tight">Application Started!</h3>
                                    <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
                                        We've opened your email client with your application details.
                                        Please <span className="text-white font-bold">attach your resume</span> to that email and hit send to complete your application.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-blue-400 font-bold flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest text-sm"
                                    >
                                        Start a new application <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerApplyPage;
