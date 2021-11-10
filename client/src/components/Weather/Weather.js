import styles from "./Weather.module.css";
import React, { useState, useEffect } from "react";
import Advice from "./Advice";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const Weather = () => {
  // const city = "Vancouver"; // Get city from questionnaire
  // const cityId = SearchCityId(city);
  const cityId = "xvd6Yxj282PiZtGXN";
  const iconURL =
    "https://s3-us-west-2.amazonaws.com/bos-skincare/weatherIcons/";
  const [time, setTime] = useState();
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState(6);
  const [tempMin, setTempMin] = useState(6);
  const [hum, setHum] = useState(90);
  const [wind, setWind] = useState(14);
  const [airQ, setAirQ] = useState(30);
  const [windowsTip, setWindowsTip] = useState();
  const [exerciseTip, setExerciseTip] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      url: `https://airvisual1.p.rapidapi.com/cities/get-information?id=${cityId}&lang=en_US&aqiIndex=us`,
      headers: {
        "x-rapidapi-host": "airvisual1.p.rapidapi.com",
        "x-rapidapi-key": "2b5c9fd8d8msh0132ae34892c4f1p161c42jsnb732f5ff681a",
      },
      redirect: "follow",
    };

    axios
      .request(requestOptions)
      .then(function (response) {
        const body = response.data;
        let date = new Date(body.data.current_weather.ts);
        let trimDate = date.toUTCString().substring(0, 17);
        setTime(trimDate);
        setIcon(body.data.current_weather.ic);
        setTemp(body.data.forecasts[0].tp);
        setTempMin(body.data.forecasts[0].tp_min);
        setHum(body.data.current_weather.hu);
        setWind(body.data.current_weather.wd);
        setAirQ(body.data.current_measurement.aqius);
        setWindowsTip(body.data.recommnedations.polution.windows.text);
        setExerciseTip(body.data.recommendations.polution.exercice.text);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const spinnerFx = (
    <>
      <Stack sx={{ color: "#67392A" }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
    </>
  );

  return (
    <div className={styles.section}>
      <div className={styles.weatherSection}>
        {isLoading ? (
          <div className={styles.spinnerFx}>{spinnerFx}</div>
        ) : (
          <>
            <div className={styles.oneColumn}>
              <p className={styles.time}>{`${time}`}</p>
            </div>
            <div className={styles.twoColumn}>
              <img
                className={styles.weatherIcon}
                src={`${iconURL}${icon}.svg`}
                alt="weather icon"
              />
              <div className={styles.twoColumn}>
                <div className={styles.temp}>{`${temp}°`}</div>
                <div className={styles.tempMin}>{`${tempMin}°`}</div>
              </div>
              <div className={styles.oneColumn}>
                <div>{`${hum}%`}</div>
                <div>Humidity</div>
              </div>
              <div className={styles.oneColumn}>
                <div>{`${wind} m/s`}</div>
                <div>Wind</div>
              </div>
            </div>
            <div className={styles.oneColumn}>
              <div>{airQ}</div>
              <div>Air Quality Index</div>
            </div>
          </>
        )}
      </div>
      <Advice className={styles.adviceText} weatherCode={`_${icon}`} windowsTip={windowsTip} exerciseTip={exerciseTip} />
    </div>
  );
};

export default Weather;
