import axios from "axios";

export const submitOrder = async (order) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/order/`, order);
        console.log("Order submitted:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error submitting order:", error);
        throw error;
    }
};