import React from 'react';
import FeatureInfoSection from "./FeaturesInfoSections/FeatureInfo";
import FeatureInfo2Section from "./FeaturesInfoSections/FeatureInfo2";
import StartRoutineSection from "../../components/StartRoutineSection/StartRoutineSection";

function FeaturesPage() {
    return <div>
        
        <FeatureInfo2Section src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/routine.png" alt="Feature One image" heading="Product Routines" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur." buttonTitle="START YOUR ROUTINE"/>
        
        <FeatureInfoSection src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/weather_advice.png" alt="Feature Two image" heading="Weather Advice" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur." buttonTitle="CREATE YOUR PROFILE"/>
        
        <FeatureInfo2Section src="https://s3-us-west-2.amazonaws.com/bos-skincare/feature/big-images/insight.png" alt="Feature Three image" heading="Insights" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur." buttonTitle="START YOUR FIRST WEEK"/>
        
        </div>
}

export default FeaturesPage;