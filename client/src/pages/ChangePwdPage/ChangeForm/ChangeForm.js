// To set up Firebase login, we referenced the source code from 
// https://github.com/Devalo/Firebase-auth-react-express-mongodb/blob/master/phone-frontend/src/components/session/Login.jsx

import React, { useState } from 'react';
import styles from './ChangeForm.module.css';
import { Link, useHistory } from 'react-router-dom';

//import functions from Firebase authentication SDK
import * as firebase from '../../../authentication';

function ChangeForm() {

    const history = useHistory();
    const [input, setInput] = useState({
        email: ''
    });
   
  
    const handleSubmit = (event) => {
        event.preventDefault();

        if (input.email !== undefined) {

        firebase.sendPasswordResetEmail(firebase.auth, input.email.trim())
          .then(() => {
            console.log('your password is reset!')
            history.push("/login");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });   
        }
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

    return (
        
    <div className={styles.LoginFormSection}>
        <form onSubmit={ handleSubmit }>
            <input 
                className={styles.inputEmail}
                onChange ={handleInput} 
                type="text" 
                name="email"
                value={input.email}
                placeholder="e-mail"
                required />
            
            <div className={styles.formLayout}>
            
                <button 
                    type="submit" 
                    className={styles.loginButton}>RESET PASSWORD
                </button>
                
                <Link className={styles.backtologin} to='/login'>Back to Login</Link>

            </div>
        </form>
    </div>
        
    )
}

export default ChangeForm;