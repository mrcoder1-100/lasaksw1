
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
    let output = "Auditing 'products' collection...\n";
    try {
        const snap = await getDocs(collection(db, 'products'));
        output += `Total documents found: ${snap.docs.length}\n`;
        snap.docs.forEach(d => {
            const data = d.data();
            output += `ID: ${d.id} | Title: "${data.title || data.name}" | Slug: ${data.slug}\n`;
        });
    } catch (err) {
        output += `Error: ${err.message}\n`;
    }
    fs.writeFileSync('audit_products_log.txt', output);
    console.log(output);
    process.exit(0);
}

audit().catch(err => {
    fs.writeFileSync('audit_products_log.txt', "Audit failed: " + err.message);
    process.exit(1);
});
