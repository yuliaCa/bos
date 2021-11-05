import styles from "./Weather.module.css";
import React, { useState, useEffect } from "react";
import Advice from "./Advice";

// const city = "Vancouver"; // Get city from questionnaire
// const cityId = SearchCityId(city);
const cityId = "xvd6Yxj282PiZtGXN";
const iconURL = "https://s3-us-west-2.amazonaws.com/bos-skincare/weatherIcons/";

const Weather = () => {
  const [time, setTime] = useState();
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState(6);
  const [hum, setHum] = useState(90);
  const [airQ, setAirQ] = useState(30);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "airvisual1.p.rapidapi.com",
        "x-rapidapi-key": "2b5c9fd8d8msh0132ae34892c4f1p161c42jsnb732f5ff681a",
      },
      redirect: "follow",
    };

    const fetchData = async () => {
      const result = await fetch(
        `https://airvisual1.p.rapidapi.com/cities/get-information?id=${cityId}&lang=en_US&aqiIndex=us`,
        requestOptions
      );
      const body = await result.json();
      // console.log(body);
      setIcon(body.data.current_weather.ic);
      console.log(body.data.current_weather.ic);
      setTemp(body.data.current_weather.tp);
      setHum(body.data.current_weather.hu);
      setAirQ(body.data.current_measurement.aqius);

      let date = new Date(body.data.current_weather.ts);
      let trimDate = date.toISOString().substring(0, 10);
      setTime(trimDate);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.weatherSection}>
        <p className={styles.time}>{`${time}`}</p>
        <div className={styles.gridCol}>
          <img
            className={styles.weatherIcon}
            src={`${iconURL}${icon}.png`}
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
      </div>
      <Advice className={styles.adviceText} weatherCode={`_${icon}`} />
    </div>
  );
};

export default Weather;
