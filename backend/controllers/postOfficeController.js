const PostOffice = require("../models/PostOffice");

exports.createPostOffice = async (req, res) => {
    try {
        const postOffice = await PostOffice.create(req.body);
        res.status(201).json(postOffice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPostOfficeById = async (req, res) => {
    try {
        const postOffice = await PostOffice.findOne({ where: { id: req.params.id } });
        if (postOffice) {
            res.status(200).json(postOffice);
        } else {
            res.status(404).json({ message: "Post office not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllPostOffices = async (req, res) => {
    try {
        const postOffices = await PostOffice.findAll();
        res.status(200).json(postOffices);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
