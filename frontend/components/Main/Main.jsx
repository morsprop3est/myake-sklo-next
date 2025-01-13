'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Main.module.scss';

const Main = () => {
    return (
        <section className={styles.main} id="main">
            <motion.div
                className={styles.mainPart1}
                initial={{ translateY: -600 }}
                animate={{ translateY: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className={styles.container}>
                    <div className={styles.mainPart1Wrapper}>
                        <motion.h1
                            className={styles.mainH1}
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                        >
                            Офіційний виробник М'якого Скла в Україні
                        </motion.h1>
                        <motion.p
                            className={styles.mainP}
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                        >
                            Захистіть ваші виробничі, побутові та домашні поверхні від зовнішніх
                            пошкоджень
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    className={styles.mainDecoration1}
                    initial={{ opacity: 0, translateX: -50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1.25 }}
                >
                    <img
                        src="images/main-background-decoration-1.png"
                        alt=""
                    />
                </motion.div>

                <motion.div
                    className={styles.mainDecoration2}
                    initial={{ opacity: 0, translateX: -50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
                >
                    <img
                        src="images/main-background-decoration-2.png"
                        alt=""
                    />
                </motion.div>

                <motion.div
                    className={styles.mainImageWrapper}
                    initial={{ translateX: 750 }}
                    animate={{ translateX: 100 }}
                    transition={{ duration: 2, ease: 'easeOut', delay: 1.75 }}
                >
                    <img
                        src="images/main-image.png"
                        alt="main-image"
                    />
                </motion.div>
            </motion.div>

            <div className={styles.mainPart2}>
                <div className={styles.container}>
                    <div className={styles.mainPart2Wrapper}>
                        <a href="#calculator">
                            <motion.div
                                className={styles.mainButton}
                                initial={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
                            >
                                Хочу замовити!
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
