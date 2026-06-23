import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, writeBatch, deleteDoc } from 'firebase/firestore';
import { loadRazorpayScript, generateReferenceId } from '../utils/razorpayUtils';
import {
    CheckCircle, XCircle, RefreshCw, Shield, CreditCard,
    Smartphone, Building2, ChevronDown, ChevronUp,
    IndianRupee, AlertCircle, Loader2, Sparkles, Plus, Trash2, Edit2, Save
} from 'lucide-react';
import { CMSText } from '../components/cms';

// ─── Default Fallback Services ──────────────────────────────────────────────
const FALLBACK_SERVICES = [
    { id: '1', category: 'Mechanical Services', name: '3D Modeling', description: 'Precision 3D modeling for industrial and mechanical components using advanced CAD tools.', amount: 5000, selected: false },
    { id: '2', category: 'Mechanical Services', name: 'Analysis', description: 'Structural, thermal, and dynamic analysis validation.', amount: 4500, selected: false },
];

// ─── Payment Status ──────────────────────────────────────────────────────────
const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', FAILED: 'failed' };

// ─── Helpers ─────────────────────────────────────────────────────────────────
const formatINR = (n) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } };
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };
const modalAnim = { hidden: { opacity: 0, scale: 0.8, y: 40 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 300 } }, exit: { opacity: 0, scale: 0.8, y: 40 } };

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ service, onToggle, index, isEditable, onDelete, onUpdate }) {
    return (
        <motion.div
            variants={fadeUp}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            onClick={() => !isEditable && onToggle(service.id)}
            role="checkbox"
            aria-checked={service.selected}
            tabIndex={0}
            onKeyDown={(e) => !isEditable && (e.key === ' ' || e.key === 'Enter') && onToggle(service.id)}
            whileHover={!isEditable ? { scale: 1.015, transition: { duration: 0.15 } } : {}}
            whileTap={!isEditable ? { scale: 0.98 } : {}}
            className={`group relative flex items-start gap-4 rounded-xl border p-5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${service.selected
                ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/15'
                : 'border-slate-700 bg-slate-800/60 hover:border-slate-500 hover:bg-slate-800'
                } ${isEditable ? 'cursor-default' : 'cursor-pointer'}`}
        >
            {/* Animated glow when selected */}
            {!isEditable && service.selected && (
                <motion.div
                    layoutId={`glow-${service.id}`}
                    className="absolute inset-0 rounded-xl bg-blue-500/5 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            )}

            {/* Checkbox / Admin Delete */}
            <div className="flex flex-col gap-3">
                {!isEditable ? (
                    <motion.div
                        animate={service.selected ? { scale: [1, 1.25, 1], backgroundColor: '#3b82f6', borderColor: '#3b82f6' } : { backgroundColor: 'transparent', borderColor: '#64748b' }}
                        transition={{ duration: 0.25 }}
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2"
                    >
                        <AnimatePresence>
                            {service.selected && (
                                <motion.svg
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-3 w-3 text-white"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </motion.svg>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <button
                        onClick={() => onDelete(service.id)}
                        className="p-1.5 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-lg transition-colors"
                        title="Delete Service"
                    >
                        <Trash2 size={16} />
                    </button>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                {isEditable ? (
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={service.name}
                            onChange={(e) => onUpdate(service.id, { name: e.target.value })}
                            className="bg-slate-700/50 border border-slate-600 rounded px-2 py-1 text-sm text-white w-full focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                        <textarea
                            value={service.description}
                            onChange={(e) => onUpdate(service.id, { description: e.target.value })}
                            className="bg-slate-700/50 border border-slate-600 rounded px-2 py-1 text-xs text-slate-300 w-full focus:ring-1 focus:ring-blue-500 outline-none h-16 resize-none"
                        />
                    </div>
                ) : (
                    <>
                        <p className="font-semibold text-slate-100">{service.name}</p>
                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">{service.description}</p>
                    </>
                )}
            </div>

        </motion.div>
    );
}

// ─── Payment Method Badge ─────────────────────────────────────────────────────
function PaymentMethodBadge({ icon: Icon, label, delay }) {
    return (
        <motion.div
            variants={fadeUp}
            transition={{ delay }}
            className="flex items-center gap-2 rounded-lg bg-slate-800/80 border border-slate-700 px-3 py-2 backdrop-blur-sm"
        >
            <Icon className="h-4 w-4 text-blue-400" />
            <span className="text-xs text-slate-300 font-medium">{label}</span>
        </motion.div>
    );
}

// ─── Success Modal ────────────────────────────────────────────────────────────
function SuccessModal({ referenceId, amount, onClose }) {
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden" animate="visible" exit="hidden"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
            <motion.div
                variants={modalAnim}
                initial="hidden" animate="visible" exit="exit"
                className="w-full max-w-md rounded-2xl bg-slate-900 border border-green-500/30 shadow-2xl shadow-green-500/20 p-8 text-center"
            >
                {/* Animated checkmark */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.3, 1] }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20"
                >
                    <CheckCircle className="h-12 w-12 text-green-400" />
                </motion.div>

                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">Payment Successful!</motion.h2>
                <motion.p variants={fadeUp} className="text-slate-400 mb-6">
                    Your payment has been processed securely. A confirmation will be sent shortly.
                </motion.p>

                <motion.div variants={fadeUp} className="rounded-xl bg-slate-800 border border-slate-700 p-4 mb-6 text-left space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Reference ID</span>
                        <span className="text-sm font-mono font-bold text-green-400">{referenceId}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Amount Paid</span>
                        <span className="text-sm font-bold text-white">{formatINR(amount)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Status</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                            Paid
                        </span>
                    </div>
                </motion.div>

                <motion.button
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={onClose}
                    className="w-full rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold py-3 transition-colors duration-200"
                >
                    Done
                </motion.button>
            </motion.div>
        </motion.div>
    );
}

// ─── Failed Modal ─────────────────────────────────────────────────────────────
function FailedModal({ onRetry, onClose }) {
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden" animate="visible" exit="hidden"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
            <motion.div
                variants={modalAnim}
                initial="hidden" animate="visible" exit="exit"
                className="w-full max-w-md rounded-2xl bg-slate-900 border border-red-500/30 shadow-2xl shadow-red-500/20 p-8 text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.3, 1] }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20"
                >
                    <XCircle className="h-12 w-12 text-red-400" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">Payment Failed</h2>
                <p className="text-slate-400 mb-6">
                    Your payment could not be processed. This may be due to a network issue, insufficient funds, or cancellation.
                </p>
                <div className="flex flex-col gap-3">
                    <motion.button
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        onClick={onRetry}
                        className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 transition-colors duration-200"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Retry Payment
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        onClick={onClose}
                        className="w-full rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold py-3 transition-colors duration-200"
                    >
                        Cancel
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ExtraPaymentPage({ isEditable = false }) {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paymentStatus, setPaymentStatus] = useState(STATUS.IDLE);
    const [referenceId, setReferenceId] = useState('');
    const [paidAmount, setPaidAmount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [showServices, setShowServices] = useState(true);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [tableExists, setTableExists] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [customAmount, setCustomAmount] = useState('');

    const selectedServices = services.filter((s) => s.selected);
    const amountToPay = parseInt(customAmount) || 0;

    // Fetch Services
    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        setLoading(true);
        try {
            const snap = await getDocs(collection(db, 'payment_services'));
            let data = snap.docs.map(d => ({ id: d.id, ...d.data() }));

            // Filter out duplicates by name, keeping the one with the longer description
            const uniqueMap = new Map();
            data.forEach(item => {
                let nameKey = item.name.trim().toLowerCase();
                // Fix possible specific duplicates like "3d modeling" and "3d modeling "
                nameKey = nameKey.replace(/\s+/g, ' ');
                const existing = uniqueMap.get(nameKey);
                if (!existing || (item.description && existing.description && item.description.length > existing.description.length)) {
                    uniqueMap.set(nameKey, item);
                }
            });

            const order = [
                "3D Modeling",
                "Reverse Engineering",
                "Retro Fitting",
                "Patent",
                "New Product",
                "Analysis"
            ];
            const uniqueData = Array.from(uniqueMap.values()).sort((a, b) => {
                const indexA = order.findIndex(o => (a.name || "").toLowerCase().includes(o.toLowerCase()));
                const indexB = order.findIndex(o => (b.name || "").toLowerCase().includes(o.toLowerCase()));
                
                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                if (indexA !== -1) return -1;
                if (indexB !== -1) return 1;
                return (a.order_index || 0) - (b.order_index || 0);
            });

            setTableExists(true);
            setServices(uniqueData.map(s => ({ ...s, selected: false })));
        } catch (error) {
            console.error('Error fetching services:', error);
            setTableExists(false);
            setServices(FALLBACK_SERVICES);
        }
        setLoading(false);
    };

    const toggleService = useCallback((id) => {
        setServices((prev) => prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s)));
    }, []);

    // ─── ADMIN ACTIONS ────────────────────────────────────────────────────────
    const bulkAddDefaults = async () => {
        if (!window.confirm('This will add all 9 default Lasak Tech services. Continue?')) return;
        setIsSaving(true);

        const defaults = [
            { category: 'Mechanical Services', name: '3D Modeling', description: 'Precision 3D modeling for industrial and mechanical components.', amount: 5000, order_index: 1 },
            { category: 'Mechanical Services', name: 'Reverse Engineering', description: 'Recreation of parts without original drawings.', amount: 6000, order_index: 2 },
            { category: 'Mechanical Services', name: 'Retro Fitting', description: 'Upgrading existing mechanical systems.', amount: 8000, order_index: 3 },
            { category: 'Mechanical Services', name: 'Patent Drawing', description: 'Professional patent-ready technical drawings.', amount: 3500, order_index: 4 },
            { category: 'Mechanical Services', name: 'New Product Development', description: 'End-to-end product development from concept to prototype.', amount: 15000, order_index: 5 },
            { category: 'Mechanical Services', name: 'Analysis', description: 'Structural, thermal, and dynamic analysis validation.', amount: 4500, order_index: 6 },
            { category: 'IT Services', name: 'Digital Marketing', description: 'SEO, social media, and paid ads strategy.', amount: 7000, order_index: 7 },
            { category: 'IT Services', name: 'UI/UX Design', description: 'User-centred interface and experience design.', amount: 8500, order_index: 8 },
            { category: 'IT Services', name: 'Web Development', description: 'Full-stack web development services.', amount: 12000, order_index: 9 },
        ];

        try {
            const batch = writeBatch(db);
            defaults.forEach(d => batch.set(doc(collection(db, 'payment_services')), d));
            await batch.commit();
            fetchServices();
        } catch (error) { alert('Failed to add services: ' + error.message); }
        setIsSaving(false);
    };
    const addService = async (category) => {
        const newService = {
            category,
            name: 'New Service',
            description: 'Enter service description here.',
            amount: 1000,
            order_index: services.length + 1
        };

        try {
            const docRef = await addDoc(collection(db, 'payment_services'), newService);
            setServices([...services, { id: docRef.id, ...newService, selected: false }]);
        } catch (error) { alert('Failed to add service: ' + error.message); }
    };

    const deleteService = async (id) => {
        if (!window.confirm('Are you sure you want to delete this service?')) return;

        try {
            await deleteDoc(doc(db, 'payment_services', id));
            setServices(services.filter(s => s.id !== id));
        } catch (error) { alert('Failed to delete service: ' + error.message); }
    };

    const updateServiceLocal = (id, updates) => {
        setServices(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        const updates = services.map(({ selected, ...rest }) => rest);

        try {
            const batch = writeBatch(db);
            updates.forEach(u => {
                const { id, ...rest } = u;
                batch.update(doc(db, 'payment_services', id), rest);
            });
            await batch.commit();
            alert('All changes saved successfully!');
        } catch (error) { alert('Failed to save changes: ' + error.message); }
        setIsSaving(false);
    };
    // ─────────────────────────────────────────────────────────────────────────

    const sendConfirmationEmail = async (refId, amount) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
            console.warn('EmailJS not configured. Skipping confirmation email.');
            return;
        }

        const templateParams = {
            to_name: customerName,
            to_email: customerEmail,
            from_name: 'Lasak Tech',
            reference_id: refId,
            amount_paid: formatINR(amount),
            services_paid: selectedServices.map((s) => s.name).join(', '),
            date: new Date().toLocaleString('en-IN'),
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log('Confirmation email sent successfully!');
        } catch (error) {
            console.error('Failed to send confirmation email:', error);
        }
    };

    const handlePayNow = async () => {
        if (selectedServices.length === 0) {
            setErrorMessage('Please select at least one service to proceed.');
            return;
        }

        if (!customerName || !customerEmail) {
            setErrorMessage('Please provide your name and email to proceed with payment.');
            return;
        }

        if (amountToPay <= 0) {
            setErrorMessage('Please enter a valid amount greater than ₹0.');
            return;
        }
        setPaymentStatus(STATUS.LOADING);
        setErrorMessage('');

        try {
            await loadRazorpayScript();
        } catch (err) {
            setPaymentStatus(STATUS.IDLE);
            setErrorMessage(err.message || 'Could not load payment gateway. Please try again.');
            return;
        }

        const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
        if (!razorpayKey || razorpayKey === 'your_razorpay_key_id') {
            setPaymentStatus(STATUS.IDLE);
            setErrorMessage('Razorpay API Key is missing. Please configure VITE_RAZORPAY_KEY_ID in your .env file.');
            return;
        }

        const options = {
            key: razorpayKey,
            amount: amountToPay * 100,
            currency: 'INR',
            name: 'Lasak Tech',
            description: selectedServices.map((s) => s.name).join(', '),
            image: '/logo.png',
            handler: (response) => {
                const refId = response.razorpay_payment_id || generateReferenceId();
                setReferenceId(refId);
                setPaidAmount(amountToPay);
                setPaymentStatus(STATUS.SUCCESS);

                addDoc(collection(db, 'enquiries'), {
                    first_name: customerName,
                    last_name: '(Payment)',
                    email: customerEmail,
                    message: `[PAYMENT SUCCESS]\nRef: ${refId}\nAmount: ${formatINR(amountToPay)}\nServices: ${selectedServices.map(s => s.name).join(', ')}`,
                    status: 'resolved'
                }).catch(err => console.error('Error logging payment: ', err));

                sendConfirmationEmail(refId, amountToPay);
            },
            prefill: {
                name: customerName,
                email: customerEmail,
                contact: ''
            },
            notes: { services: selectedServices.map((s) => s.name).join(', ') },
            theme: { color: '#3b82f6' },
            modal: { ondismiss: () => setPaymentStatus((p) => p === STATUS.LOADING ? STATUS.FAILED : p) },
        };

        setPaymentStatus(STATUS.IDLE);
        try {
            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', (response) => {
                console.error('Razorpay payment failed:', response.error);
                setPaymentStatus(STATUS.FAILED);
                setErrorMessage(response.error.description || 'Payment failed. Please try again.');
            });
            rzp.open();
        } catch (err) {
            console.error('Error opening Razorpay:', err);
            setPaymentStatus(STATUS.FAILED);
            setErrorMessage('Could not open payment gateway. Please check your configuration.');
        }
    };

    const handleReset = () => { setPaymentStatus(STATUS.IDLE); setErrorMessage(''); };
    const handleSuccessClose = () => {
        setPaymentStatus(STATUS.IDLE);
        setServices(prev => prev.map(s => ({ ...s, selected: false })));
        setReferenceId(''); setPaidAmount(0);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-100 overflow-x-hidden">

            {/* ── Animated background blobs ─────────────────── */}
            <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
                <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-3xl" />
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                    className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-3xl" />
            </div>

            <div className="relative z-10">

                {/* ── Breadcrumb ─────────────────────────────── */}
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md">
                    <div className="mx-auto max-w-4xl px-4 py-3 flex items-center gap-2 text-sm text-slate-400">
                        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <span className="text-slate-600">/</span>
                        <span className="text-blue-400 font-semibold truncate">
                            <CMSText id="payment_page_breadcrumb" defaultText="Payment" />
                        </span>
                    </div>
                </motion.div>

                {/* ── Hero Header ────────────────────────────── */}
                <div className="relative mx-auto max-w-4xl px-4 py-16 sm:py-24 text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 backdrop-blur-sm px-5 py-2"
                    >
                        <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                            <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                        </motion.span>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Payment Portal</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent"
                    >
                        <CMSText id="payment_page_title" defaultText="Payment" />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-5 mx-auto max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed"
                    >
                        <CMSText
                            id="payment_page_description"
                            defaultText="This is a payment portal for Lasak Tech services. Select the services you wish to pay for and complete the transaction securely."
                            editable={false}
                        />
                    </motion.p>

                    {/* Payment method badges */}
                    <motion.div
                        initial="hidden" animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } } }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3"
                    >
                        {[
                            { icon: Smartphone, label: 'UPI' },
                            { icon: CreditCard, label: 'Debit Card' },
                            { icon: CreditCard, label: 'Credit Card' },
                            { icon: Building2, label: 'Net Banking' },
                            { icon: Shield, label: '256-bit SSL' },
                        ].map(({ icon, label }, i) => (
                            <PaymentMethodBadge key={label} icon={icon} label={label} delay={i * 0.08} />
                        ))}
                    </motion.div>
                </div>

                {/* ── Main Content ──────────────────────────── */}
                <div className="mx-auto max-w-3xl px-4 pb-24 space-y-6">

                    {/* Error Banner */}
                    <AnimatePresence>
                        {(errorMessage || (isEditable && !tableExists)) && (
                            <motion.div
                                variants={fadeUp} initial="hidden" animate="visible" exit="hidden"
                                className="flex flex-col gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4"
                            >
                                <div className="flex items-center gap-3">
                                    <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
                                    <p className="text-sm text-red-300">
                                        {errorMessage || "Database collection 'payment_services' not found. Please initialize your database."}
                                    </p>
                                </div>
                                    <div className="ml-8 space-y-2">
                                        <p className="text-xs text-red-400/80">
                                            To fix this, go to your Firebase Console and ensure the
                                            <code className="bg-black/20 px-1 py-0.5 rounded mx-1">payment_services</code>
                                            collection exists and has the required documents.
                                        </p>
                                    </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Service Selection Card ─────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.3 }}
                        className="rounded-[3rem] border border-white/10 bg-[#1e293b]/50 shadow-3xl shadow-black/40 backdrop-blur-sm overflow-hidden"
                    >
                        {/* Card Header */}
                        <motion.button
                            whileHover={{ backgroundColor: 'rgba(148,163,184,0.06)' }}
                            onClick={() => setShowServices((v) => !v)}
                            className="w-full flex items-center justify-between px-6 py-5 transition-colors duration-200"
                        >
                            <div className="text-left">
                                <h2 className="text-lg font-bold text-white">Select Services</h2>
                                <motion.p
                                    key={selectedServices.length}
                                    initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                                    className="text-sm text-slate-400 mt-0.5"
                                >
                                    {selectedServices.length === 0
                                        ? 'Choose the services you need'
                                        : `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`}
                                </motion.p>
                            </div>
                            <motion.div animate={{ rotate: showServices ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ChevronDown className="h-5 w-5 text-slate-400" />
                            </motion.div>
                        </motion.button>

                        {/* Service List */}
                        <AnimatePresence initial={false}>
                            {showServices && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 border-t border-slate-700/50 pt-5 space-y-7">
                                        {['Mechanical Services', 'IT Services'].map((category) => {
                                            const catServices = services.filter((s) => s.category === category);
                                            if (!catServices.length) return null;
                                            const isMech = category === 'Mechanical Services';
                                            return (
                                                <div key={category}>
                                                    {/* Category header */}
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="flex items-center gap-3 mb-4"
                                                    >
                                                        <div className={`flex items-center justify-center h-8 w-8 rounded-lg shadow-lg ${isMech ? 'bg-orange-500/20 shadow-orange-500/20' : 'bg-blue-500/20 shadow-blue-500/20'}`}>
                                                            {isMech ? (
                                                                <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <span className={`text-xs font-bold uppercase tracking-widest ${isMech ? 'text-orange-400' : 'text-blue-400'}`}>
                                                            {category}
                                                        </span>
                                                        {isMech && (
                                                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-bold text-orange-400 uppercase tracking-tight">
                                                                <Shield size={10} /> Authorized Certificate
                                                            </div>
                                                        )}
                                                        <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
                                                    </motion.div>

                                                    <motion.div
                                                        initial="hidden" animate="visible"
                                                        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                                                        className="space-y-3"
                                                    >
                                                        {catServices.map((service, i) => (
                                                            <ServiceCard
                                                                key={service.id}
                                                                service={service}
                                                                onToggle={toggleService}
                                                                index={i}
                                                                isEditable={false}
                                                                onDelete={deleteService}
                                                                onUpdate={updateServiceLocal}
                                                            />
                                                        ))}
                                                    </motion.div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Customer Details ───────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.35 }}
                        className="rounded-[3rem] border border-white/10 bg-[#1e293b]/50 shadow-3xl shadow-black/40 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="px-6 py-5 border-b border-slate-700/50">
                            <h2 className="text-lg font-bold text-white">Your Details</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        placeholder="Enter your name"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        value={customerEmail}
                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">Payment Amount (₹)</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <IndianRupee className="h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                    </div>
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                        placeholder="Enter amount to pay"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-lg font-bold text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>

                            <p className="text-xs text-slate-500">
                                Enter the amount you wish to pay. We'll send your confirmation to this email.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Summary & Pay Card ─────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.45 }}
                        className="rounded-[3rem] border border-white/10 bg-[#1e293b]/50 shadow-3xl shadow-black/40 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="px-6 py-5 border-b border-slate-700/50 flex items-center gap-2">
                            <h2 className="text-lg font-bold text-white">Selected Services</h2>
                        </div>

                        <div className="px-6 py-5 space-y-3">
                            <AnimatePresence mode="popLayout">
                                {selectedServices.length === 0 ? (
                                    <motion.p key="empty" variants={fadeIn} initial="hidden" animate="visible" exit="hidden"
                                        className="text-slate-500 text-sm text-center py-4">
                                        Select at least one service above to proceed.
                                    </motion.p>
                                ) : (
                                    selectedServices.map((s) => (
                                        <motion.div
                                            key={s.id}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 16, height: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="flex justify-between items-center text-sm"
                                        >
                                            <span className="text-slate-300 truncate pr-4">{s.name}</span>
                                        </motion.div>
                                    ))
                                )}
                            </AnimatePresence>

                            {selectedServices.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 pt-6 border-t border-slate-700/50 flex justify-between items-center"
                                >
                                    <span className="text-base font-bold text-white uppercase tracking-wider">Total Amount</span>
                                    <span className="text-2xl font-black text-blue-400">{formatINR(amountToPay)}</span>
                                </motion.div>
                            )}
                        </div>

                        {/* Pay Now Button */}
                        <div className="px-6 pb-6">
                            <motion.button
                                onClick={handlePayNow}
                                disabled={selectedServices.length === 0 || paymentStatus === STATUS.LOADING}
                                whileHover={{ scale: 1.025 }}
                                whileTap={{ scale: 0.97 }}
                                animate={selectedServices.length > 0 && paymentStatus !== STATUS.LOADING
                                    ? { boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 24px rgba(59,130,246,0.45)', '0 0 0px rgba(59,130,246,0)'] }
                                    : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                                className={`w-full flex items-center justify-center gap-3 rounded-xl py-4 px-6 text-base font-bold transition-colors duration-200 ${selectedServices.length === 0 || paymentStatus === STATUS.LOADING
                                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white'
                                    }`}
                            >
                                {paymentStatus === STATUS.LOADING ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Loading Gateway...
                                    </>
                                ) : (
                                    <>
                                        <Shield className="h-5 w-5" />
                                        Pay Now
                                    </>
                                )}
                            </motion.button>

                            <motion.p
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                                className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1.5"
                            >
                                <Shield className="h-3 w-3" />
                                Secured &amp; powered by <span className="font-semibold text-slate-400">Razorpay</span>
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* ── Security Footer ────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-5 text-sm text-slate-500 flex gap-3"
                    >
                        <Shield className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold text-slate-400 mb-1">100% Secure Payments</p>
                            <p className="leading-relaxed">
                                All transactions are encrypted with 256-bit SSL. We accept UPI, Credit &amp; Debit Cards,
                                and Net Banking via Razorpay. Your payment details are never stored on our servers.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Modals ───────────────────────────────────── */}
            <AnimatePresence>
                {paymentStatus === STATUS.SUCCESS && (
                    <SuccessModal referenceId={referenceId} amount={paidAmount} onClose={handleSuccessClose} />
                )}
                {paymentStatus === STATUS.FAILED && (
                    <FailedModal onRetry={handleReset} onClose={handleReset} />
                )}
            </AnimatePresence>
        </div>
    );
}
