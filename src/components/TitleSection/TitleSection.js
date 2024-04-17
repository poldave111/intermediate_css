import React from 'react';
import styles from './TitleSection.module.scss';

const TitleSection = (props) => {
    return (
        <div className={styles.title}>{props.children}</div>
    )
}

export default TitleSection; 