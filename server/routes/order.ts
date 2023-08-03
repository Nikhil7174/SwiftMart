import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/auth";
import { createOrder, deleteOrder, getAllOrders, getMonthlyIncome, getUserOrder, updateOrder } from "../controllers/order";

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, createOrder);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);

//GET ALL
router.get("/", verifyTokenAndAdmin, getAllOrders);

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router