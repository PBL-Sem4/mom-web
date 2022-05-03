import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseCredentials = {
  apiKey: "AIzaSyCZAV4uWI0qJpKuT7hd8Uhx-WSVBwSiPU4",
  authDomain: "my-mom-web.firebaseapp.com",
  projectId: "my-mom-web"
}

//If an firebase app hasn't already been created
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials)
}

export default firebase;
