import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  totalAmount: Number,
  status: { type: String, enum: ["Pending", "Paid", "Delivered"], default: "Pending" },
}, { timestamps: true });

export default mongoose.model("Order", OrderSchema);
