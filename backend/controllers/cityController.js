const City = require("../models/City");
const { getCitiesFromAPI } = require("../services/cityServices");
const sequelize = require("../db");
const { Op } = require("sequelize");


exports.importCities = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        await City.destroy({ where: {} }, { transaction });

        const cities = await getCitiesFromAPI();

        const insertedCities = [];

        for (const city of cities) {
            const newCity = await City.create(
                {
                    city_id: city.CityID,
                    description: city.Description || null,
                    description_ru: city.DescriptionRu || null,
                    area: city.Area || null,
                    settlement_type: city.SettlementType || null,
                    settlement_type_description: city.SettlementTypeDescription || null,
                    area_description: city.AreaDescription || null,
                    area_description_ru: city.AreaDescriptionRu || null,
                    city_ref: city.Ref || null,
                },
                { transaction }
            );
            insertedCities.push(newCity);
        }

        await transaction.commit();
        res.status(200).json({
            message: "Cities successfully imported",
            data: insertedCities,
        });
    } catch (error) {
        await transaction.rollback();
        console.error("Error importing cities:", error.message);
        res.status(500).json({ message: "Failed to import cities", error: error.message });
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


exports.searchCities = async (req, res) => {
    try {
        const { description } = req.params;

        if (!description) {
            return res.status(400).json({ message: "Please provide a search query" });
        }

        const cities = await City.findAll({
            where: {
                description: {
                    [Op.like]: `${description.toLowerCase()}%`
                }
            },
            order: [
                [
                    sequelize.literal(`
                        CASE
                            WHEN settlement_type_description = 'місто' THEN 1
                            WHEN settlement_type_description = 'село' THEN 2
                            WHEN settlement_type_description = 'селище міського типу' THEN 3
                            ELSE 4
                        END
                    `), 'ASC'],
                ['description', 'ASC']
            ]
        });

        if (cities.length > 0) {
            res.status(200).json(cities);
        } else {
            res.status(404).json({ message: "No cities found" });
        }

    } catch (error) {
        console.error("Error searching cities: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

