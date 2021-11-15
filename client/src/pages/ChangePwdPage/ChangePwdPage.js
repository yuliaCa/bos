import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Welcome from "../../components/Welcome/Welcome";
import ChangeForm from "./ChangeForm/ChangeForm";
import styles from "./ChangePwdPage.module.css";

function ChangePwdPage(props) {
  const location = useLocation();

  useEffect(() => {
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
          bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem."
        />
      </div>
      <div className={styles.loginRightSection}>
        <ChangeForm />
      </div>
    </div>
  );
}

export default ChangePwdPage;
