import React, { useEffect, useState } from "react"
import { Card, Col, Container, Row, Button } from "react-bootstrap"
import Slide from "./Slide/Slide"
import homepage from "./homepage.css"
import axios from "axios"
import { Link } from "react-router-dom"
import SignInModals from "../SignInModals"

const CategoryCard = () => {
  const [product, setProduct] = useState([])
  // console.log(product)

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get("http://localhost:4000/products")
      let product = data.products
      setProduct(product)
      // console.log(product)
    }
    fetchData()
  }, [])
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5 mb-5" lg="3">
            <Card style={{ width: "20rem" }} className="p-3">
              <Card.Title className="text-center ">Men Clothes</Card.Title>
              <hr className="bg-dark border-2 border-top border-dark"></hr>
              <div>
                {product.map((item, i) => (
                  <img
                    key={i}
                    className="category-card p-1"
                    src={item.img}
                    alt="Men colthes"
                  />
                ))}
              </div>
            </Card>
          </Col>

          <Col className="mt-5 mb-5" lg="3">
            <Card style={{ width: "20rem" }} className="p-3">
              <Card.Title className="text-center ">Women Clothes</Card.Title>
              <hr className="bg-dark border-2 border-top border-dark"></hr>
              <div>
                {product.map((item, i) => (
                  <img
                    key={i}
                    className="category-card p-1"
                    src={item.img}
                    alt="Men colthes"
                  />
                ))}
              </div>
            </Card>
          </Col>

          <Col className="mt-5 mb-5" lg="3">
            <Card style={{ width: "20rem" }} className="p-3">
              <Card.Title className="text-center ">Children Clothes</Card.Title>
              <hr className="bg-dark border-2 border-top border-dark"></hr>
              <div>
                {product.map((item, i) => (
                  <img
                    key={i}
                    className="category-card p-1"
                    src={item.img}
                    alt="Men colthes"
                  />
                ))}
              </div>
            </Card>
          </Col>

          <Col className="mt-5 mb-5" lg="3">
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "19px", textAlign: "center" }}>
                  Sign in for the best experience
                </Card.Title>
                <div className="d-grid gap-2 mt-3">
                  <SignInModals />
                </div>
              </Card.Body>
            </Card>
            <Card
              className="mt-3"
              style={{
                width: "20rem",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Card.Img
                style={{ width: "232px" }}
                variant="top"
                src="./images/3.jpeg"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CategoryCard
