import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA5-k8rZs1TQsePjnc0DlKM0m6uF28US4w",
  authDomain: "authentication-practice-e29ab.firebaseapp.com",
  databaseURL: "https://authentication-practice-e29ab.firebaseio.com",
  projectId: "authentication-practice-e29ab",
  storageBucket: "authentication-practice-e29ab.appspot.com",
  messagingSenderId: "652697586337",
  appId: "1:652697586337:web:7f3c6f3fd6282c0dfdbee0",
};

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://authentication-practice-e29ab.web.app/set-password",
  // This must be true.
  handleCodeInApp: true,
};

//export actionCodeSettings;

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const database = firebase.firestore();
