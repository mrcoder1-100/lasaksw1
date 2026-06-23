import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, query, orderBy, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { Plus, Edit, Trash2, Settings, Eye, Pencil, Star } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { checkPermission } from '../../utils/permissions';
import Button from '../../components/ui/Button';

const AdminServicesPage = () => {
    const { permissions, role } = useAdmin();
    const canWrite = role === 'head_admin' || checkPermission(permissions, 'services', 'write');

    const [services, setServices] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const q = query(collection(db, 'services'), orderBy('created_at', 'desc'));
            const snap = await getDocs(q);
            setServices(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this service?')) return;

        try {
            await deleteDoc(doc(db, 'services', id));
            setServices(services.filter(s => s.id !== id));
        } catch (error) {
            alert('Error deleting service: ' + error.message);
        }
    };

    const toggleFeatured = async (service) => {
        try {
            const newValue = !service.is_featured;
            await updateDoc(doc(db, 'services', service.id), { is_featured: newValue });
            setServices(services.map(s =>
                s.id === service.id ? { ...s, is_featured: newValue } : s
            ));
        } catch (error) {
            alert('Error updating featured status: ' + error.message);
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-20 bg-[#0f172a] px-4">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    <h1 className="text-3xl font-black text-white uppercase tracking-widest">Manage Services</h1>
                    <div className="flex gap-3">
                        {canWrite && (
                            <Link to="/admin/services-page">
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-6 py-3 flex items-center gap-2">
                                    <Pencil size={20} /> Edit Page Header
                                </Button>
                            </Link>
                        )}
                        {canWrite && (
                            <Link to="/admin/services/new">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 flex items-center gap-2">
                                    <Plus size={20} /> Add New Service
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>

                {loading ? (
                    <div className="text-white text-center py-20">Loading services...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div key={service.id} className={`bg-white/5 border rounded-2xl p-6 hover:border-blue-500/30 transition-all group relative ${service.is_featured ? 'border-yellow-500/50' : 'border-white/10'}`}>
                                {/* Featured Badge */}
                                {service.is_featured && (
                                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                                        <Star size={12} fill="currentColor" /> Featured
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                        <Settings size={24} />
                                    </div>
                                    {canWrite && (
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link to={`/admin/services/edit/${service.id}`} className="p-2 bg-slate-700 rounded-lg text-white hover:bg-blue-600 transition-colors" title="Edit">
                                                <Edit size={16} />
                                            </Link>
                                            <button onClick={() => handleDelete(service.id)} className="p-2 bg-slate-700 rounded-lg text-red-400 hover:bg-red-600 hover:text-white transition-colors" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-400 text-sm line-clamp-2 mb-4">{service.description}</p>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-white/5">
                                        {service.category}
                                    </span>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-white/5">
                                        /{service.slug}
                                    </span>
                                </div>

                                {/* Action Buttons Row */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                    {service.category && service.slug && (
                                        <>
                                            <Link
                                                to={`/admin/services/${service.category}/${service.slug}`}
                                                className="flex items-center gap-1.5 px-3 py-2 bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg text-xs font-bold transition-all"
                                            >
                                                <Pencil size={14} /> Live Edit
                                            </Link>
                                            <Link
                                                to={`/services/${service.category}/${service.slug}`}
                                                target="_blank"
                                                className="flex items-center gap-1.5 px-3 py-2 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white rounded-lg text-xs font-bold transition-all"
                                            >
                                                <Eye size={14} /> Preview
                                            </Link>
                                        </>
                                    )}
                                    {canWrite && (
                                        <button
                                            onClick={() => toggleFeatured(service)}
                                            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ml-auto ${service.is_featured
                                                ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500 hover:text-black'
                                                : 'bg-slate-700/50 text-slate-400 hover:bg-yellow-500/20 hover:text-yellow-400'
                                                }`}
                                            title={service.is_featured ? 'Remove from homepage' : 'Feature on homepage'}
                                        >
                                            <Star size={14} fill={service.is_featured ? 'currentColor' : 'none'} />
                                            {service.is_featured ? 'Unfeature' : 'Feature'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {services.length === 0 && (
                            <div className="col-span-full text-center py-20 border-2 border-dashed border-white/10 rounded-3xl">
                                <p className="text-slate-500 text-lg mb-4">No services found.</p>
                                <Link to="/admin/services/new">
                                    <Button className="bg-white/5 hover:bg-white/10 text-white rounded-xl px-6 py-3">
                                        Create Your First Service
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminServicesPage;
