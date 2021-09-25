//for chat app 
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import "firebase/compat/auth";

const firebaseApp = {
  apiKey: "AIzaSyA0vqUJ_KkOlO6xeVxre-8DLWa1wn4vdtQ",
  authDomain: "asphalt-aliance.firebaseapp.com",
  projectId: "asphalt-aliance",
  storageBucket: "asphalt-aliance.appspot.com",
  messagingSenderId: "708878712802",
  appId: "1:708878712802:web:27d760e6a02f23cf8e03bb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseApp);
} else {
  firebase.app();
}

export const db = firebase.firestore()

export const auth = firebase.auth()

// export { db, auth }