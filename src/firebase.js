import { initializeApp } from "firebase/app";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLHxyOLBmhjQaoOmhOeNLL1d4NPN9UV04",
  authDomain: "react-auth-system-3250d.firebaseapp.com",
  projectId: "react-auth-system-3250d",
  storageBucket: "react-auth-system-3250d.firebasestorage.app",
  messagingSenderId: "91471895614",
  appId: "1:91471895614:web:94a88d4a839b28df23856f",
  measurementId: "G-PH1DDSNKNW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { 
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
};