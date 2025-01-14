'use client';

import React, { useState } from 'react';
import styles from './Gallery.module.scss';
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
        <div className={styles.gallery}>
            <div className={styles.container}>
                <div className={styles.galleryHeader}>
                    <h2>
                        Галерея
                    </h2>
                </div>
                <div className={styles.galleryGrid}>
                    {galleryData.map((image) => (
                        <div key={image.id} className={styles.galleryItem} onClick={() => handleImageClick(image)}>
                            <img src={image.url} alt={image.comment} />
                        </div>
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
        </div>
    );
};

export default Gallery;