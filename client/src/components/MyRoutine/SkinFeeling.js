import styles from "./SkinFeeling.module.css";
import React, { useState } from "react";

const SkinFeeling = (props) => {
  const bosStorage = "https://s3-us-west-2.amazonaws.com/bos-skincare";

  const [currentFeeling, setCurrentFeeling] = useState(" ");
  const [skinFeelingSaved, setSkinFeelingSaved] = useState(false);


  const onClickFeeling = (e) => {
    e.preventDefault();
    setCurrentFeeling(e.target.value);

  };

  const onClickFeelingSave = (e) => {
    e.preventDefault();
    setSkinFeelingSaved(!skinFeelingSaved);

  };

  const onClickFeelingSave = () => {
    setSkinFeelingSaved(!skinFeelingSaved);
  }

  return (
    <div className={styles.skinFeelingSection}>
      <div>
        <h2 className={styles.skinFeelingH2}>How is your skin today?</h2>
      </div>
      <div className={styles.smileyStyle}>
        <form onChange={e=>onClickFeeling(e)}>
          <label className={currentFeeling==="Not so good"&&styles.skinFeelingStickBg}>
            <input type="radio" name="skinFeeling" value="Not so good" />
            <img src={`${bosStorage}/icons/sad.svg`} alt="Sad Smiley" />
          </label>
          <label className={currentFeeling==="Feeling OK"&&styles.skinFeelingStickBg}>
            <input type="radio" name="skinFeeling" value="Feeling OK" />
            <img src={`${bosStorage}/icons/neutral.svg`} alt="Neutral Smiley" />
          </label>
          <label className={currentFeeling==="Feeling good"&&styles.skinFeelingStickBg}>
            <input type="radio" name="skinFeeling" value="Feeling good" />
            <img src={`${bosStorage}/icons/happy.svg`} alt="Happy Smiley"  />
          </label>
          <h3 className={styles.currentFeeling}>{`${currentFeeling}`}</h3>
          <div className={styles.skinFeelingButtonWrap}>
            <button className={styles.skinFeelingButton} onClick={onClickFeelingSave}>
              {skinFeelingSaved ? "SAVED" : "SAVE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkinFeeling;
