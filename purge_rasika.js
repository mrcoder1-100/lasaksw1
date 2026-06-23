
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

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

async function purgeRasika() {
    console.log("Connecting to Firestore: " + firebaseConfig.projectId);
    const q = collection(db, "team_members");
    const snap = await getDocs(q);

    console.log(`Found ${snap.size} total team members.`);

    let deletedCount = 0;
    for (const d of snap.docs) {
        const name = d.data().name || "";
        console.log(`Checking: ${name} (${d.id})`);
        if (name.toUpperCase().includes("RASIKA")) {
            console.log(`!!! MATCH FOUND !!! Deleting ${name}...`);
            await deleteDoc(doc(db, "team_members", d.id));
            deletedCount++;
        }
    }

    if (deletedCount > 0) {
        console.log(`SUCCESS: Deleted ${deletedCount} record(s).`);
    } else {
        console.log("No matching records found to delete.");
    }
}

purgeRasika().catch(err => {
    console.error("CRITICAL ERROR:", err);
    process.exit(1);
});
