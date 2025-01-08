import React from 'react';
import styles from './Cart.module.scss';

const CartItem = ({ product, onRemove, onUpdateQuantity }) => {
    const { name, price, oldPrice, quantity, dimensions } = product;

    const handleRemove = () => {
        onRemove(product);
    };

    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        onUpdateQuantity(product, newQuantity);
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemInfo}>
                <h4>{name}</h4>
                <p>{`Розміри: ширина: ${dimensions.width} см, висота: ${dimensions.height} см`}</p>
                <p>{`Тип скла: ${product.glassType}, Товщина скла: ${product.glassThickness}, Форма скла: $$$}`}</p>
            </div>
            <div className={styles.price}>
                <span>{`${price} грн`}</span>
                {oldPrice && <span className={styles.oldPrice}>{`${oldPrice} грн`}</span>}
            </div>
            <div className={styles.quantityControls}>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className={styles.quantityInput}
                    min="1"
                />
                <button className={styles.removeButton} onClick={handleRemove}>
                    Видалити
                </button>
            </div>
        </div>
    );
};

export default CartItem;
