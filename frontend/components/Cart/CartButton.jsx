import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoCartOutline } from "react-icons/io5";
import styles from './Cart.module.scss';

const CartButton = ({ itemCount, onClick }) => {
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 1000); 
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (itemCount === 0) {
        return null;
    }

    return (
        <motion.button
            className={`${styles.cartButton} ${isShaking ? styles.shake : ''}`}
            onClick={onClick}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 3 }}
        >
            <div className={styles.cartLogo}>
                <IoCartOutline className={styles.cartIcon} />
            </div>
            {itemCount > 0 && <span className={styles.cartCount}>{itemCount}</span>}
        </motion.button>
    );
};

export default CartButton;