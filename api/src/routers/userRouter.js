import express from "express";
import { createUser, findUser } from "../modules/user/User.model.js";
const router = express.Router();

// user registration
router.post("/", async (req, res) => {
  try {
    const result = await createUser(req.body);

    res.json({
      status: "success",
      message: "User Created Successfully",
    });
  } catch (error) {
    let message = error.message;
    if (message.includes("E11000 duplicate key error ")) {
      message = "This email is already registered";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

// user login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUser({ email, password });
    if (user?._id) {
      user.password = undefined;
      return res.json({
        status: "success",
        message: "User logged in Successfully",
        user: user,
      });
    }

    return res.json({
      status: "error",
      message: "Invalid Credentials",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
