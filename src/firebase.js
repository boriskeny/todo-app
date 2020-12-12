import firebase from 'firebase';

 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOTO_L4k10QnOPiT_57JIy1UwJYm5cl3g",
    authDomain: "todo-app-cp-ec819.firebaseapp.com",
    projectId: "todo-app-cp-ec819",
    storageBucket: "todo-app-cp-ec819.appspot.com",
    messagingSenderId: "271465917756",
    appId: "1:271465917756:web:dbd41357379f6f29354239",
    measurementId: "G-NP4KK4EQPG"
 })

 const db  = firebaseApp.firestore()
  
 export default db
