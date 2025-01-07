import React from 'react';
import styles from '../Calculator.module.scss';

const GlassThickness = ({ glassThickness, setThickness }) => {
    const thicknessOptions = ['thin', 'thick'];

    return (
        <div className={styles.calculatorItemWrapper}>
            <div className={styles.calculatorHeader}>
                <h6>Товщина скла</h6>
            </div>
            <div className={styles.tableThickness}>
                {thicknessOptions.map((thickness) => (
                    <div className={styles.tableThicknessItem} key={thickness}>
                        <input
                            type="radio"
                            name="glassThickness"
                            value={thickness}
                            id={`thickness-${thickness}`}
                            checked={glassThickness === thickness}
                            onChange={() => setThickness(thickness)}
                        />
                        <label htmlFor={`thickness-${thickness}`}>
                            <span className={styles.shapeRadio}>{thickness === 'thin' ? '1.5мм' : '2мм'}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlassThickness;
