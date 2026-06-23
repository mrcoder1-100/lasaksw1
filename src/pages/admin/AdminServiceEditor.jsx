import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams, Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, updateDoc, addDoc, getDoc, doc } from 'firebase/firestore';
import { ArrowLeft, Save, Loader2, HelpCircle, Lock, Eye, Pencil, Star, Image, Plus, Trash2, X } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';

const AdminServiceEditor = () => {
    const { permissions, role, loading: adminLoading } = useAdmin();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const isNew = !id || id === 'new';
    const initialCategory = searchParams.get('category') || 'mechanical';

    if (adminLoading) return <div className="text-center p-10 text-slate-400">Loading permissions...</div>;

    const canWrite = role === 'head_admin' || checkPermission(permissions, 'services', 'write');

    if (!canWrite) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-center p-8">
                <div className="bg-red-500/10 p-6 rounded-full mb-4">
                    <Lock size={48} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
                <p className="text-slate-400 max-w-md">
                    You do not have permission to edit services.
                </p>
                <button
                    className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
                    onClick={() => navigate('/admin/services')}
                >
                    Go Back
                </button>
            </div>
        );
    }

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!isNew);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        category: initialCategory, // default from query param
        description: '',
        content: '', // HTML/text content
        icon: 'Settings', // Default icon name
        image_url: '',
        features: [], // Array of strings
        // New fields for complete editability
        hero_bg_image: '',
        sidebar_title: '',
        sidebar_image: '',
        footer_title: '',
        footer_description: '',
        is_featured: false,
        sub_services: [] // Array of {title, description, icon, features[]}
    });

    const [featureInput, setFeatureInput] = useState('');

    useEffect(() => {
        if (!isNew && id !== 'new') {
            fetchService();
        }
    }, [id]);

    const fetchService = async () => {
        try {
            const docSnap = await getDoc(doc(db, 'services', id));
            if (docSnap.exists()) {
                setFormData({ id: docSnap.id, ...docSnap.data() });
            } else {
                throw new Error("Service not found");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to load service');
            navigate('/admin/services');
        } finally {
            setFetching(false);
        }
    };

    const handleAddFeature = (e) => {
        e.preventDefault();
        if (!featureInput.trim()) return;
        setFormData({ ...formData, features: [...(formData.features || []), featureInput.trim()] });
        setFeatureInput('');
    };

    const removeFeature = (index) => {
        const newFeatures = [...(formData.features || [])];
        newFeatures.splice(index, 1);
        setFormData({ ...formData, features: newFeatures });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Auto-generate slug if empty
            const submissionData = { ...formData };
            if (!submissionData.slug) {
                submissionData.slug = submissionData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            }

            if (id === 'new' || isNew) {
                await addDoc(collection(db, 'services'), submissionData);
            } else {
                await updateDoc(doc(db, 'services', id), submissionData);
            }
            navigate('/admin/services');
        } catch (error) {
            alert('Error saving: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (fetching && !isNew && id !== 'new') return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">Loading...</div>;

    return (
        <div className="min-h-screen bg-[#0f172a] pt-28 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => navigate('/admin/services')} className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-3xl font-black text-white uppercase">{id === 'new' ? 'New Service' : 'Edit Service'}</h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl animate-fade-in-up">
                    <div className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title */}
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Title</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-blue-500 transition-colors"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            {/* Slug */}
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Slug (URL)</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-300 font-mono focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Auto-generated if empty"
                                    value={formData.slug}
                                    onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Category */}
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Category</label>
                                <select
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="mechanical">Mechanical Services</option>
                                    <option value="it">IT Services</option>
                                    <option value="products">Products</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {/* Icon */}
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                    Icon Name <HelpCircle size={12} />
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="e.g. Settings, Code, Cpu"
                                    value={formData.icon}
                                    onChange={e => setFormData({ ...formData, icon: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Short Description</label>
                            <textarea
                                className="w-full h-24 bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                value={formData.description || ''}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Brief summary shown on cards..."
                            ></textarea>
                        </div>

                        {/* Features List */}
                        <div>
                            <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Key Features</label>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    className="flex-1 bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Add a feature..."
                                    value={featureInput}
                                    onChange={e => setFeatureInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleAddFeature(e)}
                                />
                                <button onClick={handleAddFeature} className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-xl font-bold">+</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.features?.map((feat, idx) => (
                                    <span key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-blue-500/30">
                                        {feat}
                                        <button type="button" onClick={() => removeFeature(idx)} className="hover:text-white">&times;</button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div>
                            <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Full Page Content (HTML)</label>
                            <textarea
                                className="w-full h-96 bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-300 font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                value={formData.content || ''}
                                onChange={e => setFormData({ ...formData, content: e.target.value })}
                                placeholder="<p>Detailed content about the service...</p>"
                            ></textarea>
                            <p className="text-xs text-slate-500 mt-2">Use HTML tags for formatting. This will be the main body of the service page.</p>
                        </div>

                        {/* FEATURED TOGGLE */}
                        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.is_featured || false}
                                    onChange={e => setFormData({ ...formData, is_featured: e.target.checked })}
                                    className="w-6 h-6 rounded-lg border-2 border-yellow-500/50 bg-transparent checked:bg-yellow-500 checked:border-yellow-500 cursor-pointer"
                                />
                                <div>
                                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                                        <Star size={20} className="text-yellow-500" />
                                        Featured on Homepage
                                    </div>
                                    <p className="text-slate-400 text-sm mt-1">Display this service prominently on the homepage</p>
                                </div>
                            </label>
                        </div>

                        {/* HERO & SIDEBAR IMAGES */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Hero Background Image */}
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Image size={14} /> Hero Background Image/Video
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="https://example.com/hero.mp4"
                                    value={formData.hero_bg_image || ''}
                                    onChange={e => setFormData({ ...formData, hero_bg_image: e.target.value })}
                                />
                                {formData.hero_bg_image && (
                                    <div className="mt-3 rounded-lg overflow-hidden border border-white/10 h-32">
                                        <img src={formData.hero_bg_image} alt="Hero Preview" className="w-full h-full object-cover opacity-70" onError={(e) => e.target.style.display = 'none'} />
                                    </div>
                                )}
                            </div>
                            {/* Sidebar Image */}
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Image size={14} /> Sidebar Image/Video
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="https://example.com/sidebar.jpg"
                                    value={formData.sidebar_image || ''}
                                    onChange={e => setFormData({ ...formData, sidebar_image: e.target.value })}
                                />
                                {formData.sidebar_image && (
                                    <div className="mt-3 rounded-lg overflow-hidden border border-white/10 h-32">
                                        <img src={formData.sidebar_image} alt="Sidebar Preview" className="w-full h-full object-cover opacity-70" onError={(e) => e.target.style.display = 'none'} />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* SIDEBAR TITLE */}
                        <div>
                            <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Sidebar Title</label>
                            <input
                                type="text"
                                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="e.g., Expert Mechanical Solutions"
                                value={formData.sidebar_title || ''}
                                onChange={e => setFormData({ ...formData, sidebar_title: e.target.value })}
                            />
                        </div>

                        {/* FOOTER SECTION */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                            <h3 className="text-white font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-3">Footer CTA Section</h3>
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Footer Title</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Ready to Transform Your Business?"
                                    value={formData.footer_title || ''}
                                    onChange={e => setFormData({ ...formData, footer_title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Footer Description</label>
                                <textarea
                                    className="w-full h-24 bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    value={formData.footer_description || ''}
                                    onChange={e => setFormData({ ...formData, footer_description: e.target.value })}
                                    placeholder="Contact us today to discuss your project requirements..."
                                ></textarea>
                            </div>
                        </div>

                        {/* SUB-SERVICES / SOLUTIONS */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                            <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                <h3 className="text-white font-bold uppercase tracking-widest text-sm">Solution Cards (Sub-Services)</h3>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const newSubServices = [...(formData.sub_services || []), {
                                            title: 'New Solution',
                                            description: 'Enter description here...',
                                            icon: 'Settings',
                                            features: ['Feature 1']
                                        }];
                                        setFormData({ ...formData, sub_services: newSubServices });
                                    }}
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                                >
                                    <Plus size={16} /> Add Solution
                                </button>
                            </div>

                            {(formData.sub_services || []).map((sub, idx) => (
                                <div key={idx} className="bg-[#0f172a]/50 border border-white/10 rounded-xl p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">Solution {idx + 1}</span>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newSubServices = formData.sub_services.filter((_, i) => i !== idx);
                                                setFormData({ ...formData, sub_services: newSubServices });
                                            }}
                                            className="p-1 hover:bg-red-500/20 text-red-500 rounded transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            value={sub.title || ''}
                                            onChange={e => {
                                                const newSubServices = [...formData.sub_services];
                                                newSubServices[idx].title = e.target.value;
                                                setFormData({ ...formData, sub_services: newSubServices });
                                            }}
                                            className="bg-[#0a0f1c] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Icon (e.g., Code, Settings)"
                                            value={sub.icon || ''}
                                            onChange={e => {
                                                const newSubServices = [...formData.sub_services];
                                                newSubServices[idx].icon = e.target.value;
                                                setFormData({ ...formData, sub_services: newSubServices });
                                            }}
                                            className="bg-[#0a0f1c] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Description"
                                        value={sub.description || ''}
                                        onChange={e => {
                                            const newSubServices = [...formData.sub_services];
                                            newSubServices[idx].description = e.target.value;
                                            setFormData({ ...formData, sub_services: newSubServices });
                                        }}
                                        className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-3 py-2 text-slate-300 text-sm focus:outline-none focus:border-blue-500 resize-none h-20"
                                    />
                                    <div>
                                        <label className="text-xs text-slate-500 block mb-1">Features (comma-separated)</label>
                                        <input
                                            type="text"
                                            placeholder="Phase 1, Phase 2, Phase 3"
                                            value={(sub.features || []).join(', ')}
                                            onChange={e => {
                                                const newSubServices = [...formData.sub_services];
                                                newSubServices[idx].features = e.target.value.split(',').map(f => f.trim()).filter(f => f);
                                                setFormData({ ...formData, sub_services: newSubServices });
                                            }}
                                            className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            ))}

                            {(formData.sub_services || []).length === 0 && (
                                <p className="text-center text-slate-500 py-8 border-2 border-dashed border-white/10 rounded-xl">No solutions added yet. Click "Add Solution" to create one.</p>
                            )}
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 justify-between items-center">
                            {/* Left side: Live Edit & Preview */}
                            {!isNew && formData.category && formData.slug && (
                                <div className="flex gap-3">
                                    <Link
                                        to={`/admin/services/${formData.category}/${formData.slug}`}
                                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                                    >
                                        <Pencil size={18} /> Live Edit
                                    </Link>
                                    <Link
                                        to={`/services/${formData.category}/${formData.slug}`}
                                        target="_blank"
                                        className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                                    >
                                        <Eye size={18} /> Preview
                                    </Link>
                                </div>
                            )}

                            {/* Right side: Save Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 rounded-xl uppercase tracking-widest transition-all hover:scale-105 disabled:opacity-50 disabled:scale-100 ml-auto"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                                {loading ? 'Saving...' : 'Save Service'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminServiceEditor;
