import React from 'react';
import styles from '../Calculator.module.scss';

const TableShape = ({ shape, setShape }) => {
    const shapeOptions = [
        { label: 'Прямокутник', value: 'rectangle' },
        { label: 'Круг', value: 'round' },
        { label: 'Овал', value: 'oval' },
        { label: 'Зі скругленням', value: 'rounded' },
    ];

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
                            checked={shape === value}
                            onChange={() => setShape(value)}
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
