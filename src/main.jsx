import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import { AdminProvider } from './contexts/AdminContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <AdminProvider>
                <App />
            </AdminProvider>
        </HelmetProvider>
    </React.StrictMode>,
)
