import React from 'react';
import { motion } from 'framer-motion';
import { FaViber, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import styles from './Header.module.scss';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <motion.div
                className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 0.5 : 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                onClick={toggleMenu}
            />
            <motion.nav
                className={`${styles.mobileNav} ${isOpen ? styles.active : ''}`}
                initial={{ right: '-400px' }}
                animate={{ right: isOpen ? '0' : '-400px' }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
            >

                <ul className={styles.navList}>
                    <li><a href="#home" onClick={toggleMenu}>Головна</a></li>
                    <li><a href="#about" onClick={toggleMenu}>Наші переваги</a></li>
                    <li><a href="#services" onClick={toggleMenu}>Про скло</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Контакти</a></li>
                    <li><a href="#reviews" onClick={toggleMenu}>Відгуки</a></li>
                    <li><a href="#quick-buy" onClick={toggleMenu}>Швидка покупка</a></li>
                    <a href="#calculator" className={styles.btnCalculator} onClick={toggleMenu}>Калькулятор</a>
                </ul>
                <div className={styles.socialMedia}>
                    <div className={styles.contactUsRoundedButton}>
                        <FaViber style={{ fontSize: '1.5rem', color: '#7360f2' }} />
                    </div>
                    <div className={styles.contactUsRoundedButton}>
                        <FaTelegramPlane  style={{ fontSize: '1.5rem', color: '#7360f2' }} />
                    </div>
                    <div className={styles.contactUsRoundedButton}>
                        <FaInstagram  style={{ fontSize: '1.5rem', color: '#7360f2' }} />
                    </div>
                </div>
            </motion.nav>
        </>
    );
};

export default MobileNav;