import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import dotenv from 'dotenv';
import fs from 'fs';

// Load env from .env file
const envContent = fs.readFileSync('.env', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim().replace(/"/g, '');
});

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const newMembers = [
    {
        name: "Lakshmanan T",
        role: "Senior Academic Counselor",
        description: "Dedicated to guiding students and professionals toward their ideal career paths with expert academic and industry-aligned counseling.",
        image_url: "/src/assets/team/lakshmanan_t.png"
    },
    {
        name: "Monika S",
        role: "Data Analyst Intern",
        description: "Leverages data-driven insights to optimize business processes and support strategic decision-making through advanced analytical techniques.",
        image_url: "/src/assets/team/monika_s.png"
    }
];

async function addTeamMembers() {
    for (const member of newMembers) {
        const q = query(collection(db, 'team_members'), where('name', '==', member.name));
        const snap = await getDocs(q);
        if (snap.empty) {
            console.log(`Adding ${member.name}...`);
            await addDoc(collection(db, 'team_members'), member);
        } else {
            console.log(`${member.name} already exists.`);
        }
    }
    process.exit(0);
}

addTeamMembers();
