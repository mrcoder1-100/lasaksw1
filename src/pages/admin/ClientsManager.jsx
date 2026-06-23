import React, { useEffect, useState } from 'react';
import { db, storage } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Plus, Trash2, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientsManager = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        setLoading(true);
        const snap = await getDocs(collection(db, 'clients'));
        setClients(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
    };

    // Reuse the uploadFile logic or import it if exported (it's not exported from cms/index yet, so duplicating for now or could refactor)
    const uploadFile = async (file, bucket = 'media') => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const storageRef = ref(storage, `${bucket}/${filePath}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    };

    // Default logos to import
    const defaultLogos = [
        "https://lasak.in/wp-content/uploads/2025/09/logo1.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo14.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo6.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo16.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo4.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo15.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo13.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo11.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo3.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo2.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo5.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo7.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo9.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo10.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo8.jpg.jpg",
        "https://lasak.in/wp-content/uploads/2025/09/logo12.jpg.jpg"
    ];

    const handleImportDefaults = async () => {
        if (!window.confirm("This will add all default clients to the database. Continue?")) return;

        setLoading(true);
        try {
            const batch = writeBatch(db);
            defaultLogos.forEach(url => {
                batch.set(doc(collection(db, 'clients')), { image_url: url });
            });
            await batch.commit();
            alert('Default clients imported successfully!');
            fetchClients();
        } catch (error) {
            console.error('Import failed:', error);
            alert(`Import failed: ${error.message}.`);
        }
        setLoading(false);
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        try {
            const publicUrl = await uploadFile(file);
            // Auto add after upload
            await addDoc(collection(db, 'clients'), { image_url: publicUrl });
            fetchClients();
        } catch (error) {
            console.error('Upload failed:', error);
            alert(`Upload failed: ${error.message}. \n\nCheck RLS Policies if this persists.`);
        } finally {
            setIsUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Remove this client logo?')) {
            await deleteDoc(doc(db, 'clients', id));
            fetchClients();
        }
    };

    return (
        <div className="p-8 text-white min-h-screen bg-[#0f172a]">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Manage <span className="text-blue-500">Clients</span></h2>

            <div className="mb-12 bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-4 items-start">
                <p className="text-slate-400 mb-2">Upload a new client logo to add it to the carousel.</p>

                <div className="flex flex-wrap gap-4">
                    <label className={`bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold flex items-center gap-2 cursor-pointer transition-colors ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}>
                        {isUploading ? (
                            <>Uploading...</>
                        ) : (
                            <><Plus size={18} /> Upload New Logo</>
                        )}
                        <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} disabled={isUploading} />
                    </label>

                    <button
                        onClick={handleImportDefaults}
                        className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors border border-white/20"
                    >
                        Import Default Clients
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {clients.map(client => (
                    <motion.div key={client.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-4 rounded-xl relative group">
                        <div className="aspect-[3/2] flex items-center justify-center">
                            <img src={client.image_url} alt="Client" className="max-w-full max-h-full object-contain" />
                        </div>
                        <button onClick={() => handleDelete(client.id)} className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14} /></button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ClientsManager;
