'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import MobileNav from './MobileNav';
import styles from './Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll(); 
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 5) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <motion.header
            className={styles.siteHeader}
            initial={{ opacity: 0, translateY: -100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                translateY: isVisible ? 0 : -100,
            }}
            transition={{
                duration: 0.1,
                ease: 'easeInOut',
            }}
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
                            <img src="/images/logo.svg" alt="Logo" className={styles.headerLogo} />
                        </motion.div>
                        <nav className={styles.mainNav}>
                            <ul className={styles.navList}>
                                <li><a href="#home">Головна</a></li>
                                <li><a href="#about">Наші переваги</a></li>
                                <li><a href="#services">Про скло</a></li>
                                <li><a href="#contact">Контакти</a></li>
                                <li><a href="#reviews">Відгуки</a></li>
                            </ul>
                            <a href="#calculator" className={styles.btnCalculator}>Калькулятор</a>
                        </nav>
                        
                        <motion.button
                            className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ''}`}
                            onClick={toggleMenu}
                            initial={{ opacity: 0, translateY: -200 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                duration: 1.5,
                                type: 'spring',
                                stiffness: 120,
                                damping: 25,
                                delay: 1.1,
                            }}
                        >
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                        </motion.button>
                    </div>
                </div>
            </div>
            <MobileNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </motion.header>
    );
};

export default Header;
