import React from 'react';
import styles from './WhyUs.module.scss';

const WhyUs = () => {
    return (
        <section className={styles.whyUs} id="advantages">
            <div className={styles.container}>
                <div className={styles.whyUsHeader}
                     data-aos="zoom-in"
                     data-aos-offset="200"
                     data-aos-duration="400">
                    3 причини обрати нас
                </div>
                <div className={styles.whyUsWrapper}>
                    <div className={styles.whyUsItemHorizontal}
                         data-aos="fade-up"
                         data-aos-offset="150"
                         data-aos-duration="400">
                        <p>6+</p>
                        <div className={styles.whyUsItemHorizontalText}>
                            років на ринку
                        </div>
                    </div>
                    <div
                        className={styles.whyUsLine}
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-duration="450">
                        <svg width="2" height="76" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.5L1 75.5" stroke="#E2AE53" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className={styles.whyUsItemVertical}
                         data-aos="fade-up"
                         data-aos-offset="200"
                         data-aos-duration="500">
                        <p>150.000+</p>
                        <div className={styles.whyUsItemVerticalText}>
                            відгуків на ринку
                        </div>
                    </div>
                    <div
                        className={styles.whyUsLine}
                        data-aos="fade-up"
                        data-aos-offset="50"
                        data-aos-duration="550">
                        <svg width="2" height="76" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.5L1 75.5" stroke="#E2AE53" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className={styles.whyUsItemVertical}
                         data-aos="fade-up"
                         data-aos-offset="400"
                         data-aos-duration="600">
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
