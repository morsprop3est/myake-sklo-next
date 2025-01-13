'use client';

import React from 'react';
import styles from './FastBuy.module.scss';

const FastBuyCard = ({ imageSrc, title, features, inputValues, onInputChange }) => {
    return (
        <div className={styles.fastBuyContainer}>
            <img src={imageSrc} alt=""/>
            <h5>{title}</h5>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div className={styles.fastBuyInputWrapper}>
                <div className={styles.fastBuyTableWidth}>
                    <h6>Довжина</h6>
                    <label htmlFor={`table-width-${inputValues.length}`} />
                    <input
                        type="number"
                        id={`table-width-${inputValues.length}`}
                        min="40"
                        max="400"
                        value={inputValues.length}
                        onChange={(e) => onInputChange('length', e.target.value)}
                    />
                </div>
                <div className={styles.fastBuyTableHeight}>
                    <h6>Ширина</h6>
                    <label htmlFor={`table-height-${inputValues.width}`} />
                    <input
                        type="number"
                        id={`table-height-${inputValues.width}`}
                        min="40"
                        max="400"
                        value={inputValues.width}
                        onChange={(e) => onInputChange('width', e.target.value)}
                    />
                </div>
            </div>
            <button className={styles.mainButton}>Додати до кошика</button>
        </div>
    );
};

export default FastBuyCard;