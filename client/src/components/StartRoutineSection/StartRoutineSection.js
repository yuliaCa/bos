import React, { useState } from 'react';
import styles from './StartRoutine.module.css';
import { Link } from 'react-router-dom';

function StartRoutineSection(props) {

    const [input, setInput] = useState({
        fullname:'',
        email:''
      });

      function handleChange(event) {
        let { name, value } = event.target;

        setInput((prev) => {
          return {
            ...prev,
            [name]: value 
            }
        });
      }

      function handleClick(event) {

        sessionStorage.setItem("username", input.fullname);
        sessionStorage.setItem("email", input.email);  
        }

    return (
        <div className={styles.startRoutineOuter}>
            <h2 className={styles.startRoutineHeader}>Start Your Routine Today</h2>
            
            <div className={styles.startRoutineInner}>
                <input className={styles.nameInput} onChange={handleChange} value={input.fullname} id="username" type="text" name="fullname" placeholder="  Your Name" />
                <input className={styles.emailInput} onChange={handleChange} value={input.email} id="useraddress" type="text" name="email" placeholder="  Email Address" />

                <button onClick={handleClick} className={styles.register}>
                <Link to='/registration'>SIGN UP NOW</Link>
                </button>
            </div>
        </div> 
    )
}

export default StartRoutineSection;