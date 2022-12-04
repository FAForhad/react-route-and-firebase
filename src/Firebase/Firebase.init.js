// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJdcplxCp_sN5pWiCYQ-xHluNwFvdcqc4",
    authDomain: "react-route-and-firebase-p1.firebaseapp.com",
    projectId: "react-route-and-firebase-p1",
    storageBucket: "react-route-and-firebase-p1.appspot.com",
    messagingSenderId: "991550126071",
    appId: "1:991550126071:web:d9292427f09602db3960f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app