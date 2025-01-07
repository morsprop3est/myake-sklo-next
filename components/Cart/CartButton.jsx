import React from 'react';
import styles from './Cart.module.scss';

const CartButton = ({ itemCount, onClick }) => {
    return (
        <button className={styles.cartButton} onClick={onClick}>
            <div className={styles.cartLogo}><img
                src="/images/cart-logo.svg"
                alt="cart-logo"/></div>
            {itemCount > 0 && <span className={styles.cartCount}>{itemCount}</span>}
        </button>
    );
};

export default CartButton;
