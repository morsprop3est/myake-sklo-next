import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const FailedPage = () => {
    return (
        <div className={styles.failed}>
            <h2>Оплата не вдалася</h2>
            <p>На жаль, сталася помилка під час обробки вашого замовлення. Будь ласка, спробуйте ще раз.</p>
            <Link href="/" legacyBehavior>
                <a className={styles.failedLink}>Повернутися на головну</a>
            </Link>
        </div>
    );
};

export default FailedPage;