import firebase from 'firebase/app';
import 'firebase/firestore';
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

!firebase.apps.length && firebase.initializeApp(clientCredentials)

const db = firebase.firestore()

export const fetchLatestPost = () => {
    return db
        .collection("posts")
        .get()
        .then(({ docs }) => {
            return docs.map((doc) => {
                const data = doc.data()
                const id = doc.id



                return {
                    ...data,
                    id,

                }
            })
        })
}

 
       
