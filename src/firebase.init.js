// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0Y8sSfbRFYin8uYmz3-CObHm68DvW6I",
  authDomain: "rsvp-46b23.firebaseapp.com",
  projectId: "rsvp-46b23",
  storageBucket: "rsvp-46b23.appspot.com",
  messagingSenderId: "778971750329",
  appId: "1:778971750329:web:c6c753ff44fae2d758e068",
  measurementId: "G-38Y6XVFGH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;