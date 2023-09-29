// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHeTmYwlqqgZYatwoYOu0Mn0Dr1lpYQN8",
  authDomain: "maze-bank-b9b5e.firebaseapp.com",
  projectId: "maze-bank-b9b5e",
  storageBucket: "maze-bank-b9b5e.appspot.com",
  messagingSenderId: "670925398207",
  appId: "1:670925398207:web:12d50718690d8fd8ee660a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;