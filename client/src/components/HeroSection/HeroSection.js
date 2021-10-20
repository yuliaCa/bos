import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection(props) {
  
    return (
        <div className={styles.outer}>
            <div className={styles.left}>
                <h2>{props.heading}</h2>
                <p>{props.bodytext}</p>
            </div>

            <div className={styles.right}>
                <img className={styles.image} src={props.src} alt={props.alt}/>   
            </div>
        </div> 
    )
}

export default HeroSection;