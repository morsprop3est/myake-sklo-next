import axios from "axios";

export const fetchCities = async (query) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cities/search/${query}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return [];
        } else {
            console.error("Error fetching cities:", error);
            throw error;
        }
    }
};