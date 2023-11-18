// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDFll_s2m5vVVGv17ciwDkW4Izg2rEZLBY",
  authDomain: "modern-bond-394602.firebaseapp.com",
  projectId: "modern-bond-394602",
  storageBucket: "modern-bond-394602.appspot.com",
  messagingSenderId: "370510691583",
  appId: "1:370510691583:web:28ee614259fbc75716e0ca",
  measurementId: "G-81257L5BHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);