import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Clients from '../components/Clients';
import SEO from '../components/SEO';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

// Fallback image imports for offline compatibility
import eotCraneImg from '../assets/eot-crane.png';
import architecturalDesignImg from '../assets/architectural-design.png';
import toyModelingImg from '../assets/toy-modeling.png';
import electricVehiclesImg from '../assets/electric-vehicles.png';
import sensorValveImg from '../assets/sensor-valve.png';
import crabRobotImg from '../assets/crab-robot.png';
import poultryVaccinatorImg from '../assets/poultry-vaccinator.png';
import helmetDesignImg from '../assets/helmet-design.png';
import boilerDesignImg from '../assets/boiler-design.png';
import teslaValveImg from '../assets/tesla-valve.png';
import jacquardMachineImg from '../assets/jacquard-machine.png';
import eccentricGearImg from '../assets/eccentric-gear.png';
import ecommerceDevelopmentImg from '../assets/ecommerce-development.png';
import ecommerceDevelopmentImg2 from '../assets/ecommerce-development-2.png';
import solarDryerImg from '../assets/solar-dryer.png';
import waterBottleImg from '../assets/water-bottle.png';
import realEstateImg from '../assets/real-estate.png';
import financeAdvisoryImg from '../assets/finance-advisory.png';
import wheelchairDesignImg from '../assets/wheelchair-design.png';

// 14 New Mechanical Blog Images
import cngPlantImg from '../assets/cng-plant.jpg';
import dewPointSensorImg from '../assets/dew-point-sensor.png';
import vibrationSensorImg from '../assets/vibration-sensor.jpg';
import pressureSensorImg from '../assets/pressure-sensor.jpg';
import humiditySensorImg from '../assets/humidity-sensor.jpg';
import dynamicReducerImg from '../assets/dynamic-reducer.jpg';
import dynamicFlowMeterImg from '../assets/dynamic-flow-meter.jpg';
import jcbToyModellingImg from '../assets/jcb-toy-modelling.jpg';
import metalFrameCageImg from '../assets/metal-frame-cage.png';
import sensorLockImg from '../assets/sensor-lock.png';
import miniatureModelImg from '../assets/miniature-model.jpg';
import bioFilmAnalyzerImg from '../assets/bio-film-analyzer.webp';
import methanogenCultureJarImg from '../assets/methanogen-culture-jar.webp';
import solarPanelUmbrellaImg from '../assets/solar-panel-umbrella.jpg';

// Wrapper for linkable cards
const Wrapper = ({ link, children }) => link ? <Link to={link}>{children}</Link> : <>{children}</>;

