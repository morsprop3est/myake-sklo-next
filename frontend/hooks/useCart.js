import { useState, useEffect } from "react";
import { getCartBySession, addToCart, removeFromCart, updateItemQuantity } from "@/api/cart";

const useCart = () => {
    const sessionKey = "user_session";
    const [sessionId, setSessionId] = useState(null);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const generateSessionId = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const initSession = () => {
        let session = localStorage.getItem(sessionKey);
        if (!session) {
            session = generateSessionId();
            localStorage.setItem(sessionKey, session);
        }
        setSessionId(session);
        return session;
    };

    const loadCart = async () => {
        setIsLoading(true);
        try {
            const session = sessionId || initSession();
            const { products } = await getCartBySession(session);
            setProducts(products || []);
        } catch (error) {
            console.error("Error loading cart:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const addProduct = async (product) => {
        try {
            const session = sessionId || initSession();
            const updatedProducts = await addToCart(session, product);
            setProducts(updatedProducts.products); 
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    const removeProduct = async (productId) => {
        try {
            const session = sessionId || initSession();
            const updatedCart = await removeFromCart(session, productId);
            setProducts(updatedCart.products);
        } catch (error) {
            console.error("Error removing product:", error);
        }
    };
    

    const updateProductQuantity = async (productId, quantity) => {
        try {
            const session = sessionId || initSession();
            const updatedCart = await updateItemQuantity(session, productId, quantity);
            setProducts(updatedCart.products);
        } catch (error) {
            console.error("Error updating product quantity:", error);
        }
    };
    

    useEffect(() => {
        initSession();
        loadCart();
    }, []);

    return {
        sessionId,
        products,
        isLoading,
        addProduct,
        removeProduct,
        updateProductQuantity,
        loadCart,
    };
};

export default useCart;
