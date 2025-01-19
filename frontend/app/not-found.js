'use client';
import React from 'react';
import Link from 'next/link';
import styles from './NotFound.module.scss';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className={styles.notFound}>
            <h1>404 - Сторінка не знайдена</h1>
            <p>Вибачте, але сторінка, яку ви шукаєте, не існує.</p>
            <Link href="/" legacyBehavior>
                <a className={styles.homeLink}>Повернутися на головну</a>
            </Link>
        </div>
    );
};

export default NotFoundPage;