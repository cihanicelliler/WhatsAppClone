import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA3TF9FSY0sw-pLvN09p5-FxK24zoGqMKs",
    authDomain: "whats-app-clone-297ee.firebaseapp.com",
    projectId: "whats-app-clone-297ee",
    storageBucket: "whats-app-clone-297ee.appspot.com",
    messagingSenderId: "858206267724",
    appId: "1:858206267724:web:6603ac4e6b879a49cb07e9",
    measurementId: "G-PDV8SHJZWW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;