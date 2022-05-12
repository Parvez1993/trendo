import React, { useEffect, useState } from "react"
import { Card, Col, Container, Row, Button, Nav } from "react-bootstrap"
import Slide from "./Slide/Slide"
import homepage from "./homepage.css"
import axios from "axios"

const TabsCategory = () => {
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
    <Container>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}

export default TabsCategory
