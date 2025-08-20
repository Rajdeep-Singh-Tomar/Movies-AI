// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVvu94WGpAfMW1QbyuXU-vALnLUXv2nIg",
  authDomain: "moviesx-482cd.firebaseapp.com",
  projectId: "moviesx-482cd",
  storageBucket: "moviesx-482cd.firebasestorage.app",
  messagingSenderId: "510214135278",
  appId: "1:510214135278:web:02aa2dbf742d62dd8402ff",
  measurementId: "G-YKS0J7LE80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);