'use client';

import React, { useState } from 'react';
import CartButton from './CartButton';
import CartList from './CartList';
import styles from './Cart.module.scss';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const addItemToCart = (product) => {
        const newProducts = [...products, product];
        setProducts(newProducts);
        setItemCount(newProducts.length);
    };

    const removeItemFromCart = (productToRemove) => {
        const updatedProducts = products.filter(
            (product) => product.id !== productToRemove.id
        );
        setProducts(updatedProducts);
        setItemCount(updatedProducts.length);
    };

    const updateItemQuantity = (productToUpdate, newQuantity) => {
        const updatedProducts = products.map((product) =>
            product.id === productToUpdate.id
                ? { ...product, quantity: newQuantity }
                : product
        );
        setProducts(updatedProducts);
    };

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <div className={styles.cartContainer}>
            <CartButton itemCount={itemCount} onClick={toggleCartVisibility} />

            {isCartVisible && (
                <>
                    <div className={styles.overlay} onClick={toggleCartVisibility}></div>
                    <CartList
                        products={products}
                        onRemove={removeItemFromCart}
                        onUpdateQuantity={updateItemQuantity}
                    />
                </>
            )}

            <button
                onClick={() =>
                    addItemToCart({
                        id: Date.now(),
                        name: 'М`яке скло',
                        price: 100,
                        oldPrice: 150,
                        quantity: 1,
                        dimensions: { width: 60, height: 40 },
                        glassType: 'glossy',
                        glassThickness: 'thin',
                    })
                }
            >
                Додати товар до корзини
            </button>
        </div>
    );
};

export default Cart;
