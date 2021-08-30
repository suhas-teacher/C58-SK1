import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD7LNHS2EnpxOFI5FLhwbslyWHc_iUmVtw",
    authDomain: "buzzer-app-23565.firebaseapp.com",
    databaseURL: "https://buzzer-app-23565-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-23565",
    storageBucket: "buzzer-app-23565.appspot.com",
    messagingSenderId: "227628543294",
    appId: "1:227628543294:web:2be65042c87ff3f394d06f",
    measurementId: "G-60CL6TNZC6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();