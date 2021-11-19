import React from "react";
import Vimeo from "@u-wave/react-vimeo";

function HeroSection(props) {
  return (
    <div>
      <Vimeo
        video="https://vimeo.com/644555123"
        responsive
        muted
        autoplay
        loop
        controls="false"
      />
    </div>
  );
}

export default HeroSection;
