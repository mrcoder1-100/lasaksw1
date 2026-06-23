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

async function printImages() {
    const snap = await getDocs(collection(db, 'blogs'));
    snap.docs.forEach(d => {
        const data = d.data();
        console.log(`Title: "${data.title}" -> Image URL: "${data.image_url}"`);
    });
    process.exit(0);
}

printImages().catch(err => {
    console.error(err);
    process.exit(1);
});
