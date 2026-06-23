import React from 'react';
import PtcLogo from '../assets/ptc-creo-logo.png';
import IafLogo from '../assets/iaf-logo.png';
import LmsLogo from '../assets/lms-logo.png';
import IsoLogo from '../assets/iso-9001-logo.png';
import EiacLogo from '../assets/eiac-logo.png';

import { CMSText, CMSImage } from './cms';

const QualityAssurance = ({ editable = false }) => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0a1120]">
            {/* Background Glow (CSS Only) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-lg uppercase leading-none">
                        <CMSText id="quality_title_1" defaultText="Our Commitment to" editable={editable} /> <br />
                        <span className="text-blue-500">
                            <CMSText id="quality_title_2" defaultText="Quality" editable={editable} />
                        </span>
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
                        "<CMSText id="quality_desc" defaultText="We are committed to the highest standards of quality and operational excellence, demonstrated by our ISO 9001 certification." editable={editable} />"
                    </p>
                </div>

                {/* Logos Container */}
                <div className="bg-[#111827]/30 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-16 flex flex-wrap justify-center items-center gap-12 md:gap-20 shadow-3xl">

                    <div className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <CMSImage id="quality_logo_1" defaultSrc={PtcLogo} alt="PTC Creo" className="h-20 md:h-24 w-auto object-contain" editable={editable} />
                    </div>

                    {/* 2. IAF Badge */}
                    <div className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <CMSImage id="quality_logo_2" defaultSrc={IafLogo} alt="IAF Member" className="h-40 md:h-48 w-auto object-contain" editable={editable} />
                    </div>

                    {/* 3. LMS Assessment */}
                    <div className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <CMSImage id="quality_logo_3" defaultSrc={LmsLogo} alt="LMS Assessment Services" className="h-24 md:h-32 w-auto object-contain" editable={editable} />
                    </div>

                    {/* 4. ISO Badge */}
                    <div className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <CMSImage id="quality_logo_4" defaultSrc={IsoLogo} alt="ISO 9001:2015" className="h-40 md:h-48 w-auto object-contain" editable={editable} />
                    </div>

                    {/* 5. EIAC */}
                    <div className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <CMSImage id="quality_logo_5" defaultSrc={EiacLogo} alt="EIAC" className="h-24 md:h-32 w-auto object-contain" editable={editable} />
                    </div>


                </div>

            </div>
        </section>
    );
};

export default QualityAssurance;
