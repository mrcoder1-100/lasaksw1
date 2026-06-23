
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
    let log = "DIAGNOSTIC START\n";
    try {
        const prodSnap = await getDocs(collection(db, 'products'));
        log += `\nPRODUCTS (${prodSnap.docs.length}):\n`;
        prodSnap.docs.forEach(d => {
            log += ` - [${d.id}] ${d.data().title || d.data().name}\n`;
        });

        const servSnap = await getDocs(collection(db, 'services'));
        log += `\nSERVICES (${servSnap.docs.length}):\n`;
        servSnap.docs.forEach(d => {
            log += ` - [${d.id}] ${d.data().title || d.data().name}\n`;
        });
    } catch (e) {
        log += "ERROR: " + e.message + "\n";
    }
    fs.writeFileSync('DIAGNOSTIC_LOG.txt', log);
    console.log("Diagnostic log written.");
    process.exit(0);
}

run();
