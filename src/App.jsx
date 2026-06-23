
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Lazy load all pages for better performance
const Home = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const MechanicalPage = lazy(() => import('./pages/MechanicalPage'))
const AdminBlogsPage = lazy(() => import('./pages/admin/AdminBlogsPage'))
const AdminBlogEditor = lazy(() => import('./pages/admin/AdminBlogEditor'))
const AdminServicesPage = lazy(() => import('./pages/admin/AdminServicesPage'))
const AdminServiceEditor = lazy(() => import('./pages/admin/AdminServiceEditor'))
const BlogTemplate = lazy(() => import('./pages/BlogTemplate'))
const ServiceTemplate = lazy(() => import('./pages/ServiceTemplate'))
const AppetitePage = lazy(() => import('./pages/AppetitePage'))
const BlogsPage = lazy(() => import('./pages/BlogsPage'))
const AIPage = lazy(() => import('./pages/AIPage'))

// Hardcoded High-Quality Blog Imports (Lazy loaded)
const FutureOfCybersecurityPage = lazy(() => import('./pages/FutureOfCybersecurityPage'))
const EOTCranePage = lazy(() => import('./pages/EOTCranePage'))
const ArchitecturalDesignPage = lazy(() => import('./pages/ArchitecturalDesignPage'))
const ToyModelingPage = lazy(() => import('./pages/ToyModelingPage'))
const ElectricVehiclesPage = lazy(() => import('./pages/ElectricVehiclesPage'))
const SensorValvePage = lazy(() => import('./pages/SensorValvePage'))
const CrabRobotPage = lazy(() => import('./pages/CrabRobotPage'))
const PoultryVaccinatorPage = lazy(() => import('./pages/PoultryVaccinatorPage'))
const HelmetDesignPage = lazy(() => import('./pages/HelmetDesignPage'))
const BoilerDesignPage = lazy(() => import('./pages/BoilerDesignPage'))
const TeslaValvePage = lazy(() => import('./pages/TeslaValvePage'))
const JacquardMachinePage = lazy(() => import('./pages/JacquardMachinePage'))
const EccentricGearPage = lazy(() => import('./pages/EccentricGearPage'))
const EcommerceDevelopmentPage = lazy(() => import('./pages/EcommerceDevelopmentPage'))
const SolarDryerPage = lazy(() => import('./pages/SolarDryerPage'))
const WaterBottleDesignPage = lazy(() => import('./pages/WaterBottleDesignPage'))
const RealEstatePage = lazy(() => import('./pages/RealEstatePage'))
const WheelchairDesignPage = lazy(() => import('./pages/WheelchairDesignPage'))
const ClosensePage = lazy(() => import('./pages/ClosensePage'))
const FinanceAdvisoryPage = lazy(() => import('./pages/FinanceAdvisoryPage'))

const CareerApplyPage = lazy(() => import('./pages/CareerApplyPage'))
const ExtraPaymentPage = lazy(() => import('./pages/ExtraPaymentPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'))
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminEditor = lazy(() => import('./pages/admin/AdminEditor'))
import AdminHome from './pages/admin/AdminHome'
import AdminAboutPage from './pages/admin/AdminAboutPage'
import AdminContactPage from './pages/admin/AdminContactPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import AdminEnquiriesPage from './pages/admin/AdminEnquiriesPage'
import AdminJobApplicationsPage from './pages/admin/AdminJobApplicationsPage'
import AdminLegalPages from './pages/admin/AdminLegalPages'
import AdminLegalEditor from './pages/admin/AdminLegalEditor'
import AdminUsersPage from './pages/admin/AdminUsersPage'
import AdminDiagnosticPage from './pages/admin/AdminDiagnosticPage'
import AdminSEOPage from './pages/admin/AdminSEOPage'
import ScrollToTop from './components/ScrollToTop'

// Admin Routing Imports
import ProtectedRoute from './components/admin/ProtectedRoute';

// Loading fallback component
const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1e]">
        <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-400">Loading...</p>
        </div>
    </div>
);

const LayoutWrapper = () => (
    <Layout>
        <Outlet />
    </Layout>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    {/* Admin Login - NO Layout */}
                    <Route path="/admin" element={<AdminLogin />} />

                    {/* All Other Routes - WITH Layout */}
                    <Route element={<LayoutWrapper />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />

                        <Route path="/services/mechanical" element={<MechanicalPage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/products/appetite" element={<AppetitePage />} />
                        <Route path="/services/ai-automation" element={<AIPage />} />

                        <Route path="/blogs" element={<BlogsPage />} />

                        {/* Hardcoded High-Quality Blog Routes */}
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

                        {/* Dynamic fallback for new blogs */}
                        <Route path="/blogs/:slug" element={<BlogTemplate />} />

                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/privacy" element={<PrivacyPolicyPage />} />
                        <Route path="/terms" element={<TermsAndConditionsPage />} />
                        <Route path="/refund" element={<RefundPolicyPage />} />
                        <Route path="/careers/apply" element={<CareerApplyPage />} />
                        <Route path="/payment" element={<ExtraPaymentPage />} />

                        <Route element={<ProtectedRoute />}>
                            <Route path="/admin/dashboard" element={<AdminDashboard />} />
                            <Route path="/admin/editor/:id" element={<AdminEditor />} />
                            <Route path="/admin/services/new" element={<AdminServiceEditor />} />
                            <Route path="/admin/services/edit/:id" element={<AdminServiceEditor />} />
                            <Route path="/admin/home" element={<AdminHome />} />
                            <Route path="/admin/about" element={<AdminAboutPage />} />
                            <Route path="/admin/services" element={<AdminServicesPage />} />
                            <Route path="/admin/services-page" element={<ServicesPage isEditable={true} />} />
                            <Route path="/admin/products" element={<AdminProductsPage />} />
                            <Route path="/admin/enquiries" element={<AdminEnquiriesPage />} />
                            <Route path="/admin/careers" element={<AdminJobApplicationsPage />} />
                            <Route path="/admin/policy" element={<AdminLegalPages />} />
                            <Route path="/admin/privacy" element={<PrivacyPolicyPage isEditable={true} />} />
                            <Route path="/admin/terms" element={<TermsAndConditionsPage isEditable={true} />} />
                            <Route path="/admin/legal/edit/:id" element={<AdminLegalEditor />} />

                            <Route path="/admin/services/:category/:slug" element={<ServiceTemplate isEditable={true} />} />

                            <Route path="/admin/blogs" element={<AdminBlogsPage />} />
                            <Route path="/admin/blogs/new" element={<AdminBlogEditor />} />
                            <Route path="/admin/blogs/edit/:id" element={<AdminBlogEditor />} />
                            <Route path="/admin/contact" element={<AdminContactPage />} />
                            <Route path="/admin/users" element={<AdminUsersPage />} />
                            <Route path="/admin/diagnostic" element={<AdminDiagnosticPage />} />
                            <Route path="/admin/seo" element={<AdminSEOPage />} />
                            <Route path="/admin/payment" element={<ExtraPaymentPage isEditable={true} />} />
                            <Route path="/admin/refund" element={<RefundPolicyPage isEditable={true} />} />
                        </Route>

                        <Route path="/services/:category/:slug" element={<ServiceTemplate isEditable={false} />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App;
