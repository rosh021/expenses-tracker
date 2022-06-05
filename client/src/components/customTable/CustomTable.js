import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getTransaction } from "../../helper/axiosHelper";

export const CustomTable = () => {
  const [data, setData] = useState([]);
  // const [res, setRes] = useState({ status: "", message: "" });

  useEffect(() => {
    const { _id } = JSON.parse(window.sessionStorage.getItem("user"));

    const fetchData = async () => {
      const transInfo = await getTransaction(_id);
      if (transInfo.status === "success") {
        setData(transInfo.result);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="mt-5">
      <h1 className="text-center">100 Transaction Found !!</h1>
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
          <tr>
            <td>1</td>
            <td>2022-06-05</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022-05-05</td>
            <td>SA</td>
            <td></td>
            <td>
              <span className="bg-success rounded p-1 fw-bold">$200</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
