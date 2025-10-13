import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  amount: Number,
  method: { type: String, enum: ["Card", "UPI", "Cash"], default: "Card" },
  status: { type: String, enum: ["Success", "Failed", "Pending"], default: "Pending" },
}, { timestamps: true });

export default mongoose.model("Payment", PaymentSchema);
