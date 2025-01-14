import React from 'react';
import FastBuyCard from './FastBuyCard';
import styles from './FastBuy.module.scss';

const FastBuy = () => {
    const cards = [
        {
            imageSrc: "/images/fast-buy-photo1.jpg",
            title: "Глянцеве скло",
            features: [
                'Зроблено в Україні',
                'Безкоштовна доставка від 2000 грн при повній оплаті',
                'Стійкий до температур до 70°C',
                'Еластичний, повторює форму поверхні',
            ],
            inputValues: { length: 200, width: 100 }
        },
        {
            imageSrc: "/images/fast-buy-photo1.jpg",
            title: "Глянцеве скло",
            features: [
                'Зроблено в Україні',
                'Безкоштовна доставка від 2000 грн при повній оплаті',
                'Стійкий до температур до 70°C',
                'Еластичний, повторює форму поверхні',
            ],
            inputValues: { length: 200, width: 100 }
        },
        {
            imageSrc: "/images/fast-buy-photo1.jpg",
            title: "Глянцеве скло",
            features: [
                'Зроблено в Україні',
                'Безкоштовна доставка від 2000 грн при повній оплаті',
                'Стійкий до температур до 70°C',
                'Еластичний, повторює форму поверхні',
            ],
            inputValues: { length: 200, width: 100 }
        }
    ];

    return (
        <section className={styles.fastBuy}>
            <div className={styles.container}>
                <h6 className={styles.fastBuyHeader}>
                    Швидка покупка
                </h6>
                <div className={styles.fastBuyWrapper}>
                    {cards.map((card, index) => (
                        <FastBuyCard
                            key={index}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            features={card.features}
                            inputValues={card.inputValues}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FastBuy;