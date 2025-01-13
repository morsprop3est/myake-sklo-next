import React from 'react';
import styles from '../Calculator.module.scss';

const GlassThickness = ({ product, setProduct }) => {
    const thicknessOptions = ['thin', 'thick'];

    const handleThicknessChange = (thickness) => {
        setProduct({ ...product, dimensions: { ...product.dimensions, glassThickness: thickness } });
    };

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
                            checked={product.dimensions.glassThickness === thickness}
                            onChange={() => handleThicknessChange(thickness)}
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
