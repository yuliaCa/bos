import { useLocation } from "react-router-dom";
import MyPage from "./profilePage/MyPage";
import MyRoutines from "./profilePage/MyRoutines";
import styles from "./ProfilePage.module.css";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

function ProfilePage(props) {
  const location = useLocation();

  // in return: let's say 2 buttons. if MyPage clicked - we render myPage section, if myRoutines clicked - we render myRoutines section.
  // Sounds like useState will be useful here. [defaultSection(myPage), setSection()]
  const [defaultSection, setSection] = useState("MyPage");

  const MyPageHandler = () => {
    setSection("MyPage");
  };
  const MyRoutinesHandler = () => {
    setSection("MyRoutines");
  };

  // Get logged user info from firebase auth
  const auth = getAuth();
  const user = auth.currentUser;
  let displayName;
  let email;

  useEffect(() => {
    props.handleIsHome(location);
  },[]);

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    displayName = user.displayName;
    email = user.email;
    //   const photoURL = user.photoURL;
    //   const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    //   const uid = user.uid;
  }

  return (
    <div className={styles.profilePage}>
      <h2>Profile</h2>

      <div className={styles.tabs}>
        <div
          className={
            defaultSection === "MyPage" ? styles.tab1focus : styles.tab1
          }
        >
          <span className={styles.span} onClick={MyPageHandler}>
            My Page
          </span>
        </div>
        <div
          className={
            defaultSection === "MyRoutines" ? styles.tab2focus : styles.tab2
          }
        >
          <span className={styles.span} onClick={MyRoutinesHandler}>
            My Routines
          </span>
        </div>
      </div>
      {defaultSection === "MyPage" ? (
        <MyPage displayName={displayName} email={email} />
      ) : (
          <MyRoutines email={email} />
        )}
    </div>
  );
}

export default ProfilePage;
