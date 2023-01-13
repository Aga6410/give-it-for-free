import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvb_BlNXmNXvfmERFmhh2ZmkbaO_zg_vs",
    authDomain: "give-it-for-free-a24bc.firebaseapp.com",
    projectId: "give-it-for-free-a24bc",
    storageBucket: "give-it-for-free-a24bc.appspot.com",
    messagingSenderId: "228164423020",
    appId: "1:228164423020:web:41fbf1ba9b20410bc27749"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);
  
  //init services 

const projectFirestore = firebase.firestore();

export {projectFirestore}