// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD89iKO6584Cu-RWZ3M6yeVf9JeORjEPIE",
//   authDomain: "i-am-developer-3ab7d.firebaseapp.com",
//   projectId: "i-am-developer-3ab7d",
//   storageBucket: "i-am-developer-3ab7d.appspot.com",
//   messagingSenderId: "445788134269",
//   appId: "1:445788134269:web:8fff3fe9aa6a558ca9ca14",
//   measurementId: "G-4269F7433S"
// };

const firebaseConfig = {
  apiKey: "AIzaSyANVGl9Fj2gDvocZdkHPdBx6NjDqm0QCMY",
  authDomain: "mprfinal-2aa7f.firebaseapp.com",
  projectId: "mprfinal-2aa7f",
  storageBucket: "mprfinal-2aa7f.appspot.com",
  messagingSenderId: "1070195394605",
  appId: "1:1070195394605:web:436be3787dea48c288d0a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore(app)
export {db, auth}