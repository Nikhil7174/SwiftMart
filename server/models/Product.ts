import mongoose, { Document, Model, Schema } from 'mongoose';

interface IProduct extends Document {
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size?: string[];
  color?: string[];
  price: number;
  inStock:boolean;
}

const ProductSchema: Schema<IProduct> = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: [String] },
    size: { type: [String] },
    color: { type: [String] },
    price: { type: Number, required: true },
    inStock: {type: Boolean}
  },
  { timestamps: true }
)

const Product: Model<IProduct> = mongoose.model<IProduct>("Product", ProductSchema)

export default Product






