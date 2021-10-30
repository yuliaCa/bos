// To set up Firebase login, we referenced the source code from 
// https://github.com/Devalo/Firebase-auth-react-express-mongodb/blob/master/phone-frontend/src/components/session/Login.jsx

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

//import functions from Firebase authentication SDK
import * as firebase from '../../../authentication';

function LoginForm() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = (event) => {
        event.preventDefault();
        firebase.signInWithEmailAndPassword(firebase.auth, email.trim(), password.trim())
        .then((user) => {
            if (user) {
              console.log("logged in!");
            }
          })
        .catch((error) => {
              console.error("Error signing in, ", error.message);
          });
    }

    return (
        
    <div className={styles.LoginFormSection}>
        <form onSubmit={ handleSubmit }>
            <input 
                className={styles.inputEmail}
                onChange ={({target}) => setEmail(target.value)} 
                type="text" 
                name="email" 
                placeholder="e-mail" />
            <input 
                className={styles.inputPassword} 
                onChange ={({target}) => setPassword(target.value)} 
                type="password" name="password" 
                placeholder="password" />
            
            <label className={styles.checkRemember}>Remember Me
            <input type="checkbox" />
            </label>

            <p className={styles.forgotPassword}>
                <Link to="">Forgot Your Password?</Link></p>

            <button 
                type="submit" 
                className={styles.loginButton}>Login
            </button>

            <p className={styles.registerLink}>
                <Link to="/registration">Register here</Link></p>
        </form>
    </div>
        
    )
}

export default LoginForm;