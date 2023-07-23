import express, { Request, Response } from "express";
import { sampleProducts } from "./data";
import cors from "cors"
import userRoute from "../routes/user"

const app = express()
app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
})

const PORT = 5000

app.use(cors())
app.use(express.json())

app.use("/api/user",userRoute)

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})