import React, {useState} from 'react';
import styles from './FeatureInfo.module.css';
import { Link } from 'react-router-dom';
import * as firebase from '../../../authentication.js';

function FeatureInfoSection(props) {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    firebase.onAuthStateChanged(firebase.auth, (user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false)
    });

    return (
        <div className={styles.backgroundColor}>
        <div className={styles.featureOuter}>
            <div className={styles.sectionLeft}>
                <img className={styles.feat1_3Image} src={props.src} alt={props.alt}/>
            </div>

            <div className={styles.sectionRight}>
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
        </div> 
        </div>
    )
}

export default FeatureInfoSection;