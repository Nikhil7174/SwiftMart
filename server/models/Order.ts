import mongoose, { Document, Model, Schema } from "mongoose";

interface OrderProduct {
  productId: string;
  quantity: number;
}

// interface OrderAddress {
//   // Define address properties here
// }

interface OrderDocument extends Document {
  userId: string;
  products: OrderProduct[];
  amount: number;
  address: Object;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema: Schema<OrderDocument> = new Schema<OrderDocument>(
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
)

const Order: Model<OrderDocument> = mongoose.model<OrderDocument>(
  "Order",
  OrderSchema
)

export default Order