const FALLBACK_BLOGS = [
    { title: "Future of Cybersecurity", slug: "future-of-cybersecurity", image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600", category: "Cybersecurity", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "EOT Crane, Weight Lifter & Handler Project", slug: "eot-crane-project", image_url: eotCraneImg, category: "Industrial Engineering", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Architectural & Interior Design Projects at Lasak Technologies", slug: "architectural-design", image_url: architecturalDesignImg, category: "Architecture & Interior", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Toy Modeling Design Services – Creative & Realistic Prototypes", slug: "toy-modeling", image_url: toyModelingImg, category: "Product Design", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Electric Vehicles (EVs) – Sustainable, Smart & Future-Ready Mobility", slug: "electric-vehicles", image_url: electricVehiclesImg, category: "Sustainable Mobility", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Sensor Valve Reverse Engineering Design Services", slug: "sensor-valve-design", image_url: sensorValveImg, category: "Reverse Engineering", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Crab Robot Patent Design – Coconut Harvesting Innovation & Remote Control Technology", slug: "crab-robot-design", image_url: crabRobotImg, category: "Robotics", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Automated Poultry Vaccinator Design", slug: "poultry-vaccinator", image_url: poultryVaccinatorImg, category: "AgriTech", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Innovative Helmet Design Patent", slug: "helmet-design", image_url: helmetDesignImg, category: "Safety Innovation", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Precision Engineering & Boiler Design Innovations", slug: "boiler-design", image_url: boilerDesignImg, category: "Industrial", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Tesla Valve Fluid Optimization", slug: "tesla-valve", image_url: teslaValveImg, category: "Fluid Dynamics", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Role in Designing a Jacquard Machine", slug: "jacquard-machine", image_url: jacquardMachineImg, category: "Textile Machinery", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Role in Designing an Eccentric Gear Mechanism", slug: "eccentric-gear", image_url: eccentricGearImg, category: "Mechanical", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Building the Future of Online Shopping: E-Commerce Website", slug: "ecommerce-development", image_url: ecommerceDevelopmentImg, category: "E-Commerce", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Solar Dryer Agriculture Innovation", slug: "solar-dryer", image_url: solarDryerImg, category: "Sustainability", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Water Bottle Design: A Blend of Innovation and Precision", slug: "water-bottle-design", image_url: waterBottleImg, category: "Product Design", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Real Estate Website", slug: "real-estate", image_url: realEstateImg, category: "Web Development", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Designing a Specialised Wheelchair(Patent Registration)", slug: "wheelchair-design", image_url: wheelchairDesignImg, category: "Patent Design", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Delivering Excellence in Finance and Business Advisory Website Development", slug: "finance-advisory", image_url: financeAdvisoryImg, category: "Web Development", created_at: "2025-09-22T00:00:00.000Z" },
    { title: "Building the Future of Online Shopping: Our E-Commerce Development Story", slug: "closense-ecommerce", image_url: ecommerceDevelopmentImg2, category: "E-Commerce", created_at: "2025-09-22T00:00:00.000Z" },

    // 14 New Mechanical Blogs
    { title: "CNG Plant Design and Development", slug: "cng-plant-design", image_url: cngPlantImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Dew Point Sensor", slug: "dew-point-sensor", image_url: dewPointSensorImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Vibration Sensor", slug: "vibration-sensor", image_url: vibrationSensorImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Pressure Sensor", slug: "pressure-sensor", image_url: pressureSensorImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Humidity Sensor", slug: "humidity-sensor", image_url: humiditySensorImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Dynamic Reducer", slug: "dynamic-reducer", image_url: dynamicReducerImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Dynamic Flow Meter", slug: "dynamic-flow-meter", image_url: dynamicFlowMeterImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "JCB Toy Modelling", slug: "jcb-toy-modelling", image_url: jcbToyModellingImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Metal Frame Cage", slug: "metal-frame-cage", image_url: metalFrameCageImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Sensor Lock", slug: "sensor-lock", image_url: sensorLockImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Miniature Model", slug: "miniature-model", image_url: miniatureModelImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Multi Chamber Bio Film Analyzer", slug: "bio-film-analyzer", image_url: bioFilmAnalyzerImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Methanogen Culture Jar", slug: "methanogen-culture-jar", image_url: methanogenCultureJarImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" },
    { title: "Solar Panel Umbrella Type", slug: "solar-panel-umbrella", image_url: solarPanelUmbrellaImg, category: "Mechanical Projects", created_at: "2026-06-23T00:00:00.000Z" }
];

const BLOG_SUBCATEGORIES = {
    'reverse-engineering': [
        'sensor-valve-design',
        'dew-point-sensor',
        'vibration-sensor',
        'pressure-sensor',
        'humidity-sensor',
        'dynamic-reducer',
        'dynamic-flow-meter',
        'jcb-toy-modelling'
    ],
    'retro-fitting': [
        'eot-crane-project',
        'eccentric-gear'
    ],
    'patent-drawing': [
        'crab-robot-design',
        'wheelchair-design',
        'helmet-design',
        'bio-film-analyzer',
        'methanogen-culture-jar',
        'solar-panel-umbrella'
    ],
    'new-product-development': [
        'electric-vehicles',
        'jacquard-machine',
        'solar-dryer',
        'poultry-vaccinator',
        'tesla-valve',
        'boiler-design',
        'water-bottle-design',
        'toy-modeling',
        'cng-plant-design',
        'metal-frame-cage',
        'sensor-lock'
    ],
    '3d-modeling': [
        'miniature-model'
    ]
};

