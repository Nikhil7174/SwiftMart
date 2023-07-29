import jwt from 'jsonwebtoken'
import { Request,Response } from "express";
import CryptoJS from "crypto-js";
import User from '../models/User'
import * as dotenv from "dotenv"

dotenv.config();

const PASS_SEC = process.env.PASS_SEC || ""
export const register = async (req:Request, res:Response) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        PASS_SEC
      ).toString(),
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  export const login = async (req:Request, res:Response) => {
    try{      
        const user:any = await User.findOne(
            {
                username: req.body.username
            }
        );
        
        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

        const JWT_SEC = process.env.JWT_SEC || ""
        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

}