import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: [50, "Name must be less then 50 characters"],
    },

    email: {
      type: String,
      required: true,
      maxlength: [50, "Email must be less then 50 characters"],
    },

    password: {
      type: String,
      required: true,
      minlength: [5, "Password must be more then 5 character"],
      maxlength: 50,
    },
  },

  {
    timestamps: true, //created date and updated date in the database in the mongoose while we give timestamps is true
  }
);

mongoose.model("User", userSchema);
