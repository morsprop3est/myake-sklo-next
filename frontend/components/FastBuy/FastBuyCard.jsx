import React from 'react';
import Button from '../Button/Button';
import styles from './FastBuy.module.scss';

const FastBuyCard = ({ imageSrc, title, features, inputValues, index }) => {
    return (
        <div className={styles.fastBuyContainer}>
            <img src={imageSrc} alt={title} />
            <h5>{title}</h5>
            <ul>
                {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                ))}
            </ul>
            <div className={styles.fastBuyInputWrapper}>
                <div className={styles.fastBuyTableWidth}>
                    <h6>Ширина</h6>
                    <input type="number" value={inputValues.width} readOnly />
                </div>
                <div className={styles.fastBuyTableHeight}>
                    <h6>Довжина</h6>
                    <input type="number" value={inputValues.length} readOnly />
                </div>
            </div>
            <Button 
                link="#" 
                text="Купити зараз" 
                type="primary" 
                className={styles.fastBuyButton} 
            />
        </div>
    );
};

export default FastBuyCard;