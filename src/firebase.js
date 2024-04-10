import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATHqZ6pvm6IqQeRC2_BHxZoEtdddB-gG0",
  authDomain: "triorio-projekt.firebaseapp.com",
  projectId: "triorio-projekt",
  storageBucket: "triorio-projekt.appspot.com",
  messagingSenderId: "509491383903",
  appId: "1:509491383903:web:5bb6374cb67c89b31555ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const db = firestore;

export {
  app,
  auth,
  firestore,
  db
};





