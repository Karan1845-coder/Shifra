import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: "shifra-b16e3.firebaseapp.com",
  projectId: "shifra-b16e3",
  storageBucket: "shifra-b16e3.firebasestorage.app",
  messagingSenderId: "759546676293",
  appId: "1:759546676293:web:bae78413d5b007f2fc4f2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}


