const express = require("express");
const router = express.Router();
const postOfficeController = require("../controllers/postOfficeController");

router.post("/", postOfficeController.createPostOffice);
router.get("/", postOfficeController.getAllPostOffices);
router.get("/:id", postOfficeController.getPostOfficeById);

module.exports = router;
