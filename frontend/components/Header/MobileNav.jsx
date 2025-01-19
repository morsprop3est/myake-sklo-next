import React from 'react';
import { motion } from 'framer-motion';
import { FaViber, FaFacebook, FaInstagram } from 'react-icons/fa';
import Button from '../Button/Button';
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
                    <li><a href="#why-us" onClick={toggleMenu}>Наші переваги</a></li>
                    <li><a href="#what-we-offer" onClick={toggleMenu}>Про скло</a></li>
                    <li><a href="#contact-us" onClick={toggleMenu}>Контакти</a></li>
                    <li><a href="#reviews" onClick={toggleMenu}>Відгуки</a></li>
                    <li><a href="#fast-buy" onClick={toggleMenu}>Швидка покупка</a></li>
                    <Button link="#calculator" text="Калькулятор" type="primary" onClick={toggleMenu} />
                </ul>
                <div className={styles.socialMedia}>
                    <a href="viber://chat?number=%2B380630407755" className={styles.contactUsRoundedButton}>
                        <FaViber />
                    </a>
                    <a href="https://www.facebook.com/myagkoye.steklo" className={styles.contactUsRoundedButton}>
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/myakesklo.com.ua" className={styles.contactUsRoundedButton}>
                        <FaInstagram />
                    </a>
                </div>
            </motion.nav>
        </>
    );
};

export default MobileNav;