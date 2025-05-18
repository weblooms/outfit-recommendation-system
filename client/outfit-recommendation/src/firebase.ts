// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCYG_KEJ0Ez36lWk2-4b0KHQ4kjOWAfg_U",
  authDomain: "outfit-recommendation-61435.firebaseapp.com",
  projectId: "outfit-recommendation-61435",
  storageBucket: "outfit-recommendation-61435.firebasestorage.app",
  messagingSenderId: "598403644160",
  appId: "1:598403644160:web:2399e98a21e962a510d1e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
