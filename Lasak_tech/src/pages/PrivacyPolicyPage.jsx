import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0f172a]">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-slate-300">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
                        Privacy <span className="text-blue-500 text-outline-blue">Policy</span>
                    </h1>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                        <p className="leading-relaxed">
                            Lasak Technologies ("Company", "we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you access our website <a href="https://www.lasak.in" className="text-blue-400 hover:text-blue-300 transition-colors">www.lasak.in</a>, CRM software (Lasak CRM), SaaS platforms, and other services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>Personal identification data such as name, email address, phone number, and business details.</li>
                            <li>Payment and billing information when you subscribe to our services.</li>
                            <li>Usage data including login records, device/browser details, and activity on our platforms.</li>
                            <li>Training-related information for students or participants in our educational programs.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>To provide, manage, and improve our services.</li>
                            <li>To process payments, invoices, and subscriptions.</li>
                            <li>To send transactional updates, service announcements, or promotional offers.</li>
                            <li>To comply with legal obligations and enforce our Terms & Conditions.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Data Sharing & Disclosure</h2>
                        <p className="mb-4">We do not sell, rent, or trade user information. However, data may be shared:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>With trusted third-party service providers (payment processors, cloud hosting, training partners) strictly for service delivery.</li>
                            <li>When legally required by government or regulatory authorities.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                        <p className="leading-relaxed">
                            We implement industry-standard security measures (encryption, access controls, firewalls) to protect your information. However, no system is guaranteed 100% secure.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                        <p className="leading-relaxed">
                            We retain information as long as your account is active or as needed for business/legal purposes. Users can request deletion of personal data by emailing <a href="mailto:support@lasak.in" className="text-blue-400 hover:text-blue-300 transition-colors">support@lasak.in</a>.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Cookies & Tracking</h2>
                        <p className="leading-relaxed">
                            Our website and CRM may use cookies and analytics tools to enhance user experience and improve service performance. Users may disable cookies in their browser settings.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">User Rights</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>Right to access your personal data.</li>
                            <li>Right to request corrections or deletion.</li>
                            <li>Right to withdraw consent for marketing communication at any time.</li>
                        </ul>
                    </section>

                    <section className="mb-10 p-8 rounded-3xl bg-[#1e293b]/50 border border-white/5 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Grievance Redressal</h2>
                        <div className="space-y-4">
                            <p><strong className="text-slate-100">Name:</strong> Elavarsan</p>
                            <p><strong className="text-slate-100">Email:</strong> <a href="mailto:grievance@lasak.in" className="text-blue-400 hover:text-blue-300 transition-colors">grievance@lasak.in</a></p>
                            <p><strong className="text-slate-100">Phone:</strong> <a href="tel:+918489480002" className="text-blue-400 hover:text-blue-300 transition-colors">+91 84894 80002</a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
                        <p className="leading-relaxed">
                            We may update this policy periodically. Continued use of our website or services after updates indicates your acceptance.
                        </p>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
