import axios from "axios";

export const fetchPostOffices = async (cityId) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post-office/search/${cityId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching post offices:", error);
        throw error;
    }
};