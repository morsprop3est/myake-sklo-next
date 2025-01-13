import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addToCart = async (session_id, product) => {
    try {
        const response = await axios.post(`${API_URL}/api/carts/`, { session_id, product });
        return response.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
    }
};

export const getCartBySession = async (session_id) => {
    try {
        const response = await axios.get(`${API_URL}/api/carts/${session_id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart by session:", error);
        throw error;
    }
};

export const removeFromCart = async (session_id, product_id) => {
    try {
        const response = await axios.delete(`${API_URL}/api/carts`, {
            data: { session_id, product_id },
        });
        return response.data;
    } catch (error) {
        console.error("Error removing item from cart:", error);
        throw error;
    }
};

export const updateItemQuantity = async (session_id, product_id, quantity) => {
    try {
        const response = await axios.put(`${API_URL}/api/carts`, { session_id, product_id, quantity });
        return response.data;
    } catch (error) {
        console.error("Error updating item quantity:", error);
        throw error;
    }
};

export const clearCart = async (session_id) => {
    try {
        const response = await axios.delete(`${API_URL}/api/carts/clear/${session_id}`);
        return response.data;
    } catch (error) {
        console.error("Error clearing cart:", error);
        throw error;
    }
};
