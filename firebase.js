import firebase from 'firebase'
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyA8vTsfE1CcED24jqbqESaRMhmZDUdP9mE",
    authDomain: "facebook-aa054.firebaseapp.com",
    projectId: "facebook-aa054",
    storageBucket: "facebook-aa054.appspot.com",
    messagingSenderId: "706643599244",
    appId: "1:706643599244:web:9ca070ab707b566a8780a9"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db= app.firestore()
const storage=firebase.storage()

export {db,storage}