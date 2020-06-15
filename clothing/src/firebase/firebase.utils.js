import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBpVEmRu-JsZ3KlID6OdXFqh7nEOlKD4Rk",
  authDomain: "crwn-db-8c52f.firebaseapp.com",
  databaseURL: "https://crwn-db-8c52f.firebaseio.com",
  projectId: "crwn-db-8c52f",
  storageBucket: "crwn-db-8c52f.appspot.com",
  messagingSenderId: "477814364599",
  appId: "1:477814364599:web:4c65bf87cc934640f9f032",
  measurementId: "G-SER79XQZ11",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
