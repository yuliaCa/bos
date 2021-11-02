import React from 'react';
import HeroSection from "./HeroSection/HeroSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import InsightsSection from "./InsightsSection/InsightsSection";
import StartRoutineSection from "../../components/StartRoutineSection/StartRoutineSection";

function HomePage() {
    return <div>

        <HeroSection />

        <FeaturesSection />

        <InsightsSection src="https://picsum.photos/500/300" alt="insights image" heading="We talk about insights here" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur."/>
       
        <StartRoutineSection />

        </div>
}

export default HomePage;