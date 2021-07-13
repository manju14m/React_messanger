import firebase from 'firebase'
// import "firebase/auth";
// import "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsHPqlbZWljW3nxcK1l37k_5B-vjjSMFk",
    authDomain: "myreactchat-c81f1.firebaseapp.com",
    projectId: "myreactchat-c81f1",
    storageBucket: "myreactchat-c81f1.appspot.com",
    messagingSenderId: "336145805297",
    appId: "1:336145805297:web:1c7bb095550f082b41de50",
    measurementId: "G-7TSWHWKF0W"
  };
  
  // export const auth = firebase.auth()
  // export const firestore = firebase.firestore()
  
  firebase.initializeApp(firebaseConfig);
  
  // export const auth = firebase.auth();
  // export const firestore = firebase.firestore()

  export default firebase;