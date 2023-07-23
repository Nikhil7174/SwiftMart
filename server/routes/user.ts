import express, { Router, Request, Response } from "express";

const router: Router = express.Router()

router.get("/usertest",(req:Request,res:Response)=>{
    res.send("User test is successful")
})

router.post("/userposttest",(req:Request,res:Response)=>{
    const username = req.body.username
    res.send(username)
})

export default router;