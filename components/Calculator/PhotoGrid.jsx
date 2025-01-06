import React from 'react';
import styles from './Calculator.module.scss';

const PhotoGrid = () => {
    return (
        <div className={styles.calculatorWrapper}>
            <div className={styles.menu} data-aos="zoom-in">
                {['calculator', 'photo1', 'photo2', 'photo3', 'photo4'].map((type, index) => (
                    <button className={styles.menuBtn} data-type={type} key={index}>
                        <img
                            src={`catalog/view/theme/myakesklo/assets/images/calculator-${type}.jpg`}
                            alt={`Фото ${index + 1}`}
                            data-aos="zoom-in"
                        />
                    </button>
                ))}
            </div>

            <div className={styles.displayArea} data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500">
                <div className={styles.gridDisplay}>
                    <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                        <rect id="table-rect" width="200" height="100" fill="none" stroke="#000" ry="25" />
                    </svg>
                    <div id="grid"></div>
                </div>

                <div className={styles.photoDisplay} style={{ display: 'none' }}>
                    <img
                        src="catalog/view/theme/myakesklo/assets/images/calculator-icon.jpg"
                        alt="Фото 1"
                        className={styles.photo}
                    />
                </div>
            </div>
        </div>
    );
};

export default PhotoGrid;
