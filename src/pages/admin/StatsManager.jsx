import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, updateDoc, doc, writeBatch } from 'firebase/firestore';
import { Save } from 'lucide-react';

const StatsManager = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        setLoading(true);
        try {
            const snap = await getDocs(collection(db, 'stats'));
            const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));

            if (data.length === 0) {
                const batch = writeBatch(db);
                const defaults = [
                    { label: 'Marketing that connects', count: 50, suffix: '+', type: 'marketing' },
                    { label: 'Engineering precision', count: 100, suffix: '+', type: 'marketing' },
                    { label: 'Worldwide projects', count: 2, suffix: '', type: 'marketing' },
                    { label: 'Success stories', count: 150, suffix: '+', type: 'marketing' },
                ];
                defaults.forEach(d => batch.set(doc(collection(db, 'stats')), d));
                await batch.commit();
                fetchStats(); // Retry
            } else {
                setStats(data);
            }
        } catch (error) {
            console.error('Error fetching stats', error);
        }
        setLoading(false);
    };

    const handleUpdate = async (id, field, value) => {
        const newStats = stats.map(s => s.id === id ? { ...s, [field]: value } : s);
        setStats(newStats);
        // Auto-save logic could be debounced, for now simple button save or blur
    };

    const saveStat = async (stat) => {
        try {
            const { id, ...statsData } = stat;
            await updateDoc(doc(db, 'stats', stat.id), statsData);
            alert('Saved!');
        } catch (error) {
            alert('Error saving: ' + error.message);
        }
        alert('Saved!');
    };

    return (
        <div className="p-8 text-white min-h-screen bg-[#0f172a]">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Manage <span className="text-blue-500">Stats</span></h2>

            <div className="grid gap-6">
                {stats.map(stat => (
                    <div key={stat.id} className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col md:flex-row gap-4 items-end">
                        <div className="flex-grow w-full">
                            <label className="text-xs uppercase text-slate-400 font-bold mb-1 block">Label</label>
                            <input className="w-full bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" value={stat.label} onChange={e => handleUpdate(stat.id, 'label', e.target.value)} />
                        </div>
                        <div className="w-24">
                            <label className="text-xs uppercase text-slate-400 font-bold mb-1 block">Count</label>
                            <input type="number" className="w-full bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" value={stat.count} onChange={e => handleUpdate(stat.id, 'count', e.target.value)} />
                        </div>
                        <div className="w-20">
                            <label className="text-xs uppercase text-slate-400 font-bold mb-1 block">Suffix</label>
                            <input className="w-full bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" value={stat.suffix} onChange={e => handleUpdate(stat.id, 'suffix', e.target.value)} />
                        </div>
                        <button onClick={() => saveStat(stat)} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg"><Save size={20} /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsManager;
