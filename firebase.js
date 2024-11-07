import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification ,updateProfile, signOut ,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";




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

export {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged,sendEmailVerification,updateProfile, signOut,GoogleAuthProvider,provider,signInWithPopup }
 