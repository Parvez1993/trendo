import React, { useState } from "react"
import { Form, Button, Modal } from "react-bootstrap"
import SignUpModal from "./SignUpModals"

const SignInPage = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form className="p-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />

            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="danger" type="submit">
            Submit
          </Button>
          <Modal.Body style={{ paddingLeft: "0" }}>
            <p>Have an account? {<SignUpModal />}</p>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  )
}

export default SignInPage
