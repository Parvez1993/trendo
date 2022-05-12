import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { search } = useLocation();
  const redirectURL = new URLSearchParams(search).get("redirect");

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form className="p-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" />

            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />

            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default Signup;
