'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CartButton from './CartButton';
import CartItem from './CartItem';
import Button from '../Button/Button';
import styles from './Cart.module.scss';
import useCart from '@/hooks/useCart';
import { getCartBySession, removeFromCart, updateItemQuantity } from '@/api/cart';

const Cart = () => {
    const { sessionId, products, isLoading, loadCart } = useCart();
    const [isCartVisible, setIsCartVisible] = useState(false);

    useEffect(() => {
        if (isCartVisible) {
            loadCart();
        }
    }, [isCartVisible]);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handleRemoveItem = async (productId) => {
        try {
            await removeFromCart(sessionId, productId);
            loadCart();
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const handleUpdateQuantity = async (productId, quantity) => {
        try {
            await updateItemQuantity(sessionId, productId, quantity);
            loadCart();
        } catch (error) {
            console.error("Error updating item quantity:", error);
        }
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
                            transition={{ duration: 0.3, ease: 'easeOut' }}
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

                            <Button 
                                link="/checkout" 
                                text="Оформити замовлення" 
                                type="primary" 
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Cart;