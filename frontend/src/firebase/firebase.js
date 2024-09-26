// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYmF3SY7GkWefqi-rD7wbP45mnpaXU9Xc",
  authDomain: "hiiiiiiiiiii-2376c.firebaseapp.com",
  projectId: "hiiiiiiiiiii-2376c",
  storageBucket: "hiiiiiiiiiii-2376c.appspot.com",
  messagingSenderId: "423108910355",
  appId: "1:423108910355:web:6a93d7636ec8b9d6da4ee6",
  measurementId: "G-4PBENB55HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };