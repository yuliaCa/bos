import styles from "./MyPage.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import Weather from "../../components/Weather/Weather.js";
import WeatherChart from "../../components/Charts/WeatherChart.js";
import UsageChart from "../../components/Charts/UsageChart.js";
import { useState,useEffect } from "react";
import axios from 'axios';

function MyPage(props) {
  const [isProfile, setIsProfile] = useState(true);

  let skinTypes = ["Normal", "Acne", "Redness", "Pores"];
  let city = "Vancouver";


  const initialStateProfilePhoto = { 
    type: "",
    base64URL: "",
    name: ""};

  const [stateImage, setStateImage] = useState(initialStateProfilePhoto);
  const [retrievedData, setRetrievedData] = useState([]);
  
  useEffect(function fetchUserProfile(){
    console.log(localStorage);
    axios.get(`https://bos-project2.herokuapp.com/register/${localStorage.email}`)
    .then(result => {
      if(result.data.image.length > 0){
        console.log(typeof result.data.image);
          setStateImage(result.data.image[0]);
      }else{
        setStateImage({ 
          type: "",
          base64URL: "",
          name: ""})
      }
    })
    .catch(error=>console.log(error));
  },[retrievedData]);


  return (
    <div className={styles.myPageSection}>
      <div className={styles.userSection}>

      


        <div className={styles.profileImage}>
        {stateImage.base64URL ?
        <img 
         src={stateImage.base64URL} alt="profilephoto"
         className={styles.profileImage}  />
        :
        <img 
        src="https://s3-us-west-2.amazonaws.com/bos-skincare/icons/profile.svg" alt="profilephoto"
        className={styles.profileImage}  />
        }

          </div>
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
      <UsageChart email={props.email} />
    </div>
  );
}

export default MyPage;
