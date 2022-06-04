import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { postTransaction } from "../../helper/axiosHelper";

export const Dashboard = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState();
  const [form, setForm] = useState({ title: "", amount: "" });
  const [res, setRest] = useState({ status: "", message: "" });

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
    const result = await postTransaction(form);
    console.log(result);
    setRest(result);
  };
  return (
    <Layout className="mt-5">
      <Form className="mt-5" onSubmit={handelOnSubmit}>

        {res.message && <Alert variant={res?.status ==="success" ? "success" : "danger"}>{res?.message}</Alert>}
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
    </Layout>
  );
};
