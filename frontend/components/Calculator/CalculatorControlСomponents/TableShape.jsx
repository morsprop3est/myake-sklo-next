import React from 'react';
import styles from '../Calculator.module.scss';

const TableShape = ({ product, setProduct }) => {
    const shapeOptions = [
        { label: 'Прямокутник', value: 'rectangle', width: 60, height: 40, radius: 0 },
        { label: 'Круг', value: 'round', width: 40, width: 100, height: 100, radius: 50 },
        { label: 'Овал', value: 'oval', width: 100, width: 60, height: 40, radius: 25 },
        { label: 'Зі скругленням', value: 'rounded', width: 60, height: 40, radius: 25 },
    ];

    const handleShapeChange = (shapeValue) => {
        const selectedShape = shapeOptions.find(option => option.value === shapeValue);

        if (selectedShape) {
            setProduct((prevProduct) => ({
                ...prevProduct,
                dimensions: {
                    ...prevProduct.dimensions,
                    shape: shapeValue,
                    width: selectedShape.width,
                    height: selectedShape.height,
                    radius: selectedShape.radius,
                },
            }));
        }
    };

    return (
        <div className={styles.calculatorItemWrapper}>
            <div className={styles.calculatorHeader}>
                <h6>Форма столу</h6>
            </div>
            <div className={styles.tableShape}>
                {shapeOptions.map(({ label, value }, index) => (
                    <div className={styles.tableShapeItem} key={value}>
                        <input
                            type="radio"
                            name="shape"
                            value={value}
                            id={`shape-${value}`}
                            checked={product.dimensions.shape === value}
                            onChange={() => handleShapeChange(value)}
                        />
                        <label htmlFor={`shape-${value}`}>
                            <span className={styles.shapeRadio}>
                                <img
                                    src={`/images/photo${index + 1}.svg`}
                                    alt={label}
                                />
                            </span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableShape;
