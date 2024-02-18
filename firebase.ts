// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyC6tKi6y18R4F0QF3hYwWn28aGFbed5xRU",
  authDomain: "enbikchat.firebaseapp.com",
  projectId: "enbikchat",
  storageBucket: "enbikchat.appspot.com",
  messagingSenderId: "889065121712",
  appId: "1:889065121712:web:b87e7e2179740931de5875",
  measurementId: "G-MWYNGXWV01",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
