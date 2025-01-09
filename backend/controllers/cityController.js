const City = require("../models/City");
const { getCitiesFromAPI } = require("../services/cityServices");

exports.importCities = async (req, res) => {
    try {
        await City.destroy({ where: {} });

        const cities = await getCitiesFromAPI();

        const insertedCities = [];
        for (const city of cities) {
            const newCity = await City.create({
                city_id: city.CityID,
                description: city.Description || null,
                description_ru: city.DescriptionRu || null,
                area: city.Area || null,
                settlement_type: city.SettlementType || null,
                settlement_type_description: city.SettlementTypeDescription || null,
                area_description: city.AreaDescription || null,
                area_description_ru: city.AreaDescriptionRu || null,
                city_ref: city.Ref || null,
            });
            insertedCities.push(newCity);
        }

        res.status(200).json({
            message: "Cities successfully imported",
            data: insertedCities
        });
    } catch (error) {
        console.error("Error importing cities:", error.message);
        res.status(500).json({ message: "Failed to import cities", error: error.message });
    }
};



exports.createCity = async (req, res) => {
    try {
        const city = await City.create(req.body);
        res.status(201).json(city);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCities = async (req, res) => {
    try {
        const cities = await City.findAll();
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCityById = async (req, res) => {
    try {
        const city = await City.findByPk(req.params.id);
        if (city) {
            res.status(200).json(city);
        } else {
            res.status(404).json({ message: "City not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
