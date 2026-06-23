import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditionsPage = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0f172a]">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-slate-300">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-12 text-center text-outline-blue">
                        Terms <span className="text-blue-500">and Conditions</span>
                    </h1>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Definitions</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li><strong>Website:</strong> Refers to <a href="https://www.lasak.in" className="text-blue-400 hover:text-blue-300">www.lasak.in</a>.</li>
                            <li><strong>User:</strong> Any person or entity accessing or using the Website or services.</li>
                            <li><strong>Company:</strong> Lasak Technologies, registered in India, with office at 24, Stv Nagar, 2nd cross, Avinashi Rd, Peelamedu, Coimbatore, Tamil Nadu 641004, contact: info@lasak.in / +91 88708 42929.</li>
                            <li><strong>Services:</strong> CRM software (Lasak CRM), SaaS platforms and related products offered by the Company.</li>
                            <li><strong>Account:</strong> User account created to access Services.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Account Registration & Responsibilities</h2>
                        <p className="leading-relaxed">
                            Users must maintain confidentiality of their login credentials. All actions under a User’s Account are the responsibility of the User. The Company can suspend or terminate accounts for breach of these Terms.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Service Information, Pricing & Availability</h2>
                        <p className="leading-relaxed">
                            The Company strives for accurate service and pricing information. Prices, features, or availability may change without prior notice. Company reserves the right to limit service types, discontinue services, or refuse/cancel subscriptions/orders for any reason.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Orders, Subscriptions, Payments & Contracts</h2>
                        <p className="leading-relaxed">
                            Display of Services is an invitation to offer; orders are subject to Company acceptance, confirmed by written/email/shipping notification. Commercial terms (pricing, billing cycles, payment methods) are specified on the Website and in your Order Form.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Cancellation, Refunds & Returns</h2>
                        <p className="leading-relaxed">
                            Software and digital service subscriptions are eligible for refund as per Indian laws and only in cases of technical failure or non-provision of promised service. Refunds for training services may comply with Consumer Protection (E-Commerce) Rules, 2020; see Company’s dedicated Refund Policy page. No cancellation charges for voluntary cancellation unless similarly applied for Company’s own service cancellations. Force majeure events (natural disasters, governmental actions, internet outages, etc.) may delay service provision; the Company is not responsible for such delays.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                        <p className="leading-relaxed">
                            All software, content, and training materials are owned by the Company or its licensors and are protected by Indian intellectual property law. Users receive a limited, non-exclusive, non-transferable right to access services for their own business purposes; no resale, copying, or distribution without prior written consent.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">7. User Conduct & Prohibited Activities</h2>
                        <p className="leading-relaxed">
                            No unlawful, abusive, or harmful activity is permitted on the Website or Services. Prohibited: Attempting unauthorized access, transmitting malware, violating IP rights. Breach results in immediate termination of access.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Service Level & Warranty Disclaimer</h2>
                        <p className="leading-relaxed font-mono text-sm bg-white/5 p-4 rounded-xl">
                            Services are provided "as is" and "as available". No warranty of uninterrupted or error-free service is given. Company disclaims all implied warranties including merchantability, fitness for a particular purpose.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                            Company's liability is limited to the amount paid for the service or subscription concerned. No indirect, special, or consequential damages shall be owed to users.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Indemnity</h2>
                        <p className="leading-relaxed">
                            Users agree to indemnify the Company and its officers/employees against claims, losses, damages, or costs arising from any breach of these Terms or related unlawful conduct.
                        </p>
                    </section>

                    <section className="mb-10 p-8 rounded-3xl bg-[#1e293b]/50 border border-white/5 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">11. Grievance Redressal</h2>
                        <div className="space-y-4">
                            <p><strong className="text-slate-100">Name:</strong> Elavarsan</p>
                            <p><strong className="text-slate-100">Email:</strong> <a href="mailto:grievance@lasak.in" className="text-blue-400 hover:text-blue-300 transition-colors">grievance@lasak.in</a></p>
                            <p><strong className="text-slate-100">Phone:</strong> <a href="tel:+918489480002" className="text-blue-400 hover:text-blue-300 transition-colors">+91 84894 80002</a></p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law & Jurisdiction</h2>
                        <p className="leading-relaxed">
                            These Terms are governed by Indian law. Disputes are subject to the courts of Coimbatore, Tamil Nadu.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. Amendments</h2>
                        <p className="leading-relaxed">
                            Terms can be updated at any time. Updates are posted on the Website. Continued use constitutes acceptance of changes.
                        </p>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
