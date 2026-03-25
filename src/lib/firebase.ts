import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "placeholder",
  authDomain: "calebyinusa.firebaseapp.com",
  projectId: "calebyinusa",
  storageBucket: "calebyinusa.firebasestorage.app",
  messagingSenderId: "placeholder",
  appId: "placeholder"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
