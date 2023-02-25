import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYZ4jnRc22KuxxqtdwIZE5cM-03rpHJKY",
  authDomain: "crud-firestore-c814b.firebaseapp.com",
  projectId: "crud-firestore-c814b",
  storageBucket: "crud-firestore-c814b.appspot.com",
  messagingSenderId: "538288782435",
  appId: "1:538288782435:web:60f3bb199ad016422c8c56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore()
export const firebaseConections = ()=> app