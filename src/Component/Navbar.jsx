import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
const Navigationbar = () => {
  return (
    <div className="container">
      <nav className="d-flex justify-content-between align-items-center p-3">
        <h1 className="fs-2 fw-light">
          Blogy<span className="text-danger fs-1 ">.</span>
        </h1>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </nav>
      <Nav
        className="me-auto my-2 my-lg-0 p-2 justify-content-center"
        // variant='tabs'
        defaultActiveKey={"/home"}
        navbarScroll
        id="navigationbar"
      >
        <Nav.Link href="/" className="text-dark active" eventKey={"/home"}>
          Home
        </Nav.Link>
        <Nav.Link href="/about" className="text-dark" eventKey={"/about"}>
          About
        </Nav.Link>
        <Nav.Link href="/category" className="text-dark" eventKey={"/category"}>
          Category
        </Nav.Link>
        <Nav.Link
          href="/blog-detail"
          className="text-dark"
          eventKey={"/blog Details"}
        >
          Blog Details
        </Nav.Link>
        <Nav.Link
          href="/author"
          className="text-dark"
          eventKey={"/author Profile"}
        >
          Author Profile
        </Nav.Link>
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
                Pages
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/about">About</Dropdown.Item>
            <Dropdown.Item href="/category">Category</Dropdown.Item>
            <Dropdown.Item href="/blog-detail">Blog Details</Dropdown.Item>
            <Dropdown.Item href="/author">Author Profile</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link href="/contact" className="text-dark" eventKey={"/contact"}>
          Contact
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Navigationbar;
