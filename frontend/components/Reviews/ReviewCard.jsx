'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Reviews.module.scss';

const ReviewCard = ({ review, index }) => {
    const { name, rating, text } = review;
    const stars = Array.from({ length: 5 }, (_, index) => (
        <Image
            key={index}
            src="/images/review-star.svg"
            alt="Star"
            width={10}
            height={10}
            loading="lazy"
            className={index < rating ? styles.filledStar : ''}
        />
    ));

    return (
        <motion.div
            className={styles.reviewContainer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
        >
            <h6>{name}</h6>
            <div className={styles.reviewStars}>{stars}</div>
            <p>{text}</p>
        </motion.div>
    );
};

export default ReviewCard;