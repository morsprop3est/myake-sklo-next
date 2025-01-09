const axios = require("axios");

const getCitiesFromAPI = async () => {
    let allCities = [];
    let currentPage = 1;
    const limit = 250;
    try {
        while (true) {
            console.log(`Fetching page ${currentPage}...`);

            const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
                apiKey: process.env.NOVA_POSHTA_API_KEY,
                modelName: "AddressGeneral",
                calledMethod: "getCities",
                methodProperties: {
                    Limit: String(limit),
                    Page: String(currentPage)
                }
            });

            if (response.data.success) {
                const cities = response.data.data;

                console.log(`Page ${currentPage} fetched, found ${cities.length} cities.`);

                allCities = allCities.concat(cities);

                if (cities.length < limit) {
                    console.log("No more cities to fetch, ending process.");
                    break;
                }

                currentPage++;
            } else {
                console.error(`Error in response for page ${currentPage}:`, response.data.errorMessage || "Unknown error");
                throw new Error("Error fetching cities data");
            }
        }

        return allCities;
    } catch (error) {
        console.error("Error fetching cities:", error.message);
        throw error;
    }
};

module.exports = {
    getCitiesFromAPI
};
