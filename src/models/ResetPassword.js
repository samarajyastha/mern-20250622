import mongoose from "mongoose";

const resetPasswordSchema = new mongoose.Schema({
  token: {
    type: String,
    required: [true, "Reset password token is required."],
  },
  expiresAt: {
    type: Date,
    default: () => Date.now() + 3600000, // 1 hour from now
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required."],
  },
});

const model = mongoose.model("ResetPassword", resetPasswordSchema);

export default model;
