import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, storage } from '../../firebase';
import { collection, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Save, ArrowLeft, Upload, Image as ImageIcon, Lock } from 'lucide-react';
import Button from '../../components/ui/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';

const AdminBlogEditor = () => {
    const { permissions, role, loading: adminLoading } = useAdmin();
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = !id;
    const fileInputRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!isNew);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        category: '',
        image_url: '',
        excerpt: '',
        content: '',
        published: true
    });

    const [isSourceMode, setIsSourceMode] = useState(false);

    // Permission Check
    if (adminLoading) {
        return <div className="p-10 text-center text-slate-400">Loading permissions...</div>;
    }

    const canWrite = role === 'head_admin' || checkPermission(permissions, 'blogs', 'write');

    if (!canWrite) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
                <div className="bg-red-500/10 p-6 rounded-full mb-4">
                    <Lock size={48} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
                <p className="text-slate-400 max-w-md">
                    You do not have permission to edit blogs. Please contact the head administrator.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => navigate('/admin/blogs')}>
                    Go Back
                </Button>
            </div>
        );
    }

    useEffect(() => {
        if (!isNew) {
            const fetchBlog = async () => {
                try {
                    const docSnap = await getDoc(doc(db, 'blogs', id));
                    if (docSnap.exists()) {
                        setFormData({ id: docSnap.id, ...docSnap.data() });
                    } else {
                        throw new Error("Blog not found");
                    }
                } catch (error) {
                    console.error('Error fetching blog:', error);
                    alert('Could not find blog post.');
                    navigate('/admin/blogs');
                }
                setFetching(false);
            };
            fetchBlog();
        }
    }, [id, isNew, navigate]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Auto-generate slug from title if slug is empty
    const handleTitleBlur = () => {
        if (!formData.slug && formData.title) {
            const slug = formData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            setFormData(prev => ({ ...prev, slug }));
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `blog-images/${fileName}`;

            const storageRef = ref(storage, filePath);
            await uploadBytes(storageRef, file);
            const publicUrl = await getDownloadURL(storageRef);

            setFormData(prev => ({ ...prev, image_url: publicUrl }));
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Image upload failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = { ...formData };

        // Validation
        if (!payload.title || !payload.slug) {
            alert('Title and Slug are required.');
            setLoading(false);
            return;
        }

        try {
            if (isNew) {
                await addDoc(collection(db, 'blogs'), payload);
            } else {
                await updateDoc(doc(db, 'blogs', id), payload);
            }
            navigate('/admin/blogs');
        } catch (error) {
            console.error('Error saving blog:', error);
            alert(`Error saving: ${error.message}`);
        }
        setLoading(false);
    };

    if (fetching) return <div className="p-10 text-center text-slate-400">Loading editor...</div>;

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Button variant="ghost" className="text-slate-400 hover:text-white" onClick={() => navigate('/admin/blogs')}>
                    <ArrowLeft size={20} />
                </Button>
                <h1 className="text-3xl font-bold text-white">{isNew ? 'Create New Blog Post' : 'Edit Blog Post'}</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Main Info Card */}
                <div className="bg-[#1e2340] p-8 rounded-2xl border border-white/5 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                onBlur={handleTitleBlur}
                                className="w-full bg-[#161a30] border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                                placeholder="Enter blog title"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Slug (URL)</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full bg-[#161a30] border border-white/10 rounded-lg p-3 text-slate-300 focus:border-blue-500 outline-none font-mono text-sm"
                                placeholder="url-friendly-slug"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Category</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full bg-[#161a30] border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                                placeholder="e.g. Technology, Design"
                            />
                        </div>
                        <div className="space-y-2 flex items-center gap-2 pt-8">
                            <input
                                type="checkbox"
                                id="published"
                                name="published"
                                checked={formData.published}
                                onChange={handleChange}
                                className="w-5 h-5 rounded border-gray-600 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="published" className="text-white font-medium cursor-pointer select-none">Published</label>
                        </div>
                    </div>
                </div>

                {/* Image Upload */}
                <div className="bg-[#1e2340] p-8 rounded-2xl border border-white/5 space-y-6">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block">Featured Image</label>

                    <div className="flex items-start gap-6">
                        <div className="w-40 h-40 bg-[#161a30] rounded-lg border border-dashed border-white/20 flex items-center justify-center overflow-hidden relative group">
                            {formData.image_url ? (
                                <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <ImageIcon className="text-slate-600" size={32} />
                            )}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-xs text-white font-bold">Change</span>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    name="image_url"
                                    value={formData.image_url}
                                    onChange={handleChange}
                                    className="flex-1 bg-[#161a30] border border-white/10 rounded-lg p-3 text-slate-300 text-sm focus:border-blue-500 outline-none"
                                    placeholder="https://..."
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={loading}
                                >
                                    <Upload size={18} />
                                </Button>
                            </div>
                            <p className="text-slate-500 text-xs">
                                Upload an image or paste a URL. Recommended size: 1200x630px.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Editor */}
                <div className="bg-[#1e2340] p-8 rounded-2xl border border-white/5 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Excerpt (Short Description)</label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-[#161a30] border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none leading-relaxed"
                            placeholder="Brief summary for the blog card..."
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Content</label>
                            <button
                                type="button"
                                onClick={() => setIsSourceMode(!isSourceMode)}
                                className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2"
                            >
                                {isSourceMode ? '📝 Visual Editor' : '💻 Source Code'}
                            </button>
                        </div>

                        {isSourceMode ? (
                            <textarea
                                value={formData.content}
                                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                                className="w-full h-96 bg-[#161a30] border border-white/10 rounded-lg p-4 text-slate-300 font-mono text-sm focus:border-blue-500 outline-none leading-relaxed"
                                placeholder="<h2>Your HTML content here...</h2>"
                            />
                        ) : (
                            <div className="bg-white rounded-lg overflow-hidden border border-white/10 text-slate-900">
                                <ReactQuill
                                    theme="snow"
                                    value={formData.content}
                                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                                    className="h-96 mb-12"
                                    modules={{
                                        toolbar: [
                                            [{ 'header': [1, 2, 3, false] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['link', 'image'],
                                            ['clean']
                                        ],
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Button type="button" variant="ghost" onClick={() => navigate('/admin/blogs')}>
                        Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8" disabled={loading}>
                        {loading ? 'Saving...' : (
                            <div className="flex items-center gap-2">
                                <Save size={18} /> Save Blog Post
                            </div>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AdminBlogEditor;
