const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");

router.post("/import", cityController.importCities);
router.get("/", cityController.getAllCities);
router.get("/:id", cityController.getCityById);

module.exports = router;