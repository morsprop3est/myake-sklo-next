import React from 'react';
import Image from 'next/image';
import styles from './WhatWeOffer.module.scss';

const WhatWeOffer = () => {
    return (
        <section className={styles.whatWeOffer} id="about-us">
            <div className={styles.container}>
                <div className={styles.whatWeOfferHeader}>
                    Що ми пропонуємо?
                </div>
                <div className={styles.whatWeOfferText}>
                    Ми пропонуємо м’яке скло найвищої якості, яке ефективно захищає меблі від подряпин, плям, вологи та
                    впливу високих температур, зберігаючи їх первинний вигляд і продовжуючи термін служби.
                </div>
                <div className={styles.whatWeOfferItemWrapper}>
                    <div className={styles.whatWeOfferItem}>
                        <div className={styles.whatWeOfferVerticalItem}>
                            <Image
                                src="/images/what-we-offer-photo1.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                            />
                            <h4>Надійність та довговічність</h4>
                            <ul>
                                <li>Термін використання 5–7 років без втрати властивостей</li>
                                <li>Майже неможливо прорізати чи проколоти</li>
                                <li>Стійкий до подряпин, вологи та плям, не деформується та не вздувається</li>
                            </ul>
                        </div>

                        <div className={styles.whatWeOfferVerticalItem}>
                            <Image
                                src="/images/what-we-offer-photo2.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                            />
                            <h4>Стійкість до температур</h4>
                            <ul>
                                <li>Витримує температури до 70°C без пошкоджень</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.whatWeOfferItem} ${styles.whatWeOfferItem1Order}`}>
                        <Image
                            src="/images/what-we-offer-main-photo.png"
                            alt="logo"
                            height={400}
                            width={600}
                            layout="intrinsic"
                        />
                    </div>

                    <div className={styles.whatWeOfferItem}>
                        <div className={styles.whatWeOfferVerticalItem}>
                            <Image
                                src="/images/what-we-offer-photo3.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                            />
                            <h4>Прозорість та естетика</h4>
                            <ul>
                                <li>Не жовтіє і не мутніє під впливом сонця</li>
                                <li>Зберігає оригінальний вигляд поверхні, підкреслюючи її дизайн</li>
                            </ul>
                        </div>

                        <div className={styles.whatWeOfferVerticalItem}>
                            <Image
                                src="/images/what-we-offer-photo4.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                            />
                            <h4>Екологічність та безпека</h4>
                            <ul>
                                <li>Безпечне для використання на кухні та в зонах з високою температурою</li>
                                <li>Підходить для контакту з харчовими продуктами, не виділяючи шкідливих речовин</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeOffer;
