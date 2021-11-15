import React from "react";
import styles from "./MemberCard.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const MemberCard = (props) => {
  return (
    <div className={styles.memberSection}>
      <div className={styles.imgContainer}>
        <div className={styles.imgCenterer}>
          <img src={props.src} alt={props.name} />
        </div>
      </div>
      <div className={styles.content}>
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
        <p className={styles.bodytext}>{props.bodytext}</p>
        <ul>
          <li>
            <a href={props.link1}>
              <BsLinkedin className={styles.icons} />
            </a>
          </li>
          {props.github === "true" && (
            <li>
              <a href={props.link2}>
                <BsGithub className={styles.icons} />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MemberCard;
