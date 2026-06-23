
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

async function run() {
    let log = "PRODUCT AUDIT START\n";
    try {
        const snap = await getDocs(collection(db, 'products'));
        log += `Found ${snap.docs.length} docs\n`;
        snap.docs.forEach(doc => {
            log += `ID: ${doc.id} | Name: ${doc.data().name} | Title: ${doc.data().title}\n`;
        });
    } catch (e) {
        log += "ERROR: " + e.message + "\n";
    }
    fs.writeFileSync('FINAL_PRODUCT_AUDIT.txt', log);
    process.exit(0);
}

run();
