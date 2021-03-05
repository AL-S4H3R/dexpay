import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAKByzgMCAmQWc3kYFwCQUxbG6UMejg_eg",
    authDomain: "dextrade-5625d.firebaseapp.com",
    projectId: "dextrade-5625d",
    storageBucket: "dextrade-5625d.appspot.com",
    messagingSenderId: "697849923122",
    appId: "1:697849923122:web:f69a21b2500aa9cd82de2b",
    measurementId: "G-5EK9F8GWFC"
};
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const firebaseAuth = app.auth()