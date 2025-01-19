'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import MobileNav from './MobileNav';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll(); 
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!isMenuOpen) {
                if (currentScrollY > lastScrollY && currentScrollY > 5) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }

                if (currentScrollY > 400) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMenuOpen]);

    return (
        <motion.header
            className={`${styles.siteHeader} ${isScrolled ? styles.scrolled : ''}`}
            initial={{ opacity: 0, translateY: -100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                translateY: isVisible ? 0 : -100,
            }}
            transition={{
                duration: 0.3,
                ease: 'easeInOut',
            }}
        >
            <div className={styles.headerInner}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.headerWrapper}
                        initial={{ opacity: 0, translateY: -50 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            duration: 1.5,
                            type: 'spring',
                            stiffness: 120,
                            damping: 25,
                            delay: 1,
                        }}
                    >
                        <div
                            className={styles.headerLeft}
                        >
                            <img src="/images/logo.svg" alt="Logo" className={styles.headerLogo} />
                        </div>
                        <nav className={styles.mainNav}>
                            <ul className={styles.navList}>
                                <li><a href="#home">Головна</a></li>
                                <li><a href="#why-us">Наші переваги</a></li>
                                <li><a href="#what-we-offer">Про скло</a></li>
                                <li><a href="#contact-us">Контакти</a></li>
                                <li><a href="#reviews">Відгуки</a></li>
                            </ul>
                            <Button link="#calculator" text="Калькулятор" type="white" />
                        </nav>
                        
                        <motion.button
                            className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ''}`}
                            onClick={toggleMenu}
                        >
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
            <MobileNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </motion.header>
    );
};

export default Header;