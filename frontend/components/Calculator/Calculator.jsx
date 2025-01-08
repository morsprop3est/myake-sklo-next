'use client';

import React, { useState, useEffect } from 'react';
import styles from './Calculator.module.scss';
import Warning from './Warning';
import PhotoGrid from './PhotoGrid';
import CalculatorControl from './CalculatorControl';
import { calculatePrice } from '@/utils/calculatePrice';
import { useCart } from '@/hooks/useCart';

const Calculator = () => {
    const [tableDimensions, setTableDimensions] = useState({
        width: 60,
        height: 40,
        radius: 0,
    });

    const [glassType, setGlassType] = useState('glossy');
    const [glassThickness, setThickness] = useState('thin');
    const [shape, setShape] = useState('rectangle');
    const [price, setPrice] = useState({ newPrice: 0, oldPrice: 0 });

    const { addItemToCart } = useCart();

    useEffect(() => {
        const { newPrice, oldPrice } = calculatePrice(
            tableDimensions.width,
            tableDimensions.height,
            glassType,
            glassThickness,
            shape
        );
        setPrice({ newPrice, oldPrice });
    }, [tableDimensions, glassType, glassThickness, shape]);

    const handleAddToCart = () => {
        const product = {
            id: Date.now(),
            name: 'М`яке скло',
            price: price.newPrice,
            oldPrice: price.oldPrice,
            quantity: 1,
            dimensions: tableDimensions,
            glassType: glassType,
            glassThickness: glassThickness,
            shape: shape,
        };

        addItemToCart(product);
    };

    return (
        <section className={styles.calculator}>
            <div className={styles.container}>
                <Warning />
                <div className={styles.calculatorWrapper}>
                    <PhotoGrid
                        tableDimensions={tableDimensions}
                        glassType={glassType}
                        glassThickness={glassThickness}
                    />
                    <CalculatorControl
                        tableDimensions={tableDimensions}
                        setTableDimensions={setTableDimensions}
                        shape={shape}
                        setShape={setShape}
                        glassType={glassType}
                        setGlassType={setGlassType}
                        glassThickness={glassThickness}
                        setThickness={setThickness}
                        price={price}
                        onAddToCart={handleAddToCart}
                    />
                </div>
            </div>
        </section>
    );
};

export default Calculator;