const SUBCATEGORY_NAMES = {
    'reverse-engineering': 'REVERSE ENGINEERING',
    'retro-fitting': 'RETRO FITTING',
    'patent-drawing': 'PATENT DRAWING',
    'new-product-development': 'NEW PRODUCT DEVELOPMENT',
    '3d-modeling': '3D MODELING'
};

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    const subcategoryParam = searchParams.get('subcategory');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const q = query(collection(db, 'blogs'), orderBy('created_at', 'desc'));
                const snap = await getDocs(q);
                let data = snap.docs.map(d => ({ id: d.id, ...d.data() }));

                // Combine Firestore data with local fallback list
                const combinedData = [...data, ...FALLBACK_BLOGS];

                // Filter out "Welcome to Lasak" card and remove exact duplicates
                const uniqueBlogs = [];
                const seenSlugs = new Set();

                combinedData.forEach(blog => {
                    const title = (blog.title || "").toLowerCase();
                    const slug = blog.slug || blog.title || blog.id;

                    if (title.includes("welcome to lasak")) return;
                    if (seenSlugs.has(slug)) return;

                    seenSlugs.add(slug);
                    uniqueBlogs.push(blog);
                });

                // Sort all unique blogs by created_at descending
                uniqueBlogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                setBlogs(uniqueBlogs);
            } catch (error) {
                console.error('Error fetching blogs, using local fallback:', error);
                const uniqueBlogs = [];
                const seenSlugs = new Set();
                FALLBACK_BLOGS.forEach(blog => {
                    const title = (blog.title || "").toLowerCase();
                    const slug = blog.slug || blog.title || blog.id;
                    if (seenSlugs.has(slug)) return;
                    seenSlugs.add(slug);
                    uniqueBlogs.push(blog);
                });
                uniqueBlogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setBlogs(uniqueBlogs);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen pt-20 bg-[#0f172a]">
            {loading ? (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">Loading blogs...</div>
                </div>
            ) : (
                <>
                    <SEO
                        title="Our Insights - Engineering & Digital Trends"
                        description="Stay updated with the latest in mechanical engineering, web development, and AI through our technical articles and blogs."
                        canonical="/blogs"
                    />

                    {/* Blogs Section with Sticky Layout */}
                    <section className="pt-10 pb-20 px-4 relative">
                        <div className="container mx-auto px-4 md:px-6 relative z-10">
                            {/* Background Glows (Moved from Hero) */}
                            <div className="absolute inset-0 -z-10 overflow-hidden">
                                <div className="absolute top-0 left-1/4 w-full h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
                                <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

                                {/* Left Column: Fixed Content (Sticky) */}
                                <div className="lg:sticky lg:top-40 h-fit lg:col-span-2 py-4">
                                    <div className="w-16 h-16 mb-8 border border-white/10 rounded-full flex items-center justify-center bg-blue-900/10 backdrop-blur-sm">
                                        <span className="text-2xl">📚</span>
                                    </div>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 uppercase tracking-tighter"
                                    >
                                        OUR LATEST <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-black">INSIGHTS &</span> <br />
                                        ARTICLES
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed font-light italic"
                                    >
                                        "Stay informed with our technical achievements, industry trends, and deep dives into the world of engineering and digital innovation."
                                    </motion.p>
                                </div>

                                {/* Right Column: Stacked Cards */}
                                {/* Right Column: Categorized Blogs */}
                                <div className="flex flex-col space-y-24 lg:col-span-3">
                                    {/* Category: Mechanical Services */}
                                    {(!categoryParam || categoryParam === 'mechanical') && (
                                    <div className="space-y-12">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="relative pt-4"
                                        >
                                            <h3 className="text-2xl md:text-5xl font-black text-white uppercase tracking-[0.15em] mb-4">
                                                MECHANICAL <span className="text-blue-500">SERVICES</span>
                                                {subcategoryParam && SUBCATEGORY_NAMES[subcategoryParam] && (
                                                    <>
                                                        <span className="text-white/40"> / </span>
                                                        <span className="text-blue-400">{SUBCATEGORY_NAMES[subcategoryParam]}</span>
                                                    </>
                                                )}
                                            </h3>
                                            <div className="w-24 h-1.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                                        </motion.div>

                                        <div className="flex flex-col space-y-12">
                                            {blogs
                                                .filter(blog => {
                                                    const title = (blog.title || "").toLowerCase();
                                                    const itTitles = ['finance', 'e-commerce', 'real estate', 'online shopping', 'cybersecurity', 'closense'];
                                                    const civilTitles = ['architectural'];
                                                    
                                                    // Mechanical is everything that is NOT IT and NOT Civil
                                                    const isMechanical = !itTitles.some(it => title.includes(it)) && !civilTitles.some(cv => title.includes(cv));
                                                    if (!isMechanical) return false;

                                                    if (subcategoryParam) {
                                                        const allowedSlugs = BLOG_SUBCATEGORIES[subcategoryParam] || [];
                                                        return allowedSlugs.includes(blog.slug || blog.title || blog.id);
                                                    }
                                                    return true;
                                                })
                                                .map((blog, index) => (
                                                    <motion.div
                                                        key={`mech-${index}`}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        whileHover={{ y: -10, scale: 1.01 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5 }}
                                                        className="group relative overflow-hidden rounded-[3rem] bg-white/5 border border-white/10 aspect-[16/10] cursor-pointer hover:shadow-[0_40px_80px_rgba(59,130,246,0.2)] transition-all shadow-3xl"
                                                    >
                                                        <Wrapper link={`/blogs/${blog.slug}`}>
                                                            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                                                                {blog.image_url ? (
                                                                    <img
                                                                        src={blog.image_url}
                                                                        alt={blog.title}
                                                                        className="w-full h-full object-cover opacity-30 group-hover:opacity-50 grayscale transition-all duration-700"
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full bg-slate-800 opacity-40"></div>
                                                                )}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>
                                                            </div>

                                                            <div className="absolute top-8 left-8 z-20">
                                                                <span className="bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] shadow-2xl">
                                                                    Mechanical
                                                                </span>
                                                            </div>

                                                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-20">
                                                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-blue-400 transition-colors drop-shadow-2xl line-clamp-2">
                                                                    {blog.title}
                                                                </h3>
                                                                <div className="mt-8 flex items-center gap-4 text-white/40 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                                                    <span>Read Case Study</span>
                                                                    <span className="w-12 h-[1.5px] bg-blue-500"></span>
                                                                </div>
                                                            </div>
                                                        </Wrapper>
                                                    </motion.div>
                                                ))}
                                        </div>
                                    </div>
                                    )}

                                    {/* Category: Civil Services */}
                                    {(!categoryParam || categoryParam === 'civil') && (
                                    <div className="space-y-12">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="relative pt-4"
                                        >
                                            <h3 className="text-2xl md:text-5xl font-black text-white uppercase tracking-[0.15em] mb-4">
                                                CIVIL <span className="text-emerald-500">SERVICES</span>
                                            </h3>
                                            <div className="w-24 h-1.5 bg-emerald-600 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                                        </motion.div>

                                        <div className="flex flex-col space-y-12">
                                            {blogs
                                                .filter(blog => {
                                                    const title = (blog.title || "").toLowerCase();
                                                    const civilTitles = ['architectural'];
                                                    return civilTitles.some(cv => title.includes(cv));
                                                })
                                                .map((blog, index) => (
                                                    <motion.div
                                                        key={`civil-${index}`}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        whileHover={{ y: -10, scale: 1.01 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5 }}
                                                        className="group relative overflow-hidden rounded-[3rem] bg-white/5 border border-white/10 aspect-[16/10] cursor-pointer hover:shadow-[0_40px_80px_rgba(16,185,129,0.2)] transition-all shadow-3xl"
                                                    >
                                                        <Wrapper link={`/blogs/${blog.slug}`}>
                                                            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                                                                {blog.image_url ? (
                                                                    <img
                                                                        src={blog.image_url}
                                                                        alt={blog.title}
                                                                        className="w-full h-full object-cover opacity-30 group-hover:opacity-50 grayscale transition-all duration-700"
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full bg-slate-800 opacity-40"></div>
                                                                )}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>
                                                            </div>

                                                            <div className="absolute top-8 left-8 z-20">
                                                                <span className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 text-emerald-400 text-[10px] md:text-xs font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] shadow-2xl">
                                                                    Civil
                                                                </span>
                                                            </div>

                                                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-20">
                                                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-emerald-400 transition-colors drop-shadow-2xl line-clamp-2">
                                                                    {blog.title}
                                                                </h3>
                                                                <div className="mt-8 flex items-center gap-4 text-white/40 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                                                    <span>Read Article</span>
                                                                    <span className="w-12 h-[1.5px] bg-emerald-500"></span>
                                                                </div>
                                                            </div>
                                                        </Wrapper>
                                                    </motion.div>
                                                ))}
                                        </div>
                                    </div>
                                    )}

                                    {/* Category: IT Services */}
                                    {(!categoryParam || categoryParam === 'it') && (
                                    <div className="space-y-12">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="relative pt-4"
                                        >
                                            <h3 className="text-2xl md:text-5xl font-black text-white uppercase tracking-[0.15em] mb-4">
                                                IT <span className="text-purple-500">SERVICES</span>
                                            </h3>
                                            <div className="w-24 h-1.5 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                                        </motion.div>

                                        <div className="flex flex-col space-y-12">
                                            {blogs
                                                .filter(blog => {
                                                    const title = (blog.title || "").toLowerCase();
                                                    const itTitles = [
                                                        'finance and business advisory',
                                                        'e-commerce website',
                                                        'real estate website',
                                                        'online shopping'
                                                    ];
                                                    // Only include the specified IT titles
                                                    return itTitles.some(it => title.includes(it));
                                                })
                                                .map((blog, index) => (
                                                    <motion.div
                                                        key={`it-${index}`}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        whileHover={{ y: -10, scale: 1.01 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5 }}
                                                        className="group relative overflow-hidden rounded-[3rem] bg-white/5 border border-white/10 aspect-[16/10] cursor-pointer hover:shadow-[0_40px_80px_rgba(168,85,247,0.2)] transition-all shadow-3xl"
                                                    >
                                                        <Wrapper link={`/blogs/${blog.slug}`}>
                                                            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                                                                {blog.image_url ? (
                                                                    <img
                                                                        src={blog.image_url}
                                                                        alt={blog.title}
                                                                        className="w-full h-full object-cover opacity-30 group-hover:opacity-50 grayscale transition-all duration-700"
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full bg-slate-800 opacity-40"></div>
                                                                )}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>
                                                            </div>

                                                            <div className="absolute top-8 left-8 z-20">
                                                                <span className="bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 text-purple-400 text-[10px] md:text-xs font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] shadow-2xl">
                                                                    IT & Digital
                                                                </span>
                                                            </div>

                                                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-20">
                                                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-purple-400 transition-colors drop-shadow-2xl line-clamp-2">
                                                                    {blog.title}
                                                                </h3>
                                                                <div className="mt-8 flex items-center gap-4 text-white/40 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                                                    <span>Read Article</span>
                                                                    <span className="w-12 h-[1.5px] bg-purple-500"></span>
                                                                </div>
                                                            </div>
                                                        </Wrapper>
                                                    </motion.div>
                                                ))}
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Social Interaction Section */}
                    <section className="py-24 px-4 relative">
                        <div className="container mx-auto px-4 md:px-6 relative z-10">
                            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-12 md:p-20 overflow-hidden relative shadow-3xl text-center">
                                <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
                                <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>

                                <div className="relative z-10 max-w-3xl mx-auto">
                                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-none uppercase tracking-tighter">
                                        Love our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights?</span>
                                    </h2>
                                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 opacity-80">
                                        "If you find our technical achievements and industry trends valuable, spread the word and show your support."
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-6">
                                        <button
                                            onClick={() => {
                                                // Simple like animation - could be connected to a backend
                                                alert('Thank you for your support! ❤️');
                                            }}
                                            className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 px-10 py-5 rounded-full transition-all duration-300"
                                        >
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">❤️</span>
                                            <span className="text-white font-black uppercase tracking-widest">Like Article</span>
                                        </button>
                                        <button
                                            onClick={async () => {
                                                const shareData = {
                                                    title: 'Lasak Technologies - Our Insights',
                                                    text: 'Check out the latest insights and technical achievements from Lasak Technologies!',
                                                    url: window.location.href
                                                };

                                                try {
                                                    // Try using Web Share API (works on mobile)
                                                    if (navigator.share) {
                                                        await navigator.share(shareData);
                                                    } else {
                                                        // Fallback: Copy link to clipboard
                                                        await navigator.clipboard.writeText(window.location.href);
                                                        alert('Link copied to clipboard! Share it with your network.');
                                                    }
                                                } catch (err) {
                                                    console.error('Error sharing:', err);
                                                }
                                            }}
                                            className="group flex items-center gap-4 bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-full transition-all duration-300 shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
                                        >
                                            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🔗</span>
                                            <span className="text-white font-black uppercase tracking-widest">Share Insights</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Clients />
                </>
            )}
        </div>
    );
};

export default BlogsPage;
