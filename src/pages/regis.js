import {useState} from "react";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase.js';

const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
        return(
            <div>
                <div>
                    <form>
                        <div><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email"/></div>
                        <div><input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password"/></div>
                        <button type="submit" onClick={onSubmit}>Sign Up</button>
                    </form>
                </div>
            </div>
        );
   
    }
}