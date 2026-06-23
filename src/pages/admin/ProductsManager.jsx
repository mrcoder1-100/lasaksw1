import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductsManager = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '', description: '', image_url: '', link: '',
        is_ai_powered: false, is_coming_soon: false, features: []
    });
    const [featureInput, setFeatureInput] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        const snap = await getDocs(collection(db, 'products'));
        setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Remove undefined features if empty
            const dataToSave = { ...formData };
            if (!dataToSave.features) dataToSave.features = [];

            if (editingId) {
                await updateDoc(doc(db, 'products', editingId), dataToSave);
            } else {
                await addDoc(collection(db, 'products'), dataToSave);
            }
        } catch (error) {
            console.error("Error saving product: ", error);
        }
        resetForm();
        fetchProducts();
    };

    const resetForm = () => {
        setFormData({ title: '', description: '', image_url: '', link: '', is_ai_powered: false, is_coming_soon: false, features: [] });
        setEditingId(null);
        setFeatureInput('');
    }

    const handleAddFeature = () => {
        if (featureInput.trim()) {
            setFormData({ ...formData, features: [...(formData.features || []), featureInput] });
            setFeatureInput('');
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Delete this product?')) {
            await deleteDoc(doc(db, 'products', id));
            fetchProducts();
        }
    };

    return (
        <div className="p-8 text-white min-h-screen bg-[#0f172a]">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Manage <span className="text-blue-500">Products</span></h2>

            <form onSubmit={handleSubmit} className="mb-12 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" placeholder="Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required />
                    <input className="bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" placeholder="Image URL" value={formData.image_url} onChange={e => setFormData({ ...formData, image_url: e.target.value })} />
                    <input className="bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white" placeholder="Link URL" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} />

                    <div className="flex gap-4 items-center pl-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={formData.is_ai_powered} onChange={e => setFormData({ ...formData, is_ai_powered: e.target.checked })} className="w-5 h-5 accent-blue-500" />
                            AI Powered
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={formData.is_coming_soon} onChange={e => setFormData({ ...formData, is_coming_soon: e.target.checked })} className="w-5 h-5 accent-orange-500" />
                            Coming Soon
                        </label>
                    </div>

                    <textarea className="bg-[#0f172a] border border-white/20 rounded-lg p-3 text-white md:col-span-2" placeholder="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} required />

                    <div className="md:col-span-2 bg-[#0f172a]/50 p-4 rounded-lg border border-white/10">
                        <label className="text-xs uppercase text-slate-400 font-bold mb-2 block">Features</label>
                        <div className="flex gap-2 mb-2">
                            <input className="bg-[#0f172a] border border-white/20 rounded-lg p-2 flex-grow text-white" placeholder="Add a feature..." value={featureInput} onChange={e => setFeatureInput(e.target.value)} />
                            <button type="button" onClick={handleAddFeature} className="bg-slate-700 px-4 rounded-lg">Add</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {(formData.features || []).map((f, i) => (
                                <span key={i} className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-sm flex items-center gap-2">
                                    {f} <button type="button" onClick={() => setFormData({ ...formData, features: formData.features.filter((_, idx) => idx !== i) })}><X size={12} /></button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold flex items-center gap-2">{editingId ? <Save size={18} /> : <Plus size={18} />} {editingId ? 'Update Product' : 'Add Product'}</button>
                    {editingId && <button onClick={resetForm} type="button" className="bg-slate-600 px-6 py-2 rounded-lg"><X size={18} /></button>}
                </div>
            </form>

            <div className="grid gap-6">
                {products.map(product => (
                    <motion.div key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/5 p-6 rounded-xl border border-white/10 flex gap-6 items-start group hover:bg-white/10 transition-colors">
                        <div className="w-24 h-24 bg-black/40 rounded-lg overflow-hidden flex-shrink-0">
                            {product.image_url && <img src={product.image_url} alt={product.title} className="w-full h-full object-cover" />}
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-bold text-2xl uppercase">{product.title}</h3>
                                {product.is_ai_powered && <span className="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-1 rounded-full uppercase font-bold">AI</span>}
                                {product.is_coming_soon && <span className="bg-orange-500/20 text-orange-400 text-[10px] px-2 py-1 rounded-full uppercase font-bold">Soon</span>}
                            </div>
                            <p className="text-slate-400 text-sm mb-2">{product.description}</p>
                            <div className="flex gap-2 text-xs text-slate-500">
                                {(product.features || []).map((f, i) => <span key={i}>• {f}</span>)}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button onClick={() => { setFormData(product); setEditingId(product.id) }} className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500 hover:text-white"><Edit2 size={18} /></button>
                            <button onClick={() => handleDelete(product.id)} className="p-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500 hover:text-white"><Trash2 size={18} /></button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProductsManager;
