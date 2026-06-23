
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore';

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
    console.log("Starting broad cleanup of 'Rapid Innovation' cards...");
    const snap = await getDocs(collection(db, 'goal_cards'));

    let deleteCount = 0;
    for (const document of snap.docs) {
        const data = document.data();
        const title = (data.title || "").toLowerCase();
        if (title.includes("rapid innovation")) {
            console.log(`Found matching card: "${data.title}" (ID: ${document.id}). Deleting...`);
            await deleteDoc(doc(db, 'goal_cards', document.id));
            deleteCount++;
        }
    }

    console.log(`Cleanup complete. Deleted ${deleteCount} cards.`);
    process.exit(0);
}

cleanup().catch(err => {
    console.error("Cleanup failed:", err);
    process.exit(1);
});
