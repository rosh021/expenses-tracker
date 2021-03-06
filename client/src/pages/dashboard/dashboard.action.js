import {
  deleteTransaction,
  getTransaction,
  postTransaction,
} from "../../helper/axiosHelper";
import { setIsLoading, setResponse, setTransaction } from "./dashboardSlicer";
import { toast } from "react-toastify";

export const fetchTransactionsAction = () => async (dispatch) => {
  dispatch(setIsLoading());

  // call the api

  const data = await getTransaction();
  if (data.status === "success") {
    dispatch(setTransaction(data.result));
  }
};

export const postTransactionAction = (form) => async (dispatch) => {
  const { _id } = JSON.parse(window.sessionStorage.getItem("user"));
  if (!_id) {
    return alert("Please login first");
  }

  const info = { ...form, userId: _id };
  dispatch(setIsLoading());

  const result = await postTransaction(info);

  toast[result.status](result.message);

  if (result.status === "success") {
    dispatch(fetchTransactionsAction());
  }
};

export const deleteTransactionAction = (ids) => async (dispatch) => {
  dispatch(setIsLoading());
  const result = await deleteTransaction(ids);
  result.status === "success" && dispatch(fetchTransactionsAction());
  toast[result.status](result.message);
};
