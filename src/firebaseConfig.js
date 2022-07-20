import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD60pPmEEInZdNCZ2SUTM0E4blfSbMjfRw",
  authDomain: "lens-quiz-2a015.firebaseapp.com",
  projectId: "lens-quiz-2a015",
  storageBucket: "lens-quiz-2a015.appspot.com",
  messagingSenderId: "820025164784",
  appId: "1:820025164784:web:a4c2e2ce0cef17e4ca5335",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  signOut,
};
