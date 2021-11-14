import React, { useState } from 'react';
import styles from './FeatureInfo2.module.css';
import { Link } from 'react-router-dom';

//import functions from Firebase authentication SDK
import * as firebase from '../../../authentication.js';

function FeatureInfoSection2(props) {
 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    firebase.onAuthStateChanged(firebase.auth, (user) => {
        return user ? setIsLoggedIn(true) : setIsLoggedIn(false)
    });
    
    return (
        <div className={styles.featureOuter}>
            <div className={styles.content}>
                <h2>{props.heading}</h2>
                <p>{props.bodytext}</p>
                <button>
                    {isLoggedIn ? (
                    <Link to={props.link}>{props.buttonTitle}</Link>
                    ) : (
                    <Link to='/registration'>{props.buttonTitle}</Link>
                    )}
                </button> 
            </div>

            <div className={styles.imageContainer}>
                <img className={styles.feat2Image} src={props.src} alt={props.alt}/>   
            </div>
        </div> 
    )
}

export default FeatureInfoSection2;