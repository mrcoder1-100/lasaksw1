import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AdminPage from './pages/admin';
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import UIUXPage from './pages/UIUXPage'
import AIPage from './pages/AIPage'
import ProductsPage from './pages/ProductsPage'
import MechanicalPage from './pages/MechanicalPage'
import ReverseEngineeringPage from './pages/ReverseEngineeringPage'
import RetroFittingPage from './pages/RetroFittingPage'
import NewProductDevelopmentPage from './pages/NewProductDevelopmentPage'
import ThreeDModelingPage from './pages/ThreeDModelingPage'
import AnalysisPage from './pages/AnalysisPage'
import PatentDrawingPage from './pages/PatentDrawingPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import DigitalMarketingPage from './pages/DigitalMarketingPage'
import AppetitePage from './pages/AppetitePage'
import BlogsPage from './pages/BlogsPage'
import FutureOfCybersecurityPage from './pages/FutureOfCybersecurityPage'
import EOTCranePage from './pages/EOTCranePage'
import ArchitecturalDesignPage from './pages/ArchitecturalDesignPage'
import ToyModelingPage from './pages/ToyModelingPage'
import ElectricVehiclesPage from './pages/ElectricVehiclesPage'
import SensorValvePage from './pages/SensorValvePage'
import CrabRobotPage from './pages/CrabRobotPage'
import PoultryVaccinatorPage from './pages/PoultryVaccinatorPage'
import HelmetDesignPage from './pages/HelmetDesignPage'
import BoilerDesignPage from './pages/BoilerDesignPage'
import TeslaValvePage from './pages/TeslaValvePage'
import JacquardMachinePage from './pages/JacquardMachinePage'
import EccentricGearPage from './pages/EccentricGearPage'
import EcommerceDevelopmentPage from './pages/EcommerceDevelopmentPage'
import SolarDryerPage from './pages/SolarDryerPage'
import WaterBottleDesignPage from './pages/WaterBottleDesignPage'
import RealEstatePage from './pages/RealEstatePage'
import WheelchairDesignPage from './pages/WheelchairDesignPage'
import ClosensePage from './pages/ClosensePage'
import FinanceAdvisoryPage from './pages/FinanceAdvisoryPage'
import CareerApplyPage from './pages/CareerApplyPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import ScrollToTop from './components/ScrollToTop'
// import WhyChooseUs from './components/WhyChooseUs' // Optional: kept for future use if needed
// import Contact from './components/Contact' // Optional: Contact info is now in Footer
import { AnimatePresence } from 'framer-motion' // Optimizing for future if needed, but for now just adding route

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/ui-ux" element={<UIUXPage />} />
                    <Route path="/services/it/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/services/it/digital-marketing" element={<DigitalMarketingPage />} />
                    <Route path="/services/ai-automation" element={<AIPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/services/mechanical" element={<MechanicalPage />} />
                    <Route path="/services/mechanical/reverse-engineering" element={<ReverseEngineeringPage />} />
                    <Route path="/services/mechanical/retro-fitting" element={<RetroFittingPage />} />
                    <Route path="/services/mechanical/new-product-development" element={<NewProductDevelopmentPage />} />
                    <Route path="/services/mechanical/3d-modeling" element={<ThreeDModelingPage />} />
                    <Route path="/services/mechanical/analysis" element={<AnalysisPage />} />
                    <Route path="/services/mechanical/patent-drawing" element={<PatentDrawingPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/appetite" element={<AppetitePage />} />
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/blogs/future-of-cybersecurity" element={<FutureOfCybersecurityPage />} />
                    <Route path="/blogs/eot-crane-project" element={<EOTCranePage />} />
                    <Route path="/blogs/architectural-design" element={<ArchitecturalDesignPage />} />
                    <Route path="/blogs/toy-modeling" element={<ToyModelingPage />} />
                    <Route path="/blogs/electric-vehicles" element={<ElectricVehiclesPage />} />
                    <Route path="/blogs/sensor-valve-design" element={<SensorValvePage />} />
                    <Route path="/blogs/crab-robot-design" element={<CrabRobotPage />} />
                    <Route path="/blogs/poultry-vaccinator" element={<PoultryVaccinatorPage />} />
                    <Route path="/blogs/helmet-design" element={<HelmetDesignPage />} />
                    <Route path="/blogs/boiler-design" element={<BoilerDesignPage />} />
                    <Route path="/blogs/tesla-valve" element={<TeslaValvePage />} />
                    <Route path="/blogs/jacquard-machine" element={<JacquardMachinePage />} />
                    <Route path="/blogs/eccentric-gear" element={<EccentricGearPage />} />
                    <Route path="/blogs/ecommerce-development" element={<EcommerceDevelopmentPage />} />
                    <Route path="/blogs/solar-dryer" element={<SolarDryerPage />} />
                    <Route path="/blogs/water-bottle-design" element={<WaterBottleDesignPage />} />
                    <Route path="/blogs/real-estate" element={<RealEstatePage />} />
                    <Route path="/blogs/wheelchair-design" element={<WheelchairDesignPage />} />
                    <Route path="/blogs/closense-ecommerce" element={<ClosensePage />} />
                    <Route path="/blogs/finance-advisory" element={<FinanceAdvisoryPage />} />

                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms" element={<TermsAndConditionsPage />} />
                    <Route path="/refund" element={<RefundPolicyPage />} />
                    <Route path="/careers/apply" element={<CareerApplyPage />} />
                    {/* Fallback */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
