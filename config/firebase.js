import firebase from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAmw9_VT_qwWgSmrArPKQ_yTNYJ7iOftqE",
    authDomain: "agile-project-7a847.firebaseapp.com",
    databaseURL: "https://agile-project-7a847-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "agile-project-7a847",
    storageBucket: "agile-project-7a847.appspot.com",
    messagingSenderId: "610561895592",
    appId: "1:610561895592:web:5f938533902c8606eaa69d",
    measurementId: "G-01S6WCLRLV"
  };
  
const app = initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();

export const firestore = getFirestore(app);