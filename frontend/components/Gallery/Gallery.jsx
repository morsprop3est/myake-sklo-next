'use client';

import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import { motion } from 'framer-motion';
import galleryData from '@/data/galleryData';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleNext = () => {
        const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % galleryData.length;
        setSelectedImage(galleryData[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        setSelectedImage(galleryData[prevIndex]);
    };

    return (
        <motion.div
            className={styles.gallery}
            initial={{ opacity: 0, y: 100 }} // Початковий стан
            whileInView={{ opacity: 1, y: 0 }} // Стан, коли компонент у полі зору
            viewport={{ once: true, amount: 0.2 }} // Анімація лише один раз при скролі
            transition={{ duration: 0.8 }} // Тривалість анімації
        >
            <div className={styles.container}>
                <div className={styles.galleryHeader}>
                    <h2>Галерея</h2>
                </div>
                <div className={styles.galleryGrid}>
                    {galleryData.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className={styles.galleryItem}
                            onClick={() => handleImageClick(image)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2, // Затримка на основі індексу
                            }}
                            viewport={{ once: true }} // Анімація лише один раз при скролі
                        >
                            <img src={image.url} alt={image.comment} />
                        </motion.div>
                    ))}
                </div>
                {selectedImage && (
                    <div className={styles.lightbox}>
                        <div className={styles.lightboxContent}>
                            <button className={styles.closeButton} onClick={handleClose}>×</button>
                            <button className={styles.prevButton} onClick={handlePrev}>‹</button>
                            <img src={selectedImage.url} alt={selectedImage.comment} />
                            <button className={styles.nextButton} onClick={handleNext}>›</button>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Gallery;
