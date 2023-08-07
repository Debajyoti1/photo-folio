import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCX5SY-v0ymVu9SO7Da2c2hxlG_e-4P-FY",
    authDomain: "react-4c35a.firebaseapp.com",
    projectId: "react-4c35a",
    storageBucket: "react-4c35a.appspot.com",
    messagingSenderId: "24561947084",
    appId: "1:24561947084:web:e73b3cdde15d23ef39cd69",
    measurementId: "G-4XC5KL6V9Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
