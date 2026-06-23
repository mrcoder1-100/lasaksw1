import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/lasak-logo-footer.png';
import { Facebook, Instagram } from 'lucide-react';
import { CMSText } from './cms';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';


const Footer = ({ editable }) => {
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const servicesData = [];
                const q1 = query(collection(db, 'services'));
                const snap1 = await getDocs(q1);
                snap1.forEach(doc => servicesData.push({ id: doc.id, ...doc.data() }));
                // sort by order_index or title if id isn't numerical
                servicesData.sort((a, b) => (a.title > b.title ? 1 : -1));
                setServices(servicesData);

                const productsData = [];
                const q2 = query(collection(db, 'products'));
                const snap2 = await getDocs(q2);
                snap2.forEach(doc => productsData.push({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
            } catch (err) {
                console.error("Error fetching footer data", err);
            }
        };
        fetchData();
    }, []);

    return (
        <footer className="relative z-50 border-t border-white/10 bg-[#0a0f1c] text-slate-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <div>
                            <Link to="/" className="inline-block">
                                <img src={FooterLogo} alt="Lasak Technologies" className="h-12 w-auto mb-4" />
                            </Link>
                        </div>
                        <div className="text-sm leading-relaxed text-slate-400">
                            At Lasak Technologies Pvt Ltd, we are passionate about transforming learners into confident creators.
                        </div>
                        <div className="text-sm leading-relaxed text-slate-400">
                            Our mission is to bridge the gap between academic knowledge and industry demands through immersive, application-focused education.
                        </div>
                        <div className="flex gap-4 pt-4">
                            <a 
                                href="https://www.facebook.com/people/LASAK-Technologies/61562546965500/#" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(24,119,242,0.3)]"
                                aria-label="Facebook"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#1877F2">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.instagram.com/lasak_technologies_pvt_ltd/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(225,48,108,0.3)]"
                                aria-label="Instagram"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                    <defs>
                                        <linearGradient id="ig-grad" x1="20%" y1="100%" x2="80%" y2="0%">
                                            <stop offset="0%" stopColor="#fd5949" />
                                            <stop offset="50%" stopColor="#d6249f" />
                                            <stop offset="100%" stopColor="#285AEB" />
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.36-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.36-2.62-6.78-6.98-6.98C15.668.014 15.259 0 12 0z"/>
                                    <path fill="url(#ig-grad)" d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                                    <circle fill="url(#ig-grad)" cx="18.406" cy="5.594" r="1.44"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-1">
                        <h3 className="mb-4 text-xl font-bold text-white">Services</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Mechanical Services</h4>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    {services.filter(s => s.category === 'mechanical').map(service => (
                                        <li key={service.id}>
                                            <Link to={`/services/mechanical/${service.slug}`} className="hover:text-blue-400 transition-colors">
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                    {services.filter(s => s.category === 'mechanical').length === 0 && (
                                        <li><Link to="/services/mechanical" className="hover:text-blue-400 transition-colors">All Mechanical Services</Link></li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">IT Services</h4>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    {services.filter(s => s.category === 'it').map(service => (
                                        <li key={service.id}>
                                            <Link to={`/services/it/${service.slug}`} className="hover:text-blue-400 transition-colors">
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                    {services.filter(s => s.category === 'it').length === 0 && (
                                        <li><Link to="/services/it" className="hover:text-blue-400 transition-colors">All IT Services</Link></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">Products</h3>
                        <ul className="space-y-2 text-sm text-cyan-400">
                            {products.length > 0 ? products.map(product => {
                                const productName = (product.title || product.name || 'Product').trim();
                                const titleLow = productName.toLowerCase();
                                const displayTitle = `${productName} ${product.tag ? `(${product.tag})` : ''}`.trim();

                                let linkPath = product.url || `/products`;
                                if (titleLow.includes('process automation')) linkPath = "/services/ai-automation";
                                else if (titleLow.includes('lasak appetite')) linkPath = "/products/appetite";

                                if (linkPath.startsWith('http')) {
                                    return (
                                        <li key={product.id}>
                                            <a href={linkPath} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                                                {displayTitle}
                                            </a>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={product.id}>
                                        <Link to={linkPath} className="hover:text-cyan-300 transition-colors">
                                            {displayTitle}
                                        </Link>
                                    </li>
                                )
                            }) : (
                                <>
                                    <li><a href="https://crm.lasak.in/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">Lasak Crm (AI Powered)</a></li>
                                    <li><Link to="/services/ai-automation" className="hover:text-cyan-300 transition-colors">Process Automation (AI Powered)</Link></li>
                                    <li><Link to="/products/appetite" className="hover:text-cyan-300 transition-colors">Lasak Appetite (Coming Soon)</Link></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">Contact</h3>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li>
                                <div className="font-semibold text-white">
                                    Lasak Technologies Pvt Ltd
                                </div>
                                <div className="hover:text-cyan-300 transition-colors block mt-1">
                                    <div className="block">11/24A, Stv Nagar, 2nd Cross,</div>
                                    <div className="block">Peelamedu, Coimbatore - 641004</div>
                                </div>
                            </li>
                            <li>
                                <span className="block">Phone: <span className="text-cyan-400 hover:text-cyan-300">+91 8870842929</span></span>
                            </li>
                            <li>
                                <span className="block">Email: <a href="mailto:info@lasak.in" className="text-cyan-400 hover:text-cyan-300">info@lasak.in</a></span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Sub Footer */}
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-6">
                        <Link to={editable ? "/admin/privacy" : "/privacy"} className="text-cyan-400 hover:text-cyan-300 transition-colors">Privacy</Link>
                        <span className="text-slate-600">|</span>
                        <Link to={editable ? "/admin/terms" : "/terms"} className="text-cyan-400 hover:text-cyan-300 transition-colors">Terms & Conditions</Link>
                        <span className="text-slate-600">|</span>
                        <Link to={editable ? "/admin/refund" : "/refund"} className="text-cyan-400 hover:text-cyan-300 transition-colors">Refund Policies</Link>
                    </div>
                    <p className="text-xs md:text-sm text-slate-500 tracking-wide">
                        &copy; {new Date().getFullYear()} | All Rights Reserved | Powered by <span className="text-cyan-400">Lasak Technologies Pvt Ltd</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
