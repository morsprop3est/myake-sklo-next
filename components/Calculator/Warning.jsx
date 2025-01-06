import React from 'react';
import styles from './Calculator.module.scss';

const Warning = () => {
    return (
        <div className={styles.warningWrapper}>
            <div>
                <h2>УВАГА!</h2>
                <p>
                    Для столів із гладкою, полірованою, скляною поверхнею або меблів
                    Ikea/Jysk рекомендуємо рифлене покриття. Глянцеве може утворювати
                    сині плями та повітряні бульбашки.
                </p>
            </div>
        </div>
    );
};

export default Warning;
