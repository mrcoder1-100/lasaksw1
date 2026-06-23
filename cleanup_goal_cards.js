
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

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

async function cleanup() {
    console.log("Starting cleanup of 'Rapid Innovation' cards...");
    const q = query(collection(db, 'goal_cards'), where('title', '==', ''));
    const snap = await getDocs(q);

    if (snap.empty) {
        console.log("No 'Rapid Innovation' cards found in database.");
    } else {
        console.log(`Found ${snap.docs.length} cards. Deleting...`);
        for (const document of snap.docs) {
            await deleteDoc(doc(db, 'goal_cards', document.id));
            console.log(`Deleted card with ID: ${document.id}`);
        }
    }
    console.log("Cleanup complete.");
    process.exit(0);
}

cleanup().catch(err => {
    console.error("Cleanup failed:", err);
    process.exit(1);
});
