import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";

const auth = false;
export const Dashboard = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"));

    setUser(storedUser);
    !storedUser?._id && navigation("/");
  }, []);
  return (
    <Layout>
      <h1>Welcome</h1>
    </Layout>
  );
};
