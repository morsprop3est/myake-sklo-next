import React from 'react';
import styles from './WhyUs.module.scss';

const WhyUs = () => {
    return (
        <section className={styles.whyUs} id="advantages">
            <div className={styles.container}>
                <div className={styles.whyUsHeader}>
                    3 причини обрати нас
                </div>
                <div className={styles.whyUsWrapper}>
                    <div className={styles.whyUsItemHorizontal}>
                        <p>6+</p>
                        <div className={styles.whyUsItemHorizontalText}>
                            років на ринку
                        </div>
                    </div>
                    <div
                        className={styles.whyUsLine}>
                        <svg width="2" height="76" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.5L1 75.5" stroke="#E2AE53" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className={styles.whyUsItemVertical}>
                        <p>150.000+</p>
                        <div className={styles.whyUsItemVerticalText}>
                            відгуків на ринку
                        </div>
                    </div>
                    <div
                        className={styles.whyUsLine}>
                        <svg width="2" height="76" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.5L1 75.5" stroke="#E2AE53" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className={styles.whyUsItemVertical}>
                        <p>98%</p>
                        <div className={styles.whyUsItemVerticalText}>
                            позитивних відгуків
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
