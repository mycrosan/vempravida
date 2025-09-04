import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db, fb}
