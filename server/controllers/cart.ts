import Cart from '../models/Cart'
import { Request,Response } from "express";

export const createCart = async (req:Request, res:any) => {
    // const newCart = new Cart({
    //   userId:req.body.userId,

    // products:[
    //   {
    //     productId:req.body.productId,
    //     productName:req.body.productName,
    //     quantity:req.body.quantity
    //   }
    //  ],
    // })
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);

    }
  }

export const updateCart = async (req:any, res:any) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

export const deleteCart = async (req:any, res:any) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }

export const getUserCart = async (req:any, res:any) => {
    try {
      const cart = await Cart.find({ userId: req.params.id });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  }

export const getAllCart = async (req:Request, res:any) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  }