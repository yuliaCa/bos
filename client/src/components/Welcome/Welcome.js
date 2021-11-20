import React from 'react';
import styles from './Welcome.module.css';

function Welcome(props) {

    return (
        
    <div className={styles.WelcomeSection}>
        <img className={styles.welcomeImage} src={props.src} alt={props.alt}/> 
        <h4 className={styles.welcomeHeader}>{props.heading}</h4>
        <p className={styles.welcomeBodyText}>{props.bodytext}</p>
    </div>
        
    )
}

export default Welcome;