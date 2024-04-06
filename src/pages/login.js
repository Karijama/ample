import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../static/logo.png';
import { signInWithGoogle } from "../firebase.js";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    return(
        <div>
            <div className="place-self-center">
                <div className="w-28"><img src={logo}/></div>
                <form className="">
                    <div><input className="border-gray-200" placeholder="email" type="email" required onChange={(e)=>setEmail(e.target.value)}/></div>
                    <div><input placeholder="password" type="password" required onChange={(e)=>setPassword(e.target.value)}/></div>
                    <div><button type="submit" onClick={onLogin}>Log in</button></div>
                    <button className="login-provider-button" onClick={signInWithGoogle}></button>
                </form>
                <p></p>
            </div>
        </div>
    );
}