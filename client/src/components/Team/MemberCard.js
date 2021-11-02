import React from "react";
import styles from "./MemberCard.module.css";

const MemberCard = (props) => {
  return (
    <div className={styles.section}>
      <img src={props.src} alt={props.name} />
      <div className={styles.content}>
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
        <p className={styles.bodytext}>{props.bodytext}</p>
        <ul>
          <li>{props.link1}</li>
          <li>{props.link2}</li>
          <li>{props.link3}</li>
        </ul>
      </div>
    </div>
  );
};

export default MemberCard;
