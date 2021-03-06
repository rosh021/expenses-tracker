import React, { useEffect, useState } from "react";
import { Alert, Button, FormCheck, Table } from "react-bootstrap";
import { deleteTransaction, getTransaction } from "../../helper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTransactionAction,
  fetchTransactionsAction,
} from "../../pages/dashboard/dashboard.action.js";
export const CustomTable = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState([]);
  const { transaction } = useSelector((state) => state.dashboard);
  const [ids, setIds] = useState([]);
  const [res, setRes] = useState({ status: "", message: "" });

  useEffect(() => {
    dispatch(fetchTransactionsAction());
  }, []);

  // const fetchAllTrans = async () => {
  //   const { _id } = JSON.parse(window.sessionStorage.getItem("user"));

  //   const tansInfo = await getTransaction(_id);
  //   if (tansInfo.status === "success") {
  //     setData(tansInfo.result);
  //   }
  // };

  const handelOnCheck = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setIds([...ids, value]);
    } else {
      const filterIds = ids.filter((id) => id !== value);
      setIds(filterIds);
    }
  };

  const handelOnDelete = async () => {
    if (
      !window.confirm(
        `Are You Sure to delete ${ids.length} selected Transaction`
      )
    );

    dispatch(deleteTransactionAction(ids));
    setIds([]);
  };

  const incomeTotal = transaction.reduce((acc, item) => {
    return item.type === "income" ? acc + item.amount : acc - item.amount;
  }, 0);

  return (
    <div className="mt-5">
      <h1 className="text-center">
        {" "}
        {transaction.length} Transaction Found !!
      </h1>
      <Table className="mt-3" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
          </tr>
        </thead>

        <tbody>
          {transaction.map((trans, i) => (
            <tr key={trans._id}>
              <td>
                <FormCheck onClick={handelOnCheck} value={trans._id} />
              </td>

              <td>{new Date(trans.createdAt).toLocaleDateString()}</td>
              <td>{trans.title}</td>

              {trans.type === "income" ? (
                <>
                  <td></td>
                  <td>
                    {" "}
                    <span className="fw-bold text-success">
                      ${trans.amount}
                    </span>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <span className="fw-bold text-danger">
                      -${trans.amount}
                    </span>
                  </td>
                  <td></td>
                </>
              )}
            </tr>
          ))}

          <td colSpan={5} className="text-end fw-bold">
            Balance ${incomeTotal}
          </td>
        </tbody>
      </Table>
      {res.message && (
        <Alert variant={res.status === "success" ? "success" : "danger"}>
          {res.message}
        </Alert>
      )}
      {ids.length > 0 && (
        <Button variant="danger" onClick={handelOnDelete}>
          Delete {ids.length} Selected Transaction
        </Button>
      )}
    </div>
  );
};
