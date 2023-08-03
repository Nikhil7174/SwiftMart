import express, { Router } from "express";
import { verifyToken,verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/auth";
import { createCart, deleteCart, getAllCart, getUserCart, updateCart } from "../controllers/cart";

const router: Router = express.Router()

//CREATE
router.post("/", verifyToken, createCart);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateCart);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

//GET USER CART
router.get("/find/:id", verifyTokenAndAuthorization, getUserCart);

//GET ALL
router.get("/", verifyTokenAndAdmin, getAllCart);

export default router