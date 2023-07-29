import express, { Router, Request,Response } from "express";

import User from  "../models/User"
import CryptoJS from "crypto-js";
import  jwt  from "jsonwebtoken";
import * as dotenv from "dotenv"
import { login, register } from "../controllers/auth";

dotenv.config();

const router: Router = express.Router()

//REGISTER
router.post("/register", register);

//LOGIN
router.post('/login', login);

export default router;