import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.headerInner}>
                <div className={styles.container}>
                    <div className={styles.headerWrapper}>
                        <div className={styles.headerLeft}>
                            <a href="#" className={styles.headerLogo}>
                                <Image
                                    src="/images/logo.svg"
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </div>

                        <nav className={styles.mainNav}>
                            <ul className={styles.navList}>
                                <li><a href="#main">Головна</a></li>
                                <li><a href="#advantages">Переваги</a></li>
                                <li><a href="#about-us">Про скло</a></li>
                                <li><a href="#contact-us">Контакти</a></li>
                                <li><a href="#reviews">Відгуки</a></li>
                                <li><a href="#calculator" className={styles.btnCalculator}>Калькулятор</a></li>
                                <li><a href="#">
                                    <div className={styles.cartLogo}><img
                                        src="/images/cart-logo.svg"
                                        alt="cart-logo"/></div>
                                </a></li>
                            </ul>
                        </nav>

                        <button className={styles.burgerMenu} aria-label="Menu">
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
