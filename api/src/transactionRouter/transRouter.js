import express from "express";
import {
  createTransaction,
  deleteTransactions,
  findTransactions,
} from "../modules/transaction/Transaction.model.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const filter = { userId: authorization };

    const result = await findTransactions(filter);

    res.json({
      status: "success",
      message: "Transacation List",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const result = await createTransaction(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: " New Transaction had been Added Successfully",
        })
      : res.json({
          status: "error",
          message: "unable to create Transaction",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const ids = req.body;
    console.log(ids);

    const { authorization } = req.headers;
    console.log(authorization);

    const result = await deleteTransactions({ ids, authorization });

    result?.deletedCount
      ? res.json({
          status: "success",
          message: "Selected transactions has been deleted successfully",
        })
      : res.json({
          status: "error",
          message: "unable to delete Transaction",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
