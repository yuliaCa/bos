import React from 'react';
import Welcome from "./Welcome/Welcome";
import LoginForm from "./LoginForm/LoginForm";
import styles from './LoginPage.module.css';

function LoginPage() {
    return <div className={styles.loginOuter}>

            <div className={styles.loginLeftSection}>
                <Welcome src="https://s3-us-west-2.amazonaws.com/bos-skincare/img/ahmad-ebadi-or6-NuAsC3w-unsplash.jpg" alt="welcome image" heading="Welcome!" bodytext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem."/>
            </div>
            <div className={styles.loginRightSection}>
                <LoginForm />
            </div>
        
        </div>
}

export default LoginPage;