
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

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

const toDelete = [
    // Duplicate Web Development in services
    { col: 'services', id: 'QrnqvZ5IXJEUyIAXAr3M' },
    // Duplicate 3D Modeling in services
    { col: 'services', id: 'id_1' },
    // Duplicate Reverse Engineering (id_0 is Mechanical Reverse Engineering)
    { col: 'services', id: 'id_0' },
    // Placeholder in products
    { col: 'products', id: 'placeholder' }
];

async function cleanup() {
    console.log("Starting final cleanup...");
    for (const item of toDelete) {
        try {
            await deleteDoc(doc(db, item.col, item.id));
            console.log(`Deleted ${item.col}/${item.id}`);
        } catch (e) {
            console.error(`Failed to delete ${item.col}/${item.id}:`, e.message);
        }
    }
    console.log("Cleanup complete.");
    process.exit(0);
}

cleanup();
