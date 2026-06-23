
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
    console.log("Auditing 'products' collection...");
    const snap = await getDocs(collection(db, 'products'));
    console.log(`Total documents found: ${snap.docs.length}`);
    snap.docs.forEach(d => {
        const data = d.data();
        console.log(`ID: ${d.id} | Title: "${data.title || data.name}" | Slug: ${data.slug}`);
    });
    process.exit(0);
}

audit().catch(err => {
    console.error("Audit failed:", err);
    process.exit(1);
});
