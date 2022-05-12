import { useState } from "react"
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
} from "react-bootstrap"

import { Routes, Route, Link } from "react-router-dom"
import HomePage from "./components/homepage/HomePage"
import ProductPage from "./components/ProductPage.js"
import ProductDetails from "./components/ProductDetails.js"
import CartPage from "./components/CartPage.js"
import { FaCartPlus, FaSearch } from "react-icons/fa"
import SignUpModals from "./components/SignUpModals"

function App() {
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
            <Link className="nav-list" to="/cartpage">
              Cart
            </Link>
            <NavDropdown title={<FaCartPlus />} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <SignUpModals />
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
