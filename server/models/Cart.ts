import mongoose, { Document, Schema } from 'mongoose';

interface IProduct {
  productId: string;
  productName: string;
  quantity: number;
  color: string;
  size: string;
  price: number;
  imgUrl: string;
}

interface ICartModel extends Document {
  userId: string;
  product: IProduct;
}

const CartSchema = new Schema<ICartModel>(
  {
    userId: { type: String, required: true },
    product: {
      productId: { type: String },
      productName: { type: String },
      quantity: { type: Number, default: 1 },
      color: { type: String },
      size: { type: String },
      price: { type: Number },
      imgUrl: { type: String },
    },
  },
  { timestamps: true }
);

const CartModel = mongoose.model<ICartModel>('Cart', CartSchema);

export default CartModel;