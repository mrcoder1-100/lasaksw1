import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AdminLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white font-sans">
            {/* Admin Layout reuses the same Navbar for consistency */}
            {/* The Navbar internal logic handles the 'Active' states based on URL */}
            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default AdminLayout;
