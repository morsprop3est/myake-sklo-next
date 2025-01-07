import React, { useEffect, useState } from 'react';
import styles from '../Calculator.module.scss';

const TableDimensions = ({ tableDimensions, setTableDimensions, shape }) => {
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
                setTableDimensions({ width: 100, height: 50, radius: 0 });
                break;
            case 'oval':
                setShowRadius(false);
                setShowLengthWidth(true);
                setTableDimensions({ width: 100, height: 50, radius: 15 });
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
                setTableDimensions({ width: 100, height: 50, radius: 15 });
                break;
            default:
                setShowRadius(false);
                setShowLengthWidth(true);
                setTableDimensions({ width: 100, height: 100, radius: 0 });
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
                                value={tableDimensions.width}
                                onChange={(e) =>
                                    handleDimensionChange('width', Number(e.target.value))
                                }
                            />
                            <input
                                type="range"
                                value={tableDimensions.width}
                                min={minDimension}
                                max={maxDimension}
                                onChange={(e) =>
                                    handleDimensionChange('width', Number(e.target.value))
                                }
                            />
                        </div>
                        <div className={styles.tableHeight}>
                            <h6>Ширина</h6>
                            <input
                                type="number"
                                value={tableDimensions.height}
                                onChange={(e) =>
                                    handleDimensionChange('height', Number(e.target.value))
                                }
                            />
                            <input
                                type="range"
                                value={tableDimensions.height}
                                min={minDimension}
                                max={maxDimension}
                                onChange={(e) =>
                                    handleDimensionChange('height', Number(e.target.value))
                                }
                            />
                        </div>
                    </>
                )}
                {showRadius && (
                    <div className={styles.tableRadius}>
                        <h6>Довжина заокруглення</h6>
                        <input
                            type="number"
                            value={tableDimensions.radius}
                            onChange={(e) =>
                                handleDimensionChange('radius', Number(e.target.value))
                            }
                        />
                        <input
                            type="range"
                            value={tableDimensions.radius}
                            min="0"
                            max={radiusMax}
                            onChange={(e) =>
                                handleDimensionChange('radius', Number(e.target.value))
                            }
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableDimensions;
