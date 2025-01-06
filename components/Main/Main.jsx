import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
    return (
        <section className={styles.main} id="main">
            <div className={styles.mainPart1}>
                <div className={styles.container}>
                    <div
                        className={styles.mainPart1Wrapper}
                        data-aos="fade-in"
                        data-aos-duration="1000"
                    >
                        <h1
                            className={styles.mainH1}
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            Офіційний виробник М'якого Скла в Україні
                        </h1>
                        <p
                            className={styles.mainP}
                            data-aos="fade-right"
                            data-aos-duration="1200"
                        >
                            Захистіть ваші виробничі, побутові та домашні поверхні від зовнішніх
                            пошкоджень
                        </p>
                    </div>
                </div>

                <div className={styles.mainDecoration1}>
                    <img
                        src="images/main-background-decoration-1.png"
                        alt=""
                    />
                </div>

                <div className={styles.mainDecoration2}>
                    <img
                        src="images/main-background-decoration-2.png"
                        alt=""
                    />
                </div>
                <div
                    className={styles.mainImageWrapper}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <img
                        src="images/main-image.png"
                        alt="main-image"
                    />
                </div>
            </div>

            <div className={styles.mainPart2}>
                <div className={styles.container}>
                    <div
                        className={styles.mainPart2Wrapper}
                        data-aos="zoom-in"
                        data-aos-duration="500"
                    >
                        <a href="#calculator">
                            <div className={styles.mainButton}>Хочу замовити!</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
