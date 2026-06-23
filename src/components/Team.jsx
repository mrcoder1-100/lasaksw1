import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { db, storage } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Plus, X, Loader2, Upload } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';

// Simplified helper to upload file (duplicated from Clients/cms, could be a shared util)
const uploadFile = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `team/${fileName}`;

    const storageRef = ref(storage, filePath);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
};


import swaImg from '../assets/team/swa.png';
import sharanImg from '../assets/team/sharan_gautham_sakthivel.png';
import karImg from '../assets/team/kar.png';
import elaImg from '../assets/team/ela.png';
import sasImg from '../assets/team/sasikeerthika.jpg';
import briImg from '../assets/team/bri.png';
import shamImg from '../assets/team/sham.png';
import lakImg from '../assets/team/lakshmanan_t.png';
import monImg from '../assets/team/monika_s.png';

const Team = ({ editable = false }) => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    // Default data for import
    const defaultTeam = [
        {
            name: "Mr. Sharan Gautham Sakthivel",
            role: "Managing Director",
            description: "A visionary leader bridging industry innovation with practical education to build scalable, future-ready digital solutions.",
            image_url: sharanImg
        },
        {
            name: "Mr. Karthikeyan S",
            role: "Senior Design Engineer",
            description: "Specializes in industry-standard mechanical design and 3D modeling, delivering high-quality, manufacturing-ready engineering solutions.",
            image_url: karImg
        },
        {
            name: "Mr. Elavarasan E",
            role: "Senior Design Engineer",
            description: "Expert in CAD-driven product development and optimization, transforming concepts into validated, production-ready mechanical solutions.",
            image_url: elaImg
        },
        {
            name: "Ms. Sasikeerthika R",
            role: "Senior Software Tester",
            description: "Maintains software excellence through rigorous manual and automated testing to ensure stable, high-performance digital products.",
            image_url: sasImg
        },
        {
            name: "Ms. Brindha A",
            role: "Full Stack Web Developer",
            description: "Develops scalable, end-to-end web applications by integrating modern frontend frameworks with robust backend and database architectures.",
            image_url: briImg
        },
        {
            name: "Ms. Shamli Samporna S",
            role: "AI Engineer Intern",
            description: "Develops and integrates intelligent AI agents and automation workflows to solve complex business challenges and enhance operational efficiency.",
            image_url: shamImg
        },
        {
            name: "Mr. Lakshmanan T",
            role: "Senior Academic Counselor",
            description: "Dedicated to guiding students and professionals toward their ideal career paths with expert academic and industry-aligned counseling.",
            image_url: lakImg
        },
        {
            name: "Ms. Monika S",
            role: "Data Analyst Intern",
            description: "Leverages data-driven insights to optimize business processes and support strategic decision-making through advanced analytical techniques.",
            image_url: monImg
        },
        {
            name: "Mr. Manikandan Ravichandran",
            role: "Marketing and Sales Head",
            description: "Strategizes and leads market expansion initiatives, building long-term partnerships and driving business growth through customer-centric sales strategies.",
            image_url: swaImg
        },
    ];

    const fetchTeam = async () => {
        setLoading(true);
        try {
            const snap = await getDocs(collection(db, 'team_members'));
            const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            data.sort((a, b) => (a.id > b.id ? 1 : -1)); // Sort locally if needed
            if (data.length > 0) {
                // Map local images back to firestore data if they exist to fix broken images
                const merged = data.map(m => {
                    let matchName = m.name;
                    if (matchName === 'Ms. Sasi Keerthika R' || matchName === 'Sasikeerthika R') matchName = 'Ms. Sasikeerthika R';
                    if (matchName === 'Lakshmanan T') matchName = 'Mr. Lakshmanan T';
                    if (matchName === 'Monika S') matchName = 'Ms. Monika S';

                    const localMatch = defaultTeam.find(d => d.name === matchName);
                    return localMatch ? { ...m, name: localMatch.name, image_url: localMatch.image_url } : m;
                });
                
                // If Firestore has members, check if new members are missing and append them locally
                const hasLakshmanan = merged.some(m => m.name?.toLowerCase().includes('lakshmanan'));
                const hasMonika = merged.some(m => m.name?.toLowerCase().includes('monika'));
                if (!hasLakshmanan) merged.push({ id: 'local-lak', name: 'Mr. Lakshmanan T', role: 'Senior Academic Counselor', description: 'Dedicated to guiding students and professionals toward their ideal career paths with expert academic and industry-aligned counseling.', image_url: lakImg });
                if (!hasMonika) merged.push({ id: 'local-mon', name: 'Ms. Monika S', role: 'Data Analyst Intern', description: 'Leverages data-driven insights to optimize business processes and support strategic decision-making through advanced analytical techniques.', image_url: monImg });
                setTeamMembers(merged);
            } else {
                // Fallback to full default list
                setTeamMembers(defaultTeam.map((m, i) => ({ id: `default-${i}`, ...m })));
            }
        } catch (e) {
            console.error(e);
            // On error, fallback to defaults
            setTeamMembers(defaultTeam.map((m, i) => ({ id: `default-${i}`, ...m })));
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    const handleImportDefaults = async () => {
        if (!confirm("This will RESET all team members to the default list with original images. Existing changes will be lost. Continue?")) return;

        setLoading(true);

        try {
            const batch = writeBatch(db);
            const snap = await getDocs(collection(db, 'team_members'));
            snap.docs.forEach(document => {
                if (document.id !== '0') {
                    batch.delete(doc(db, 'team_members', document.id));
                }
            });

            for (const member of defaultTeam) {
                batch.set(doc(collection(db, 'team_members')), member);
            }

            await batch.commit();
            alert("Team members restored successfully!");
            fetchTeam();
        } catch (error) {
            console.error(error);
            alert("Import failed. " + error.message);
        }
    };

    const handleAddMember = async () => {
        const name = prompt("Enter Name:");
        if (!name) return;
        const role = prompt("Enter Role:");

        try {
            await addDoc(collection(db, 'team_members'), {
                name,
                role,
                description: "Click to edit description...",
                image_url: "https://via.placeholder.com/300x300/0f172a/ffffff?text=Upload+Photo"
            });
            fetchTeam();
        } catch (error) {
            alert("Failed to add member: " + error.message);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Delete this team member?")) return;
        try {
            await deleteDoc(doc(db, 'team_members', id));
            fetchTeam();
        } catch (e) { console.error(e); }
    };

    const handleImageUpload = async (file, id) => {
        setIsUploading(true);
        try {
            const publicUrl = await uploadFile(file);
            await updateDoc(doc(db, 'team_members', id), { image_url: publicUrl });
            fetchTeam();
        } catch (error) {
            alert("Upload failed: " + error.message);
        } finally {
            setIsUploading(false);
        }
    };

    const handleUpdateText = async (id, field, value) => {
        try { await updateDoc(doc(db, 'team_members', id), { [field]: value }); } catch (e) { console.error(e); }
    };

    return (
        <section className="py-20 relative overflow-hidden bg-[#0a0f1e] min-h-screen">
            {/* Cosmic Background with Starfield Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0f1e] via-[#1e1b4b] to-[#0a0f1e]">
                {/* Floating Particles (Anti-Gravity Theme) */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white opacity-20"
                        style={{
                            width: Math.random() * 3 + 1,
                            height: Math.random() * 3 + 1,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full"></div>
            </div>
            <div className="container mx-auto relative z-10 px-4 md:px-6">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <h2 className="text-3xl md:text-6xl font-black text-center md:text-left text-white mb-4 uppercase tracking-tight">Meet Our <br /><span className="text-blue-500">Team</span></h2>
                        <p className="text-center md:text-left text-slate-400 mb-8 uppercase tracking-[0.3em] text-sm font-bold">
                            Innovation driven by passion
                        </p>
                    </div>

                    {editable && (
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={handleImportDefaults}
                                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 text-sm font-bold uppercase transition-colors"
                            >
                                Reset / Import Defaults
                            </button>
                            <button
                                onClick={handleAddMember}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold uppercase shadow-lg shadow-blue-600/20"
                            >
                                <Plus size={18} /> Add Member
                            </button>
                        </div>
                    )}
                </div>

                <div className="w-full max-w-[400px] mx-auto pb-10 flex justify-center">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        speed={800} /* Added speed for smooth transition */
                        cardsEffect={{
                            slideShadows: true,
                            rotate: true,
                            perSlideRotate: 2,
                            perSlideOffset: 8,
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        modules={[EffectCards, Pagination, Autoplay]}
                        className="w-[300px] sm:w-[350px] h-[550px]"
                    >
                        {teamMembers
                            .filter(member => !member.name?.toUpperCase().includes('RASIKA'))
                            .map((member, index) => (
                                <SwiperSlide key={member.id} className="w-[300px] sm:w-[350px] h-full rounded-[2rem]">
                                    <motion.div
                                        className="flex flex-col items-center gap-6 p-8 rounded-[2rem] bg-[#0f172a]/95 border border-white/20 transition-all group backdrop-blur-2xl relative shadow-2xl h-full"
                                        whileHover={{ y: -5 }}
                                    >
                                        {editable && (
                                            <button
                                                onClick={() => handleDelete(member.id)}
                                                className="absolute top-4 right-4 text-red-500 hover:bg-red-500/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                            >
                                                <X size={20} />
                                            </button>
                                        )}

                                        <div className="shrink-0 relative group/img mt-4">
                                            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-white/10 group-hover/img:border-blue-500 transition-colors shadow-2xl relative z-10 overflow-hidden bg-slate-100">
                                                <img
                                                    src={member.image_url}
                                                    alt={member.name}
                                                    className={`w-full h-full object-cover ${member.name?.toUpperCase().includes('SHAMLI') ? 'object-bottom scale-125 translate-y-2' : 'object-top'}`}
                                                />
                                                {editable && (
                                                    <label className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity cursor-pointer z-20">
                                                        {isUploading ? <Loader2 className="animate-spin text-white w-6 h-6" /> : <Upload className="text-white w-6 h-6" />}
                                                        <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files[0] && handleImageUpload(e.target.files[0], member.id)} />
                                                    </label>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex-grow flex flex-col items-center text-center w-full z-10">
                                            <h3
                                                className={`text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight mb-2 ${editable ? 'cursor-text hover:bg-white/5 p-1 -m-1 rounded w-full' : ''}`}
                                                contentEditable={editable}
                                                suppressContentEditableWarning
                                                onBlur={(e) => handleUpdateText(member.id, 'name', e.target.innerText)}
                                            >
                                                {member.name}
                                            </h3>

                                            <p
                                                className={`text-xs md:text-sm font-black text-blue-500 mb-6 uppercase tracking-widest bg-blue-500/10 px-4 py-1.5 rounded-full ${editable ? 'cursor-text hover:bg-white/5 p-1 rounded' : ''}`}
                                                contentEditable={editable}
                                                suppressContentEditableWarning
                                                onBlur={(e) => handleUpdateText(member.id, 'role', e.target.innerText)}
                                            >
                                                {member.role}
                                            </p>

                                            <p
                                                className={`text-slate-300 text-sm leading-relaxed font-light line-clamp-4 ${editable ? 'cursor-text hover:bg-white/5 p-1 -m-1 rounded w-full' : ''}`}
                                                contentEditable={editable}
                                                suppressContentEditableWarning
                                                onBlur={(e) => handleUpdateText(member.id, 'description', e.target.innerText)}
                                            >
                                                {member.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

                {teamMembers.length === 0 && !loading && (
                    <div className="text-center text-slate-500 py-10">
                        No team members found. {editable ? "Import defaults or add one!" : ""}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Team;
