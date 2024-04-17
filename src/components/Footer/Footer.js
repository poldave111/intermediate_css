import React from 'react';
import styles from './Footer.module.scss';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import FooterIcon from '../FooterIcon/FooterIcon';

const Footer = (props) => {
    return (
        <footer className={`container ${styles.footer}`}>
            <ul className={styles["icons-wrapper"]}>
                <FooterIcon icon={faFacebookF} title="Facebook" />
                <FooterIcon icon={faInstagram} title="Instagram" />
                <FooterIcon icon={faYoutube} title="Youtube" />
            </ul>
        </footer>
    )
}

export default Footer; 