const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/", cartController.addToCart);
router.get("/:session_id", cartController.getCartBySession); 
router.put("/", cartController.updateItemQuantity); 
router.delete("/", cartController.removeFromCart);
router.delete("/clear/:session_id", cartController.clearCart); 

module.exports = router;
