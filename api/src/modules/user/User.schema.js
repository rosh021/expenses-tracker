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
      unique: true,
      index: 1,
      required: true,
      maxlength: [50, "Email must be less then 50 characters"],
      lowercase: true,
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

export default mongoose.model("User", userSchema); //create the table in the database in the mongoose which will create the database
