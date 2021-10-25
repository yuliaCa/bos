import React from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

function LoginForm() {
  
    return (
        
    <div className={styles.LoginFormSection}>
    
            <input className={styles.inputEmail} id="loginEmail" type="email" name="email" placeholder="e-mail" required />
            <input className={styles.inputPassword} id="loginPassword" type="text" name="password" placeholder="password" required />
            
            <label className={styles.checkRemember}>Remember Me<input type="checkbox" /> </label>

            <p className={styles.forgotPassword}><Link to="">Forgot Your Password?</Link></p>

            <button className={styles.loginButton}>Login</button>

            <p className={styles.registerLink}><Link to="/registration">Register here</Link></p>
       
    </div>
        
    )
}

export default LoginForm;