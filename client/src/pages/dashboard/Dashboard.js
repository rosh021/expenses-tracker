import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";

const auth = false;
export const Dashboard = () => {
  const navigation = useNavigate();

  useEffect(() => {
    !auth && navigation("/");
  });
  return <Layout>Dashboard Page</Layout>;
};
