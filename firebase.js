import firebase from "firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ2HcC4a32PEWo4JuGmBx33dUiQ6hm354",
  authDomain: "petbook-12d43.firebaseapp.com",
  projectId: "petbook-12d43",
  storageBucket: "petbook-12d43.appspot.com",
  messagingSenderId: "132310752517",
  appId: "1:132310752517:web:e781a530fc49670aabeb6c",
  measurementId: "G-SPC4KB8MK2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
