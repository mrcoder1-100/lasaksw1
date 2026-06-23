import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ChatBot from '../ui/Chatbot';

const Layout = ({ children }) => {
    const location = useLocation();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Check initial session
        // Listen for changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAdmin(!!user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer editable={isAdmin} />
            <ChatBot />
        </div>
    );
};

export default Layout;
