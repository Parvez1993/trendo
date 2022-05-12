import React, { useEffect, useState } from "react"
import { Container, Tabs, Tab, Card } from "react-bootstrap"
import axios from "axios"

const TabsCategory = () => {
  const [product, setProduct] = useState([])
  const [woneProduct, setwoneProduct] = useState([])
  const [childrenProduct, setchildrenProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        "http://localhost:4000/products/category/men"
      )
      let product1 = data.category
      setProduct(product1)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        "http://localhost:4000/products/category/women"
      )
      let product2 = data.category
      setwoneProduct(product2)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        "http://localhost:4000/products/category/children"
      )
      let product3 = data.category
      setchildrenProduct(product3)
    }
    fetchData()
  }, [])

  return (
    <Container className="mb-5">
      <Card className="p-5">
        <Tabs id="controlled-tab-example" className="mb-3">
          <Tab eventKey="men" title="Men">
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
          </Tab>
          <Tab eventKey="women" title="Women">
            <div>
              {woneProduct.map((item, i) => (
                <img
                  key={i}
                  className="category-card p-1"
                  src={item.img}
                  alt="Men colthes"
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="children" title="Children">
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
          </Tab>
        </Tabs>
      </Card>
    </Container>
  )
}

export default TabsCategory
