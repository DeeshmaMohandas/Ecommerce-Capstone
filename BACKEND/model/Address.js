import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fullName: String,
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  phone: String,
  isDefault: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Address", addressSchema);
