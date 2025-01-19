'use client'

import React from 'react';
import Image from 'next/image';
import { FaViber, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
    return (
        <motion.section
            className={styles.contactUs}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className={styles.container}>
                <div className={styles.contactUsWrapper}>
                    <div className={styles.contactUsPart1} id="contact-us">
                        <div className={styles.contactUsText}>
                            <h6 className={styles.contactUsHeader}>Зворотній зв’язок</h6>
                            <p>Якщо ви зацікавлені у співпраці з нами, ми будемо раді обговорити можливості для взаємодії.</p>
                        </div>
                        <div className={styles.contactUsImage}>
                            <Image src="/images/contact-us-photo.png" alt="" width={232} height={232} loading="lazy"/>
                        </div>
                    </div>
                    <div className={styles.contactUsPart2}>
                        <div className={styles.contactUsLeft}>
                            <form className={styles.contactForm}>
                                <label htmlFor="name">Ваше ім’я</label>
                                <input type="text" id="name" name="name" placeholder="Введіть ім’я" required />
                                <label htmlFor="email">Ваша пошта</label>
                                <input type="email" id="email" name="email" placeholder="Введіть пошту" required />
                                <label htmlFor="message">Ваше повідомлення</label>
                                <textarea id="message" name="message" placeholder="Введіть повідомлення" required></textarea>
                                <Button 
                                    link="#" 
                                    text="Відправити" 
                                    type="primary" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // Додайте логіку для обробки форми тут
                                    }} 
                                />
                            </form>
                        </div>
                        <div className={styles.contactUsRight}>
                            <div className={styles.contactUsItem}>
                                <div className={styles.contactUsItemImage}>
                                    <Image src="/images/contact-us-photo1.svg" alt="" width={25} height={25} loading="lazy"/>
                                </div>
                                <div>
                                    <h6>Наша адреса</h6>
                                    <p>м.Рівне вул.Володимира Стельмаха 11</p>
                                </div>
                            </div>
                            <div className={styles.contactUsItem}>
                                <div className={styles.contactUsItemImage}>
                                    <Image src="/images/contact-us-photo2.svg" alt="" width={25} height={25} loading="lazy"/>
                                </div>
                                <div>
                                    <h6>Телефони</h6>
                                    <p>+38(067) 200-93-87</p>
                                    <p>+38(073) 400-94-08</p>
                                </div>
                            </div>
                            <div className={styles.contactUsItem}>
                                <div className={styles.contactUsItemImage}>
                                    <Image src="/images/contact-us-photo3.svg" alt="" width={25} height={25} loading="lazy"/>
                                </div>
                                <div>
                                    <h6>Робочі години</h6>
                                    <p>Працюємо з 9:00 до 17:00</p>
                                    <p>ПН - ПТ</p>
                                </div>
                            </div>
                            <div className={styles.contactUsItem}>
                                <div className={styles.contactUsItemImage}>
                                    <Image src="/images/contact-us-photo4.svg" alt="" width={25} height={25} loading="lazy"/>
                                </div>
                                <div>
                                    <h6>Електронна пошта</h6>
                                    <p>myagkoyesteklo@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.contactUsItemExtended}>
                                <h6>Соціальні мережі</h6>
                                <div className={styles.contactUsRoundedButtonWrapper}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactUs;