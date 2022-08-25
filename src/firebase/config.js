import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFnbiOtBmbD6Xvwsk2bgpKXRBEP_12-M4",
  authDomain: "cooking-katja-site.firebaseapp.com",
  projectId: "cooking-katja-site",
  storageBucket: "cooking-katja-site.appspot.com",
  messagingSenderId: "724614190757",
  appId: "1:724614190757:web:e2a0b9f125f495f7bc5f4c"
};

//initialize firebase, pass in above obj (method connects to firebase backend)
firebase.initializeApp(firebaseConfig)

//init services - which will return an obj for interaction with firestore and we can save it in const
const projectFirestore = firebase.firestore()

//now export anything we might use in future, which is just the object
export { projectFirestore }