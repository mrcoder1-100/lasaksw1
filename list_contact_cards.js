import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

async function listCards() {
    console.log("Listing all contact cards...");
    const snap = await getDocs(collection(db, 'contact_cards'));

    if (snap.empty) {
        console.log("No cards found in database.");
    } else {
        console.log(`Found ${snap.docs.length} cards:`);
        snap.docs.forEach(doc => {
            console.log(`- ID: ${doc.id}, Title: ${doc.data().title}`);
        });
    }
    process.exit(0);
}

listCards().catch(err => {
    console.error("List failed:", err);
    process.exit(1);
});
