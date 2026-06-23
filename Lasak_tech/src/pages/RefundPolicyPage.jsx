import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicyPage = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0f172a]">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-slate-300">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-12 text-center text-outline-blue">
                        Refund <span className="text-blue-500">Policy</span>
                    </h1>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">General Policy</h2>
                        <p className="leading-relaxed">
                            All sales of CRM software, SaaS subscriptions, and digital services by Lasak Technologies are final. No refunds will be issued for purchases or renewals under any circumstances, except where expressly required by law.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Scope</h2>
                        <p className="leading-relaxed">
                            This policy applies to all software licenses, subscription plans, custom development work, support services, and training courses purchased from Lasak Technologies, through the website or by direct agreement.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Exceptions</h2>
                        <p className="mb-4">Refunds will only be considered if:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>A product or service is not delivered as described and the issue is not resolved within 15 days of complaint.</li>
                            <li>Required by Indian consumer protection or e-commerce law.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Non-Refundable Scenarios</h2>
                        <p className="mb-4">No refunds are provided for:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>User dissatisfaction after service activation.</li>
                            <li>Change of mind or voluntary cancellation.</li>
                            <li>Partially used subscription periods, setup fees, or customizations rendered.</li>
                            <li>Technical failures due to force majeure events.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Legal Compliance</h2>
                        <p className="leading-relaxed">
                            This policy complies with all applicable Indian consumer protection laws. In the event local law mandates a refund, such requests will be processed strictly under legal guidelines.
                        </p>
                    </section>

                    <section className="mb-10 p-8 rounded-3xl bg-[#1e293b]/50 border border-white/5 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
                        <div className="space-y-4">
                            <p>For questions related to billing or eligibility for rare exceptions, contact:</p>
                            <p><strong className="text-slate-100">Email:</strong> <a href="mailto:finance@lasak.in" className="text-blue-400 hover:text-blue-300 transition-colors">finance@lasak.in</a></p>
                            <p><strong className="text-slate-100">Phone:</strong> <a href="tel:+918870842929" className="text-blue-400 hover:text-blue-300 transition-colors">+91 88708 42929</a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
                        <p className="leading-relaxed">
                            Lasak Technologies reserves the right to amend this policy at any time. Updated terms will be published on the website. Ongoing usage of services implies acceptance of the latest policy.
                        </p>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default RefundPolicyPage;
