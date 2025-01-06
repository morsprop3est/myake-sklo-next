import React from 'react';
import FastBuyCard from './FastBuyCard';
import styles from './FastBuy.module.scss';

const FastBuy = () => {
    return (
        <section className={styles.fastBuy}>
            <div className={styles.container}>
                <h6
                    className={styles.fastBuyHeader}
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-duration="500"
                >
                    Швидка покупка
                </h6>
                <div className={styles.fastBuyWrapper}>
                    <FastBuyCard
                        imageSrc="/images/fast-buy-photo1.jpg"
                        title="Глянцеве скло"
                        features={[
                            'Зроблено в Україні',
                            'Безкоштовна доставка від 2000 грн при повній оплаті',
                            'Стійкий до температур до 70°C',
                            'Еластичний, повторює форму поверхні',
                        ]}
                        inputValues={{ length: 200, width: 100 }}
                    />
                    <FastBuyCard
                        imageSrc="/images/fast-buy-photo1.jpg"
                        title="Глянцеве скло"
                        features={[
                            'Зроблено в Україні',
                            'Безкоштовна доставка від 2000 грн при повній оплаті',
                            'Стійкий до температур до 70°C',
                            'Еластичний, повторює форму поверхні',
                        ]}
                        inputValues={{ length: 200, width: 100 }}
                    />
                    <FastBuyCard
                        imageSrc="/images/fast-buy-photo1.jpg"
              ё          title="Глянцеве скло"
                        features={[
                            'Зроблено в Україні',
                            'Безкоштовна доставка від 2000 грн при повній оплаті',
                            'Стійкий до температур до 70°C',
                            'Еластичний, повторює форму поверхні',
                        ]}
                        inputValues={{ length: 200, width: 100 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default FastBuy;
