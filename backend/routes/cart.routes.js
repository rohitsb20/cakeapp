import express from "express";

import {
  addTOCart,
  getCart,
  removeFromCart,
} from "../controller/cart.controller.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/add", authMiddleware, addTOCart);
router.get("/", authMiddleware, getCart);
router.delete("/remove", authMiddleware, removeFromCart);

export default router;
