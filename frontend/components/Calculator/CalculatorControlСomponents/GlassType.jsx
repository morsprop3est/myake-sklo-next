import React, { useEffect } from 'react';
import styles from '../Calculator.module.scss';

const GlassType = ({ product, setProduct }) => {
    const glassTypeOptions = [
        { label: 'Глянцеве', value: 'glossy' },
        { label: 'Рифлене', value: 'ribbed' },
        { label: 'Чорне', value: 'black' },
    ];

    useEffect(() => {
        if (product.dimensions.glassThickness === 'thick' && product.dimensions.glassType !== 'glossy') {
            setProduct({ ...product, dimensions: { ...product.dimensions, glassType: 'glossy' } });
        }
    }, [product.dimensions.glassThickness, product.dimensions.glassType, setProduct]);

    const isGlossyOnly = product.dimensions.glassThickness === 'thick';

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
                                checked={product.dimensions.glassType === value}
                                onChange={() => setProduct({ ...product, dimensions: { ...product.dimensions, glassType: value } })}
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
