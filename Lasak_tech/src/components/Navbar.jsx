import React, { useState } from 'react';
import logo from '../assets/lasak-logo-footer.png';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Button from './ui/Button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Helper function to check if a link is active
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Services',
            href: '/services',
            hasDropdown: true,
            dropdownItems: [
                {
                    title: "Mechanical Services",
                    href: "/services/mechanical", // Main link for this section
                    subItems: [
                        { name: "Reverse Engineering", href: "/services/mechanical/reverse-engineering" },
                        { name: "Retro Fitting", href: "/services/mechanical/retro-fitting" },
                        { name: "New Product Development", href: "/services/mechanical/new-product-development" },
                        { name: "3D Modeling", href: "/services/mechanical/3d-modeling" },
                        { name: "Analysis", href: "/services/mechanical/analysis" },
                        { name: "Patent Drawing", href: "/services/mechanical/patent-drawing" },
                    ]
                },
                {
                    title: "IT Services",
                    href: "/services", // fallback
                    subItems: [
                        { name: "Web Development", href: "/services/it/web-development" },
                        { name: "Digital Marketing", href: "/services/it/digital-marketing" },
                        { name: "UI/UX Design", href: "/services/ui-ux" },
                    ]
                }
            ]
        },
        {
            name: 'Products',
            href: '/products',
            hasDropdown: true,
            dropdownItems: [
                { name: "Lasak Crm (AI powered)", href: "https://crm.lasak.in/" },
                { name: "Process Automation (AI Powered)", href: "/services/ai-automation" },
                { name: "Lasak Appetite (Coming Soon)", href: "/products/appetite" }
            ]
        },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="w-full max-w-6xl bg-[#1e2340] rounded-full border border-white/10 shadow-2xl backdrop-blur-md bg-opacity-95">
                <div className="px-8 md:px-10 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
                            <img src={logo} alt="Lasak Technologies" className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    to={link.href}
                                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-400 ${isActive(link.href) ? 'text-blue-400' : 'text-slate-300'}`}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </Link>

                                {/* Services Mega Menu / Nested Dropdown */}
                                {link.name === 'Services' && (
                                    <div className="absolute top-full -left-4 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-[#1e2340] rounded-r-2xl rounded-bl-2xl shadow-xl w-64 border border-white/10 overflow-visible relative">
                                            {/* Primary Dropdown Items (Mechanical / IT) */}
                                            {link.dropdownItems.map((category, index) => (
                                                <div key={index} className="group/submenu relative">
                                                    <div className="flex items-center justify-between px-6 py-4 text-slate-300 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors border-b border-white/5 last:border-0">
                                                        <span className="font-medium">{category.title}</span>
                                                        <ChevronRight size={14} />
                                                    </div>

                                                    {/* Secondary "Flyout" Menu */}
                                                    <div className="absolute left-full top-0 ml-1 w-64 bg-[#252b46] rounded-xl shadow-xl border border-white/10 overflow-hidden opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 transform translate-x-2 group-hover/submenu:translate-x-0">
                                                        {category.subItems.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.href}
                                                                className="block px-6 py-3 text-sm text-slate-300 hover:bg-blue-600 hover:text-white transition-colors border-b border-white/5 last:border-0"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Products Simple Dropdown */}
                                {link.name === 'Products' && (
                                    <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-[#1e2340] rounded-2xl shadow-xl w-72 border border-white/10 overflow-hidden">
                                            {link.dropdownItems.map((item, index) => (
                                                item.href.startsWith('http') ? (
                                                    <a
                                                        key={index}
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block px-6 py-4 text-sm text-slate-300 hover:bg-blue-600 hover:text-white transition-colors border-b border-white/5 last:border-0"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={index}
                                                        to={item.href}
                                                        className="block px-6 py-4 text-sm text-slate-300 hover:bg-blue-600 hover:text-white transition-colors border-b border-white/5 last:border-0"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu (Expanded with Dropdowns) */}
                {isOpen && (
                    <div className="md:hidden absolute top-24 left-0 right-0 bg-[#1e2340] mx-4 rounded-2xl border border-white/10 p-4 shadow-2xl max-h-[80vh] overflow-y-auto">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    {link.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() => {
                                                    // Toggle logic directly here or use a helper if this gets complex
                                                    const submenuId = `mobile-submenu-${link.name}`;
                                                    const submenu = document.getElementById(submenuId);
                                                    if (submenu) {
                                                        submenu.classList.toggle('hidden');
                                                    }
                                                }}
                                                className={`flex items-center justify-between py-2 text-base font-medium text-slate-300 hover:text-blue-400`}
                                            >
                                                {link.name}
                                                <ChevronDown size={16} />
                                            </button>

                                            {/* Mobile Dropdown Content */}
                                            <div id={`mobile-submenu-${link.name}`} className="hidden pl-4 flex flex-col space-y-2 mb-2 border-l border-white/10 ml-1">
                                                {link.name === 'Services' ? (
                                                    // Special handling for nested Services menu
                                                    link.dropdownItems.map((category, idx) => (
                                                        <div key={idx} className="flex flex-col space-y-2 mt-2">
                                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{category.title}</span>
                                                            {category.subItems.map((subItem, subIdx) => (
                                                                <Link
                                                                    key={subIdx}
                                                                    to={subItem.href}
                                                                    className="py-1 text-sm text-slate-400 hover:text-white"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))
                                                ) : (
                                                    // Standard handling for Products
                                                    link.dropdownItems.map((item, idx) => (
                                                        item.href.startsWith('http') ? (
                                                            <a
                                                                key={idx}
                                                                href={item.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="py-1 text-sm text-slate-400 hover:text-white"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ) : (
                                                            <Link
                                                                key={idx}
                                                                to={item.href}
                                                                className="py-1 text-sm text-slate-400 hover:text-white"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )
                                                    ))
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className={`py-2 text-base font-medium transition-colors hover:text-blue-400 ${isActive(link.href) ? 'text-blue-400' : 'text-slate-300'}`}
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
