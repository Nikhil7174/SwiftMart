import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema)
export default UserModel