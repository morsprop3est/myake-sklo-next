import React, { useEffect, useState } from 'react';
import styles from '../Calculator.module.scss';
import { calculatePrice } from '@/utils/calculatePrice';

const PriceDisplay = ({ product }) => {
    const newPrice = calculatePrice(product);
    const discountMultiplier = 1.25;


    const oldPrice = parseFloat((newPrice * discountMultiplier).toFixed(0));

    return (
        <div className={styles.calculatorItemWrapper}>
            <p>До ваших розмірів буде доданий запас на скорочення (+1-2 см)</p>
            <div className={styles.priceWrapper}>
                <h4 className={styles.oldPrice} style={{ textDecoration: 'line-through' }}>
                    Стара ціна: {oldPrice}
                </h4>
                <h3 className={styles.newPrice}>Ціна: {newPrice}</h3>
            </div>
        </div>
    );
};

export default PriceDisplay;
