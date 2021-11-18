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
        // className={styles.videoContainer}
      />
    </div>

    // <div className={styles.heroOuter}>
    //     <div className={styles.heroLeft}>
    //         <h2>{props.heading}</h2>
    //         <p>{props.bodytext}</p>
    //     </div>

    // <div className={styles.heroContainer}>
    //   {/* <img className={styles.heroImage} src={props.src} alt={props.alt}/>    */}

    // </div>
    // </div>
  );
}

export default HeroSection;
