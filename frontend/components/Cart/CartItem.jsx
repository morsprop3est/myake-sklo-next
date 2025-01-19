import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Cart.module.scss';

const CartItem = ({ product, onRemove, onUpdateQuantity }) => {
    const { product_id, name, price, quantity, dimensions } = product;
    const [localQuantity, setLocalQuantity] = useState(quantity);
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    const handleRemove = () => {
        onRemove(product_id);
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity > 0) {
            setLocalQuantity(newQuantity);
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
            setDebounceTimeout(
                setTimeout(() => {
                    onUpdateQuantity(product_id, newQuantity);
                }, 1000)
            );
        }
    };

    const handleInputChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        handleQuantityChange(newQuantity);
    };

    const handleIncrement = () => {
        handleQuantityChange(localQuantity + 1);
    };

    const handleDecrement = () => {
        handleQuantityChange(localQuantity - 1);
    };

    useEffect(() => {
        setLocalQuantity(quantity);
    }, [quantity]);

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemInfo}>
                <h4>{name}</h4>
                <p>{`Розміри: ширина: ${dimensions.width} см, висота: ${dimensions.height} см`}</p>
                <p>{`Тип скла: ${dimensions.glassType}, Товщина скла: ${dimensions.glassThickness}, Форма скла: ${dimensions.shape}`}</p>
            </div>
            <div className={styles.price}>
                <span>{`${price} грн`}</span>
                {price && <span className={styles.oldPrice}>{`${Math.round(price * 1.25)} грн`}</span>}
            </div>
            <div className={styles.quantityControls}>
                <button onClick={handleDecrement} className={styles.quantityButton}>-</button>
                <input
                    type="number"
                    value={localQuantity}
                    onChange={handleInputChange}
                    className={styles.quantityInput}
                    min="1"
                />
                <button onClick={handleIncrement} className={styles.quantityButton}>+</button>
                <Button 
                    link="#" 
                    text="Видалити" 
                    type="red" 
                    onClick={handleRemove} 
                />
            </div>
        </div>
    );
};

export default CartItem;