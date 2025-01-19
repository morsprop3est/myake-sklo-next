import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const SuccessPage = () => {
    return (
        <div className={styles.success}>
            <h2>Оплата успішна</h2>
            <p>Дякуємо за вашу покупку! Ваше замовлення було успішно оброблено.</p>
            <Link href="/" legacyBehavior>
                <a className={styles.successLink}>Повернутися на головну</a>
            </Link>
        </div>
    );
};

export default SuccessPage;