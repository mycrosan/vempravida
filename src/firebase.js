// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALBjbsb4VJp3eZ0qfHytLMxgUapaDBIFA",
  authDomain: "sislife-35bde.firebaseapp.com",
  databaseURL: "https://sislife-35bde.firebaseio.com",
  projectId: "sislife-35bde",
  storageBucket: "sislife-35bde.appspot.com",
  messagingSenderId: "114443209409",
  appId: "1:114443209409:web:8f84b6ae671c52d8a0a240",
  measurementId: "G-FV1PWCBPFT"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { fb, db }
