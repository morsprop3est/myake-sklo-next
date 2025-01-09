const sequelize = require("../db");
const PostOffice = require("../models/PostOffice");
const { getPostOfficesFromAPI } = require("../services/postOfficeServices");

exports.importPostOffices = async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
        await PostOffice.destroy({ where: {} }, { transaction });

        const postOffices = await getPostOfficesFromAPI();

        let skippedOffices = 0;

        for (const office of postOffices) {
            try {
                await PostOffice.create(
                    {
                        ref: office.Ref,
                        description: office.Description,
                        description_ru: office.DescriptionRu || null,
                        short_address: office.ShortAddress,
                        short_address_ru: office.ShortAddressRu || null,
                        settlement_description: office.SettlementDescription,
                        settlement_area_description: office.SettlementAreaDescription,
                        settlement_type_description: office.SettlementTypeDescription,
                        postal_code: office.PostalCodeUA || null,
                        city_ref: office.CityRef,
                        type_of_post_office_ref: office.TypeOfWarehouse,
                    },
                    { transaction }
                );
            } catch (error) {
                console.error("Error importing post office:", error.message);
                skippedOffices++;
                continue;
            }
        }

        await transaction.commit();

        res.status(200).json({
            message: "Post offices successfully imported",
            data: postOffices.length,
            skipped: skippedOffices,
        });
    } catch (error) {
        await transaction.rollback();
        console.error("Error importing post offices:", error.message);
        res.status(500).json({ message: "Failed to import post offices", error: error.message });
    }
};

exports.getAllPostOffices = async (req, res) => {
    try {
        const postOffices = await PostOffice.findAll();
        res.status(200).json(postOffices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPostOfficeById = async (req, res) => {
    try {
        const postOffice = await PostOffice.findByPk(req.params.id);
        if (postOffice) {
            res.status(200).json(postOffice);
        } else {
            res.status(404).json({ message: "Post office not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
