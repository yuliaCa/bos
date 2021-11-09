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
  const [hum, setHum] = useState(90);
  const [airQ, setAirQ] = useState(30);
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
        let trimDate = date.toISOString().substring(0, 10);
        setTime(trimDate);
        setIcon(body.data.current_weather.ic);
        setTemp(body.data.current_weather.tp);
        setHum(body.data.current_weather.hu);
        setAirQ(body.data.current_measurement.aqius);
        console.log(body.data.current_weather.ic);
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
            <p className={styles.time}>{`${time}`}</p>
            <div className={styles.gridCol}>
              <img
                className={styles.weatherIcon}
                src={`${iconURL}${icon}.svg`}
                alt="weather icon"
              />
              <p className={styles.temp}>{`${temp}℃`}</p>
              <div>
                <p>{airQ}</p>
                <p>Air Quality Index</p>
              </div>
              <div>
                <p>{`${hum}%`}</p>
                <p>Humidity</p>
              </div>
            </div>
          </>
        )}
      </div>
      <Advice className={styles.adviceText} weatherCode={`_${icon}`} />
    </div>
  );
};

export default Weather;
