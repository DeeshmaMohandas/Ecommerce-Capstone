import Product from "../models/Product.js";
import { MESSAGES } from "../constants/messages.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    return res.status(200).json({
      message: MESSAGES.SUCCESS,
      data: products,
    });
  } catch (err) {
    return res.status(500).json({
      message: MESSAGES.INTERNAL_SERVER_ERROR,
      error: err.message,
    });
  }
};
