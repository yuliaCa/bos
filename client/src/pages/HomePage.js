import React from 'react';
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import InsightsSection from "../components/InsightsSection/InsightsSection";

function HomePage() {
    return <div>

        <HeroSection src="https://s3-us-west-2.amazonaws.com/bos-skincare/testing-image.jpg" alt="hero image" heading="We talk about website here" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur."/>

        <FeaturesSection />

        <InsightsSection src="https://picsum.photos/300" alt="insights image" heading="We talk about insights here" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur."/>
       
        </div>
}

export default HomePage;