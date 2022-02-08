import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCbrVL2hNo3O0u11WkBsvEP7B-xZLmEkPc",
  authDomain: "eliberary-84630.firebaseapp.com",
  projectId: "eliberary-84630",
  storageBucket: "eliberary-84630.appspot.com",
  messagingSenderId: "63416761512",
  appId: "1:63416761512:web:65739826a2055dd389969d"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
