import React from 'react';
import styles from './FormSection.module.scss';
import TitleSection from '../TitleSection/TitleSection';
import FormContent from '../FormContent/FormContent';

const FormSection = (props) => {
    return (
        <div className={`container ${styles["form-section"]}`}>
            <TitleSection>Contact us</TitleSection>
            <FormContent />
        </div>
    )
}

export default FormSection; 