import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Settings, Plus, Trash2, Rocket } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { CMSText, IconMap } from './cms';

const GoalSection = ({ editable = false }) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const defaultCards = [
        {
            title: "Global Scalability",
            description: "Our solutions are built to grow. Whether you're a local startup or a global enterprise, we engineer systems that can scale seamlessly with your ambitions.",
            icon: "Rocket"
        }
    ];

    const fetchCards = async () => {
        setLoading(true);
        try {
            const snap = await getDocs(collection(db, 'goal_cards'));
            const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            // Default sort logic
            data.sort((a, b) => (a.title > b.title ? 1 : -1));
            setCards(data);
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const handleImportDefaults = async () => {
        if (!confirm("This will RESET all cards to default. Continue?")) return;

        setLoading(true);
        try {
            const batch = writeBatch(db);
            const snap = await getDocs(collection(db, 'goal_cards'));
            snap.docs.forEach(document => {
                if (document.id !== '0') {
                    batch.delete(doc(db, 'goal_cards', document.id));
                }
            });
            for (const c of defaultCards) {
                batch.set(doc(collection(db, 'goal_cards')), c);
            }
            await batch.commit();
            fetchCards();
        } catch (e) {
            alert("Import failed: " + e.message);
        }
    };

    const handleAdd = async () => {
        const title = prompt("Enter Card Title:");
        if (!title) return;

        try {
            await addDoc(collection(db, 'goal_cards'), {
                title,
                description: "Click to edit description...",
                icon: "Target"
            });
            fetchCards();
        } catch (e) {
            alert("Error adding: " + e.message);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Delete this card?")) return;
        try {
            await deleteDoc(doc(db, 'goal_cards', id));
            fetchCards();
        } catch (e) { console.error(e); }
    };

    const handleUpdateText = async (id, field, value) => {
        try {
            await updateDoc(doc(db, 'goal_cards', id), { [field]: value });
        } catch (e) { console.error(e); }
    };

    const handleUpdateIcon = async (id, currentIcon) => {
        if (!editable) return;
        const newIcon = prompt(`Enter Icon Name (Current: ${currentIcon}) \nAvailable: ${Object.keys(IconMap).slice(0, 10).join(', ')}...`, currentIcon);
        if (newIcon && IconMap[newIcon]) {
            setCards(prev => prev.map(c => c.id === id ? { ...c, icon: newIcon } : c));
            try { await updateDoc(doc(db, 'goal_cards', id), { icon: newIcon }); } catch (e) { console.error(e); }
        } else if (newIcon) {
            alert("Invalid Icon Name.");
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#0a1120]">
            {/* Background Glows (CSS Only) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-12 inline-flex p-4 rounded-3xl bg-blue-600/10 border border-blue-500/20"
                    >
                        <Target className="text-blue-500 w-12 h-12" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white uppercase leading-tight mb-8"
                    >
                        <CMSText id="goal_title_1" defaultText="Our Mission is to" editable={editable} /> <br />
                        <span className="text-blue-500 text-outline-blue">
                            <CMSText id="goal_title_2" defaultText="Empower Efficiency" editable={editable} />
                        </span>
                    </motion.h2>

                    {editable && (
                        <div className="mb-8 flex justify-center gap-4">
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
                                <Plus size={18} /> Add Card
                            </button>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
                        {cards.map((card, index) => {
                            const IconComponent = IconMap[card.icon] || Target;
                            return (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group relative"
                                >
                                    {editable && (
                                        <button
                                            onClick={() => handleDelete(card.id)}
                                            className="absolute top-6 right-6 text-red-500 hover:bg-red-500/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    )}

                                    <div
                                        className={`w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all relative ${editable ? 'cursor-pointer hover:ring-2 ring-blue-400' : ''}`}
                                        onClick={() => handleUpdateIcon(card.id, card.icon)}
                                        title={editable ? "Click to change icon" : ""}
                                    >
                                        <IconComponent className="w-6 h-6" />
                                        {editable && (
                                            <div className="absolute -top-1 -right-1 bg-white text-blue-600 rounded-full p-0.5 shadow-sm">
                                                <Settings size={10} />
                                            </div>
                                        )}
                                    </div>
                                    <h3
                                        className={`text-2xl font-bold text-white mb-4 uppercase ${editable ? 'cursor-text hover:bg-white/5 p-1 -m-1 rounded' : ''}`}
                                        contentEditable={editable}
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleUpdateText(card.id, 'title', e.target.innerText)}
                                    >
                                        {card.title}
                                    </h3>
                                    <p
                                        className={`text-slate-400 leading-relaxed font-light ${editable ? 'cursor-text hover:bg-white/5 p-1 -m-1 rounded' : ''}`}
                                        contentEditable={editable}
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleUpdateText(card.id, 'description', e.target.innerText)}
                                    >
                                        {card.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                        {cards.length === 0 && !loading && (
                            <div className="col-span-full text-center text-slate-500 py-10">
                                No cards found. {editable ? "Add one or Import Defaults." : ""}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoalSection;
