import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ET</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
