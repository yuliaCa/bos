import React from 'react';
import styles from './Feature.module.css';

function Feature(props) {
  
    return (
        
    <div className={styles.section}>
        <img className={styles.image} src={props.src} alt={props.alt}/> 
        <h4 className={styles.featHeader}>{props.heading}</h4>
        <p className={styles.featBodyText}>{props.bodytext}</p>
    </div>
        
    )
}

export default Feature;