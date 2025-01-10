const express = require("express");
const router = express.Router();
const PostOfficeController = require("../controllers/PostOfficeController");

router.get("/", PostOfficeController.getAllPostOffices);
router.get("/:id", PostOfficeController.getPostOfficeById);
router.post("/import", PostOfficeController.importPostOffices);
router.get("/search/:city_ref", PostOfficeController.searchPostOfficesByCityRef);


module.exports = router;
