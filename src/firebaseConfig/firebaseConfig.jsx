
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6KeeNSi5aNuPLXVKca2XCnfLztYpVpjM",
  authDomain: "portfolio-d83d7.firebaseapp.com",
  projectId: "portfolio-d83d7",
  storageBucket: "portfolio-d83d7.appspot.com",
  messagingSenderId: "810574229596",
  appId: "1:810574229596:web:c2901766e76be35c737699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);