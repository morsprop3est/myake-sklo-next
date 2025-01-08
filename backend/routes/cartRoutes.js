const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/", cartController.addToCart);
router.get("/:session_id", cartController.getCartBySession);
router.delete("/:id", cartController.removeFromCart);

module.exports = router;
