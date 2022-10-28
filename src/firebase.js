// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeTGsI13hpr1EodkvALI824Fssa3GGsGc",
  authDomain: "chat-app-3e7ac.firebaseapp.com",
  projectId: "chat-app-3e7ac",
  storageBucket: "chat-app-3e7ac.appspot.com",
  messagingSenderId: "299246834057",
  appId: "1:299246834057:web:b659db9b9d54ba61185158",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
