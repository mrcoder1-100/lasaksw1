import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { useAdmin } from '../../contexts/AdminContext'
import { Lock, ShieldCheck, Mail, LogIn, AlertCircle } from 'lucide-react'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ text: '', type: '' })
    const navigate = useNavigate()
    const { adminUser, loading: adminLoading } = useAdmin()

    useEffect(() => {
        // If already logged in as admin, go straight to dashboard
        if (!adminLoading && adminUser) {
            navigate('/admin/home')
        }
    }, [adminUser, adminLoading, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage({ text: '', type: '' })

        try {
            const trimmedEmail = email.trim();
            const trimmedPassword = password.trim();
            const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword)
            const user = userCredential.user

            // Don't navigate immediately - let the useEffect handle it after AdminContext loads
            if (user) {
                setMessage({ text: 'Login successful! Redirecting...', type: 'success' })
            }
        } catch (error) {
            setMessage({ text: error.message, type: 'error' })
        } finally {
            setLoading(false)
        }
    }

    const handleForgotPassword = async () => {
        if (!email) {
            setMessage({ text: 'Please enter your email address first to reset password.', type: 'error' })
            return
        }
        setLoading(true)
        setMessage({ text: '', type: '' })
        try {
            await sendPasswordResetEmail(auth, email)
            setMessage({ text: 'Password reset email sent! Check your inbox.', type: 'success' })
        } catch (error) {
            setMessage({ text: error.message, type: 'error' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>

            <div className="w-full max-w-md bg-[#1e293b]/50 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl relative z-10">
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/30">
                        <Lock size={32} />
                    </div>
                </div>

                <h1 className="text-3xl font-black text-white mb-2 text-center uppercase tracking-tighter">
                    Admin <span className="text-blue-500">Portal</span>
                </h1>
                <p className="text-slate-500 text-center text-xs font-bold uppercase tracking-widest mb-10">Restricted Management Access</p>

                {message.text && (
                    <div className="space-y-4 mb-8">
                        <div className={`p-4 rounded-2xl flex items-center gap-3 text-sm animate-fade-in ${message.type === 'error' ? 'bg-red-500/10 text-red-200 border border-red-500/20' : 'bg-green-500/10 text-green-200 border border-green-500/20'}`}>
                            {message.type === 'error' ? <AlertCircle size={18} /> : <ShieldCheck size={18} />}
                            {message.text}
                        </div>

                        {/* Manual Entrance if context loads but UI doesn't redirect */}
                        {(!adminLoading && adminUser && message.type === 'success') && (
                            <button
                                onClick={() => navigate('/admin/home')}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl uppercase tracking-widest text-xs transition-all border border-green-500/30 flex items-center justify-center gap-2"
                            >
                                <LogIn size={14} />
                                Enter Dashboard Now
                            </button>
                        )}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Identity (Email)</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/20 border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all placeholder:text-slate-700"
                                placeholder="admin@lasak.tech"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Security Key (Password)</label>
                        <div className="relative group">
                            <LogIn className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/20 border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all placeholder:text-slate-700"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-1 mb-4">
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            disabled={loading}
                            className="text-[11px] text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50 uppercase tracking-widest font-bold"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-xl uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 group hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <>
                                Initiate Portal Access
                                <ShieldCheck size={20} className="group-hover:rotate-12 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em]">
                        Lasak Tech Security Engine v2.4 // COIMBATORE, IN
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
