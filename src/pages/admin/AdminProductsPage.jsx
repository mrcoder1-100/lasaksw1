import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Utensils, ArrowRight, Link as LinkIcon, Edit2, Check, X, Cpu, Plus, Trash2, Settings, Upload, Image as ImageIcon } from 'lucide-react';
import Clients from '../../components/Clients';
import Button from '../../components/ui/Button';
import { db, storage } from '../../firebase';
import { collection, query, orderBy, getDocs, deleteDoc, updateDoc, addDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminProductsPage = () => {
    const { permissions, role, loading: adminLoading } = useAdmin();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingUrlId, setEditingUrlId] = useState(null);
    const [tempUrl, setTempUrl] = useState('');
    const [uploadingImage, setUploadingImage] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const canWrite = role === 'head_admin' || checkPermission(permissions, 'products', 'write');

    if (adminLoading) return <div className="text-center p-20 text-slate-400">Loading permissions...</div>;

    if (!canWrite) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-center p-8">
                <div className="bg-red-500/10 p-6 rounded-full mb-4">
                    <Lock size={48} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
                <p className="text-slate-400 max-w-md">
                    You do not have permission to manage products.
                </p>
                <button
                    className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
                    onClick={() => navigate('/admin/dashboard')}
                >
                    Go Back
                </button>
            </div>
        );
    }

    const fetchProducts = async () => {
        try {
            const q = query(collection(db, 'products'), orderBy('created_at', 'asc'));
            const snap = await getDocs(q);
            setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    // --- CRUD Operations ---

    const handleAddProduct = async () => {
        const name = prompt("Enter Product Name (e.g., 'Lasak Logistics'):");
        if (!name) return;

        const newProduct = {
            name: name,
            description: "A revolutionary platform for...",
            tag: "Coming Soon",
            icon: "Database",
            url: "https://lasak.in"
        };

        try {
            const docRef = await addDoc(collection(db, 'products'), newProduct);
            setProducts([...products, { id: docRef.id, ...newProduct }]);
        } catch (error) {
            alert("Failed to add product: " + error.message);
        }
    };

    const handleDeleteProduct = async (id) => {
        if (!confirm("Are you sure you want to delete this product?")) return;

        try {
            await deleteDoc(doc(db, 'products', id));
            setProducts(products.filter(p => p.id !== id));
        } catch (error) {
            alert("Failed to delete: " + error.message);
        }
    };

    const handleUpdateField = async (id, field, value) => {
        // Optimistic update
        setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));

        try {
            await updateDoc(doc(db, 'products', id), { [field]: value });
        } catch (error) {
            console.error(`Error updating ${field}:`, error);
        }
    };

    const handleUpdateUrl = async (id) => {
        try {
            await updateDoc(doc(db, 'products', id), { url: tempUrl });

            setProducts(products.map(p => p.id === id ? { ...p, url: tempUrl } : p));
            setEditingUrlId(null);
        } catch (error) {
            console.error('Error updating product URL:', error);
            alert('Failed to update URL');
        }
    };

    const handleIconEdit = (id, currentIcon) => {
        const newIcon = prompt("Enter Icon Name (Database, Utensils, Cpu, etc.):", currentIcon);
        if (newIcon) handleUpdateField(id, 'icon', newIcon);
    };

    const handleTagEdit = (id, currentTag) => {
        const newTag = prompt("Enter Tag (Coming Soon, Live, Beta):", currentTag);
        if (newTag) handleUpdateField(id, 'tag', newTag);
    };

    // Image Upload Handler
    const handleImageUpload = async (e, productId) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image size must be less than 5MB');
            return;
        }

        try {
            setUploadingImage(productId);

            // Create unique filename
            const fileExt = file.name.split('.').pop();
            const fileName = `${productId}-${Date.now()}.${fileExt}`;
            const filePath = `product-images/${fileName}`;

            // Upload to Firebase Storage
            const storageRef = ref(storage, filePath);
            await uploadBytes(storageRef, file);

            // Get public URL
            const publicUrl = await getDownloadURL(storageRef);

            // Update product with image URL
            await handleUpdateField(productId, 'image_url', publicUrl);

            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image: ' + error.message);
        } finally {
            setUploadingImage(null);
        }
    };

    // Delete image handler
    const handleDeleteImage = async (productId, imageUrl) => {
        if (!confirm('Are you sure you want to delete this image?')) return;

        try {
            // Extract file path from URL
            const urlParts = imageUrl.split('/');
            const filePath = `product-images/${urlParts[urlParts.length - 1]}`;

            const storageRef = ref(storage, filePath);
            await deleteObject(storageRef);

            // Update product to remove image URL
            await handleUpdateField(productId, 'image_url', null);

            alert('Image deleted successfully!');
        } catch (error) {
            console.error('Error deleting image:', error);
            alert('Failed to delete image');
        }
    };


    const getIcon = (iconName) => {
        // Fallback or dynamic logic could be improved here
        // For now adhering to existing patterns + some extra safety
        const size = 200;
        const className = "text-blue-500 opacity-50";

        switch (iconName) {
            case 'Database': return <Database size={size} className="text-blue-500" />;
            case 'Utensils': return <Utensils size={size} className="text-orange-500" />;
            case 'Cpu': return <Cpu size={size} className="text-indigo-500" />;
            // Add more icons as valid cases or a generic fallback
            default: return <Database size={size} className="text-slate-500" />;
        }
    };

    const getSmallIcon = (iconName) => {
        switch (iconName) {
            case 'Database': return <Database size={24} />;
            case 'Utensils': return <Utensils size={24} />;
            case 'Cpu': return <Cpu size={24} />;
            default: return <Database size={24} />;
        }
    };

    if (loading) return <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center text-white">Loading...</div>;

    return (
        <div className="min-h-screen pt-32 md:pt-20 bg-[#0a0f1c]">
            {/* Admin Indicator */}
            <div className="fixed top-28 left-0 right-0 z-[10000] bg-blue-600 backdrop-blur-md text-white px-4 py-2 text-center font-bold shadow-lg border-b border-white/10 flex justify-between items-center max-w-7xl mx-auto rounded-b-xl">
                <span>PRODUCT MANAGEMENT MODE</span>
                <button
                    onClick={handleAddProduct}
                    className="bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                    <Plus size={14} /> Add Product
                </button>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden flex items-center justify-center min-h-[40vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase mb-8 leading-none tracking-tight">
                            Manage <span className="text-blue-500">Products</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-20">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`bg-[#1e293b]/30 border rounded-[3rem] p-8 md:p-12 overflow-hidden relative group transition-all ${product.tag === 'Coming Soon' ? 'border-orange-500/10 hover:border-orange-500/30' : 'border-blue-500/10 hover:border-blue-500/30'}`}
                        >
                            <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="absolute top-8 right-8 text-red-500 hover:bg-red-500/10 p-3 rounded-full z-20 transition-colors opacity-0 group-hover:opacity-100"
                                title="Delete Product"
                            >
                                <Trash2 size={24} />
                            </button>

                            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                {getIcon(product.icon)}
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 space-y-6">
                                    <div
                                        onClick={() => handleTagEdit(product.id, product.tag)}
                                        className={`inline-block px-4 py-2 rounded-full border cursor-pointer hover:brightness-110 active:scale-95 transition-all ${product.tag === 'Coming Soon' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}
                                    >
                                        <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                            {product.tag} <Edit2 size={10} />
                                        </span>
                                    </div>
                                    <h2
                                        className="text-4xl md:text-5xl font-black text-white uppercase leading-none outline-none focus:bg-white/5 rounded p-1 -m-1"
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleUpdateField(product.id, 'name', e.target.innerText)}
                                    >
                                        {product.name}
                                    </h2>
                                    <p
                                        className="text-slate-400 text-lg leading-relaxed outline-none focus:bg-white/5 rounded p-1 -m-1 whitespace-pre-wrap"
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleUpdateField(product.id, 'description', e.target.innerText)}
                                    >
                                        {product.description}
                                    </p>

                                    {/* URL EDITOR */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                        <div className="flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm">
                                            <LinkIcon size={16} className="text-blue-500" />
                                            <span>Product Target URL</span>
                                        </div>

                                        {editingUrlId === product.id ? (
                                            <div className="flex flex-col gap-3">
                                                <input
                                                    type="text"
                                                    value={tempUrl}
                                                    onChange={(e) => setTempUrl(e.target.value)}
                                                    className="bg-[#0a0f1c] border border-blue-500/50 rounded-xl px-4 py-3 text-white w-full outline-none focus:ring-2 focus:ring-blue-500/20"
                                                    placeholder="Enter URL (e.g., https://...)"
                                                />
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleUpdateUrl(product.id)}
                                                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
                                                    >
                                                        <Check size={16} /> Save URL
                                                    </button>
                                                    <button
                                                        onClick={() => setEditingUrlId(null)}
                                                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-between gap-4 group/url">
                                                <div className="text-blue-400 truncate font-mono text-sm bg-blue-900/20 px-3 py-2 rounded-lg border border-blue-500/10 flex-grow">
                                                    {product.url || 'No URL set'}
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        setEditingUrlId(product.id);
                                                        setTempUrl(product.url || '');
                                                    }}
                                                    className="p-3 bg-white/5 hover:bg-blue-600 text-white rounded-xl transition-all shadow-lg"
                                                    title="Edit URL"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a
                                            href={product.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-bold flex items-center gap-2 w-fit transition-colors"
                                        >
                                            Preview Link <ArrowRight size={18} />
                                        </a>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full h-64 md:h-80 bg-black/20 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm overflow-hidden relative group/image">
                                    {product.image_url ? (
                                        // Show uploaded image
                                        <>
                                            <img
                                                src={product.image_url}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                                <label className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg cursor-pointer transition-all">
                                                    <Upload size={20} />
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleImageUpload(e, product.id)}
                                                        className="hidden"
                                                        disabled={uploadingImage === product.id}
                                                    />
                                                </label>
                                                <button
                                                    onClick={() => handleDeleteImage(product.id, product.image_url)}
                                                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-all"
                                                    title="Delete Image"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        // Show upload interface
                                        <div className="flex flex-col items-center gap-4 p-8 text-center">
                                            {uploadingImage === product.id ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                                                    <span className="text-sm text-slate-400">Uploading...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <ImageIcon size={48} className="text-slate-500" />
                                                    <span className="text-xs uppercase tracking-widest font-bold text-slate-500">No Image</span>
                                                    <label className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-all flex items-center gap-2 font-bold">
                                                        <Upload size={18} />
                                                        Upload Image
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => handleImageUpload(e, product.id)}
                                                            className="hidden"
                                                        />
                                                    </label>
                                                    <span className="text-xs text-slate-600">Max 5MB (JPG, PNG, WebP)</span>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {products.length === 0 && !loading && (
                        <div className="text-center text-slate-500">No products found. Click "Add Product" to start.</div>
                    )}
                </div>
            </section>

            <Clients />
        </div>
    );
};

export default AdminProductsPage;
