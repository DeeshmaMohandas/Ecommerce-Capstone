// routes/cartRoutes.js
import express from "express";
import { addToCart, getCartByUser, updateCartItem, clearCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addToCart);
router.get("/:userId", protect, getCartByUser);
router.put("/update", protect, updateCartItem);
router.delete("/clear/:userId", protect, clearCart);

export default router;
