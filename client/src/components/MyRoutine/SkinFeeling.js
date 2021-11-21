import styles from "./SkinFeeling.module.css";
import React, { useState } from "react";

const SkinFeeling = (props) => {
  const bosStorage = "https://s3-us-west-2.amazonaws.com/bos-skincare";

  const [sadFeeling, setSadFeeling] = useState(false);
  const [neutralFeeling, setNeutralFeeling] = useState(false);
  const [happyFeeling, setHappyFeeling] = useState(false);
  const [skinFeelingSaved, setSkinFeelingSaved] = useState(false);

  const onClickFeeling = (e) => {
    console.log(e.alt);
  };

  const onClickFeelingSave = () => {
    setSkinFeelingSaved(!skinFeelingSaved);
  }

  return (
    <div className={styles.skinFeelingSection}>
    <div>
      <h2 className={styles.skinFeelingH2}>How was the skin of the day?</h2>
    </div>
      <div className={styles.smileyStyle}>
        <ul className={styles.skinFeelingUl}>
          <li key="sad">
            <img src={`${bosStorage}/icons/sad.svg`} alt="smiley" />
          </li>
          <li key="neutral">
            <img src={`${bosStorage}/icons/neutral.svg`} alt="smiley" />
          </li>
          <li key="happy">
            <img
              src={`${bosStorage}/icons/happy.svg`}
              alt="smiley"
              onClick={()=>onClickFeeling()}
            />
          </li>
        </ul>
        <div className={styles.skinFeelingButtonWrap}>
          <button 
          className={styles.skinFeelingButton}
          onClick={onClickFeelingSave}>
          {skinFeelingSaved? "SAVED" : "SAVE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinFeeling;
