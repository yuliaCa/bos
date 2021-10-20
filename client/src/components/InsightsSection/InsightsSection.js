import React from 'react';
import styles from './InsightsSection.module.css';

function InsightsSection(props) {
  
    return (
        <div className={styles.outer}>
            <div className={styles.left}>
                <h2>{props.heading}</h2>
                <p>{props.bodytext}</p>
            </div>

            <div className={styles.right}>
                <img className={styles.insightsImage} src={props.src} alt={props.alt}/>   
            </div>
        </div> 
    )
}

export default InsightsSection;