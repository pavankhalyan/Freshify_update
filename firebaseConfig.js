// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from  "firebase/auth"; 
import { getfirestore } from  "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa5riUYI4tyMVfIXBH3cB5tXP-9v-7nGs",
  authDomain: "freshify-acff7.firebaseapp.com",
  projectId: "freshify-acff7",
  storageBucket: "freshify-acff7.appspot.com",
  messagingSenderId: "335844311119",
  appId: "1:335844311119:web:c23269adef693ca6036a3a",
  measurementId: "G-ZNH3SCJGY4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getfirestore(app);