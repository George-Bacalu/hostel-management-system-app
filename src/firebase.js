import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwSJKrPFLWa1fscAqPACNwzwVqLhlmPJM",
  authDomain: "hostel-management-system-6d309.firebaseapp.com",
  databaseURL: "https://hostel-management-system-6d309-default-rtdb.firebaseio.com",
  projectId: "hostel-management-system-6d309",
  storageBucket: "hostel-management-system-6d309.appspot.com",
  messagingSenderId: "1025071536976",
  appId: "1:1025071536976:web:10b5eb882e4f90afa02a55",
  measurementId: "G-GJGE3XNTX1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
