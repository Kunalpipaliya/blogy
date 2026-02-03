import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Col, Form, Row } from "react-bootstrap";
const ContactForm = () => {
  return (
    <div>
      <Row className="mt-5">
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i style={{color:'#f75815'}} class=" fa-regular fa-user"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Your name*"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i style={{color:'#f75815'}} class=" fa-regular fa-envelope"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Email address*"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i style={{color:'#f75815'}} class=" fa-solid fa-mobile-button"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Phone number*"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i style={{color:'#f75815'}} class=" fa-solid fa-bars"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Select service*"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md="12">
          <InputGroup>
            <InputGroup.Text><i style={{color:'#f75815'}} class="fa-regular fa-comment-dots"></i></InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" placeholder="Write a message*" />
          </InputGroup>
        </Col>
      </Row>
    <div className="d-flex justify-content-center mt-5"> <button className="btn btn-warning" >Submit Message</button></div>
    </div>
  );
};

export default ContactForm;
