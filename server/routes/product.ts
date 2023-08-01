import Product from '../models/Product'
import express, { Router } from "express";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/auth';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/product';

const router: Router = express.Router()

//CREATE
router.post("/", verifyTokenAndAdmin, createProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//GET PRODUCT
router.get("/find/:id", getProduct);

//GET ALL PRODUCTS
router.get("/", getAllProducts);

export default router