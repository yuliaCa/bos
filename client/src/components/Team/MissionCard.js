import React from "react";
import styles from "./MissionCard.module.css";

const MissionCard = (props) => {
  return (
    <div className={styles.section}>
      <h2>{props.heading}</h2>
      <p className={styles.bodytext}>{props.bodytext}</p>
    </div>
  );
};

export default MissionCard;
