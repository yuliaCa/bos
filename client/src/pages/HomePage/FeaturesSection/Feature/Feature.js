import React from 'react';
import styles from './Feature.module.css';

function Feature(props) {
  
    return (
        
    <div className={styles.singleSection}>
        <img className={styles.featureImage} src={props.src} alt={props.alt}/> 
        <h3 className={styles.featHeader}>{props.heading}</h3>
        <p className={styles.featBodyText}>{props.bodytext}</p>
    </div>
        
    )
}

export default Feature;