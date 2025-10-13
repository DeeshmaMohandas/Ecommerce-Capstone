import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  phone: String,
  gender: String,
  dateOfBirth: Date,
  profilePicture: String,
}, { timestamps: true });

export default mongoose.model("UserProfile", userProfileSchema);
