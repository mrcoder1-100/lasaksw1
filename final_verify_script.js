
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
    let output = "FINAL VERIFICATION\n";
    try {
        const prod = await getDocs(collection(db, 'products'));
        output += `\nPRODUCTS: ${prod.docs.length}\n`;
        prod.docs.forEach(d => {
            output += ` - ${d.id}: ${d.data().title || d.data().name}\n`;
        });

        const serv = await getDocs(collection(db, 'services'));
        output += `\nSERVICES: ${serv.docs.length}\n`;
        serv.docs.forEach(d => {
            output += ` - ${d.id}: ${d.data().title || d.data().name}\n`;
        });
    } catch (e) {
        output += "ERROR: " + e.message;
    }
    fs.writeFileSync('FINAL_VERIFY.txt', output);
    process.exit(0);
}

run();
