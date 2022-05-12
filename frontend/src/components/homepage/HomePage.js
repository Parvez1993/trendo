import React, { useEffect, useState } from "react"
import { Card, Col, Container, Figure } from "react-bootstrap"
import Slide from "./Slide/Slide"
import homepage from "./homepage.css"
import axios from "axios"
import CategoryCard from "./CategoryCard"

const HomePage = () => {
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
      <Slide />

      {/* title */}

      <div
        className="d-flex justify-content-center mt-5"
        style={{ width: "100%" }}
      >
        <Card style={{ width: "90%" }}>
          <Card.Body>
            <Card.Text className="text-center">
              You are on <strong>Trendo.com</strong>. You can also shop on
              Trendo for millions of products with fast local delivery. Click
              here to go to <strong>Trendo.com</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <CategoryCard />
    </>
  )
}

export default HomePage
