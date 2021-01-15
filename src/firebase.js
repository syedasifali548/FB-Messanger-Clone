import firebase from 'firebase';


const  firebaseConfig = {
    apiKey: "AIzaSyC6-c49L98gO4EyVs_nn9gTxhsmbMgyq6E",
    authDomain: "fb-messenger-clone-72b2a.firebaseapp.com",
    projectId: "fb-messenger-clone-72b2a",
    storageBucket: "fb-messenger-clone-72b2a.appspot.com",
    messagingSenderId: "137202115547",
    appId: "1:137202115547:web:5ac30a0c4c04493914fdfe",
    measurementId: "G-1GJGD45PRX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db;


// const firebaseConfig = {
//     apiKey: "AIzaSyBHweURYNvldifLg3SHKEB3055g82eXuIE",
//     authDomain: "twitter-clone-c4e50.firebaseapp.com",
//     projectId: "twitter-clone-c4e50",
//     storageBucket: "twitter-clone-c4e50.appspot.com",
//     messagingSenderId: "232972930052",
//     appId: "1:232972930052:web:28705e9313d8c8e26b7951",
//     measurementId: "G-S7137ERPTG"
//   };
//   const firebaseApp = firebase.initializeApp(firebaseConfig)
//   const db = firebaseApp.firestore();
//   export default db;