// firebaseConfig.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBa5riUYI4tyMVfIXBH3cB5tXP-9v-7nGs",
  authDomain: "freshify-acff7.firebaseapp.com",
  projectId: "freshify-acff7",
  storageBucket: "freshify-acff7.appspot.com",
  messagingSenderId: "335844311119",
  appId: "1:335844311119:web:c23269adef693ca6036a3a",
  measurementId: "G-ZNH3SCJGY4"
};

let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
