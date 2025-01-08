// components/Reviews.js
import React from 'react';
import ReviewCard from './ReviewCard';
import reviewsData from '@/data/reviewData.json';
import styles from './Reviews.module.scss';

const Reviews = () => {
    return (
        <section className={styles.reviews} id="reviews">
            <div className={styles.container}>
                <h2 className={styles.reviewsHeader}>
                    Відгуки клієнтів
                </h2>
                <div className={styles.reviewsWrapper}>
                    {reviewsData.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
