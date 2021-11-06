import React from 'react';
import HeroSection from "./HeroSection/HeroSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import InsightsSection from "./InsightsSection/InsightsSection";
import StartRoutineSection from "../../components/StartRoutineSection/StartRoutineSection";


function HomePage() {
    return <div>

        <HeroSection src="https://s3-us-west-2.amazonaws.com/bos-skincare/home/hero-image/1920.1080.jpg" alt="hero image" />

        <FeaturesSection />

        <InsightsSection src="https://s3-us-west-2.amazonaws.com/bos-skincare/homepage/insight_home_bigsize.png" alt="insights image" heading="We talk about insights here" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur."/>
       
        <StartRoutineSection />

        </div>
}

export default HomePage;