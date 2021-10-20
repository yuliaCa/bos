
import MyPage from './profilePage/MyPage';
import MyRoutines from './profilePage/MyRoutines';
import styles from './ProfilePage.module.css';
import { useState } from 'react';
import { set } from 'mongoose';


function ProfilePage() {

    // in return: let's say 2 buttons. if MyPage clicked - we render myPage section, if myRoutines clicked - we render myRoutines section. 
    // Sounds like useState will be useful here. [defaultSection(myPage), setSection()] 
    const [defaultSection, setSection] = useState('MyPage');

    const MyPageHandler = () => {
        setSection('MyPage');
    }
    const MyRoutinesHandler = () => {
        setSection('MyRoutines');
    }
    return (
        <div>
            <h2>Profile</h2>

            <div>
                <span className={styles.span} onClick={MyPageHandler}>My Page</span>
                <span className={styles.span} onClick={MyRoutinesHandler} >My Routines</span>
            </div>
            {defaultSection === 'MyPage' ? <MyPage /> : <MyRoutines />}

        </div>

    )




}

export default ProfilePage;