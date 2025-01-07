import React from 'react';
import styles from './Calculator.module.scss';

const PhotoGrid = ({ tableDimensions, glassType, glassThickness }) => {
    const { width, height, radius } = tableDimensions;

    const shapeStyles = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
    };

    const generateGrid = () => {
        const rows = 20;
        const columns = 20;
        const gridItems = [];

        for (let i = 0; i < rows; i++) {
            gridItems.push(
                <div
                    key={`h-${i}`}
                    className={`${styles.gridLine} ${styles.horizontal}`}
                    style={{ top: `${(i * 100) / (rows - 1)}%` }}
                />
            );
        }

        for (let i = 0; i < columns; i++) {
            gridItems.push(
                <div
                    key={`v-${i}`}
                    className={`${styles.gridLine} ${styles.vertical}`}
                    style={{ left: `${(i * 100) / (columns - 1)}%` }}
                />
            );
        }

        return gridItems;
    };

    return (
        <div className={styles.photoGridWrapper}>
            <div className={styles.menu} data-aos="zoom-in">
                {['icon', 'photo1', 'photo2', 'photo3', 'photo4'].map((type, index) => (
                    <button className={styles.menuBtn} data-type={type} key={index}>
                        <img
                            src={`/images/calculator-${type}.jpg`}
                            alt={`Фото ${index + 1}`}
                            data-aos="zoom-in"
                        />
                    </button>
                ))}
            </div>

            <div className={styles.displayArea} data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500">
                <div className={styles.gridDisplayWrapper}>
                    <div
                        className={`${styles.tableShape} ${styles[glassType]} ${styles[glassThickness]}`}
                        style={shapeStyles}
                    >
                    </div>

                    <div className={styles.gridDisplay}>
                        {generateGrid()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGrid;
