import React from 'react';
import styles from './StartRoutine.module.css';
import { Link } from 'react-router-dom';

function StartRoutineSection() {
  
    return (
        <div className={styles.startRoutineOuter}>
            <h2 className={styles.startRoutineHeader}>Start Your Routine Today</h2>
            
            <div className={styles.startRoutineInner}>
                <input className={styles.nameInput} id="username" type="text" placeholder="  Your Name"></input>
                <input className={styles.emailInput} id="useraddress" type="text" placeholder="  Email Address"></input>

                <button className={styles.register}>
                <Link to='/registration'>ADD PRODUCT</Link>
                </button>
            </div>
        </div> 
    )
}

export default StartRoutineSection;