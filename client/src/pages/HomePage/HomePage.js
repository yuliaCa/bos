import React, { useState, useEffect } from 'react';
import HeroSection from "./HeroSection/HeroSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import InsightsSection from "./InsightsSection/InsightsSection";
import StartRoutineSection from "../../components/StartRoutineSection/StartRoutineSection";
import axios from "axios";

function HomePage() {
     
    const [insightsSectionContent, setinsightsSectionContent] = useState({});
 


    useEffect(() => {

    axios
      .get("/pagecontents/")
      .then((result) => {
      setinsightsSectionContent(result.data[3]);
      })
      .catch((error) => console.log(error));

    }, []);

    return <div>

        <HeroSection src="https://s3-us-west-2.amazonaws.com/bos-skincare/home/hero-image/1920.1080.jpg" alt="hero image" />

        <FeaturesSection />

        <InsightsSection src="https://s3-us-west-2.amazonaws.com/bos-skincare/homepage/insight_home_bigsize.png" alt="insights image" heading={insightsSectionContent.header} bodytext={insightsSectionContent.body}/>
       
        <StartRoutineSection />

        </div>
}

export default HomePage;