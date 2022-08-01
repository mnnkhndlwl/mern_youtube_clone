// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fir-51a74.firebaseapp.com",
  projectId: "fir-51a74",
  storageBucket: "fir-51a74.appspot.com",
  messagingSenderId: "377093495071",
  appId: "1:377093495071:web:ad000dafa3ccddc3cf382a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;