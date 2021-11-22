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
  };

  return (
    <div className={styles.skinFeelingSection}>
      <div>
        <h2 className={styles.skinFeelingH2}>How was the skin of the day?</h2>
      </div>
      <div className={styles.smileyStyle}>
        <form submit={onClickFeelingSave} onChange={()=>onClickFeeling()}>
          <label>
            <input type="radio" name="skinFeeling" value="Not so good" />
            <img
              src={`${bosStorage}/icons/sad.svg`}
              alt="Sad Smiley"
            />
          </label>
          <label>
            <input type="radio" name="skinFeeling" value="Feeling OK" />
            <img
              src={`${bosStorage}/icons/neutral.svg`}
              alt="Neutral Smiley"
            />
          </label>
          <label>
            <input type="radio" name="skinFeeling" value="Feeling good" />
            <img
              src={`${bosStorage}/icons/happy.svg`}
              alt="Happy Smiley"
            />
          </label>
        </form>
        <div className={styles.skinFeelingButtonWrap}>
          <button
            className={styles.skinFeelingButton}
            
          >
            {skinFeelingSaved ? "SAVED" : "SAVE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinFeeling;
