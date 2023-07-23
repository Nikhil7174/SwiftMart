import mongoose, { Document, Model } from "mongoose";

interface IProduct {
  productId: string;
  quantity: number;
}

interface ICart extends Document {
  userId: string;
  products: IProduct[];
  createdAt: Date;
  updatedAt: Date;
}

const CartSchema = new mongoose.Schema<ICart>(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
)

const Cart: Model<ICart> = mongoose.model("Cart", CartSchema)

export default Cart
