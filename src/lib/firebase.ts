
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "placeholder",
  authDomain: "pixelforge-portfolio.firebaseapp.com",
  projectId: "pixelforge-portfolio",
  storageBucket: "pixelforge-portfolio.firebasestorage.app",
  messagingSenderId: "placeholder",
  appId: "placeholder"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
