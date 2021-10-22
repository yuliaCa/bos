import React from 'react';
import styles from './FeatureInfo.module.css';
import { Link } from 'react-router-dom';

function FeatureInfoSection(props) {
  
    return (
        <div className={styles.featureOuter}>
            <div className={styles.sectionLeft}>
                <img className={styles.feat1_3Image} src={props.src} alt={props.alt}/>
            </div>

            <div className={styles.sectionRight}>
                <h2>{props.heading}</h2>
                <p>{props.bodytext}</p>
                <button>
                    <Link to='/registration'>{props.buttonTitle}</Link>
                </button>   
            </div>
        </div> 
    )
}

export default FeatureInfoSection;