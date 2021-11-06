import React, { useState, useEffect } from 'react';
import styles from './Features.module.css';
import Feature from "./Feature/Feature";
import { Link } from 'react-router-dom';
import axios from "axios";

function FeaturesSection() {
  
    const [routineContent, setRoutineContent] = useState({});
    const [adviceContent, setAdviceContent] = useState({});
    const [insightsContent, setInsightsContent] = useState({});


    useEffect(() => {

    axios
      .get("/pagecontents/")
      .then((result) => {
         
      setRoutineContent(result.data[0]);
      setAdviceContent(result.data[1]);
      setInsightsContent(result.data[2]);
      })
      .catch((error) => console.log(error));

    }, []);

    return (
  
    <div className={styles.featureSection}>
        
        <h2 className={styles.featureHeading}>FEATURES</h2>

        <div className={styles.featureCards}>
        <Feature className={styles.feat1} src="https://s3-us-west-2.amazonaws.com/bos-skincare/home/routine_icon.svg" alt="routine feature image" heading={routineContent.header} bodytext={routineContent.body} />
        <Feature className={styles.feat2} src="https://s3-us-west-2.amazonaws.com/bos-skincare/home/weatheradvice_icon.svg" alt="advice feature image" heading={adviceContent.header} bodytext={adviceContent.body} />
        <Feature className={styles.feat3} src="https://s3-us-west-2.amazonaws.com/bos-skincare/home/insight_icon.svg" alt="insights feature image" heading={insightsContent.header} bodytext={insightsContent.body} />
        </div>

        <button className={styles.register}>
            <Link to='/registration'>CREATE A ROUTINE NOW</Link>
        </button>
    </div>
    
    )
}

export default FeaturesSection;