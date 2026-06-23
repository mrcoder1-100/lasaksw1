import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Plus, Trash2, Settings } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { CMSText, IconMap } from './cms';

const Careers = ({ editable = false }) => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);

    const defaultCareers = [
        {
            title: "Recruitment Services",
            description: "We are hiring talent acquisition specialists to help us grow our team and find the best candidates.",
            icon: "Briefcase",
            link: "/careers/apply"
        },
        {
            title: "Software Development",
            description: "Join our engineering team to build scalable and high-performance applications.",
            icon: "Code",
            link: "/careers/apply"
        },
        {
            title: "Internship",
            description: "Start your career with us. We offer internship programs for students and fresh graduates.",
            icon: "GraduationCap",
            link: "/careers/apply"
        }
    ];

    const fetchCareers = async () => {
        setLoading(true);
        try {
            const snap = await getDocs(collection(db, 'careers'));
            const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            data.sort((a, b) => (a.title > b.title ? 1 : -1));
            setCareers(data);
        } catch (error) {
            console.error("Error fetching careers", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCareers();
    }, []);

    const handleImportDefaults = async () => {
        if (!confirm("This will RESET all career items to default. Continue?")) return;

        setLoading(true);
        try {
            const batch = writeBatch(db);
            const snap = await getDocs(collection(db, 'careers'));
            snap.docs.forEach(document => {
                if (document.id !== '0') {
                    batch.delete(doc(db, 'careers', document.id));
                }
            });
            for (const c of defaultCareers) {
                const ref = doc(collection(db, 'careers'));
                batch.set(ref, c);
            }
            await batch.commit();
            fetchCareers();
        } catch (error) {
            alert("Import failed: " + error.message);
        }
    };

    const handleAdd = async () => {
        const title = prompt("Enter Job Title:");
        if (!title) return;

        try {
            await addDoc(collection(db, 'careers'), {
                title,
                description: "Click to edit job description...",
                icon: "Briefcase",
                link: "/careers/apply"
            });
            fetchCareers();
        } catch (error) {
            alert("Error adding: " + error.message);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Delete this job listing?")) return;
        try {
            await deleteDoc(doc(db, 'careers', id));
            fetchCareers();
        } catch (e) {
            console.error(e);
        }
    };

    const handleUpdateText = async (id, field, value) => {
        try {
            await updateDoc(doc(db, 'careers', id), { [field]: value });
        } catch (e) {
            console.error(e);
        }
    };

    const handleUpdateIcon = async (id, currentIcon) => {
        if (!editable) return;
        const newIcon = prompt(`Enter Icon Name (Current: ${currentIcon}) \nAvailable: ${Object.keys(IconMap).slice(0, 10).join(', ')}...`, currentIcon);
        if (newIcon && IconMap[newIcon]) {
            // Optimistic
            setCareers(prev => prev.map(c => c.id === id ? { ...c, icon: newIcon } : c));
            try {
                await updateDoc(doc(db, 'careers', id), { icon: newIcon });
            } catch (e) {
                console.error(e);
            }
        } else if (newIcon) {
            alert("Invalid Icon Name. Please use a valid Lucide icon name.");
        }
    };

    return (
        <section className="py-20 relative overflow-hidden bg-[#0a1120]">
            {/* Background Glow (CSS Only) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>
            <div className="container mx-auto relative z-10 px-4 md:px-6">
                <div className="mb-12 text-center relative group/header">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
                        <CMSText id="careers_title" defaultText="Careers" editable={editable} />
                    </h2>
                    <div className="text-slate-400 max-w-2xl mx-auto text-lg font-light italic">
                        "<CMSText id="careers_subtitle" defaultText="Join our team of visionaries and help us build the future of technology." editable={editable} />"
                    </div>

                    {editable && (
                        <div className="mt-8 flex justify-center gap-4">
                            <button
                                onClick={handleImportDefaults}
                                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 text-sm font-bold uppercase transition-colors"
                            >
                                Reset / Import Defaults
                            </button>
                            <button
                                onClick={handleAdd}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold uppercase shadow-lg shadow-blue-600/20"
                            >
                                <Plus size={18} /> Add Job
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    {careers.map((career) => {
                        const IconComponent = IconMap[career.icon] || IconMap['Briefcase'];

                        return (
                            <motion.div
                                key={career.id}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-blue-500/50 transition-all shadow-2xl relative"
                            >
                                {editable && (
                                    <button
                                        onClick={() => handleDelete(career.id)}
                                        className="absolute top-4 right-4 text-red-500 hover:bg-red-500/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                )}

                                <div
                                    className={`p-5 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative ${editable ? 'cursor-pointer hover:ring-2 ring-blue-400' : ''}`}
                                    onClick={() => handleUpdateIcon(career.id, career.icon)}
                                    title={editable ? "Click to change icon" : ""}
                                >
                                    <IconComponent size={32} />
                                    {editable && (
                                        <div className="absolute -top-1 -right-1 bg-white text-blue-600 rounded-full p-0.5 shadow-sm">
                                            <Settings size={12} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-grow">
                                    <h3
                                        className={`text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight ${editable ? 'cursor-text hover:bg-white/5 p-1 -m-1 rounded' : ''}`}
                                        contentEditable={editable}
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleUpdateText(career.id, 'title', e.target.innerText)}
                                    >
                                        {career.title}
                                    </h3>
                                    <p
                                        className={`text-slate-400 text-lg font-light ${editable ? 'cursor-text hover:bg-white/5 p-1 -m-1 rounded' : ''}`}
                                        contentEditable={editable}
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleUpdateText(career.id, 'description', e.target.innerText)}
                                    >
                                        {career.description}
                                    </p>
                                </div>
                                <div className="shrink-0 mt-4 md:mt-0">
                                    <Link
                                        to={career.link}
                                        className="flex items-center px-8 py-4 rounded-full border border-blue-500/30 text-base font-bold text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all inline-flex pointer-events-auto"
                                    >
                                        Apply Now <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}

                    {careers.length === 0 && !loading && (
                        <div className="text-center text-slate-500 py-10">
                            No job listings found. {editable ? "Add one or Import Defaults." : ""}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Careers;
