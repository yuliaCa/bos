import React from 'react';
import styles from './FeatureInfo2.module.css';
import { Link } from 'react-router-dom';

function FeatureInfoSection2(props) {
  
    return (
        <div className={styles.featureOuter}>
            <div className={styles.content}>
                <h2>{props.heading}</h2>
                <p>{props.bodytext}</p>
                <button>
                    <Link to='/login'>{props.buttonTitle}</Link>
                </button>
            </div>

            <div className={styles.imageContainer}>
                <img className={styles.feat2Image} src={props.src} alt={props.alt}/>   
            </div>
        </div> 
    )
}

export default FeatureInfoSection2;