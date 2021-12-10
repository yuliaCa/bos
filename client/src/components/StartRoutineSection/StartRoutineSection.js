import React, { useState } from 'react';
import styles from './StartRoutine.module.css';
import { useHistory } from 'react-router-dom';

function StartRoutineSection(props) {

    const history = useHistory();

    const [input, setInput] = useState({
        fullname:'',
        email:''
      });

    const [errorMessage, setErrorMessage] = useState();

      function handleChange(event) {
        let { name, value } = event.target;

        setInput((prev) => {
          return {
            ...prev,
            [name]: value 
            }
        });
      }

      function handleClick() {

        if (input.fullname !== "" && input.email !== "") {
        sessionStorage.setItem("username", input.fullname);
        sessionStorage.setItem("email", input.email);  
        history.push("/registration");
        } else {
            setErrorMessage("Please enter your name and e-mail.");
        }
      }

    return (
        <div className={styles.startRoutineOuter}>
            <h2 className={styles.startRoutineHeader}>Start Your Routine Today</h2>
            <div className={styles.errorMessage}>
                <em style={{color:"red"}}>{errorMessage}</em>
            </div>
            <div className={styles.startRoutineInner}>
                <input className={styles.nameInput} onChange={handleChange} value={input.fullname} id="username" type="text" name="fullname" placeholder="  Your Name" />
                <input className={styles.emailInput} onChange={handleChange} value={input.email} id="useraddress" type="text" name="email" placeholder="  Email Address" />

                <button onClick={handleClick} className={styles.register}>
                SIGN UP NOW
                </button>
            </div>
        </div> 
    )
}

export default StartRoutineSection;