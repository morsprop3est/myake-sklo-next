import React from 'react';
import styles from '../Calculator.module.scss';

const PriceDisplay = ({ price }) => (
    <div className={styles.calculatorItemWrapper}>
        <p>До ваших розмірів буде доданий запас на скорочення (+1-2 см)</p>
        <div className={styles.priceWrapper}>
            <h4 className={styles.oldPrice} style={{ textDecoration: 'line-through' }}>
                Стара ціна: {price.oldPrice}
            </h4>
            <h3 className={styles.newPrice}>Ціна: {price.newPrice}</h3>
        </div>
    </div>
);

export default PriceDisplay;
