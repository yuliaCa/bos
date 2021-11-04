import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Link is built-in with react-router-dom, that helps us stay on the same page, without reloading it, and not sent a request to the server every time we click a regular <a> tag. 
import styles from './Navbar.module.css';
// styles can be substituted by any other word. It is the variable we declare that becomes an object. Any values from the file will be properties of the object that we can then assign to the components below.

import { FaCircle } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';


import * as firebase from '../../authentication';

function Navbar() {
    // first div is for logo

    const [open, setOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    firebase.onAuthStateChanged(firebase.auth, (user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });  

    const signOut = () => {

    firebase.signOut(firebase.auth).then(() => {
    console.log("sign out successful");
    }).catch((error) => {
    console.error("Error signing out, ", error.message);
    });
    };

    return (
        <>
        <header className={styles.header}>
           
            <img className={styles.filter} src="https://s3-us-west-2.amazonaws.com/bos-skincare/logo/logo.svg" alt="Footer Logo">

            </img>
          
            <nav className={styles.flexRow}>
                <ul className={styles.flexRow}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/features'>Features</Link>
                    </li>
                    <li>
                        <Link to='/team'>Team</Link>
                    </li>
                  
                    <li>
                    {!isLoggedIn ? <Link to='/login'>Login</Link> : (
                        <>
                        <div className={styles.dropdown}>
                            <div onClick={() => setOpen(!open)} className={styles.icons}>
                                <FaCircle className={styles.faCircle} />
                                <RiArrowDownSLine className={styles.riArrowDown}/>
                            </div>
                        </div>
                        {open ? (
                        <div id="dropdown" className={styles.dropdownItem}>
                        <Link to='/profile'>Profile</Link>
                        <span onClick={signOut}>
                        <Link to="#">Sign out</Link>
                        </span>
                        </div> ) : "" }
                        </>
                    )}
                    </li>  
                </ul>
            </nav>
        </header>
       
        </>
    )
}

export default Navbar;