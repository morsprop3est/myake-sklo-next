import React from 'react';
import Image from 'next/image';
import styles from './Reviews.module.scss';

const ReviewCard = ({ review }) => {
    const { name, rating, text } = review;
    const stars = Array.from({ length: 5 }, (_, index) => (
        <Image
            key={index}
            src="/images/review-star.svg"
            alt="Star"
            width={10}
            height={10}
            className={index < rating ? styles.filledStar : ''}
        />
    ));

    return (
        <div className={styles.reviewContainer}>
            <h6>{name}</h6>
            <div className={styles.reviewStars}>{stars}</div>
            <p>{text}</p>
        </div>
    );
};

export default ReviewCard;