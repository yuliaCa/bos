import React from 'react';
import styles from './Features.module.css';
import Feature from "./Feature/Feature";
import { Link } from 'react-router-dom';

function FeaturesSection() {
  
    return (
    
    <div className={styles.featureSection}>
        <Feature className={styles.feat1} src="https://s3-us-west-2.amazonaws.com/bos-skincare/home/routine_icon.svg" alt="routine feature image" heading="Product Routines" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Feature className={styles.feat2} src="https://s3-us-west-2.amazonaws.com/bos-skincare/home/weatheradvice_icon.svg" alt="advice feature image" heading="Advice" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Feature className={styles.feat3} src="https://s3-us-west-2.amazonaws.com/bos-skincare/home/insight_icon.svg" alt="insights feature image" heading="Insights" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

        <button className={styles.register}>
            <Link to='/registration'>START A ROUTINE NOW</Link>
        </button>
    </div>
        
    )
}

export default FeaturesSection;