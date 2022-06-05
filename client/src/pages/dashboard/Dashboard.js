import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../components/customTable/CustomTable";
import { Layout } from "../../components/layout/Layout";
import { getTransaction, postTransaction } from "../../helper/axiosHelper";

// const initialState = { type: "", ;
export const Dashboard = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState();
  const [form, setForm] = useState({ title: "", amount: "" });
  const [res, setRest] = useState({ status: "", message: "" });
  const [recfetchFlage, setRecFetchFlage] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"));

    setUser(storedUser);
    !storedUser?._id && navigation("/");
  }, []);

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    const { _id } = JSON.parse(window.sessionStorage.getItem("user"));
    if (!_id) {
      return alert("Please login frist");
    }

    const info = { ...form, userId: _id };

    const result = await postTransaction(info);

    setRest(result);
    setForm(info);
    if (result.status === "success") {
      setRecFetchFlage(recfetchFlage + 1);
    }
  };

  return (
    <Layout className="mt-5">
      <Form className="mt-5" onSubmit={handelOnSubmit}>
        {res.message && (
          <Alert variant={res?.status === "success" ? "success" : "danger"}>
            {res?.message}
          </Alert>
        )}
        <Row className="mt-2">
          <Col md="2">
            <Form.Select name="type" required onChange={handelOnChange}>
              <option value="">Choose...</option>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </Form.Select>
          </Col>
          <Col md="6">
            <Form.Control
              onChange={handelOnChange}
              name="title"
              placeholder="Transaction Title"
            />
          </Col>
          <Col md="2">
            <Form.Control
              onChange={handelOnChange}
              name="amount"
              type="number"
              placeholder="50"
            />
          </Col>
          <Col md="2">
            <Button variant="primary" type="submit" className="form-control">
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      <hr />

      <Row>
        <CustomTable key={recfetchFlage} />
      </Row>
    </Layout>
  );
};
