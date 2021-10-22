import React from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

function LoginForm() {
  
    return (
        
    <div className={styles.LoginFormSection}>
        <form>
            <input className={styles.inputEmail} type="email" name="email" placeholder="e-mail" />
            <input className={styles.inputPassword} type="text" name="password" placeholder="password" />
            
            <label className={styles.checkRemember}>Remember Me<input type="checkbox" /> </label>

            <p className={styles.forgotPassword}><Link to="">Forgot Your Password?</Link></p>

            <button className={styles.loginButton}>Login</button>

            <p className={styles.registerLink}><Link to="/registration">Register here</Link></p>
       
        </form>
    </div>
        
    )
}

export default LoginForm;