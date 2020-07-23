import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKhuG9qglY4NL-yx6ISno6LkGJGx-HfM0",
    authDomain: "react-curso-64c87.firebaseapp.com",
    databaseURL: "https://react-curso-64c87.firebaseio.com",
    projectId: "react-curso-64c87",
    storageBucket: "react-curso-64c87.appspot.com",
    messagingSenderId: "516973070722",
    appId: "1:516973070722:web:36cf4f1dc4c17869f5279b"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }