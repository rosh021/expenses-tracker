import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      maxlength: [10, "Name must be less then 10 characters"],
    },

    title: {
      type: String,
      required: true,
      maxlength: [50, "title must be less then 50 character"],
    },

    amount: {
      type: Number,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Transaction", TransactionSchema);
