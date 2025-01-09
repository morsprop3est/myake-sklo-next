const express = require("express");
const router = express.Router();
const PostOfficeController = require("../controllers/PostOfficeController");

router.get("/", PostOfficeController.getAllPostOffices);
router.get("/:id", PostOfficeController.getPostOfficeById);
router.post("/import", PostOfficeController.importPostOffices);


module.exports = router;
