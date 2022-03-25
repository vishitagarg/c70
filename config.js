import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDes6KLGA6eyPBtPqFch_X0FXci8gClPkU",
  authDomain: "eliberary14322.firebaseapp.com",
  projectId: "eliberary14322",
  storageBucket: "eliberary14322.appspot.com",
  messagingSenderId: "140567031349",
  appId: "1:140567031349:web:900452546341ae5f6c4b7c"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
