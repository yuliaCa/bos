import React, { useState, useEffect } from 'react';
import FeatureInfoSection from "./FeaturesInfoSections/FeatureInfo";
import FeatureInfo2Section from "./FeaturesInfoSections/FeatureInfo2";
import axios from "axios";

function FeaturesPage() {

    const [routineContent, setRoutineContent] = useState({});
    const [adviceContent, setAdviceContent] = useState({});
    const [insightsContent, setInsightsContent] = useState({});


    useEffect(() => {

    axios
      .get("/pagecontents/")
      .then((result) => {
         
      setRoutineContent(result.data[4]);
      setAdviceContent(result.data[5]);
      setInsightsContent(result.data[6]);
      })
      .catch((error) => console.log(error));

    }, []);


    return <div>
        
        <FeatureInfo2Section src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/routine.png" alt="Feature One image" heading={routineContent.header} bodytext={routineContent.body} buttonTitle="START YOUR ROUTINE"/>
        
        <FeatureInfoSection src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/weather_advice.png" alt="Feature Two image" heading={adviceContent.header} bodytext={adviceContent.body} buttonTitle="CREATE YOUR PROFILE"/>
        
        <FeatureInfo2Section src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/insight.png" alt="Feature Three image" heading={insightsContent.header} bodytext={insightsContent.body} buttonTitle="START YOUR FIRST WEEK"/>
        
        </div>
}

export default FeaturesPage;