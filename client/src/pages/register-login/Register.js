import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { postUser } from "../../helper/axiosHelper";
import { registerAction } from "./regLogin.action";

const initialState = { name: "", email: "", password: "" };
export const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  // const [response, setResponse] = useState({ status: "", message: "" });

  const { response, isLoading } = useSelector((state) => state.regLogin);

  const navigation = useNavigate();

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();

    dispatch(registerAction(form));

    // if (response.status === "success") {
    //   navigation("/");
    // }
  };

  return (
    <Layout>
      <div className="center">
        <Form onSubmit={handelOnSubmit}>
          <h3 className="text-center">Register New User</h3>

          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}

          {isLoading && <Spinner variant="primary" animation="border" />}
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              required
              onChange={handelOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter email"
              required
              onChange={handelOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              required
              onChange={handelOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupButton">
            <Button type="submit">Register</Button>
          </Form.Group>

          <div className="text-end">
            <p>
              Already have an Account ? <Link to="/">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </Layout>
  );
};
