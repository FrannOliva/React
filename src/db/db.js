import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC6R4VVDT8DNMpIZvLZ1frLh3PClOVtB5s",
  authDomain: "banira-coderhouse.firebaseapp.com",
  projectId: "banira-coderhouse",
  storageBucket: "banira-coderhouse.appspot.com",
  messagingSenderId: "440252054408",
  appId: "1:440252054408:web:a87f418fd83d058a2a583d"
};

initializeApp(firebaseConfig);

export const db = getFirestore()