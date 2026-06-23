/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // Dark navy/slate for background
                    foreground: '#f1f5f9', // Light slate for text
                },
                secondary: {
                    DEFAULT: '#3b82f6', // Bright blue for primary actions
                    foreground: '#ffffff',
                },
                accent: {
                    DEFAULT: '#60a5fa', // Lighter blue accent
                    foreground: '#ffffff',
                },
                background: '#0f172a', // Global dark background
                foreground: '#f1f5f9', // Global light text
                hero: {
                    DEFAULT: '#0f172a', // Matching global background
                    start: '#0f172a',
                    end: '#1e1b4b', // Slightly deeper/purple tint for gradients
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
