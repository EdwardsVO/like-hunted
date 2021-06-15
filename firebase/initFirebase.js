import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const clientCredentials = {
    apiKey: "AIzaSyBxC4ZqUQJSeqf1xsRDiG8eJLz3yZhttN8",
    authDomain: "like-hunt-d83ae.firebaseapp.com",
    databaseURL: "https://like-hunt-d83ae-default-rtdb.firebaseio.com",
    projectId: "like-hunt-d83ae",
    storageBucket: "like-hunt-d83ae.appspot.com",
    messagingSenderId: "1006207454790",
    appId: "1:1006207454790:web:05c57c895d15c717944447",
    measurementId: "G-7LMM339MJW"
}

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
    }

    console.log("firebase working")
}
