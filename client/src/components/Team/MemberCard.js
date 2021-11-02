import React from "react";
import styles from "./MemberCard.module.css";

const MemberCard = (props) => {
  return (
    <div className={styles.section}>
      <h2></h2>
      <p className={styles.bodytext}>{props.bodytext}</p>
    </div>
  );
};

export default MemberCard;
