import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesManager = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ title: '', description: '', link: '', icon_name: '' });

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        setLoading(true);
        const snap = await getDocs(collection(db, 'services'));
        setServices(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await updateDoc(doc(db, 'services', editingId), formData);
            } else {
                await addDoc(collection(db, 'services'), formData);
            }
        } catch (error) {
            console.error('Error saving service', error);
        }
        setFormData({ title: '', description: '', link: '', icon_name: '' });
        setEditingId(null);
        fetchServices();
    };

    const handleEdit = (service) => {
        setFormData(service);
        setEditingId(service.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this service?')) {
            await deleteDoc(doc(db, 'services', id));
            fetchServices();
        }
    };

    return (
        <div className="p-8 text-white min-h-screen bg-[#0f172a]">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Manage <span className="text-blue-500">Services</span></h2>

            <form onSubmit={handleSubmit} className="mb-12 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" placeholder="Title (e.g., Web Development)" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required />
                    <input className="bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" placeholder="Icon Name (e.g., Code, BarChart3)" value={formData.icon_name} onChange={e => setFormData({ ...formData, icon_name: e.target.value })} required />
                    <input className="bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" placeholder="Link (e.g., /services/web)" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} required />
                    <input className="bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" placeholder="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} required />
                </div>
                <div className="flex gap-2">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold flex items-center gap-2">{editingId ? <Save size={18} /> : <Plus size={18} />} {editingId ? 'Update Service' : 'Add Service'}</button>
                    {editingId && <button onClick={() => { setEditingId(null); setFormData({ title: '', description: '', link: '', icon_name: '' }) }} type="button" className="bg-slate-600 px-6 py-2 rounded-lg"><X size={18} /></button>}
                </div>
            </form>

            <div className="grid gap-4">
                {services.map(service => (
                    <motion.div key={service.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/5 p-6 rounded-xl border border-white/10 flex justify-between items-center group hover:bg-white/10 transition-colors">
                        <div>
                            <h3 className="font-bold text-xl">{service.title}</h3>
                            <p className="text-slate-400 text-sm">{service.description}</p>
                            <span className="text-xs text-blue-400 uppercase tracking-widest mt-2 block">{service.icon_name}</span>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => handleEdit(service)} className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500 hover:text-white"><Edit2 size={18} /></button>
                            <button onClick={() => handleDelete(service.id)} className="p-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500 hover:text-white"><Trash2 size={18} /></button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesManager;
