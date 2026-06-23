const QualityAssurance = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
                        Our Commitment to Quality
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                        We are committed to the highest standards of quality and operational excellence, demonstrated by our ISO 9001 certification. Our use of fully licensed software ensures legal compliance and the highest level of security and reliability for all our products and services.
                    </p>
                </div>

                {/* Logos Container */}
                <div className="bg-[#111827]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 flex flex-wrap justify-center items-center gap-12 md:gap-20 shadow-2xl">

                    {/* 1. PTC CREO */}
                    <div className="group flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        {/* Simulating logo with text/icon */}
                        <div className="flex items-center gap-1">
                            {/* Abstract Icon */}
                            <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-green-500 rounded-sm rotate-45 transform skew-x-12"></div>
                            <div className="flex flex-col ml-2 leading-none">
                                <span className="font-bold text-xl md:text-2xl text-green-500 lowercase">ptc</span>
                                <span className="font-light italic text-xl md:text-2xl text-white">creo</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. IAF Badge (CSS Circle) */}
                    <div className="group flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 border-[3px] border-white/20 rounded-full p-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer relative">
                        <div className="absolute inset-1 border-[1px] border-white/10 rounded-full"></div>
                        <div className="text-center z-10">
                            <div className="text-[9px] tracking-widest text-sky-300 font-bold uppercase mb-1">Member of</div>
                            <div className="text-3xl font-black text-white tracking-wider font-serif">IAF</div>
                            <div className="text-[7px] tracking-widest text-white/60 uppercase mt-1">Multilateral Recognition</div>
                        </div>
                    </div>

                    {/* 3. LMS Assessment */}
                    <div className="group flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">LMS</div>
                        <div className="h-10 w-[2px] bg-white/20"></div>
                        <div className="flex flex-col justify-center">
                            <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">Assessment</span>
                            <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">Services</span>
                        </div>
                    </div>

                    {/* 4. ISO Badge (CSS Circle) */}
                    <div className="group relative w-24 h-24 md:w-28 md:h-28 border-[3px] border-white/80 rounded-full flex items-center justify-center p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="absolute inset-1 border border-white/30 rounded-full"></div>
                        {/* Tick Mark */}
                        <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-[#111827]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <div className="text-[9px] font-bold text-sky-400 uppercase tracking-wide">Certified</div>
                            <div className="text-xl md:text-2xl font-black text-white leading-none my-1">ISO</div>
                            <div className="text-[10px] font-bold text-white tracking-widest">9001:2015</div>
                        </div>
                    </div>

                    {/* 5. EIAC */}
                    <div className="group opacity-70 hover:opacity-100 transition-opacity cursor-pointer flex flex-col items-center">
                        <div className="text-3xl md:text-4xl font-light text-white tracking-tight lowercase font-serif flex items-center">
                            <span className="text-orange-500 font-bold">e</span>iac
                        </div>
                        <div className="text-[8px] text-white/50 max-w-[120px] text-center leading-tight mt-1 uppercase tracking-wide">Emirates International Accreditation Centre</div>
                    </div>


                </div>

            </div>
        </section>
    );
};
export default QualityAssurance;
