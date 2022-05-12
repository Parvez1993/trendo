import React, { useEffect, useState } from "react"
import { Container, Tabs, Tab, Card } from "react-bootstrap"
import Slide from "./Slide/Slide"
import homepage from "./homepage.css"
import axios from "axios"

const TabsCategory = () => {
  const [product, setProduct] = useState([])

  const [menData, setMendata] = useState({})

  console.log(product)

  let [querryMen, setQuerrymen] = useState([])

  let mencloth = () => {
    let testproduct = product.map((item) => item.category)
    setMendata(testproduct)
    console.log(testproduct)
  }

  let querryCallMen = (item) => {}

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
    <Container className="mb-5">
      <Card className="p-5">
        <Tabs id="controlled-tab-example" className="mb-3">
          <Tab eventKey="women" title="Women">
            Hello
          </Tab>
          <Tab eventKey="children" title="Children">
            Hello
          </Tab>
        </Tabs>
      </Card>
      {/* <button onClick={mencloth()}>test</button> */}
    </Container>
  )
}

export default TabsCategory
