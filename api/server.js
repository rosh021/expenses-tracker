import "dotenv/config";
import express from "express";
import cors from "cors";

import userRouter from "./src/routers/userRouter.js";
import transRouter from "./src/transactionRouter/transRouter.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
import createConnection from "./src/config/dbConfig.js";
createConnection();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transaction", transRouter);

import path from "path";
const __dirname = path.resolve();

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running in http://localhost:${PORT}`);
});
