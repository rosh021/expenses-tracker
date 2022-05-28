import "dotenv/config";
import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running in http://localhost:${PORT}`);
});
