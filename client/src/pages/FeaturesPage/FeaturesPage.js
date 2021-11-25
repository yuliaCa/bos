import styles from "./FeaturesPage.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FeatureInfoSection from "./FeaturesInfoSections/FeatureInfo";
import FeatureInfo2Section from "./FeaturesInfoSections/FeatureInfo2";
import axios from "axios";

function FeaturesPage(props) {
  const location = useLocation();

  const [routineContent, setRoutineContent] = useState({});
  const [adviceContent, setAdviceContent] = useState({});
  const [insightsContent, setInsightsContent] = useState({});

  useEffect(() => {
    props.handleIsHome(location);

    axios
      .get("https://bos-project2.herokuapp.com/pagecontents/")
      .then((result) => {
        setRoutineContent(result.data[4]);
        setAdviceContent(result.data[5]);
        setInsightsContent(result.data[6]);
      })
      .catch((error) => console.log(error));
  },[location, props]);

  return (
    <div className={styles.wrapper}>
      <FeatureInfo2Section
        src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/routine.png"
        alt="Feature One image"
        heading={routineContent.header}
        bodytext={routineContent.body}
        buttonTitle="START YOUR ROUTINE"
        link="/profile"
      />

      <FeatureInfoSection
        src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/weather_advice.png"
        alt="Feature Two image"
        heading={adviceContent.header}
        bodytext={adviceContent.body}
        buttonTitle="CREATE YOUR PROFILE"
        link="/registration"
      />

      <FeatureInfo2Section
        src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/insight.png"
        alt="Feature Three image"
        heading={insightsContent.header}
        bodytext={insightsContent.body}
        buttonTitle="START YOUR FIRST WEEK"
        link="/profile"
      />
    </div>
  );
}

export default FeaturesPage;
