import styles from "./Advice.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Advice = ({ weatherCode }) => {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    axios
      .get("/advicecontent/")
      .then((result) => setAdvice(result.data.data[0][weatherCode]))
      .catch((error) => console.log(error));
  }, [weatherCode]);

  return (
    <div className={styles.advice}>
      <p>{advice}</p>
    </div>
  );
};

export default Advice;
