import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors"
import authRoute from "../routes/auth"
import userRoute from "../routes/user"
import productRoute from '../routes/product'
import mongoose from "mongoose";
import * as dotenv from "dotenv"

dotenv.config();

const app: Application = express();
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

const CONNECTION_URL: string = process.env.MONGO_URL || ""

const PORT: number | string = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL,)
    .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
    .catch((error) => console.log("some error", error))
