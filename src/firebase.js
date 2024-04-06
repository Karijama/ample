import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA01cjtrcrgxpV5EO1vj9OXO0_7lPCyf7M",
    authDomain: "ample-d079d.firebaseapp.com",
    projectId: "ample-d079d",
    storageBucket: "ample-d079d.appspot.com",
    messagingSenderId: "1026298306403",
    appId: "1:1026298306403:web:09c6025c2fb0101561fd56"
};

const app = firebase.initializeApp(firebaseConfig);

export const Gauth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}



export const auth = getAuth(app);
export default app;

