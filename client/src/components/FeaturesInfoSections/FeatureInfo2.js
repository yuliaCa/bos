import React from 'react';
import styles from './FeatureInfo.module.css';
import { Link } from 'react-router-dom';

function FeatureInfoSection2(props) {
  
    return (
        <div className={styles.featureOuter}>
            <div>
                <h2>{props.heading}</h2>
                <p>{props.bodytext}</p>
                <button>
                    <Link to='/registration'>{props.buttonTitle}</Link>
                </button>
            </div>

            <div>
                <img className={styles.feat2Image} src={props.src} alt={props.alt}/>   
            </div>
        </div> 
    )
}

export default FeatureInfoSection2;