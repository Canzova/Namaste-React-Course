// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMjsq1E1Sqr1KJ7Q3GcwEMp_J2QkeJGHo",
  authDomain: "netflixgpt-nihal-singh.firebaseapp.com",
  projectId: "netflixgpt-nihal-singh",
  storageBucket: "netflixgpt-nihal-singh.appspot.com",
  messagingSenderId: "17923682012",
  appId: "1:17923682012:web:57822407677440eece4e19",
  measurementId: "G-HPTZW76DVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();