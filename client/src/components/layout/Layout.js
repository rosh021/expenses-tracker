import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const navigation = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const infoUser = JSON.parse(window.sessionStorage.getItem("user"));
    setUser(infoUser);
  }, []);

  const handelOnLogOut = () => {
    window.sessionStorage.removeItem("user");
  };
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand>ET</Navbar.Brand>
          {user?.name}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user?._id ? (
                <Link to="/" className="nav-link" onClick={handelOnLogOut}>
                  Logout
                </Link>
              ) : (
                <>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* header completed */}

      <main className="container wrapper">{children}</main>

      {/* Footer Section */}

      <footer className=" bg-dark text-light text-center py-5">
        All right reserved &copy; | Made by me with 😎
      </footer>
    </div>
  );
};
