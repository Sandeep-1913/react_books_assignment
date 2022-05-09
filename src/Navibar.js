import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav, NavDropdown } from "react-bootstrap";

const Navibar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="#home">Sandeep Reddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">Bookshelf</Nav.Link>
            <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Youtube</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
