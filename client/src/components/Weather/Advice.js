import styles from "./Advice.module.css";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const Advice = (props) => {
  const [advice, setAdvice] = useState();
  const [pollutionAdvice, setPollutionAdvice] = useState();

  useEffect(() => {
    axios
      .get("/advicecontent/")
      .then((result) => {
        setAdvice(result.data.data[0][props.weatherCode]);
      })
      .catch((error) => console.log(error));
    setPollutionAdvice(
      `${props.windowsTip}. ${props.exerciseTip}. (iqair.com)`
    );
  }, [props.weatherCode, props.exerciseTip, props.windowsTip]);

  const spinnerFx = (
    <>
      <Stack sx={{ color: "#67392A" }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
    </>
  );

  return (
    <div className={styles.advice}>
      {props.isLoading ? (
        <div className={styles.spinnerFx}>{spinnerFx}</div>
      ) : (
        <>
          <p>{advice}</p>
          <p>{pollutionAdvice}</p>
        </>
      )}
    </div>
  );
};

export default Advice;
