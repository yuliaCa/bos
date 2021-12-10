import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  
    return (
        <>
        <footer>
            <div className={styles.footerTop}>
            <div>
                <img src="https://s3-us-west-2.amazonaws.com/bos-skincare/logo/logo.svg" alt="Footer Logo" />
            </div>
            <nav className={styles.flexRow}>
                <ul className={styles.flexRow}>
                    <li>
                        <Link to='#'>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to='#'>Terms of Service</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </footer>
         <div className={styles.footerBottom}>
         <p>Designed and Developed by Langara College Canada, Web & Mobile Development Program Term 3 Students 2021-2022</p>
         </div>
         </>
    )
}

export default Footer;