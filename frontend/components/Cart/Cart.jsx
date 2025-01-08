'use client';

import React, { useState } from 'react';
import CartButton from './CartButton';
import CartItem from './CartItem';
import styles from './Cart.module.scss';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
    const { products, removeItemFromCart, updateItemQuantity, totalPrice, cartCount } = useCart(); // Використовуємо хук

    const [isCartVisible, setIsCartVisible] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const applyPromoCode = () => {
        setDiscount(promoCode === 'DISCOUNT10' ? 0.1 : 0);
    };

    const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0);
    const discountedAmount = totalAmount * (1 - discount);
    const displayedProducts = showAll ? products : products.slice(0, 3);

    return (
        <div className={styles.cartContainer}>
            <CartButton itemCount={cartCount} onClick={toggleCartVisibility} />

            {isCartVisible && (
                <>
                    <div className={styles.overlay} onClick={toggleCartVisibility}></div>
                    <div className={styles.cartList}>
                        <h3>Ваші товари</h3>
                        {products.length === 0 ? (
                            <p>Корзина порожня</p>
                        ) : (
                            displayedProducts.map((product) => (
                                <CartItem
                                    key={product.id}
                                    product={product}
                                    onRemove={removeItemFromCart}
                                    onUpdateQuantity={updateItemQuantity}
                                />
                            ))
                        )}

                        {products.length > 3 && !showAll && (
                            <button className={styles.viewAllButton} onClick={() => setShowAll(true)}>
                                Переглянути весь товар
                            </button>
                        )}

                        <div className={styles.totalAmount}>
                            <h4>Загальна сума: {discountedAmount.toFixed(2)}₴</h4>
                        </div>

                        <div className={styles.promoCode}>
                            <input
                                type="text"
                                placeholder="Введіть промокод"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                            />
                            <button onClick={applyPromoCode}>Застосувати</button>
                        </div>

                        <button className={styles.orderButton}>Оформити замовлення</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
