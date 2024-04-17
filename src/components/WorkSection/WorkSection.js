import React from 'react'; 
import styles from '../WorkSection/WorkSection.module.scss';
import WorkBox from '../WorkBox/WorkBox';
import boxPict1 from '../../pictures/box-pict-1.jpg';
import boxPict2 from '../../pictures/box-pict-2.jpg';
import boxPict3 from '../../pictures/box-pict-3.jpg';
import boxPict4 from '../../pictures/box-pict-4.jpg';

const WorkSection = () => {
    return (
        <section className="container">
            <div className={styles.wrapper}>
                <WorkBox src={boxPict1} title="vertigo" shortText="tylko prostą" text="W opisie każdego pudełka wstaw dwa akapity z treścią. Drugiemu z nich pogrub czcionkę, używając pseudoklasy :last-of-type" />
                <WorkBox src={boxPict2} title="vertigo" shortText="tylko prostą" text="W opisie każdego pudełka wstaw dwa akapity z treścią. Drugiemu z nich pogrub czcionkę, używając pseudoklasy :last-of-type" />
                <WorkBox src={boxPict3} title="vertigo" shortText="tylko prostą" text="W opisie każdego pudełka wstaw dwa akapity z treścią. Drugiemu z nich pogrub czcionkę, używając pseudoklasy :last-of-type" />
                <WorkBox src={boxPict4} title="vertigo" shortText="tylko prostą" text="W opisie każdego pudełka wstaw dwa akapity z treścią. Drugiemu z nich pogrub czcionkę, używając pseudoklasy :last-of-type" />
            </div>
        </section>
    )
}

export default WorkSection; 