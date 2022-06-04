import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { postUser } from "../../helper/axiosHelper";

const initialState = { email: "", password: "" };
export const Login = () => {
  const [form, setForm] = useState(initialState);
  const [response, setResponse] = useState({ status: "", message: "" });

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    alert("haven't make it yet");
  };

  return (
    <Layout>
      <div className="center">
        <Form onSubmit={handelOnSubmit}>
          <h3 className="text-center">Welcome Back !!</h3>
          <hr />
          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}

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
            <Button type="submit">Login</Button>
          </Form.Group>

          <div className="text-end">
            <p>
              Don't have an Account Yet ? <Link to="/register">Register</Link>
            </p>
          </div>
        </Form>
      </div>
    </Layout>
  );
};
