'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyUs.module.scss';

const WhyUs = () => {
    return (
        <section className={styles.whyUs} id="why-us">
            <div className={styles.container}>
                <motion.div 
                    className={styles.whyUsHeader}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    3 причини обрати нас
                </motion.div>
                <div className={styles.whyUsWrapper}>
                    <motion.div
                        className={styles.whyUsItemHorizontal}
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p>6+</p>
                        <div className={styles.whyUsItemHorizontalText}>
                            років на ринку
                        </div>
                    </motion.div>

                    <motion.div 
                        className={styles.whyUsLine}
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <svg width="2" height="76" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.5L1 75.5" stroke="#E2AE53" strokeLinecap="round"/>
                        </svg>
                    </motion.div>

                    <motion.div
                        className={styles.whyUsItemVertical}
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p>150.000+</p>
                        <div className={styles.whyUsItemVerticalText}>
                            відгуків на ринку
                        </div>
                    </motion.div>

                    <motion.div 
                        className={styles.whyUsLine}
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <svg width="2" height="76" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.5L1 75.5" stroke="#E2AE53" strokeLinecap="round"/>
                        </svg>
                    </motion.div>

                    <motion.div
                        className={styles.whyUsItemVertical}
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }} 
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p>98%</p>
                        <div className={styles.whyUsItemVerticalText}>
                            позитивних відгуків
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
