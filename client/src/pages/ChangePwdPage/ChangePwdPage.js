import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import ChangeForm from "./ChangeForm/ChangeForm";
import styles from "./ChangePwdPage.module.css";
import axios from 'axios';

function ChangePwdPage(props) {

  const [welcomeContent, setWelcomeContent] = useState({});

  const location = useLocation();

  useEffect(() => {

    axios
    .get("/pagecontents/")
    .then((result) => {   
    setWelcomeContent(result.data[7]);
    })
    .catch((error) => console.log(error));

    props.handleIsHome(location);
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
        <ChangeForm />
      </div>
    </div>
  );
}

export default ChangePwdPage;
