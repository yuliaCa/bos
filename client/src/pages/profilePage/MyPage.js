import styles from "./MyPage.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Weather from "../../components/Weather/Weather.js";
import WeatherChart from "../../components/Charts/WeatherChart";
import UsageChart from "../../components/Charts/UsageChart";

function MyPage() {
  let skinTypes = ["Normal", "Acne", "Redness", "Pores"];
  let city = "Vancouver";

  return (
    <div className={styles.myPageSection}>
      <h1 className={styles.heading}>My Page</h1>
      <div className={styles.userSection}>
        <div className={styles.profileImage} />
        <div className={styles.profileData}>
          <ul>
            <li>User Name</li>
            <li>
              <FaMapMarkerAlt />
              {city}
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
      <WeatherChart />
      <UsageChart />
    </div>
  );
}

export default MyPage;
