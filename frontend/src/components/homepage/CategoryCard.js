import React, { useEffect, useState } from "react"
import { Card, Col, Container, Row, Button } from "react-bootstrap"
import Slide from "./Slide/Slide"
import homepage from "./homepage.css"
import axios from "axios"

const CategoryCard = () => {
  const [product, setProduct] = useState([])
  // console.log(product)

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get("http://localhost:4000/products")
      let product = data.products
      setProduct(product)
      // console.log(data)
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
              <hr class="bg-danger border-2 border-top border-dark"></hr>
              <div>
                {product.map((item, i) => (
                  <>
                    <img
                      className="category-card p-1"
                      src={item.img}
                      alt="Men colthes"
                    />
                  </>
                ))}
              </div>
            </Card>
          </Col>
          <Col className="mt-5 mb-5 " lg="3">
            <Card style={{ width: "20rem" }} className="p-3">
              <Card.Title className="text-center ">Women Clothes</Card.Title>
              <hr class="bg-danger border-2 border-top border-dark"></hr>
              <div>
                {product.map((item, i) => (
                  <>
                    <img
                      className="category-card p-1"
                      src={item.img}
                      alt="Men colthes"
                    />
                  </>
                ))}
              </div>
            </Card>
          </Col>

          <Col className="mt-5 mb-5  " lg="3">
            <Card style={{ width: "20rem" }} className="p-3">
              <Card.Title className="text-center ">Children Clothes</Card.Title>
              <hr class="bg-danger border-2 border-top border-dark"></hr>
              <div>
                {product.map((item, i) => (
                  <>
                    <img
                      className="category-card p-1"
                      src={item.img}
                      alt="Men colthes"
                    />
                  </>
                ))}
              </div>
            </Card>
          </Col>
          <Col className="mt-5 mb-5" lg="3">
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "19px", textAlign: "center" }}>
                  {" "}
                  Sign in for the best experience{" "}
                </Card.Title>
                <div className="d-grid gap-2">
                  <Button variant="danger" size="lg">
                    Sign In
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CategoryCard
