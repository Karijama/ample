import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA01cjtrcrgxpV5EO1vj9OXO0_7lPCyf7M",
    authDomain: "ample-d079d.firebaseapp.com",
    projectId: "ample-d079d",
    storageBucket: "ample-d079d.appspot.com",
    messagingSenderId: "1026298306403",
    appId: "1:1026298306403:web:09c6025c2fb0101561fd56"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;