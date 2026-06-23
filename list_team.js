
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBV93yApz0oyCc3oLSO1UDFC3CdXtfZ6Fo",
    authDomain: "lasak-technologies.firebaseapp.com",
    projectId: "lasak-technologies",
    storageBucket: "lasak-technologies.firebasestorage.app",
    messagingSenderId: "367519660603",
    appId: "1:367519660603:web:795d23468f040e184e3a1e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function listTeam() {
    const q = collection(db, "team_members");
    const snap = await getDocs(q);
    snap.forEach(doc => {
        console.log(`ID: ${doc.id} | Name: ${doc.data().name}`);
    });
}

listTeam().catch(err => {
    console.error(err);
    process.exit(1);
});
