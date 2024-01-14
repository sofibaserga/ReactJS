// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhFd9teCvBmn0ciMP37-tjgaa4Z-79_OI",
  authDomain: "proyectorj-ba62d.firebaseapp.com",
  projectId: "proyectorj-ba62d",
  storageBucket: "proyectorj-ba62d.appspot.com",
  messagingSenderId: "1058678274172",
  appId: "1:1058678274172:web:96b4a1febb2c4f10a4f1f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);