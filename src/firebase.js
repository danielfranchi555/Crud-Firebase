import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6lMvFJBFlQxCq4YRTmPWNBWJaxDtn74Y",
  authDomain: "crud-firestore-eaf66.firebaseapp.com",
  projectId: "crud-firestore-eaf66",
  storageBucket: "crud-firestore-eaf66.appspot.com",
  messagingSenderId: "1025930290585",
  appId: "1:1025930290585:web:8493cf8a3eca02b1155f08"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const firebaseConection = () =>app