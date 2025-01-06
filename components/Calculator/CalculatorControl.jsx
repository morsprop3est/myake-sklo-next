import React, { useState } from 'react';
import styles from './Calculator.module.scss';

const CalculatorControl = ({ tableDimensions, setTableDimensions, shape, setShape, glassType, setGlassType }) => {
    const handleDimensionChange = (type, value) => {
        setTableDimensions((prev) => ({
            ...prev,
            [type]: value,
        }));
    };

    return (
        <div className={styles.calculatorControl}>
            {/* Shape Selection */}
            <div className={styles.calculatorHeader}>
                <h6>Форма столу</h6>
            </div>
            <div className={styles.tableShape}>
                {['rectangle', 'round', 'oval', 'rounded'].map((option) => (
                    <div className={styles.tableShapeItem} key={option}>
                        <input
                            type="radio"
                            name="shape"
                            value={option}
                            id={`shape-${option}`}
                            checked={shape === option}
                            onChange={() => setShape(option)}
                        />
                        <label htmlFor={`shape-${option}`}>
                            <span className={styles.shapeRadio}>
                                <img
                                    src={`catalog/view/theme/myakesklo/assets/images/${option}.svg`}
                                    alt={option}
                                />
                            </span>
                        </label>
                    </div>
                ))}
            </div>

            {/* Glass Type */}
            <div className={styles.calculatorHeader}>
                <h6>Тип скла</h6>
            </div>
            <div className={styles.tableType}>
                {['glossy', 'ribbed', 'black'].map((type) => (
                    <div className={styles.tableTypeItem} key={type}>
                        <input
                            type="radio"
                            name="glassType"
                            value={type}
                            id={`glass-${type}`}
                            checked={glassType === type}
                            onChange={() => setGlassType(type)}
                        />
                        <label htmlFor={`glass-${type}`}>
                            <span className={styles.shapeRadio}>{type}</span>
                        </label>
                    </div>
                ))}
            </div>

            {/* Dimensions */}
            <div className={styles.calculatorHeader}>
                <h6>Розмір столу</h6>
            </div>
            <div className={styles.tableSize}>
                {['width', 'height', 'radius'].map((dimension) => (
                    <div
                        className={styles[`table${dimension.charAt(0).toUpperCase() + dimension.slice(1)}`]}
                        key={dimension}
                    >
                        <h6>
                            {dimension === 'width'
                                ? 'Довжина'
                                : dimension === 'height'
                                    ? 'Ширина'
                                    : 'Довжина заокруглення'}
                        </h6>
                        <input
                            type="number"
                            value={tableDimensions[dimension]}
                            onChange={(e) =>
                                handleDimensionChange(dimension, Number(e.target.value))
                            }
                        />
                        <input
                            type="range"
                            value={tableDimensions[dimension]}
                            min="0"
                            max={dimension === 'radius' ? 50 : 200}
                            onChange={(e) =>
                                handleDimensionChange(dimension, Number(e.target.value))
                            }
                        />
                    </div>
                ))}
            </div>

            {/* Price */}
            <h4 className={styles.oldPrice} style={{ textDecoration: 'line-through' }}>
                Ціна: 299
            </h4>
            <h3 className={styles.newPrice}>Ціна: 199</h3>

            {/* Add to Cart */}
            <button
                className={styles.mainButton}
                onClick={() => alert('Додано в кошик')}
            >
                Додати в кошик
            </button>
        </div>
    );
};

export default CalculatorControl;
