import React, { useState, useEffect } from 'react';
import logo from '../assets/lasak-logo-footer.png';
import { Menu, X, ChevronDown, ChevronRight, PlusCircle } from 'lucide-react';
import Button from './ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, query, orderBy, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAdmin } from '../contexts/AdminContext';
import { checkPermission } from '../utils/permissions';

const Navbar = () => {
    const { permissions, role, loading: adminLoading } = useAdmin();
    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isAdminPath = location.pathname.startsWith('/admin');
    const isLoginPage = location.pathname === '/admin';

    const canManageAdmins = role === 'head_admin' || checkPermission(permissions, 'admin_management', 'read');
    const canViewEnquiries = role === 'head_admin' || checkPermission(permissions, 'enquiries', 'read');
    const canViewCareers = role === 'head_admin' || checkPermission(permissions, 'careers', 'read');
    const canViewSEO = role === 'head_admin' || checkPermission(permissions, 'seo', 'read');


    const [logoUrl, setLogoUrl] = useState(logo);

    useEffect(() => {
        fetchServices();
        fetchProducts();
        fetchBlogs();
        fetchLogo();

        // Listen for auth changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAdmin(!!user);
        });

        return () => unsubscribe();
    }, []);

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const q = query(collection(db, 'blogs'), orderBy('created_at', 'desc'));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBlogs(data || []);
        } catch (error) {
            console.error('Error fetching blogs for navbar:', error);
        }
    };

    const fetchLogo = async () => {
        try {
            const docRef = doc(db, 'site_settings', 'navbar_logo');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists() && docSnap.data().value) {
                setLogoUrl(docSnap.data().value);
            }
        } catch (error) {
            console.error('Error fetching logo:', error);
        }
    };

    const handleLogoEdit = async (e) => {
        if (!isAdmin || !isAdminPath) return;
        e.preventDefault();
        const newUrl = prompt("Enter new Logo URL:", logoUrl);
        if (newUrl) {
            try {
                setLogoUrl(newUrl);
                await setDoc(doc(db, 'site_settings', 'navbar_logo'), { key: 'navbar_logo', value: newUrl }, { merge: true });
            } catch (error) {
                console.error("Failed to save logo:", error);
                alert("Failed to save logo");
            }
        }
    };

    const fetchServices = async () => {
        try {
            const q = query(collection(db, 'services'));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            const order = [
                "3D Modeling",
                "Reverse Engineering",
                "Retro Fitting",
                "Patent",
                "New Product",
                "Analysis"
            ];

            data.sort((a, b) => {
                const indexA = order.findIndex(o => a.title?.toLowerCase().includes(o.toLowerCase()));
                const indexB = order.findIndex(o => b.title?.toLowerCase().includes(o.toLowerCase()));
                
                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                if (indexA !== -1) return -1;
                if (indexB !== -1) return 1;
                return (a.title || "").localeCompare(b.title || "");
            });

            setServices(data || []);
        } catch (error) {
            console.error('Error fetching services for navbar:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const q = query(collection(db, 'products'));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            // Using title or name based on data structure
            data.sort((a, b) => ((a.title || a.name) > (b.title || b.name) ? 1 : -1));
            setProducts(data || []);
        } catch (error) {
            console.error('Error fetching products for navbar:', error);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        setIsAdmin(false);
        navigate('/admin');
        setIsOpen(false);
    };

    // Helper function to check if a link is active
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === path || (isAdminPath && location.pathname === '/admin/home');
        }
        // If in admin mode, check if current path starts with /admin + path
        const checkPath = isAdminPath ? `/admin${path === '/' ? '/home' : path}` : path;
        return location.pathname.startsWith(checkPath);
    };

    // Helper to generate correct link target
    const getLink = (path) => {
        if (!isAdminPath) return path;
        // Avoid double slash or incorrect mapping
        if (path === '/') return '/admin/home';
        // Special case: external links don't get /admin prefix
        if (path.startsWith('http')) return path;
        if (path.startsWith('/admin')) return path;

        // Return standard admin path
        return `/admin${path}`;
    };

    const navLinks = [
        { name: 'Home', href: getLink('/') },
        { name: 'About', href: getLink('/about') },
        {
            name: 'Services',
            href: getLink('#services'), // Make this an anchor or non-navigating link if they should use dropdown
            hasDropdown: true,
            dropdownItems: [
                {
                    title: "Mechanical Services",
                    href: getLink("/services/mechanical"),
                    subItems: [
                        ...services.filter(s => s.category === 'mechanical').map(s => ({
                            name: s.title,
                            href: getLink(`/services/mechanical/${s.slug}`)
                        })),
                        ...(isAdmin && isAdminPath ? [{ name: "Add New Service +", href: getLink("/admin/services/new?category=mechanical"), isAction: true }] : [])
                    ]
                },
                {
                    title: "IT Services",
                    href: getLink('/services/it'),
                    subItems: [
                        ...services.filter(s => s.category === 'it').map(s => ({
                            name: s.title,
                            href: getLink(`/services/it/${s.slug}`)
                        })),
                        ...(isAdmin && isAdminPath ? [{ name: "Add New Service +", href: getLink("/admin/services/new?category=it"), isAction: true }] : [])
                    ]
                }
            ]
        },
        {
            name: 'Products',
            href: getLink('#products'), // Changed to hash to prevent routing to blank page
            hasDropdown: true,
            dropdownItems: products.length > 0 ? products.map(p => {
                const productName = (p.title || p.name || '').toLowerCase();
                const isAutomation = productName.includes('process automation');
                const isAppetite = productName.includes('lasak appetite');

                let href = p.url || getLink('/products');
                if (isAutomation) href = getLink("/services/ai-automation");
                if (isAppetite) href = getLink("/products/appetite");

                return {
                    name: `${p.title || p.name || 'Product'} ${p.tag ? `(${p.tag})` : ''}`.trim(),
                    href: href || getLink('/products')
                };
            }) : [
                { name: "Lasak Crm (AI powered)", href: "https://crm.lasak.in/" },
                { name: "Process Automation (AI Powered)", href: getLink("/services/ai-automation") },
                { name: "Lasak Appetite (Coming Soon)", href: getLink("/products/appetite") }
            ]
        },
        {
            name: 'Blogs',
            href: getLink('/blogs'),
            hasDropdown: true,
            dropdownItems: [
                {
                    name: "Mechanical Blogs",
                    href: getLink("/blogs?category=mechanical"),
                    subItems: [
                        { name: "Reverse Engineering", href: getLink("/blogs?category=mechanical&subcategory=reverse-engineering") },
                        { name: "Retro Fitting", href: getLink("/blogs?category=mechanical&subcategory=retro-fitting") },
                        { name: "Patent Drawing", href: getLink("/blogs?category=mechanical&subcategory=patent-drawing") },
                        { name: "New Product Development", href: getLink("/blogs?category=mechanical&subcategory=new-product-development") }
                    ]
                },
                { name: "Civil Blogs", href: getLink("/blogs?category=civil") },
                { name: "IT Blogs", href: getLink("/blogs?category=it") }
            ]
        },
        { name: 'Payment', href: getLink('/payment') },
        { name: 'Contact', href: getLink('/contact') },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-[9999] flex justify-center px-4">
            <nav className="w-full max-w-7xl bg-[#1e2340]/90 rounded-full border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-md transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <div className="px-8 md:px-12 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
                            <img
                                src={logoUrl || logo}
                                onError={(e) => {
                                    if (e.target.src !== logo) {
                                        e.target.src = logo;
                                        setLogoUrl(logo); // Revert state to prevent loop
                                    }
                                }}
                                alt="Lasak Technologies"
                                className={`h-10 w-auto ${isAdmin && isAdminPath ? 'cursor-pointer hover:opacity-80 border-2 border-transparent hover:border-blue-500 rounded' : ''}`}
                                onClick={handleLogoEdit}
                                title={isAdmin && isAdminPath ? "Click to edit Logo" : ""}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex md:items-center ${isAdminPath ? 'gap-3 xl:gap-6 text-sm' : 'gap-8 lg:gap-10'}`}>
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    to={link.href}
                                    className={`flex items-center gap-1 font-semibold transition-colors hover:text-blue-400 ${isActive(link.href) ? 'text-blue-400' : 'text-slate-300'} ${isAdminPath ? 'text-sm' : 'text-base'}`}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </Link>

                                {/* Services Mega-Dropdown */}
                                {link.name === 'Services' && (
                                    <div className="absolute top-full -left-48 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-[#1e2340]/95 backdrop-blur-lg rounded-3xl shadow-2xl w-[600px] border border-white/10 overflow-hidden flex divide-x divide-white/10">
                                            {link.dropdownItems.map((category, idx) => (
                                                <div key={idx} className="flex-1 p-6">
                                                    <div className="mb-4 px-2">
                                                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest">{category.title}</h4>
                                                    </div>
                                                    <div className="space-y-1">
                                                        {category.subItems.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.href}
                                                                className={`block px-3 py-2 text-sm transition-all rounded-xl ${subItem.isAction ? 'text-blue-400 font-bold hover:bg-blue-600/20' : 'text-slate-300 hover:bg-blue-600/20 hover:text-blue-400'}`}
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    {subItem.isAction && <PlusCircle size={14} />}
                                                                    {subItem.name}
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Products and Blogs Simple Dropdown */}
                                {(link.name === 'Products' || link.name === 'Blogs') && (
                                    <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-[#1e2340]/95 backdrop-blur-lg rounded-2xl shadow-2xl w-72 border border-white/10">
                                            {link.dropdownItems.map((item, index) => {
                                                const hasSubItems = item.subItems && item.subItems.length > 0;
                                                const isFirst = index === 0;
                                                const isLast = index === link.dropdownItems.length - 1;
                                                const content = item.href && item.href.startsWith('http') ? (
                                                    <a
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`w-full flex items-center justify-between px-6 py-4 text-base text-slate-300 hover:bg-blue-600/20 hover:text-blue-400 transition-all ${isFirst ? 'rounded-t-2xl' : ''} ${isLast ? 'rounded-b-2xl' : ''}`}
                                                    >
                                                        <span>{item.name}</span>
                                                        {hasSubItems && <ChevronRight size={14} />}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={item.href}
                                                        className={`w-full flex items-center justify-between px-6 py-4 text-base text-slate-300 hover:bg-blue-600/20 hover:text-blue-400 transition-all ${isFirst ? 'rounded-t-2xl' : ''} ${isLast ? 'rounded-b-2xl' : ''}`}
                                                    >
                                                        <span>{item.name}</span>
                                                        {hasSubItems && <ChevronRight size={14} />}
                                                    </Link>
                                                );

                                                return (
                                                    <div key={index} className={`relative border-b border-white/5 last:border-0 ${hasSubItems ? 'group/sub' : ''}`}>
                                                        {content}
                                                        
                                                        {/* Sub-dropdown (Flyout) */}
                                                        {hasSubItems && (
                                                            <div className="absolute left-full top-0 pl-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                                                <div className="bg-[#1e2340]/95 backdrop-blur-lg rounded-2xl shadow-2xl w-72 border border-white/10 overflow-hidden">
                                                                    {item.subItems.map((sub, subIdx) => {
                                                                        const isSubFirst = subIdx === 0;
                                                                        const isSubLast = subIdx === item.subItems.length - 1;
                                                                        return (
                                                                            <Link
                                                                                key={subIdx}
                                                                                to={sub.href}
                                                                                className={`block px-6 py-4 text-base text-slate-300 hover:bg-blue-600/20 hover:text-blue-400 transition-all border-b border-white/5 last:border-0 whitespace-nowrap ${isSubFirst ? 'rounded-t-2xl' : ''} ${isSubLast ? 'rounded-b-2xl' : ''}`}
                                                                            >
                                                                                {sub.name}
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {(isAdmin && isAdminPath && !isLoginPage) && (
                            <div className="h-6 w-px bg-white/10 mx-2 hidden xl:block"></div>
                        )}

                        {/* Admin Specific Action Buttons */}
                        <div className="flex items-center gap-2">
                            {(isAdmin && isAdminPath && !isLoginPage && canViewEnquiries) && (
                                <Link
                                    to="/admin/enquiries"
                                    className="bg-green-600/20 hover:bg-green-600 text-green-200 hover:text-white px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all border border-green-600/30 whitespace-nowrap"
                                >
                                    Enquiries
                                </Link>
                            )}

                            {(isAdmin && isAdminPath && !isLoginPage && canViewCareers) && (
                                <Link
                                    to="/admin/careers"
                                    className="bg-purple-600/20 hover:bg-purple-600 text-purple-200 hover:text-white px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all border border-purple-600/30 whitespace-nowrap"
                                >
                                    Careers
                                </Link>
                            )}

                            {(isAdmin && isAdminPath && !isLoginPage && canViewSEO) && (
                                <Link
                                    to="/admin/seo"
                                    className="bg-blue-600/20 hover:bg-blue-600 text-blue-200 hover:text-white px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all border border-blue-600/30 whitespace-nowrap"
                                >
                                    SEO
                                </Link>
                            )}

                            {(isAdmin && isAdminPath && !isLoginPage && canManageAdmins) && (
                                <Link
                                    to="/admin/users"
                                    className="bg-yellow-600/20 hover:bg-yellow-600 text-yellow-200 hover:text-white px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all border border-yellow-600/30 whitespace-nowrap"
                                >
                                    Users
                                </Link>
                            )}

                            {(isAdmin && isAdminPath && !isLoginPage) && (
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600/20 hover:bg-red-600 text-red-200 hover:text-white px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all border border-red-600/30 whitespace-nowrap"
                                >
                                    Exit
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white relative z-[10001]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu (Expanded with Dropdowns) */}
                {isOpen && (
                    <div className="md:hidden absolute top-24 left-4 right-4 bg-[#1e2340] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-h-[70vh] overflow-y-auto">
                        <div className="flex flex-col p-6 space-y-3">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    {link.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() => {
                                                    const submenuId = `mobile-submenu-${link.name}`;
                                                    const submenu = document.getElementById(submenuId);
                                                    if (submenu) {
                                                        submenu.classList.toggle('hidden');
                                                    }
                                                }}
                                                className="flex items-center justify-between py-3 text-lg font-semibold text-white hover:text-blue-400 transition-colors"
                                            >
                                                {link.name}
                                                <ChevronDown size={18} className="text-white/60" />
                                            </button>

                                            <div id={`mobile-submenu-${link.name}`} className="hidden pl-4 flex flex-col space-y-2 mb-2 border-l-2 border-blue-500/30 ml-2">
                                                {link.name === 'Services' ? (
                                                    link.dropdownItems.map((category, idx) => (
                                                        <div key={idx} className="mt-2">
                                                            <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">{category.title}</h4>
                                                            <div className="space-y-1">
                                                                {category.subItems.map((subItem, subIdx) => (
                                                                    <Link
                                                                        key={subIdx}
                                                                        to={subItem.href}
                                                                        className={`block py-1.5 text-sm transition-colors ${subItem.isAction ? 'text-blue-400 font-bold' : 'text-slate-300 hover:text-white'}`}
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        <div className="flex items-center gap-2">
                                                                            {subItem.isAction && <PlusCircle size={12} />}
                                                                            {subItem.name}
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    // Mobile Blogs mega-menu styling removed, fallback to simple dropdown
                                                    (link.name === 'Products' || link.name === 'Blogs') && (
                                                        <div className="pl-4 mt-2 mb-2 space-y-2 border-l border-white/10">
                                                            {link.dropdownItems.map((item, index) => {
                                                                const hasSubItems = item.subItems && item.subItems.length > 0;
                                                                return (
                                                                    <div key={index} className="flex flex-col">
                                                                        {hasSubItems ? (
                                                                            <>
                                                                                <div className="flex items-center justify-between py-2 text-sm text-slate-400 hover:text-white">
                                                                                    <Link
                                                                                        to={item.href}
                                                                                        className="flex-1"
                                                                                        onClick={() => setIsOpen(false)}
                                                                                    >
                                                                                        {item.name}
                                                                                    </Link>
                                                                                    <button
                                                                                        onClick={() => {
                                                                                            const subId = `mobile-blog-sub-${index}`;
                                                                                            const el = document.getElementById(subId);
                                                                                            if (el) el.classList.toggle('hidden');
                                                                                        }}
                                                                                        className="p-1 hover:bg-white/10 rounded transition-colors ml-2"
                                                                                        aria-label="Toggle sub-items"
                                                                                    >
                                                                                        <ChevronDown size={14} className="text-white/40" />
                                                                                    </button>
                                                                                </div>
                                                                                <div id={`mobile-blog-sub-${index}`} className="hidden pl-4 flex flex-col space-y-1 mb-2 border-l border-white/5 ml-2">
                                                                                    {item.subItems.map((sub, subIdx) => (
                                                                                        <Link
                                                                                            key={subIdx}
                                                                                            to={sub.href}
                                                                                            className="block py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                                                                                            onClick={() => setIsOpen(false)}
                                                                                        >
                                                                                            {sub.name}
                                                                                        </Link>
                                                                                    ))}
                                                                                </div>
                                                                            </>
                                                                        ) : (
                                                                            item.href && item.href.startsWith('http') ? (
                                                                                <a
                                                                                    href={item.href}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="block py-2 text-sm text-slate-400 hover:text-white transition-colors"
                                                                                    onClick={() => setIsOpen(false)}
                                                                                >
                                                                                    {item.name}
                                                                                </a>
                                                                            ) : (
                                                                                <Link
                                                                                    to={item.href}
                                                                                    className="block py-2 text-sm text-slate-400 hover:text-white transition-colors"
                                                                                    onClick={(e) => {
                                                                                        // Prevent navigation if the link is handled and is active
                                                                                        if (item.href === getLink(location.pathname + location.search)) {
                                                                                            e.preventDefault();
                                                                                            // We still want to close the navbar
                                                                                            setIsOpen(false);
                                                                                        } else {
                                                                                            setIsOpen(false);
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    {item.name}
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )
                                                )}
                                            </div>

                                        </>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="block py-3 text-lg font-semibold text-white hover:text-blue-400 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </nav>
        </div>
    );
};

export default Navbar;
