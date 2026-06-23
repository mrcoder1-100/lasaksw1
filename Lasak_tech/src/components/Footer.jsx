import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/lasak-logo-footer.png';


const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#0f172a] text-slate-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <div>
                            <Link to="/" className="inline-block">
                                <img src={FooterLogo} alt="Lasak Technologies" className="h-12 w-auto mb-4" />
                            </Link>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            At <strong className="text-white">Lasak Technologies Pvt Ltd</strong>, we are passionate about transforming learners into confident creators. With industry-relevant training and hands-on projects, we prepare individuals for real-world innovation in design, engineering, and development.
                        </p>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Our mission is to bridge the gap between academic knowledge and industry demands through immersive, application-focused education. We aim to empower students, professionals, and institutions to thrive in today's fast-evolving digital landscape.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">Services</h3>
                        <ul className="space-y-2 text-sm text-cyan-400">
                            <li><a href="/services/mechanical/reverse-engineering" className="hover:text-cyan-300 transition-colors">Reverse Engineering</a></li>
                            <li><a href="/services/mechanical/retro-fitting" className="hover:text-cyan-300 transition-colors">Retro Fitting Projects</a></li>
                            <li><a href="/services/mechanical/new-product-development" className="hover:text-cyan-300 transition-colors">New Product Development</a></li>
                            <li><a href="/services/mechanical/3d-modeling" className="hover:text-cyan-300 transition-colors">3D Modeling</a></li>
                            <li><a href="/services/mechanical/analysis" className="hover:text-cyan-300 transition-colors">Analysis</a></li>
                            <li><a href="/services/it/web-development" className="hover:text-cyan-300 transition-colors">Web Development</a></li>
                            <li><a href="/services/ui-ux" className="hover:text-cyan-300 transition-colors">UI/UX Design</a></li>
                            <li><a href="/services/it/digital-marketing" className="hover:text-cyan-300 transition-colors">Digital Marketing</a></li>
                            <li><a href="/services/mechanical/patent-drawing" className="hover:text-cyan-300 transition-colors">Patent Drawing</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">Products</h3>
                        <ul className="space-y-2 text-sm text-cyan-400">
                            <li><a href="/products" className="hover:text-cyan-300 transition-colors">Lasak Crm (AI Powered)</a></li>
                            {/* Pointing Process Automation to AI page as it seems most fit */}
                            <li><a href="/services/ai-automation" className="hover:text-cyan-300 transition-colors">Process Automation using AI</a></li>
                            <li><a href="/products/appetite" className="hover:text-cyan-300 transition-colors">Lasak Appetite (Coming Soon)</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">Contact</h3>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li>
                                <p className="font-semibold text-white">Lasak Technologies Pvt Ltd</p>
                                <a
                                    href="https://www.google.com/maps/place/LASAK+TECHNOLOGIES+PRIVATE+LIMITED/@11.0218787,76.9929138,20z/data=!4m9!1m2!2m1!1s111%2F24A,+Stv+Nagar,+Peelamedu,+Coimbatore-641004!3m5!1s0x3ba8574c3c675d29:0xa96be278a234895b!8m2!3d11.0218787!4d76.9933349!16s%2Fg%2F11w33nhnw6?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-300 transition-colors"
                                >
                                    <p>111/24A, Stv Nagar, 2nd Cross,</p>
                                    <p>Peelamedu,Coimbatore -641004</p>
                                </a>
                            </li>
                            <li>
                                <span className="block">Phone: <a href="tel:+918870842929" className="text-cyan-400 hover:text-cyan-300">+91 8870842929</a></span>
                            </li>
                            <li>
                                <span className="block">Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lasak.in" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">info@lasak.in</a></span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Sub Footer */}
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-6">
                        <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">Privacy</Link>
                        <span className="text-slate-600">|</span>
                        <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">Terms & Conditions</Link>
                        <span className="text-slate-600">|</span>
                        <Link to="/refund" className="text-cyan-400 hover:text-cyan-300 transition-colors">Refund Policies</Link>
                    </div>
                    <p className="text-xs md:text-sm text-slate-500 tracking-wide">
                        &copy; 2025 | All Rights Reserved | Powered by <span className="text-cyan-400">Lasak Technologies Pvt Ltd</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
