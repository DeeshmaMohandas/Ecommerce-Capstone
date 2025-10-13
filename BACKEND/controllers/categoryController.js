import Category from "../models/Category.js";
import { MESSAGES } from "../constants/messages.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({
      message: MESSAGES.SUCCESS,
      data: categories,
    });
  } catch (err) {
    return res.status(500).json({
      message: MESSAGES.INTERNAL_SERVER_ERROR,
      error: err.message,
    });
  }
};
