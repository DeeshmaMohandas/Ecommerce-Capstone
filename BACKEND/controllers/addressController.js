import Address from "../models/Address.js";
import { MESSAGES } from "../constants/messages.js";

export const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find().populate("userId");
    return res.status(200).json({
      message: MESSAGES.SUCCESS,
      data: addresses,
    });
  } catch (err) {
    return res.status(500).json({
      message: MESSAGES.INTERNAL_SERVER_ERROR,
      error: err.message,
    });
  }
};
