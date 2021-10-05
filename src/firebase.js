// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCCsYEL0sh-y3nwiKNR0_BeXeXL9lN9sME",
    authDomain: "challenge-2227b.firebaseapp.com",
    projectId: "challenge-2227b",
    storageBucket: "challenge-2227b.appspot.com",
    messagingSenderId: "823113451370",
    appId: "1:823113451370:web:da1d70826b024ebb75c713",
    measurementId: "G-8ZWQD42HRZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };