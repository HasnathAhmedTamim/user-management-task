// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwT3wX4tYhKM6kwr0o53iSir-2ajb3Wrc",
  authDomain: "user-management-9947f.firebaseapp.com",
  projectId: "user-management-9947f",
  storageBucket: "user-management-9947f.appspot.com",
  messagingSenderId: "836021713354",
  appId: "1:836021713354:web:7fd44d688c9534abaa7733",
  measurementId: "G-5L93J4M92E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
