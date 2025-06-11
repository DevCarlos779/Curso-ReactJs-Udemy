import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6uIUR1EAOKI1NXQwuy8B07S8-PKitgbU",
  authDomain: "miniblog-a35a3.firebaseapp.com",
  projectId: "miniblog-a35a3",
  storageBucket: "miniblog-a35a3.firebasestorage.app",
  messagingSenderId: "146594014588",
  appId: "1:146594014588:web:132841f49fdd2110a030f9"
};

const app = initializeApp(firebaseConfig);

//banco de dados
const db = getFirestore(app);

export { db };
