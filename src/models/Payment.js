import mongoose from "mongoose";
import {
  PAYMENT_STATUS_COMPLETED,
  PAYMENT_STATUS_FAILED,
  PAYMENT_STATUS_PENDING,
} from "../constants/paymenStatuses.js";

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Amount is required."],
  },
  method: {
    type: String,
    required: [true, "Payment method is required."],
    enum: ["cash", "card", "online"],
  },
  status: {
    type: String,
    default: PAYMENT_STATUS_PENDING,
    enum: [
      PAYMENT_STATUS_COMPLETED,
      PAYMENT_STATUS_FAILED,
      PAYMENT_STATUS_PENDING,
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  transactionId: String,
});

const model = mongoose.model("Payment", paymentSchema);

export default model;
