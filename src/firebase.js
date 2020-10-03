import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvf1eP7YqzmQF14Q-OQPVr8b9CHHjGEI4",
    authDomain: "facebook-clone-5f65d.firebaseapp.com",
    databaseURL: "https://facebook-clone-5f65d.firebaseio.com",
    projectId: "facebook-clone-5f65d",
    storageBucket: "facebook-clone-5f65d.appspot.com",
    messagingSenderId: "578672462073",
    appId: "1:578672462073:web:2d2b66eb09a4f44cc5ba28",
    measurementId: "G-428KE31GD6"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();

const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;
