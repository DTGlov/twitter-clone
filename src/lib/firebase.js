import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAS2h1_PMqUt-jFhfPFLEy77SkalXcKDUI",
    authDomain: "twitter-1f086.firebaseapp.com",
    projectId: "twitter-1f086",
    storageBucket: "twitter-1f086.appspot.com",
    messagingSenderId: "986534632581",
    appId: "1:986534632581:web:55fece6065083e838a5dec"
  };
  // Initialize Firebase
const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore

// seedDatabase(firebase)

export {firebase,FieldValue}