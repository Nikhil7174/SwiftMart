import User from "../models/User";
import { Request, Response } from "express";

//UPDATE
export const updateUser = async (req:Request, res:Response,) => {
    const PASS_SEC = process.env.PASS_SEC || ''
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        PASS_SEC
      ).toString();
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //DELETE
  export const deleteUser = async (req:Request, res:Response,) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //GET USER
  export const getUser = async (req:Request, res:Response,) => {
    try {
      const user:any = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //GET ALL USER
  export const getAllUser = async (req:Request, res:Response,) => {
    const query = req.query.new;
    try {
      const users = query
        // ? await User.find().sort({ _id: -1 }).limit(5)
        ? await User.find().sort({ _id: -1 })
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //GET USER STATS
  export const getUserStats = async (req:Request, res:Response,) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  };