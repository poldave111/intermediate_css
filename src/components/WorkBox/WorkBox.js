import React from 'react';
import styles from './WorkBox.module.scss';

const WorkBox = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles["work-image"]}>
                <img src={props.src} alt="image" />
                <div className={styles.layer}></div>
            </div>
            <div className={styles["work-text"]}>
                <div className={styles.title}>{props.title}</div>
                <div>{props.text}</div>
                <div className={styles.shortText}>{props.shortText}</div>
                <a href="#" className={styles["link-box"]}>see more</a>
            </div>
        </div>
    )
}

export default WorkBox; 