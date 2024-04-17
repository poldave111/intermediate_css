import React from 'react';
import styles from './Services.module.scss';
import TitleSection from '../TitleSection/TitleSection';
import Box from '../Box/Box';

const Services = () => {
    return (
        <section className="container">
            <TitleSection>Our Services</TitleSection>
            <div className={styles["box-container"]}>
                <Box boxTitle="Design" boxSubtitle="lorem ipsum" boxButton="see more" data-number="1" button={"btn-four"} boxText="Computers have revolutionized the modern world, enabling seamless communication, data processing, and innovation. From personal laptops to powerful servers, they drive technological advancement and facilitate diverse tasks" />
                <Box boxTitle="Code" boxSubtitle="lorem ipsum" boxButton="see more" data-number="2" button={"btn-five"} boxText="Computers have revolutionized the modern world, enabling seamless communication, data processing, and innovation. From personal laptops to powerful servers, they drive technological advancement and facilitate diverse tasks" />
                <Box boxTitle="Marketing" boxSubtitle="lorem ipsum" boxButton="see more" data-number="3" button={"btn-six"} boxText="Computers have revolutionized the modern world, enabling seamless communication, data processing, and innovation. From personal laptops to powerful servers, they drive technological advancement and facilitate diverse tasks" />
            </div>
        </section>
    )
}

export default Services; 