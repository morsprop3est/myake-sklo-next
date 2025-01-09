const axios = require("axios");

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getPostOfficesFromAPI = async () => {
    let allPostOffices = [];
    const limit = 10000;
    const maxRetries = 2;

    const allowedTypes = [
        "841339c7-591a-42e2-8233-7a0a00f0ed6f",
        "9a68df70-0267-42a8-bb5c-37f427e36ee4"
    ];

    try {
        for (const typeRef of allowedTypes) {
            console.log(`Fetching post office for warehouse type ${typeRef}...`);

            let page = 1;
            let response = null;

            while (true) {
                const requestData = {
                    apiKey: process.env.NOVA_POSHTA_API_KEY,
                    modelName: "AddressGeneral",
                    calledMethod: "getWarehouses",
                    methodProperties: {
                        Limit: String(limit),
                        Page: String(page),
                        TypeOfWarehouseRef: typeRef
                    }
                };

                console.log("Requesting with data:", JSON.stringify(requestData, null, 2));

                let retries = 0;

                while (retries < maxRetries) {
                    try {
                        response = await axios.post("https://api.novaposhta.ua/v2.0/json/", requestData);

                        if (response.data.success) {
                            break;
                        } else {
                            throw new Error(response.data.errorMessage || "Unknown error");
                        }
                    } catch (error) {
                        if (error.response && error.response.data.errors && error.response.data.errors[0] === 'To many requests') {
                            console.log(`Rate limit exceeded. Retrying in 0.5 seconds... (Attempt ${retries + 1}/${maxRetries})`);
                            await delay(500);
                            retries++;
                        } else {
                            console.error("Error fetching post offices:", error.message);
                            throw error;
                        }
                    }
                }

                if (retries === maxRetries) {
                    console.error(`Failed to fetch post offices for type ${typeRef} after ${maxRetries} retries.`);
                    break;
                }

                let postOffices = response.data.data;
                console.log(`Fetched ${postOffices.length} post office(s) for type ${typeRef} on page ${page}.`);

                postOffices = postOffices.map(postOffice => {
                    if (!postOffice.type_of_post_office_ref) {
                        postOffice.type_of_post_office_ref = typeRef;
                    }
                    return postOffice;
                });

                allPostOffices = allPostOffices.concat(postOffices);

                console.log(`Page ${page}: Fetched ${postOffices.length} post office(s).`);

                if (postOffices.length < limit) {
                    break;
                }

                page++;
            }
        }

        console.log(`Fetched ${allPostOffices.length} post office(s).`);
        return allPostOffices;

    } catch (error) {
        console.error("Error fetching post offices:", error.message);
        throw error;
    }
};

module.exports = {
    getPostOfficesFromAPI
};
