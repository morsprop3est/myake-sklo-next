import { useState, useEffect } from 'react';

export const useCart = () => {
    const [products, setProducts] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        if (products.length > 0) {
            localStorage.setItem('cart', JSON.stringify(products));
        }
    }, [products]);

    const addItemToCart = (product) => {
        setProducts((prevProducts) => {
            const existingProduct = prevProducts.find((prod) => prod.id === product.id);
            if (existingProduct) {
                return prevProducts.map((prod) =>
                    prod.id === product.id
                        ? { ...prod, quantity: prod.quantity + 1 }
                        : prod
                );
            }
            return [...prevProducts, { ...product, quantity: 1 }];
        });
    };

    const removeItemFromCart = (product) => {
        setProducts((prevProducts) =>
            prevProducts.filter((prod) => prod.id !== product.id)
        );
    };

    const updateItemQuantity = (product, newQuantity) => {
        setProducts((prevProducts) =>
            prevProducts.map((prod) =>
                prod.id === product.id
                    ? { ...prod, quantity: newQuantity }
                    : prod
            )
        );
    };

    const calculateTotalPrice = () => {
        return products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    };

    return {
        products,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        totalPrice: calculateTotalPrice(),
        cartCount: products.length,
    };
};
