'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import CartButton from './CartButton';
import CartItem from './CartItem';
import styles from './Cart.module.scss';
import useCart from '@/hooks/useCart';

const Cart = () => {
    const { products, isLoading, addProduct, removeProduct, updateProductQuantity, loadCart } = useCart();
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        if (!isCartVisible) loadCart(); 
        setIsCartVisible(!isCartVisible);
    };

    const handleRemoveItem = (productId) => {
        removeProduct(productId);
    };

    const handleUpdateQuantity = (productId, quantity) => {
        updateProductQuantity(productId, quantity);
    };

    return (
        <div className={styles.cartContainer}>
            <CartButton itemCount={products.length} onClick={toggleCartVisibility} />

            <AnimatePresence>
                {isCartVisible && (
                    <>
                        <motion.div
                            className={styles.overlay}
                            onClick={toggleCartVisibility}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                        <motion.div
                            className={styles.cartList}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <h3>Ваші товари</h3>
                            {isLoading ? (
                                <p>Завантаження...</p>
                            ) : products.length === 0 ? (
                                <p>Корзина порожня</p>
                            ) : (
                                products.map((product) => (
                                    <CartItem
                                        key={product.product_id}
                                        product={product}
                                        onRemove={handleRemoveItem}
                                        onUpdateQuantity={handleUpdateQuantity}
                                    />
                                ))
                            )}

                            <Link href="/checkout" className={styles.orderButton}>
                                Оформити замовлення
                            </Link>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Cart;