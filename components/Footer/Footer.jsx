import React from 'react';
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
                        <div className={styles.footerLeft} data-aos="zoom-in">
                            <p>Надійний захист виробничих, побутових та домашніх поверхонь від зовнішніх пошкоджень.</p>
                        </div>
                        <div className={styles.footerCenter} data-aos="zoom-in">
                            <ul className={styles.navList}>
                                <li><a href="#">Головна</a></li>
                                <li><a href="#">Переваги</a></li>
                                <li><a href="#">Про нас</a></li>
                                <li><a href="#">Відгуки</a></li>
                                <li><a href="#">Контакти</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerRight}>
                            <div className={styles.footerRightWrapper} data-aos="zoom-in" data-aos-duration="500">
                                <div className={styles.footerRightItem}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4635 9.53298L10.0839 9.91551C10.0839 9.91551 9.18174 10.8249 6.71924 8.34265C4.25676 5.86044 5.15891 4.95105 5.15891 4.95105L5.39791 4.71012C5.98674 4.11661 6.04224 3.16373 5.52849 2.46809L4.47771 1.04509C3.84189 0.184096 2.6133 0.0703596 1.88454 0.804954L0.57654 2.12344C0.21519 2.48769 -0.0269598 2.95986 0.00240683 3.48366C0.0775318 4.8237 0.675589 7.70693 4.01279 11.0709C7.55174 14.6382 10.8723 14.7799 12.2302 14.6516C12.6597 14.611 13.0332 14.3893 13.3342 14.0858L14.5181 12.8926C15.3172 12.0871 15.0918 10.7062 14.0694 10.1428L12.4773 9.26535C11.806 8.8954 10.9882 9.00405 10.4635 9.53298Z" fill="#222831"/>
                                    </svg>
                                    <p>+38(073) 400-94-08</p>
                                </div>
                                <div className={styles.footerRightItem}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4635 9.53298L10.0839 9.91551C10.0839 9.91551 9.18174 10.8249 6.71924 8.34265C4.25676 5.86044 5.15891 4.95105 5.15891 4.95105L5.39791 4.71012C5.98674 4.11661 6.04224 3.16373 5.52849 2.46809L4.47771 1.04509C3.84189 0.184096 2.6133 0.0703596 1.88454 0.804954L0.57654 2.12344C0.21519 2.48769 -0.0269598 2.95986 0.00240683 3.48366C0.0775318 4.8237 0.675589 7.70693 4.01279 11.0709C7.55174 14.6382 10.8723 14.7799 12.2302 14.6516C12.6597 14.611 13.0332 14.3893 13.3342 14.0858L14.5181 12.8926C15.3172 12.0871 15.0918 10.7062 14.0694 10.1428L12.4773 9.26535C11.806 8.8954 10.9882 9.00405 10.4635 9.53298Z" fill="#222831"/>
                                    </svg>
                                    <p>+38(067) 200-93-87</p>
                                </div>
                                <div className={styles.footerRightItem}>
                                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 3.24V10.5C15 10.8978 14.842 11.2794 14.5607 11.5607C14.2794 11.842 13.8978 12 13.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V3.5175L7.14 7.41C7.25057 7.46968 7.37436 7.50063 7.5 7.5C7.63206 7.49863 7.76143 7.46241 7.875 7.395L13.5 4.1175L15 3.24Z" fill="#222831"/>
                                        <path d="M15 1.5L13.5 2.385L7.5 5.8875L1.5 2.625L0 1.8V1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H13.5C13.8978 0 14.2794 0.158035 14.5607 0.43934C14.842 0.720644 15 1.10218 15 1.5Z" fill="#222831"/>
                                    </svg>
                                    <p>myagkoyesteklo@gmail.com</p>
                                </div>
                                <div className={styles.footerRightButtons}>
                                    <div className={styles.roundedButton}></div>
                                    <div className={styles.roundedButton}></div>
                                    <div className={styles.roundedButton}></div>
                                    <button className={styles.btnCalculator}>Калькулятор</button>
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
