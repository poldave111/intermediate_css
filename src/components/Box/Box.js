import React from 'react';
import styles from './Box.module.scss';
import TitleSection from '../TitleSection/TitleSection';
import Button from '../Button/Button';

const Box = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles["box-title"]} data-number={props["data-number"]}>{props.boxTitle}</div>
            <div className={styles["box-sub-title"]}>{props.boxSubtitle}</div>
            <div className={styles["box-text"]}>{props.boxText}</div>
            <Button button={props.button}>{props.boxButton}</Button>
        </div>
    )
}

export default Box;

