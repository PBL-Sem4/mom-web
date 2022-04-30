import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCZAV4uWI0qJpKuT7hd8Uhx-WSVBwSiPU4",
  authDomain: "my-mom-web.firebaseapp.com",
  projectId: "my-mom-web",
  storageBucket: "my-mom-web.appspot.com",
  messagingSenderId: "786803226635",
  appId: "1:786803226635:web:83625bed941777f4532f0e",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}