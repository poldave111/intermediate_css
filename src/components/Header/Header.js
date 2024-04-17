import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles["splash-inner"]}>
                <h1 className={styles["page-title"]}>
                    Dowolna <span className={styles.spanText}>treść,</span>
                </h1>
                <h2 className={styles["page-subtitle"]}> 
                    kolejna dowolna treść.. 
                </h2>
                <p>To będzie strona która prezentuje pewne możliwości flexboxa</p>
                <Button className={styles["button-header"]} button="btn-three">see our work</Button>
            </div>
        </header>
    )
}

export default Header; 