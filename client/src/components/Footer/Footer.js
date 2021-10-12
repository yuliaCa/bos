import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  
    return (
        <footer className={styles.footer}>
            <div>
                LOGO
            </div>
            <nav className={styles.flexRow}>
                <ul className={styles.flexRow}>
                    <li>
                        <Link to='/policy'>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to='/tos'>Term of Service</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;