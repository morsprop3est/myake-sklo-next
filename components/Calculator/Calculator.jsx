'use client';

import React, { useState } from 'react';
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
    const [glassThickness, setThickness] = useState('thin');
    const [shape, setShape] = useState('rectangle');

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
                    />
                </div>
            </div>
        </section>
    );
};

export default Calculator;
