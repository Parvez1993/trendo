import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap"

import { Routes, Route } from "react-router-dom"
import HomePage from "./components/homepage/HomePage"
import ProductPage from "./components/ProductPage.js"
import ProductDetails from "./components/ProductDetails.js"
import CartPage from "./components/CartPage.js"
import SignUp from "./components/SignUp"

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            Trendo
          </Navbar.Brand>

          <InputGroup size="sm" className="search ms-auto">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
          </Nav>
          <Button variant="danger">Sign Up</Button>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
