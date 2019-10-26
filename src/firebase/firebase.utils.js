import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCHktqE0YjRBqBraI6HEBOvdvbqdpvzP3c",
    authDomain: "e-commerce-1fc2e.firebaseapp.com",
    databaseURL: "https://e-commerce-1fc2e.firebaseio.com",
    projectId: "e-commerce-1fc2e",
    storageBucket: "e-commerce-1fc2e.appspot.com",
    messagingSenderId: "343434258730",
    appId: "1:343434258730:web:235c55ae446c9181505653",
    measurementId: "G-2Q6VHV6XM6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
