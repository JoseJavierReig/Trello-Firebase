import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBP_-ORxQWcA7dBz84iiXYBhXBMbhphL_w",
    authDomain: "trello-firebase-5a305.firebaseapp.com",
    projectId: "trello-firebase-5a305",
    storageBucket: "trello-firebase-5a305.appspot.com",
    messagingSenderId: "914008488235",
    appId: "1:914008488235:web:a7cca6d29bfa258ff7ed6e"
  }
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export default {
    auth
}