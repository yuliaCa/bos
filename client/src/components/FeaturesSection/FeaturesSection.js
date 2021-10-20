import React from 'react';
import styles from './Features.module.css';
import Feature from "../FeaturesSection/Feature/Feature";
import { Link } from 'react-router-dom';

function FeaturesSection() {
  
    return (
    
    <div className={styles.section}>
        <Feature className={styles.feat1} src="https://s3-us-west-2.amazonaws.com/bos-skincare/img/michela-ampolo-7tDGb3HrITg-unsplash.jpg" alt="routine feature image" heading="Product Routines" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae minus temporibus voluptatum tempora aliquid." />
        <Feature className={styles.feat2} src="https://s3-us-west-2.amazonaws.com/bos-skincare/img/uby-yanes-QMZXBGmBuj4-unsplash.jpg" alt="advice feature image" heading="Advice" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae minus temporibus voluptatum tempora aliquid." />
        <Feature className={styles.feat3} src="https://i.picsum.photos/id/137/4752/3168.jpg?hmac=dGsgAtPkFewFByZXZOmSg0U7Mohr43GyVu3n1AHVIyg" alt="insights feature image" heading="Insights" bodytext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae minus temporibus voluptatum tempora aliquid." />

        <button className={styles.register}>
            <Link to='/registration'>Start A Routine Now</Link>
        </button>
    </div>
        
    )
}

export default FeaturesSection;