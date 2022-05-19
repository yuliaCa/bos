import styles from "./MyPage.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import Weather from "../../components/Weather/Weather.js";
import WeatherChart from "../../components/Charts/WeatherChart.js";
import UsageChart from "../../components/Charts/UsageChart.js";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { ProfileImageContext } from "../../contexts/ProfileImageContext";

function MyPage(props) {
  const [isProfile, setIsProfile] = useState(true);
  const [fullname, setFullname] = useState();
  const [city, setCity] = useState();
  // get city location
  useEffect(function fetchCityLocation() {
    axios
      .get(`https://bos-project2.herokuapp.com/profile/${sessionStorage.email}`)
      .then((result) => {
        console.log(result.data);
        setCity(result.data.cityLocation);
      })
      .catch((error) => console.log(error));
  }, []);

  const [cityId, setCityId] = useState();
  // get city id
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      url: "https://airvisual1.p.rapidapi.com/auto-complete",
      params: {
        query: city,
      },
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_AIRVISUAL_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    if (city) {
      axios
        .request(requestOptions)
        .then(function (response) {
          console.log(response.data.data.cities[0].id);
          setCityId(response.data.data.cities[0].id);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [city]);

  const [skinTypeAndConcern, setSkinTypeAndConcern] = useState([]);
  const [retrievedData, setRetrievedData] = useState([]);

  function convertStringToUpper(stringVar) {
    stringVar = stringVar.replace("_", " ");
    const words = stringVar.split(" ");

    console.log(words);

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.toString().replace(",", " ");
  }

  useEffect(
    function fetchUserProfile() {
      console.log(localStorage);
      axios
        .get(
          `https://bos-project2.herokuapp.com/register/${sessionStorage.email}`
        )
        .then((result) => {
          
          setFullname(result.data.fullname);

          let skinConcernArray = [];

          for (const [key, value] of Object.entries(result.data.skintype)) {
            if (value && key !== "_id") {
              skinConcernArray.push(convertStringToUpper(key));
            }
          }

          for (const [key, value] of Object.entries(result.data.concerns)) {
            if (value && key !== "_id") {
              skinConcernArray.push(convertStringToUpper(key));
            }
          }

          console.log(skinConcernArray);
          setSkinTypeAndConcern(skinConcernArray);

        })
        .catch((error) => console.log(error));
    },
    [retrievedData]
  );

  const image = useContext(ProfileImageContext);

  const [currentDay, setCurrentDay] = useState();

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
    if (cityId) {
      axios
        .request(requestOptions)
        .then(function (response) {
          const body = response.data;
          let date = new Date(body.data.current_weather.ts);
          let trimDate = date.toString().substring(0, 3);
          setCurrentDay(trimDate);
        })
        .catch((error) => console.log(error));
    }
  }, [cityId]);

  return (
    <div className={styles.myPageSection}>
      <div className={styles.userSection}>
        <div className={styles.profileImage}>
        {image.base64URL ?
        <img 
         src={image.base64URL} alt="profilephoto"
         className={styles.profileImage}  />
        :
        <img 
        src="https://s3-us-west-2.amazonaws.com/bos-skincare/icons/profile.svg" alt="profilephoto"
        className={styles.profileImage}  />
        }

          </div>
        <div className={styles.profileData}>
          <ul>
            <li className={styles.profileName}>{fullname}</li>
            <li className={styles.city}>
              <MdOutlineLocationOn className={styles.locIcon} />
              <div>{city}</div>
            </li>
          </ul>
          <ul className={styles.skinTypes}>
            {skinTypeAndConcern.map((element, key) => (
              <li key={key}>{element}</li>
            ))}
          </ul>
        </div>
      </div>
      <Weather cityId={cityId} />
      <div className={styles.headerWrap}>
        <h2>Weather</h2>
      </div>
      <WeatherChart currentDay={currentDay} />
      <div className={styles.headerWrap}>
        <h2>Product Usage</h2>
      </div>
      <UsageChart email={props.email} currentDay={currentDay} />
    </div>
  );
}

export default MyPage;
