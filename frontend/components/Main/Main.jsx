'use client';

import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import Button from '../Button/Button';
import styles from './Main.module.scss';

const Main = () => {
    const { scrollY } = useViewportScroll();
    const arrowOpacity = useTransform(scrollY, [0, 100], [1, 0]);
    const [isAnimating, setIsAnimating] = useState(true);
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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
                    <motion.div 
                        className={`${styles.mainPart2Wrapper} ${ styles.shake}`}
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
                    >
                        <Button 
                            link="#calculator" 
                            text="Хочу замовити!" 
                            type="primary" 
                        />
                    </motion.div>
                    <motion.div
                        className={styles.mainArrow}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 1 }}
                        style={{ opacity: arrowOpacity }}
                    >
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <IoIosArrowDown style={{ fontSize: '2rem', color: '#7360f2' }} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Main;