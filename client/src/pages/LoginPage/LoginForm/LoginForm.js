// To set up Firebase login, we referenced the source code from 
// https://github.com/Devalo/Firebase-auth-react-express-mongodb/blob/master/phone-frontend/src/components/session/Login.jsx

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link, useHistory } from 'react-router-dom';

//import functions from Firebase authentication SDK
import * as firebase from '../../../authentication';

function LoginForm() {

    const history = useHistory();
    const [input, setInput] = useState({
        password: '',
        email: localStorage.email
    });
   
  
    const handleSubmit = (event) => {
        event.preventDefault();
        firebase.signInWithEmailAndPassword(firebase.auth, input.email.trim(), input.password.trim())
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

    function handleInput(event) {
        let { name, value } = event.target;
    
        setInput((prev) => {
          return {
            ...prev,
            [name]:value 
          };
        });
    }

    function handleCheckbox(event) {

        if (event.target.checked) {
        localStorage.setItem("email",input.email);
        }
        else {
        localStorage.clear();
        }
    }

    return (
        
    <div className={styles.LoginFormSection}>
        <form onSubmit={ handleSubmit }>
            <div className={styles.formLayout}> 
            <input 
                className={styles.inputEmail}
                onChange ={handleInput} 
                type="text" 
                name="email"
                value={input.email}
                placeholder="e-mail"
                required />
            <input 
                className={styles.inputPassword} 
                onChange ={handleInput} 
                type="password" 
                name="password" 
                value={input.password}
                placeholder="password"
                required />
                
            <input className={styles.rememberCheckbox} 
                onChange={event => handleCheckbox(event)} 
                type="checkbox" />
                <label className={styles.checkRemember}>
                    Remember Me
                </label>

                <p className={styles.forgotPassword}>
                    <Link to="/change">Forgot Your Password?</Link></p>

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