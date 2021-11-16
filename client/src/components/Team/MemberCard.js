import React from "react";
import styles from "./MemberCard.module.css";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiGithubFill } from "react-icons/ri";

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
              <TiSocialLinkedinCircular className={styles.icons1} />
            </a>
          </li>
          {props.github === "true" && (
            <li>
              <a href={props.link2}>
                <RiGithubFill className={styles.icons2} />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MemberCard;
