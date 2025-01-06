'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Calculator.module.scss';
import Warning from './Warning';
import PhotoGrid from './PhotoGrid';
import CalculatorControl from './CalculatorControl';

const Calculator = () => {
    const [tableDimensions, setTableDimensions] = useState({
        width: 60,
        height: 40,
        radius: 0,
    });

    const [glassType, setGlassType] = useState('glossy');
    const [shape, setShape] = useState('rectangle');

    const rectRef = useRef();

    useEffect(() => {
        if (rectRef.current) {
            rectRef.current.setAttribute('width', tableDimensions.width);
            rectRef.current.setAttribute('height', tableDimensions.height);
            rectRef.current.setAttribute('ry', tableDimensions.radius);
        }
    }, [tableDimensions]);

    return (
        <section className={styles.calculator}>
            <div className={styles.container}>
                <Warning />
                <CalculatorControl
                    tableDimensions={tableDimensions}
                    setTableDimensions={setTableDimensions}
                    shape={shape}
                    setShape={setShape}
                    glassType={glassType}
                    setGlassType={setGlassType}
                />
                <PhotoGrid />
            </div>
        </section>
    );
};

export default Calculator;
