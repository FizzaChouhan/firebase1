import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification ,updateProfile, signOut ,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {getFirestore,collection, addDoc , doc, setDoc , getDocs,deleteDoc,updateDoc, serverTimestamp,getDoc,onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";




const firebaseConfig = {
  apiKey: "AIzaSyDoP4GoVVcp-95RZRH1_UMZplXeQVzwDQU",
  authDomain: "fir-8b510.firebaseapp.com",
  projectId: "fir-8b510",
  storageBucket: "fir-8b510.firebasestorage.app",
  messagingSenderId: "580432939936",
  appId: "1:580432939936:web:68ecdf001db31d6f7332c5",
  measurementId: "G-D0ZX6TQ74K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const auth = getAuth();
const user = auth.currentUser;

export {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged,sendEmailVerification,updateProfile, signOut,GoogleAuthProvider,provider,signInWithPopup,db,collection, addDoc , doc, setDoc , getDocs,deleteDoc,updateDoc,user, serverTimestamp,getDoc,auth,onSnapshot}
 