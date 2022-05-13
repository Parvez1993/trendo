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
  Offcanvas,
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
import Offcanvs from "./components/Offcanvs";

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
          <Navbar.Brand href="/" className="logo">
            Trendo
          </Navbar.Brand>
          {/* 
          <InputGroup size="sm" className="search ms-auto">
            <InputGroup.Text id="basic-addon1">
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search Product"
              aria-label="Search Product"
              aria-describedby="basic-addon1"
            />
          </InputGroup> */}

          <div>
            <h5 className="text-white mt-1 mx-5">
              {" "}
              {userState.userInfo !== null
                ? `Welcome ${userState.userInfo.user.name}`
                : `Welcome Guest`}
            </h5>
          </div>

          <Nav className="ms-auto">
            <Link className="nav-list" to="/">
              Home
            </Link>
            <Link className="nav-list" to="/products">
              Products
            </Link>
            <Offcanvs />
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
