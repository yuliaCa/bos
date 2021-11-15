import styles from "./MyPage.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import Weather from "../../components/Weather/Weather.js";
import WeatherChart from "../../components/Charts/WeatherChart.js";
import UsageChart from "../../components/Charts/UsageChart.js";
import { useState } from "react";

function MyPage(props) {
  const [isProfile, setIsProfile] = useState(true);

  let skinTypes = ["Normal", "Acne", "Redness", "Pores"];
  let city = "Vancouver";

  return (
    <div className={styles.myPageSection}>
      <div className={styles.userSection}>
        <div className={styles.profileImage} />
        <div className={styles.profileData}>
          <ul>
            <li className={styles.profileName}>{`${props.displayName}`}</li>
            <li className={styles.city}>
              <MdOutlineLocationOn className={styles.locIcon} />
              <div>{city}</div>
            </li>
          </ul>
          <ul className={styles.skinTypes}>
            {skinTypes.map((element, key) => (
              <li key={key}>{element}</li>
            ))}
          </ul>
        </div>
      </div>
      <Weather />
      <div className={styles.headerWrap}>
        <h2>Weather</h2>
      </div>
      <WeatherChart />
      <div className={styles.headerWrap}>
        <h2>Product Usage</h2>
      </div>
      <UsageChart />
    </div>
  );
}

export default MyPage;
