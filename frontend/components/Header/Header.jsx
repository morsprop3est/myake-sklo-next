'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <motion.header
            className={styles.siteHeader}
            initial={{ opacity: 0, translateY: -200 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 120, damping: 25 }} // Більш пружний ефект
        >
            <div className={styles.headerInner}>
                <div className={styles.container}>
                    <div className={styles.headerWrapper}>
                        <motion.div
                            className={styles.headerLeft}
                            initial={{ opacity: 0, translateY: -200 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                duration: 1.5,
                                type: 'spring',
                                stiffness: 120,
                                damping: 25,
                                delay: 1.8, 
                            }}
                        >
                            <a href="#" className={styles.headerLogo}>
                                <Image
                                    src="/images/logo.svg"
                                    alt="Logo"
                                    width={100}
                                    height={50}
                                    loading="lazy"
                                />
                            </a>
                        </motion.div>
                        <motion.nav
                            className={styles.mainNav}
                            initial={{ opacity: 0, translateY: -200 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                duration: 1.5,
                                type: 'spring',
                                stiffness: 120, 
                                damping: 25, 
                                delay: 0.8,
                            }}
                        >
                            <ul className={styles.navList}>
                                <li><a href="#main">Головна</a></li>
                                <li><a href="#advantages">Переваги</a></li>
                                <li><a href="#about-us">Про скло</a></li>
                                <li><a href="#contact-us">Контакти</a></li>
                                <li><a href="#reviews">Відгуки</a></li>
                                <li><a href="#calculator" className={styles.btnCalculator}>Калькулятор</a></li>
                            </ul>
                        </motion.nav>

                        <motion.button
                            className={styles.burgerMenu}
                            aria-label="Menu"
                            initial={{ opacity: 0, translateY: -200 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                duration: 1.5,
                                type: 'spring',
                                stiffness: 120,
                                damping: 25,
                                delay: 1.1, // Затримка для кнопки меню
                            }}
                        >
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
