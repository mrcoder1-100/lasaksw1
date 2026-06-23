
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, listCollections } from 'firebase/firestore';

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

async function listAll() {
    console.log("Listing all collections...");
    const collections = ['services', 'products', 'goal_cards', 'blogs', 'site_content', 'site_settings'];

    for (const name of collections) {
        try {
            const snap = await getDocs(collection(db, name));
            console.log(`Collection "${name}": ${snap.docs.length} documents`);
            if (snap.docs.length > 0) {
                snap.docs.slice(0, 3).forEach(d => {
                    const data = d.data();
                    console.log(`  - [${d.id}]: ${data.title || data.name || data.key || 'No title'}`);
                });
            }
        } catch (e) {
            console.log(`Error reading "${name}": ${e.message}`);
        }
    }
    process.exit(0);
}

listAll().catch(err => {
    console.error("List failed:", err);
    process.exit(1);
});
