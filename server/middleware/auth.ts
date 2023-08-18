import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const verifyToken = (req:any, res:Response, next:any) => {
  const authHeader:any = req.headers.token ;
  const JWT_SEC = process.env.JWT_SEC || ''
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SEC, (err:any, user:any) => {
      if (err) return res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

export const verifyTokenAndAuthorization = (req:any, res:Response, next:any) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not alowed to do that!");
    }
  });
};

export const verifyTokenAndAdmin = (req:any, res:Response, next:any) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not alowed to do that!");
    }
  });
};

