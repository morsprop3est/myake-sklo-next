import React, { useState } from 'react';
import CartItem from './CartItem';
import styles from './Cart.module.scss';

const CartList = ({ products, onRemove, onUpdateQuantity }) => {
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [showAll, setShowAll] = useState(false); // Стан для відображення всіх товарів

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const applyPromoCode = () => {
        if (promoCode === 'DISCOUNT10') {
            setDiscount(0.1);
        } else {
            setDiscount(0);
        }
    };

    const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0);
    const discountedAmount = totalAmount * (1 - discount);

    const displayedProducts = showAll ? products : products.slice(0, 3); // Якщо showAll = true, показуємо всі продукти, інакше лише перші 3

    return (
        <div className={styles.cartList}>
            <h3>Ваші товари</h3>
            {products.length === 0 ? (
                <p>Корзина порожня</p>
            ) : (
                displayedProducts.map((product) => (
                    <CartItem
                        key={product.id}
                        product={product}
                        onRemove={onRemove}
                        onUpdateQuantity={onUpdateQuantity}
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
                    onChange={handlePromoCodeChange}
                />
                <button onClick={applyPromoCode}>Застосувати</button>
            </div>

            <button className={styles.orderButton}>Оформити замовлення</button>
        </div>
    );
};

export default CartList;
