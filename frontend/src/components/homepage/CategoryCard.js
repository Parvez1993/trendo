import React, { useEffect, useState } from "react"
import { Card, Col, Container, Row, Button } from "react-bootstrap"
import axios from "axios"
import { Link } from "react-router-dom"

const CategoryCard = () => {
  const [menProduct, setMenProduct] = useState([])
  const [womenProduct, setWomenProduct] = useState([])
  const [childrenProduct, setChildrenProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        "http://localhost:4000/products/category/men"
      )
      let product1 = data.category
      setMenProduct(product1)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        "http://localhost:4000/products/category/women"
      )
      let product2 = data.category
      setWomenProduct(product2)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        "http://localhost:4000/products/category/children"
      )
      let product3 = data.category
      setChildrenProduct(product3)
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
                {menProduct.map((item, i) => (
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
                {womenProduct.map((item, i) => (
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
                {childrenProduct.map((item, i) => (
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
                  Log in for the best experience
                </Card.Title>
                <div className="d-grid gap-2 mt-3">
                  <Link to="/login">
                    <Button className="btn-signin" variant="danger" size="lg">
                      Login
                    </Button>
                  </Link>
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
