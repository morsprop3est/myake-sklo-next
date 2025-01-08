const express = require("express");
const router = express.Router();
const postOfficeController = require("../controllers/postOfficeController");

router.post("/", postOfficeController.createPostOffice);
router.get("/:id", postOfficeController.getPostOfficeById);
router.get("/", postOfficeController.getAllPostOffices);

module.exports = router;
