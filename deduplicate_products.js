
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

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

async function deduplicate() {
    console.log("Starting product deduplication...");
    const snap = await getDocs(collection(db, 'products'));
    const products = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    
    const seen = new Map();
    const toDelete = [];

    for (const p of products) {
        const title = (p.title || p.name || '').toLowerCase().trim();
        if (!title) continue;

        if (seen.has(title)) {
            toDelete.push(p.id);
            console.log(`Duplicate found: "${title}" (ID: ${p.id})`);
        } else {
            seen.set(title, p.id);
        }
    }

    console.log(`Deleting ${toDelete.length} duplicates...`);
    for (const id of toDelete) {
        await deleteDoc(doc(db, 'products', id));
        console.log(`Deleted ID: ${id}`);
    }

    console.log("Deduplication complete.");
    process.exit(0);
}

deduplicate().catch(err => {
    console.error("Deduplication failed:", err);
    process.exit(1);
});
