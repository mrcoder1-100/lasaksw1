import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { CMSText } from '../components/cms';
import { useAdmin } from '../contexts/AdminContext';
import { checkPermission } from '../utils/permissions';

const RefundPolicyPage = ({ isEditable: propIsEditable = false }) => {
    const { permissions, role } = useAdmin();
    // Only allow manual editing if passed prop is true AND user has write permissions for legal
    const canWrite = role === 'head_admin' || checkPermission(permissions, 'legal', 'write');
    const isEditable = propIsEditable && canWrite;

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0f172a]">
            <SEO
                title="Refund Policy - Lasak Tech"
                description="Learn about Lasak Tech's refund policy for software, subscriptions, and digital services."
                canonical="/refund"
            />
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-slate-300">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-12 text-center text-outline-blue">
                        <CMSText id="refund_main_title_1" defaultText="Refund" editable={isEditable} /> <span className="text-blue-500"><CMSText id="refund_main_title_2" defaultText="Policy" editable={isEditable} /></span>
                    </h1>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4"><CMSText id="refund_sec1_title" defaultText="General Policy" editable={isEditable} /></h2>
                        <div className="leading-relaxed">
                            <CMSText
                                id="refund_sec1_text"
                                defaultText="All sales of CRM software, SaaS subscriptions, and digital services by Lasak Technologies are final. No refunds will be issued for purchases or renewals under any circumstances, except where expressly required by law."
                                editable={isEditable}
                            />
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4"><CMSText id="refund_sec2_title" defaultText="Scope" editable={isEditable} /></h2>
                        <div className="leading-relaxed">
                            <CMSText
                                id="refund_sec2_text"
                                defaultText="This policy applies to all software licenses, subscription plans, custom development work, support services, and training courses purchased from Lasak Technologies, through the website or by direct agreement."
                                editable={isEditable}
                            />
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4"><CMSText id="refund_sec3_title" defaultText="Exceptions" editable={isEditable} /></h2>
                        <p className="mb-4"><CMSText id="refund_sec3_intro" defaultText="Refunds will only be considered if:" editable={isEditable} /></p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li><CMSText id="refund_sec3_li1" defaultText="A product or service is not delivered as described and the issue is not resolved within 15 days of complaint." editable={isEditable} /></li>
                            <li><CMSText id="refund_sec3_li2" defaultText="Required by Indian consumer protection or e-commerce law." editable={isEditable} /></li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4"><CMSText id="refund_sec4_title" defaultText="Non-Refundable Scenarios" editable={isEditable} /></h2>
                        <p className="mb-4"><CMSText id="refund_sec4_intro" defaultText="No refunds are provided for:" editable={isEditable} /></p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li><CMSText id="refund_sec4_li1" defaultText="User dissatisfaction after service activation." editable={isEditable} /></li>
                            <li><CMSText id="refund_sec4_li2" defaultText="Change of mind or voluntary cancellation." editable={isEditable} /></li>
                            <li><CMSText id="refund_sec4_li3" defaultText="Partially used subscription periods, setup fees, or customizations rendered." editable={isEditable} /></li>
                            <li><CMSText id="refund_sec4_li4" defaultText="Technical failures due to force majeure events." editable={isEditable} /></li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4"><CMSText id="refund_sec5_title" defaultText="Legal Compliance" editable={isEditable} /></h2>
                        <div className="leading-relaxed">
                            <CMSText
                                id="refund_sec5_text"
                                defaultText="This policy complies with all applicable Indian consumer protection laws. In the event local law mandates a refund, such requests will be processed strictly under legal guidelines."
                                editable={isEditable}
                            />
                        </div>
                    </section>

                    <section className="mb-10 p-8 rounded-3xl bg-[#1e293b]/50 border border-white/5 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6"><CMSText id="refund_contact_title" defaultText="Contact" editable={isEditable} /></h2>
                        <div className="space-y-4">
                            <p><CMSText id="refund_contact_intro" defaultText="For questions related to billing or eligibility for rare exceptions, contact:" editable={isEditable} /></p>
                            <p><strong className="text-slate-100">Email:</strong> <a href="mailto:finance@lasak.in" className="text-blue-400 hover:text-blue-300 transition-colors"><CMSText id="refund_contact_email" defaultText="finance@lasak.in" editable={isEditable} /></a></p>
                            <p><strong className="text-slate-100">Phone:</strong> <a href="tel:+918870842929" className="text-blue-400 hover:text-blue-300 transition-colors"><CMSText id="refund_contact_phone" defaultText="+91 88708 42929" editable={isEditable} /></a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4"><CMSText id="refund_updates_title" defaultText="Policy Updates" editable={isEditable} /></h2>
                        <div className="leading-relaxed">
                            <CMSText
                                id="refund_updates_text"
                                defaultText="Lasak Technologies reserves the right to amend this policy at any time. Updated terms will be published on the website. Ongoing usage of services implies acceptance of the latest policy."
                                editable={isEditable}
                            />
                        </div>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default RefundPolicyPage;
