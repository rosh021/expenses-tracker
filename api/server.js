import "dotenv/config";
import express from "express";

import userRouter from "./src/routers/userRouter.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
import createConnection from "./src/config/dbConfig.js";
createConnection();

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running in http://localhost:${PORT}`);
});
