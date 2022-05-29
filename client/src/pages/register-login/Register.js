import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Layout } from "../../components/layout/Layout";

const initialState = { name: "", email: "", password: "" };
export const Register = () => {
  const [form, setForm] = useState(initialState);

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    setForm(initialState);
    console.log(form);
  };

  return (
    <Layout>
      <div className="center">
        <Form onSubmit={handelOnSubmit}>
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
        </Form>
      </div>
    </Layout>
  );
};
