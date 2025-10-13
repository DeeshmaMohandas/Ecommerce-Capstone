import User from "../model





/User.js";
import { MESSAGES } from "../constants/messages.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      message: MESSAGES.SUCCESS,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      message: MESSAGES.INTERNAL_SERVER_ERROR,
      error: err.message,
    });
  }
};
