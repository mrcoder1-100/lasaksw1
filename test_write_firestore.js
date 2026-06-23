import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, limit, query } from 'firebase/firestore';

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

async function test() {
    try {
        console.log("Connecting to Firestore...");
        const q = query(collection(db, 'blogs'), limit(1));
        const snap = await getDocs(q);
        console.log("Connection successful! Document count in query:", snap.docs.length);
        if (snap.docs.length > 0) {
            console.log("First document fields:", Object.keys(snap.docs[0].data()));
        }
    } catch (e) {
        console.error("Connection failed:", e);
    }
    process.exit(0);
}

test();
