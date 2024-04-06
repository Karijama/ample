import {useState} from "react";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase.js';
import logo from '../static/logo.png';

export default function login(){
    const onSubmit = async (event) => {
        event.preventDefault();
    }
    const maindiv = {
        paddingTop: '10%',
    }
    const log ={
        margin: 'auto',
        padding: '5%' ,
        width: '40%',
        border: '5px solid rgba(37, 199, 102, 1)',
        borderRadius: '10px',
    }
    return(
        <div style={maindiv}>
            <div style={log} className="place-self-center">
                <div className="w-28"><img src={logo}/></div>
                <form className="">
                    <div><input className="border-gray-200" placeholder="email" type="email"/></div>
                    <div><input placeholder="password" type="password"/></div>
                    <button type="submit" onClick={onSubmit}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}