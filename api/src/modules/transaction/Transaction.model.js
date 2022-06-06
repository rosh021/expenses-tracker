import TransactionSchema from "./Transaction.schema.js";

export const createTransaction = (newTransObj) => {
  return TransactionSchema(newTransObj).save();
};

export const findTransaction = (filter) => {
  return TransactionSchema.findOne(filter);
};

export const findTransactions = (filter) => {
  return TransactionSchema.find(filter);
};

export const deleteTransactions = (ids, userId) => {
  return TransactionSchema.deleteMany({ _id: { $in: ids }, userId });
};
