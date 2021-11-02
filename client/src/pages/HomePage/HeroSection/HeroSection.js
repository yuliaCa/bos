import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection(props) {
  
    return (
        // <div className={styles.heroOuter}>
        //     <div className={styles.heroLeft}>
        //         <h2>{props.heading}</h2>
        //         <p>{props.bodytext}</p>
        //     </div>

        <div className={styles.heroContainer} >
            {/* <img className={styles.heroImage} src={props.src} alt={props.alt}/>    */}
        </div>
        // </div> 
    )
}

export default HeroSection;