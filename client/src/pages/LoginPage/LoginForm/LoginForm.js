// To set up Firebase login, we referenced the source code from 
// https://github.com/Devalo/Firebase-auth-react-express-mongodb/blob/master/phone-frontend/src/components/session/Login.jsx

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link, useHistory } from 'react-router-dom';

//import functions from Firebase authentication SDK
import * as firebase from '../../../authentication';

function LoginForm() {

    const history = useHistory();
    const [email, setEmail] = useState(localStorage.email);
    const [password, setPassword] = useState();
  
    const handleSubmit = (event) => {
        event.preventDefault();
        firebase.signInWithEmailAndPassword(firebase.auth, email.trim(), password.trim())
        .then((user) => {
            if (user) {
              console.log("logged in! User ID: " + firebase.auth.currentUser.uid);
              history.push("/");
            }
          })
        .catch((error) => {
              console.error("Error signing in, ", error.message);
          });
    }

    function handleChange () {
        localStorage.setItem("email",email);
    }

    return (
        
    <div className={styles.LoginFormSection}>
        <form onSubmit={ handleSubmit }>
            <input 
                className={styles.inputEmail}
                onChange ={({target}) => setEmail(target.value)} 
                type="text" 
                name="email"
                value={email} 
                placeholder="e-mail" />
            <input 
                className={styles.inputPassword} 
                onChange ={({target}) => setPassword(target.value)} 
                type="password" name="password" 
                placeholder="password" />
            
            <div className={styles.formLayout}>
            
            <input className={styles.rememberCheckbox} onChange={handleChange} type="checkbox" />
                <label className={styles.checkRemember}>
                    Remember Me
                </label>

                <p className={styles.forgotPassword}>
                    <Link to="">Forgot Your Password?</Link></p>

                <button 
                    type="submit" 
                    className={styles.loginButton}>LOG IN
                </button>

                <p className={styles.registerLink}>
                    <Link to="/registration">Register here</Link></p>
            </div>
        </form>
    </div>
        
    )
}

export default LoginForm;