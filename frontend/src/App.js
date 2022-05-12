import { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
  Button,
  Modal,
  Form,
  ListGroup,
  Row,
  Col,
  Table,
  Badge,
} from "react-bootstrap";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import ProductPage from "./components/ProductPage.js";
import ProductDetails from "./components/ProductDetails.js";
import CartPage from "./components/CartPage.js";
import { FaCartPlus, FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import SignUpModals from "./components/SignUpModals";
import LoginPage from "./components/LoginPage";
import { Store } from "./Store";
import OrderConfirmed from "./components/OrderConfirmed";

function App() {
  const {
    state,
    dispatch: ctxDispatch,
    userState,
    userDispatch,
  } = useContext(Store);

  const navigate = useNavigate();
  const {
    cart: { cartItems },
  } = state;

  let updateCart = (item, quantity) => {
    ctxDispatch({
      type: "CART_ADD_ITEMS",
      payload: { ...item, quantity },
    });
  };

  let handleRemoveItem = (id) => {
    console.log(id);
    ctxDispatch({
      type: "CART_REMOVE_ITEMS",
      payload: id,
    });
  };

  const handleLogout = () => {
    userDispatch({
      type: "LOGOUT_USER",
    });
    navigate("/");
    localStorage.setItem("userInfo", null);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            Trendo
          </Navbar.Brand>

          <InputGroup size="sm" className="search ms-auto">
            <InputGroup.Text id="basic-addon1">
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search Product"
              aria-label="Search Product"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Nav className="ms-auto">
            <Link className="nav-list" to="/">
              Home
            </Link>
            <Link className="nav-list" to="/products">
              Products
            </Link>
            <div className="d-flex">
              <NavDropdown
                title={<span className="text-white my-auto">Cart</span>}
              >
                <Table striped bordered hover size="sm">
                  {state.cart.cartItems.length > 0 ? (
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quanity </th>
                        <th>Total </th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                  ) : (
                    <p className="text-center">No items in cart</p>
                  )}

                  {state.cart.cartItems.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>{item.name}</td>
                          <td>
                            <img
                              src={item.img}
                              alt={item.name}
                              style={{ width: "100px" }}
                            />
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <div className="d-flex align-items-center gap-2 justify">
                              <Button
                                onClick={() =>
                                  updateCart(item, item.quantity + 1)
                                }
                                disabled={
                                  item.quantity >= item.stock ? true : false
                                }
                              >
                                <FaPlus />
                              </Button>
                              <h6>{item.quantity}</h6>
                              <Button
                                variant="warning"
                                onClick={() =>
                                  updateCart(item, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1 ? true : false}
                              >
                                <FaMinus />
                              </Button>
                            </div>
                          </td>
                          <td>{item.quantity * item.price}</td>
                          <td>
                            <div>
                              <Button
                                variant="danger"
                                onClick={() => {
                                  handleRemoveItem(item._id);
                                }}
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </Table>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/cartpage">
                  <div className="text-center">
                    {state.cart.cartItems.length > 0 ? (
                      <Button className="primary w-100">Go to Cart</Button>
                    ) : (
                      ""
                    )}
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
              <div className="my-2">
                {" "}
                <Badge pill bg="success">
                  {state.cart ? state.cart.cartItems.length : 0}
                </Badge>
              </div>
            </div>
            {userState.userInfo !== null ? (
              <Nav.Link className="text-white" onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="text-white">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Routes>
    </>
  );
}

export default App;
