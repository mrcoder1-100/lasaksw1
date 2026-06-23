import React from 'react';
import Button from './ui/Button';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-transparent">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-blue-900/50 px-3 py-1 text-sm text-secondary font-medium border border-blue-800">
                        Contact
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                        Ready to start your project? Send us a message and let's discuss how we can help.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <form className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="first-name" className="text-xs font-bold tracking-wider text-white uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    First Name
                                </label>
                                <input
                                    id="first-name"
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="last-name" className="text-xs font-bold tracking-wider text-white uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Last Name
                                </label>
                                <input
                                    id="last-name"
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold tracking-wider text-white uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="alex@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-xs font-bold tracking-wider text-white uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="+1 (555) 000-0000"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-xs font-bold tracking-wider text-white uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Service Interested In
                            </label>
                            <div className="relative">
                                <select
                                    id="service"
                                    className="flex h-10 w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled className="bg-[#1e2340] text-slate-400">Select a service...</option>
                                    <optgroup label="Mechanical Services" className="bg-[#1e2340] text-blue-400 font-bold">
                                        <option value="reverse-engineering" className="text-white font-normal">Reverse Engineering</option>
                                        <option value="retro-fitting" className="text-white font-normal">Retro Fitting</option>
                                        <option value="new-product" className="text-white font-normal">New Product Development</option>
                                        <option value="3d-modeling" className="text-white font-normal">3D Modeling</option>
                                        <option value="analysis" className="text-white font-normal">Analysis</option>
                                        <option value="patent-drawing" className="text-white font-normal">Patent Drawing</option>
                                    </optgroup>
                                    <optgroup label="IT Services" className="bg-[#1e2340] text-blue-400 font-bold">
                                        <option value="web-dev" className="text-white font-normal">Web Development</option>
                                        <option value="digital-marketing" className="text-white font-normal">Digital Marketing</option>
                                        <option value="ui-ux" className="text-white font-normal">UI/UX Design</option>
                                    </optgroup>
                                    <optgroup label="Products" className="bg-[#1e2340] text-blue-400 font-bold">
                                        <option value="lasak-crm" className="text-white font-normal">Lasak CRM</option>
                                        <option value="process-automation" className="text-white font-normal">Process Automation</option>
                                        <option value="lasak-appetite" className="text-white font-normal">Lasak Appetite</option>
                                    </optgroup>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-bold tracking-wider text-white uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Tell us about your project..."
                                required
                            ></textarea>
                        </div>

                        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                            Send Message
                        </Button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
