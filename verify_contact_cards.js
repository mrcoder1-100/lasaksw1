import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import * as fs from 'fs';

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

async function verify() {
    let result = "Verification Output:\n";
    const snap = await getDocs(collection(db, 'contact_cards'));

    if (snap.empty) {
        result += "No contact cards found in database.\n";
    } else {
        result += `Found ${snap.docs.length} contact cards:\n`;
        snap.docs.forEach(doc => {
            result += `- ID: ${doc.id}, Title: ${doc.data().title}\n`;
        });
    }
    fs.writeFileSync('verification_result.txt', result);
    process.exit(0);
}

verify().catch(err => {
    fs.writeFileSync('verification_result.txt', "Error: " + err.message);
    process.exit(1);
});
