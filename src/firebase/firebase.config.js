// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQNOgJWD-v9uidn0uQ744TJrT3ym_EVQ",
  authDomain: "motive-academy.firebaseapp.com",
  projectId: "motive-academy",
  storageBucket: "motive-academy.appspot.com",
  messagingSenderId: "274576275855",
  appId: "1:274576275855:web:b0a9da576ea06bb1e773fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;