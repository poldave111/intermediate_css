import React from 'react';
import styles from './FooterIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterIcon = (props) => {
    return (
        <li className={styles["footer-icon"]}>
            <a className={styles["link-styles"]} href="#">
                <span className={styles["icon-wrapper"]}>
                    <FontAwesomeIcon className={styles.icon} icon={props.icon} />
                </span>
                {props.title}
            </a>
        </li>
    )
}

export default FooterIcon; 