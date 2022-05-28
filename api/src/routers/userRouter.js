import express from "express";
import { createTable } from "../modules/user/User.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const result = await createTable(req.body);
  console.log(result);
  res.json({
    status: "success",
    message: "user created ",
  });
});

export default router;
