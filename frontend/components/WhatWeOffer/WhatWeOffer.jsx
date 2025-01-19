'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhatWeOffer.module.scss';

const WhatWeOffer = () => {
    return (
        <section className={styles.whatWeOffer} id="what-we-offer">
            <div className={styles.container}>
                <motion.div
                    className={styles.whatWeOfferHeader}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Що ми пропонуємо?
                </motion.div>
                <motion.div
                    className={styles.whatWeOfferText}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Ми пропонуємо м’яке скло найвищої якості, яке ефективно захищає меблі від подряпин, плям, вологи та
                    впливу високих температур, зберігаючи їх первинний вигляд і продовжуючи термін служби.
                </motion.div>
                <div className={styles.whatWeOfferItemWrapper}>
                    <motion.div
                        className={styles.whatWeOfferItem}
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        <motion.div
                            className={styles.whatWeOfferVerticalItem}
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        >
                            <Image
                                src="/images/what-we-offer-photo1.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                                loading="lazy"
                            />
                            <h4>Надійність та довговічність</h4>
                            <ul>
                                <li>Термін використання 5–7 років без втрати властивостей</li>
                                <li>Майже неможливо прорізати чи проколоти</li>
                                <li>Стійкий до подряпин, вологи та плям, не деформується та не вздувається</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className={styles.whatWeOfferVerticalItem}
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        >
                            <Image
                                src="/images/what-we-offer-photo2.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                                loading="lazy"
                            />
                            <h4>Стійкість до температур</h4>
                            <ul>
                                <li>Витримує температури до 70°C без пошкоджень</li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={`${styles.whatWeOfferItem} ${styles.whatWeOfferItem1Order}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        <Image
                            src="/images/what-we-offer-main-photo.png"
                            alt="logo"
                            width={580}
                            height={600}
                            className={styles.mainImage}
                            priority
                        />
                    </motion.div>
                    <motion.div
                        className={styles.whatWeOfferItem}
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                    >
                        <motion.div
                            className={styles.whatWeOfferVerticalItem}
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        >
                            <Image
                                src="/images/what-we-offer-photo3.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                                loading="lazy"
                                className={styles.whatWeOfferVerticalItemImage}
                            />
                            <h4>Прозорість та естетика</h4>
                            <ul>
                                <li>Не жовтіє і не мутніє під впливом сонця</li>
                                <li>Зберігає оригінальний вигляд поверхні, підкреслюючи її дизайн</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className={styles.whatWeOfferVerticalItem}
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                        >
                            <Image
                                src="/images/what-we-offer-photo4.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                                loading="lazy"
                            />
                            <h4>Екологічність та безпека</h4>
                            <ul>
                                <li>Безпечне для використання на кухні та в зонах з високою температурою</li>
                                <li>Підходить для контакту з харчовими продуктами, не виділяючи шкідливих речовин</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
