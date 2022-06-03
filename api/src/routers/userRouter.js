import express from "express";
import { createTable } from "../modules/user/User.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await createTable(req.body);

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

export default router;
