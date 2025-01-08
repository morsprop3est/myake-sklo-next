import React, { useEffect } from 'react';
import styles from '../Calculator.module.scss';

const GlassType = ({ glassType, setGlassType, glassThickness }) => {
    const glassTypeOptions = [
        { label: 'Глянцеве', value: 'glossy' },
        { label: 'Рифлене', value: 'ribbed' },
        { label: 'Чорне', value: 'black' },
    ];

    useEffect(() => {
        if (glassThickness === 'thick' && glassType !== 'glossy') {
            setGlassType('glossy');
        }
    }, [glassThickness, glassType, setGlassType]);

    const isGlossyOnly = glassThickness === 'thick';

    return (
        <div className={styles.calculatorItemWrapper}>
            <div className={styles.calculatorHeader}>
                <h6>Тип скла</h6>
            </div>
            <div className={styles.tableType}>
                {glassTypeOptions.map(({ label, value }) => {
                    const isDisabled = isGlossyOnly && value !== 'glossy';
                    const labelClass = isDisabled
                        ? `${styles.shapeRadio} ${styles.disabled}`
                        : `${styles.shapeRadio} ${styles[value]}`;

                    return (
                        <div className={styles.tableTypeItem} key={value}>
                            <input
                                type="radio"
                                name="glassType"
                                value={value}
                                id={`glass-${value}`}
                                checked={glassType === value}
                                onChange={() => setGlassType(value)}
                                disabled={isDisabled}
                            />
                            <label htmlFor={`glass-${value}`} className={isDisabled ? styles.disabled : ''}>
                                <span className={labelClass}>{label}</span>
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GlassType;
