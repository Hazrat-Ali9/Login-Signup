// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import {getAuth} from "Firebase/addDoc"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkBSsDJFIj5BrkMiWJ-H-6jgQaT4hrcjI",
  authDomain: "hazrat-login-auth.firebaseapp.com",
  projectId: "hazrat-login-auth",
  storageBucket: "hazrat-login-auth.appspot.com",
  messagingSenderId: "546807391156",
  appId: "1:546807391156:web:b34ed87e30f9953c2508e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

//export { app , auth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut ,sendPasswordResetEmail , deleteUser , db , collection , addDoc , setDoc , doc ,sendEmailVerification}
export default app;

// Firebase Config
