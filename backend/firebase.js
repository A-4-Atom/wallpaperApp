// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPgjFhvOoqEkZZNZUC68w8e0b-_JJ_oYM",
  authDomain: "magicstock-338a0.firebaseapp.com",
  projectId: "magicstock-338a0",
  storageBucket: "magicstock-338a0.appspot.com",
  messagingSenderId: "907016952833",
  appId: "1:907016952833:web:ca17200f73700bcc71b400",
  measurementId: "G-GCZ6GZWX3Y"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);