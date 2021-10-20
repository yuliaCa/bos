import React from 'react';
import styles from './Features.module.css';
import Feature from "../FeaturesSection/Feature/Feature";
import { Link } from 'react-router-dom';

function FeaturesSection() {
  
    return (
    
    <div className={styles.section}>
        <Feature className={styles.feat1} src="https://picsum.photos/125" alt="routine feature image" heading="Product Routines" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae minus temporibus voluptatum tempora aliquid." />
        <Feature className={styles.feat2} src="https://picsum.photos/125" alt="advice feature image" heading="Advice" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae minus temporibus voluptatum tempora aliquid." />
        <Feature className={styles.feat3} src="https://picsum.photos/125" alt="insights feature image" heading="Insights" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae minus temporibus voluptatum tempora aliquid." />

        <button className={styles.register}>
            <Link to='/registration'>Start A Routine Now</Link>
        </button>
    </div>
        
    )
}

export default FeaturesSection;