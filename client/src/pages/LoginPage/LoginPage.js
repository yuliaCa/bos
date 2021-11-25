import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./LoginPage.module.css";
import axios from 'axios';

function LoginPage(props) {

  const [welcomeContent, setWelcomeContent] = useState({});
  const location = useLocation();

  useEffect(() => {
    props.handleIsHome(location);

    axios
    .get("https://bos-project2.herokuapp.com/pagecontents/")
    .then((result) => {   
    setWelcomeContent(result.data[7]);
    })
    .catch((error) => console.log(error));

  },[location, props]);


  return (
    <div className={styles.loginOuter}>
      <h1 className={styles.loginHeader}>Login</h1>
      <div className={styles.loginLeftSection}>
        <Welcome
          src="https://s3-us-west-2.amazonaws.com/bos-skincare/logo/logo_mobile.svg"
          alt="welcome image"
          heading="WELCOME!"
          bodytext={welcomeContent.body}
        />
      </div>
      <div className={styles.loginRightSection}>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
