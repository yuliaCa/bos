import React from 'react';
import FeatureInfoSection from "../../components/FeaturesInfoSections/FeatureInfo";
import FeatureInfo2Section from "../../components/FeaturesInfoSections/FeatureInfo2";
import StartRoutineSection from "../../components/StartRoutineSection/StartRoutineSection";

function FeaturesPage() {
    return <div>
        
        <FeatureInfoSection  src="https://picsum.photos/500/300" alt="Feature One image" heading="Product Routines" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur." buttonTitle="Add Your Routine"/>
        
        <FeatureInfo2Section src="https://picsum.photos/500/300" alt="Feature Two image" heading="Advice" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur." buttonTitle="Create Your Profile"/>
        
        <FeatureInfoSection src="https://picsum.photos/500/300" alt="Feature Three image" heading="Insights" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur." buttonTitle="Start Your First Week"/>
        
        <StartRoutineSection />
        
        </div>
}

export default FeaturesPage;