import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB1isphGUF89hWRImax3iQLOLkLfb-NEZ4",
  authDomain: "c71pro-8e6f0.firebaseapp.com",
  projectId: "c71pro-8e6f0",
  storageBucket: "c71pro-8e6f0.appspot.com",
  messagingSenderId: "947720020574",
  appId: "1:947720020574:web:8a036642b2e59bf77f8acf"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
