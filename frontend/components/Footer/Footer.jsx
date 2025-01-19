import React from 'react';
import { FaViber, FaTelegramPlane, FaInstagram, FaPhoneAlt, FaFacebook } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import Button from '../Button/Button';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.svgLeft}>
                <img src="/images/footer-left-decoration.svg" alt="Left Decoration" />
            </div>
            <div className={styles.container}>
                <div className={styles.footerWrapper}>
                    <div className={styles.logoWrapper}>
                        <a href="#" className={styles.headerLogo}>
                            <img src="/images/logo.svg" alt="Logo" />
                        </a>
                    </div>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLeft}>
                            <p>Надійний захист виробничих, побутових та домашніх поверхонь від зовнішніх пошкоджень.</p>
                        </div>
                        <div className={styles.footerCenter}>
                            <ul className={styles.navList}>
                                <li><a href="#">Головна</a></li>
                                <li><a href="#">Переваги</a></li>
                                <li><a href="#">Про нас</a></li>
                                <li><a href="#">Відгуки</a></li>
                                <li><a href="#">Контакти</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerCenter}>
                            <ul className={styles.navList}>
                                <li><a href="#">Про нас</a></li>
                                <li><a href="#">Політика конфіденційності</a></li>
                                <li><a href="#">Публічна оферта</a></li>
                                <li><a href="#">Обмін та повернення</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerRight}>
                            <div className={styles.footerRightWrapper}>
                                <div className={styles.footerRightItem}>
                                    <FaPhoneAlt />
                                    <p>+38(073) 400-94-08</p>
                                </div>
                                <div className={styles.footerRightItem}>
                                    <FaPhoneAlt />
                                    <p>+38(067) 200-93-87</p>
                                </div>
                                <div className={styles.footerRightItem}>
                                    <IoMail />
                                    <p>myagkoyesteklo@gmail.com</p>
                                </div>
                                <div className={styles.footerRightButtons}>
                                    <a href="viber://chat?number=%2B380630407755" className={styles.contactUsRoundedButton}>
                                        <FaViber />
                                    </a>
                                    <a href="https://www.facebook.com/myagkoye.steklo" className={styles.contactUsRoundedButton}>
                                        <FaFacebook />
                                    </a>
                                    <a href="https://www.instagram.com/myakesklo.com.ua" className={styles.contactUsRoundedButton}>
                                        <FaInstagram />
                                    </a>
                                    <Button 
                                        link="#calculator" 
                                        text="Калькулятор" 
                                        type="secondary" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr color="#222831" size="1px" />
                    <p>© 2024 М’яке Скло™. Всі права захищені.</p>
                </div>
            </div>
            <div className={styles.svgRight}>
                <img src="/images/footer-right-decoration.svg" alt="Right Decoration" />
            </div>
        </footer>
    );
}

export default Footer;