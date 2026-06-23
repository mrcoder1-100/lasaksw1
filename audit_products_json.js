
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs';

const firebaseConfig = {
    apiKey: "AIzaSyBV93yApz0oyCc3oLSO1UDFC3CdXtfZ6Fo",
    authDomain: "lasak-technologies.firebaseapp.com",
    projectId: "lasak-technologies",
    storageBucket: "lasak-technologies.firebasestorage.app",
    messagingSenderId: "367519660603",
    appId: "1:367519660603:web:795d23468f040e184e3a1e",
    measurementId: "G-F5GCBD931C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function audit() {
    const results = [];
    try {
        const snap = await getDocs(collection(db, 'products'));
        snap.docs.forEach(d => {
            results.push({ id: d.id, ...d.data() });
        });
        fs.writeFileSync('products_audit.json', JSON.stringify(results, null, 2));
        console.log(`Success: Found ${results.length} products`);
    } catch (err) {
        console.error("Audit failed:", err);
        fs.writeFileSync('products_audit.json', JSON.stringify({ error: err.message }));
    }
    process.exit(0);
}

audit();
