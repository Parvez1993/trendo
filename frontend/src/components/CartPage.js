import { useContext, useState } from "react"
import { Helmet } from "react-helmet-async"
import {
  Container,
  Row,
  Col,
  Alert,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap"
import { Store } from "../Store"
import { Link, useNavigate } from "react-router-dom"
import { Table } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa"

const CartPage = () => {
  let navigate = useNavigate()

  const {
    state,
    dispatch: ctxDispatch,
    userState,
    userReducer,
  } = useContext(Store)
  const {
    cart: { cartItems },
  } = state

  let updateCart = (item, quantity) => {
    ctxDispatch({
      type: "CART_ADD_ITEMS",
      payload: { ...item, quantity },
    })
  }

  let handleRemoveItem = (item) => {
    console.log(item)
    ctxDispatch({
      type: "CART_REMOVE_ITEMS",
      payload: item,
    })
  }

  let handleCheckOut = () => {
    const route =
      userState.userInfo === null
        ? "login?redirect=orderConfirmed"
        : "orderConfirmed"
    navigate(`/${route}`)
  }

  return (
    <Container>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>

      <Row>
        <Col lg={8} className="mt-5">
          {cartItems.length < 0 ? (
            <Alert variant="danger">Cart is Empty</Alert>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <Table striped bordered hover style={{ width: "400px" }}>
                  <tr>
                    <td style={{ width: "70px" }}>
                      <img width="70" src={item.img} alt="" />
                    </td>
                    <td style={{ width: "100px" }}>
                      <Link to={`/products/${item.slug}`}>{item.name}</Link>
                    </td>
                    <td style={{ width: "40px" }}>
                      <div className="d-flex align-items-center gap-2 justify">
                        <Button
                          onClick={() => updateCart(item, item.quantity + 1)}
                          disabled={item.quantity >= item.stock ? true : false}
                          variant="dark"
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td style={{ width: "20px" }}>
                      <h5>{item.quantity}</h5>
                    </td>
                    <td style={{ width: "20px" }}>
                      <div className="d-flex align-items-center gap-2 justify">
                        <Button
                          onClick={() => updateCart(item, item.quantity - 1)}
                          disabled={item.quantity === 1}
                          variant="dark"
                        >
                          -
                        </Button>
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="d-flex align-items-center gap-2 justify">
                        <FaTrashAlt
                          className="ps-2"
                          style={{ fontSize: "35px", color: "red" }}
                          onClick={() => handleRemoveItem(item._id)}
                        />
                      </div>
                    </td>
                  </tr>
                </Table>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col lg={4} className="mt-5">
          <ListGroup>
            <ListGroup.Item>
              <h4>
                Total (
                {cartItems.reduce(
                  (accumulator, current) => accumulator + current.quantity,
                  0
                )}
                ) Products
              </h4>
              <hr />
              <h3>
                Total price = $
                {cartItems.reduce(
                  (accumulator, current) =>
                    accumulator + current.price * current.quantity,
                  0
                )}
              </h3>
            </ListGroup.Item>
          </ListGroup>

          <Button
            onClick={handleCheckOut}
            className="w-100 mt-2"
            variant="primary"
          >
            Check Out
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage
