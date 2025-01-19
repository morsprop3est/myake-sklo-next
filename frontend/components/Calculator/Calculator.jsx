'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Calculator.module.scss';
import Warning from './Warning';
import PhotoGrid from './PhotoGrid';
import CalculatorControl from './CalculatorControl';
import useCart from '@/hooks/useCart';

const Calculator = () => {
    const [product, setProduct] = useState({
        quantity: 2,
        dimensions: {
            width: 120,
            height: 40,
            radius: 0,
            glassType: 'glossy',
            glassThickness: 'thin',
            shape: 'rectangle',
        },
    });

    const { addProduct } = useCart();

    const handleAddToCart = () => {
        console.log('Add to cart:');
        console.log(product);
        addProduct(product);
    };

    const handleProductChange = (updatedFields) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            dimensions: {
                ...prevProduct.dimensions,
                ...updatedFields.dimensions,
            },
        }));
        console.log(product);
    };

    return (
        <motion.section
            className={styles.calculator}
            id="calculator"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className={styles.container}>
                <Warning />
                <div className={styles.calculatorWrapper}>
                    <PhotoGrid product={product} />
                    <CalculatorControl
                        product={product}
                        setProduct={setProduct}
                        onAddToCart={handleAddToCart}
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Calculator;
