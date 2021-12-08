import React, { useState, useContext } from "react";
import { ProfileImageContext } from "../../contexts/ProfileImageContext";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import * as firebase from "../../authentication.js";

import { RiArrowDownSLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import Fade from "react-reveal/Fade";


function Navbar(props) {

  const [navbar, setNavbar] = useState(false);

  const [open, setOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [burger, setBurger] = useState(false);

  firebase.onAuthStateChanged(firebase.auth, (user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    firebase
      .signOut(firebase.auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => {
        console.error("Error signing out, ", error.message);
      });
  };

  const fixedHeader = {
    zIndex: 100,
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
  };

  const transparentBg = {
    backgroundColor: "rgba(173, 150, 125, 0.7)"
  };

  const transparentBg2 = {
    backgroundColor: "rgba(190, 173, 157,0.9)"
  };

  const whiteText = {
    color: "#fff",
  };

  const changeBackground = () => {
    if (window.scrollY >= 82) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const image = useContext(ProfileImageContext);

  window.addEventListener("scroll", changeBackground);

  const reportWindowSize = () => {
    if (window.innerWidth < 750) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <div style={fixedHeader}>
      <header style={props.isHome === "/" && !navbar ? transparentBg : {}}>
        <img
          className={styles.filter}
          src={
            props.isHome === "/" && !navbar
              ? "https://s3-us-west-2.amazonaws.com/bos-skincare/logo/logo_white.svg"
              : "https://s3-us-west-2.amazonaws.com/bos-skincare/logo/logo.svg"
          }
          alt="Footer Logo"
        ></img>

        {!burger ? (
          <nav>
            <ul className={styles.flexRow}>
              <li>
                <Link
                  to="/"
                  style={props.isHome === "/" && !navbar ? whiteText : {}}
                >
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  style={props.isHome === "/" && !navbar ? whiteText : {}}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  style={props.isHome === "/" && !navbar ? whiteText : {}}
                >
                  Team
                </Link>
              </li>

              <li>
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    style={props.isHome === "/" && !navbar ? whiteText : {}}
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <div className={styles.dropdown}>
                      <div
                        onClick={() => {
                          setOpen(true);
                          setTimeout(() => {
                            setOpen(false);
                          }, 5000);
                        }}
                        className={styles.icons}
                      >
                  
                        {image.base64URL ?
         <img 
         src={image.base64URL} alt="profilephoto"
         className={styles.navProfileImage}  />
        :
        <img 
        src="https://s3-us-west-2.amazonaws.com/bos-skincare/icons/profile.svg" alt="profilephoto"
        className={styles.navProfileImage}  />
        }

                        <RiArrowDownSLine
                          style={
                            props.isHome === "/" && !navbar ? whiteText : {}
                          }
                          className={styles.riArrowDown}
                        />
                      </div>
                    </div>
                    {open ? (
                      <Fade down>
                        <div
                          style={
                            props.isHome === "/" && !navbar
                              ? transparentBg2
                              : {}
                          }
                          id="dropdown"
                          className={styles.dropdownItem}
                        >
                          <span>
                            <Link
                              to="/profile"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Profile
                            </Link>
                          </span>
                          <span>
                            <Link
                              to="/profileSettings"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Settings
                            </Link>
                          </span>
                          <span onClick={signOut}>
                            <Link
                              to="#"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Log out
                            </Link>
                          </span>
                        </div>
                      </Fade>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </li>
            </ul>
          </nav>
        ) : (
          <nav>
            <ul className={styles.flexRow}>
              <li>
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    style={props.isHome === "/" && !navbar ? whiteText : {}}
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <div className={styles.dropdown}>
                      <div
                        onClick={() => {
                          setOpen(true);
                          setTimeout(() => {
                            setOpen(false);
                          }, 5000);
                        }}
                        className={styles.icons}
                      >
                        <FiMenu
                          style={
                            props.isHome === "/" && !navbar ? whiteText : {}
                          }
                          className={styles.riArrowDown, styles.burgerStyle}
                        />
                      </div>
                    </div>
                    {open ? (
                      <Fade down>
                        <div
                          style={
                            props.isHome === "/" && !navbar
                              ? transparentBg2
                              : {}
                          }
                          id="dropdown"
                          className={styles.dropdownItem}
                        >
                          <span>
                            <Link
                              to="/"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Home{" "}
                            </Link>
                          </span>
                          <span>
                            <Link
                              to="/features"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Features
                            </Link>
                          </span>
                          <span>
                            <Link
                              to="/team"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Team
                            </Link>
                          </span>
                          <span>
                            <Link
                              to="/profile"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Profile
                            </Link>
                          </span>
                          <span>
                            <Link
                              to="/profileSettings"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Settings
                            </Link>
                          </span>
                          <span onClick={signOut}>
                            <Link
                              to="#"
                              style={
                                props.isHome === "/" && !navbar ? whiteText : {}
                              }
                            >
                              Log out
                            </Link>
                          </span>
                        </div>
                      </Fade>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Navbar;
