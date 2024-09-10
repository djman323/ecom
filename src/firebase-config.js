// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBeK8UWSyOlC3HPt5toxhPrQ6VU7gxFec",
  authDomain: "pocket-mart-3734a.firebaseapp.com",
  projectId: "pocket-mart-3734a",
  storageBucket: "pocket-mart-3734a.appspot.com",
  messagingSenderId: "907352570052",
  appId: "1:907352570052:web:744eab8d79f19d4966f191",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize Firestore

export { auth, googleProvider, db };
