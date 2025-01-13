'use client';

import React, { useEffect, useState, useCallback } from 'react';
import styles from '../Calculator.module.scss';

const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

const TableDimensions = ({ product, setProduct }) => {
    const [localDimensions, setLocalDimensions] = useState({
        width: product.dimensions.width || 40,
        height: product.dimensions.height || 40,
        radius: product.dimensions.radius || 0,
    });

    const [radiusMax, setRadiusMax] = useState(100);
    const [showRadius, setShowRadius] = useState(false);
    const [showLengthWidth, setShowLengthWidth] = useState(true);

    const minDimension = 40;
    const maxDimension = 200;

    // Дебаунс для оновлення продукту
    const debouncedUpdateProduct = useCallback(
        debounce((dimensions) => {
            setProduct((prevProduct) => {
                const updatedDimensions = { ...prevProduct.dimensions, ...dimensions };

                // Перевірка мінімальних та максимальних значень
                if (updatedDimensions.width < minDimension) updatedDimensions.width = minDimension;
                if (updatedDimensions.width > maxDimension) updatedDimensions.width = maxDimension;

                if (updatedDimensions.height < minDimension) updatedDimensions.height = minDimension;
                if (updatedDimensions.height > maxDimension) updatedDimensions.height = maxDimension;

                if (updatedDimensions.radius < 0) updatedDimensions.radius = 0;
                if (updatedDimensions.radius > radiusMax) updatedDimensions.radius = radiusMax;

                // Оновлення width/height для круглої форми
                if (prevProduct.dimensions.shape === 'round' && dimensions.radius !== undefined) {
                    updatedDimensions.width = dimensions.radius * 2;
                    updatedDimensions.height = dimensions.radius * 2;
                }

                return { ...prevProduct, dimensions: updatedDimensions };
            });
        }, 100),
        [setProduct, radiusMax]
    );

    const handleDimensionChange = (key, value) => {
        setLocalDimensions((prev) => ({ ...prev, [key]: value }));
        debouncedUpdateProduct({ [key]: value });
    };

    useEffect(() => {
        if (product.dimensions.shape === 'rounded') {
            const minSide = Math.min(product.dimensions.width || 0, product.dimensions.height || 0);
            setRadiusMax(minSide / 2);
        }
    }, [product.dimensions.width, product.dimensions.height, product.dimensions.shape]);

    useEffect(() => {
        switch (product.dimensions.shape) {
            case 'rectangle':
                setShowRadius(false);
                setShowLengthWidth(true);
                break;
            case 'oval':
                setShowRadius(false);
                setShowLengthWidth(true);
                break;
            case 'round':
                setShowRadius(true);
                setShowLengthWidth(false);
                break;
            case 'rounded':
                setShowRadius(true);
                setShowLengthWidth(true);
                break;
            default:
                console.error('Невідомий тип форми:', product.dimensions.shape);
                break;
        }
    }, [product.dimensions.shape]);

    return (
        <div className={styles.calculatorItemWrapper}>
            <div className={styles.calculatorHeader}>
                <h6>Розмір столу</h6>
            </div>
            <div className={styles.tableSize}>
                {showLengthWidth && (
                    <>
                        <div className={styles.tableWidth}>
                            <h6>Довжина</h6>
                            <input
                                type="number"
                                value={localDimensions.width}
                                onChange={(e) => handleDimensionChange('width', Number(e.target.value))}
                                min={minDimension}
                                max={maxDimension}
                            />
                            <input
                                type="range"
                                value={localDimensions.width}
                                min={minDimension}
                                max={maxDimension}
                                onChange={(e) => handleDimensionChange('width', Number(e.target.value))}
                            />
                        </div>
                        <div className={styles.tableHeight}>
                            <h6>Ширина</h6>
                            <input
                                type="number"
                                value={localDimensions.height}
                                onChange={(e) => handleDimensionChange('height', Number(e.target.value))}
                                min={minDimension}
                                max={maxDimension}
                            />
                            <input
                                type="range"
                                value={localDimensions.height}
                                min={minDimension}
                                max={maxDimension}
                                onChange={(e) => handleDimensionChange('height', Number(e.target.value))}
                            />
                        </div>
                    </>
                )}
                {showRadius && (
                    <div className={styles.tableRadius}>
                        <h6>Довжина заокруглення</h6>
                        <input
                            type="number"
                            value={localDimensions.radius}
                            onChange={(e) => handleDimensionChange('radius', Number(e.target.value))}
                            min="0"
                            max={radiusMax}
                        />
                        <input
                            type="range"
                            value={localDimensions.radius}
                            min="0"
                            max={radiusMax}
                            onChange={(e) => handleDimensionChange('radius', Number(e.target.value))}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableDimensions;
