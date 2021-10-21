import styles from "./Advice.module.css";
import React, { useState, useEffect } from "react";
import AdviceList from "./AdviceList";

const Advice = ({weatherCode}) => {

  const [advice, setAdvice] = useState();

  useEffect(() => {
    setAdvice(AdviceList[weatherCode]);
  }, [weatherCode])
  
  return (
    <div>
      <p>{advice}</p>
    </div>
  );
};

export default Advice;
