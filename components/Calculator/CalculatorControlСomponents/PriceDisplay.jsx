import React from 'react';
import styles from '../Calculator.module.scss';

const PriceDisplay = () => (
    <div className={styles.calculatorItemWrapper}>
        <p>До ваших розмірів буде доданий запас на скорочення (+1-2 см)</p>
        <div className={styles.priceWrapper}>
            <h4 className={styles.oldPrice} style={{textDecoration: 'line-through'}}>
                Стара ціна: 299
            </h4>
            <h3 className={styles.newPrice}>Ціна: 199</h3>
        </div>

    </div>
);

export default PriceDisplay;
