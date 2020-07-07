import firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDaXh5pmu1fI8vhro8NSxLJamSL8ZrY-oo",
    authDomain: "booksanta-e6fc8.firebaseapp.com",
    databaseURL: "https://booksanta-e6fc8.firebaseio.com",
    projectId: "booksanta-e6fc8",
    storageBucket: "booksanta-e6fc8.appspot.com",
    messagingSenderId: "134099615849",
    appId: "1:134099615849:web:20824cf5970f767a4f22f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
