import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <nav className={styles.general}>
            <ul>
                <li>
                    <a href="#">PS/2</a>
                    <ul>
                        <li>
                            <a href="#">8Mhz</a>
                        </li>
                        <li>
                            <a href="#">12Mhz</a>
                        </li>
                        <li>
                            <a href="#">16Mhz</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">XT</a>
                    <ul>
                        <li>
                            <a href="#">1,6Mhz</a>
                        </li>
                        <li>
                            <a href="#">4Mhz</a>
                        </li>
                        <li>
                            <a href="#">8Mhz</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">AT</a>
                    <ul>
                        <li>
                            <a href="#">16Mhz</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">386sx</a>
                    <ul>
                        <li>
                            <a href="#">16Mhz</a>
                        </li>
                        <li>
                            <a href="#">25Mhz</a>
                        </li>
                        <li>
                            <a href="#">33Mhz</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">486dx2</a>
                    <ul>
                        <li>
                            <a href="#">33Mhz</a>
                        </li>
                        <li>
                            <a href="#">66Mhz</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Pentium</a>
                    <ul>
                        <li>
                            <a href="#">60Mhz</a>
                        </li>
                        <li>
                            <a href="#">66Mhz</a>
                        </li>
                        <li>
                            <a href="#">75Mhz</a>
                        </li>
                        <li>
                            <a href="#">100Mhz</a>
                        </li>
                        <li>
                            <a href="#">120Mhz</a>
                        </li>
                        <li>
                            <a href="#">166Mhz</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Menu; 