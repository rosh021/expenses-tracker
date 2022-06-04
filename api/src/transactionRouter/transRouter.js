import express from "express";
const router = express.Router();

router.get("/", (req, res) => {});
router.post("/", (req, res) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "still need to handel",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
