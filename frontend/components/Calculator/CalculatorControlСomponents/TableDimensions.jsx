import React, { useEffect, useState } from 'react';
import styles from '../Calculator.module.scss';

const TableDimensions = ({ tableDimensions = { width: 60, height: 40, radius: 15 }, setTableDimensions, shape }) => {
    const [radiusMax, setRadiusMax] = useState(100);
    const [showRadius, setShowRadius] = useState(false);
    const [showLengthWidth, setShowLengthWidth] = useState(true);

    const minDimension = 40;
    const maxDimension = 200;

    const handleDimensionChange = (type, value) => {
        if (value < minDimension && type !== 'radius') value = minDimension;
        if (value > maxDimension) value = maxDimension;

        if (type === 'radius') {
            if (value < 0) value = 0;
            if (value > radiusMax) value = radiusMax;
        }

        setTableDimensions((prev) => {
            const updatedDimensions = { ...prev, [type]: value };

            if (shape === 'round' && type === 'radius') {
                updatedDimensions.width = value * 2;
                updatedDimensions.height = value * 2;
            }

            return updatedDimensions;
        });
    };

    const handleInputChange = (type) => (e) => {
        const value = Number(e.target.value);
        handleDimensionChange(type, value);
    };

    useEffect(() => {
        if (shape === 'rounded') {
            const minSide = Math.min(tableDimensions.width || 0, tableDimensions.height || 0);
            setRadiusMax(minSide / 2);
        }
    }, [tableDimensions.width, tableDimensions.height, shape]);

    useEffect(() => {
        switch (shape) {
            case 'rectangle':
                setShowRadius(false);
                setShowLengthWidth(true);
                setTableDimensions({ width: 60, height: 40, radius: 0 });
                break;
            case 'oval':
                setShowRadius(false);
                setShowLengthWidth(true);
                setTableDimensions({ width: 60, height: 40, radius: 15 });
                break;
            case 'round':
                setShowRadius(true);
                setShowLengthWidth(false);
                setRadiusMax(100);
                setTableDimensions({ width: 100, height: 100, radius: 50 });
                break;
            case 'rounded':
                setShowRadius(true);
                setShowLengthWidth(true);
                setTableDimensions({ width: 60, height: 40, radius: 15 });
                break;
            default:
                setShowRadius(false);
                setShowLengthWidth(true);
                setTableDimensions({ width: 60, height: 40, radius: 0 });
        }
    }, [shape]);

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
                                value={tableDimensions?.width || minDimension}
                                onChange={handleInputChange('width')}
                            />
                            <input
                                type="range"
                                value={tableDimensions?.width || minDimension}
                                min={minDimension}
                                max={maxDimension}
                                onChange={handleInputChange('width')}
                            />
                        </div>
                        <div className={styles.tableHeight}>
                            <h6>Ширина</h6>
                            <input
                                type="number"
                                value={tableDimensions?.height || minDimension}
                                onChange={handleInputChange('height')}
                            />
                            <input
                                type="range"
                                value={tableDimensions?.height || minDimension}
                                min={minDimension}
                                max={maxDimension}
                                onChange={handleInputChange('height')}
                            />
                        </div>
                    </>
                )}
                {showRadius && (
                    <div className={styles.tableRadius}>
                        <h6>Довжина заокруглення</h6>
                        <input
                            type="number"
                            value={tableDimensions?.radius || 0}
                            onChange={handleInputChange('radius')}
                        />
                        <input
                            type="range"
                            value={tableDimensions?.radius || 0}
                            min="0"
                            max={radiusMax}
                            onChange={handleInputChange('radius')}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableDimensions;
