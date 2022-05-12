import React from "react"
import { Card } from "react-bootstrap"
import Slide from "./Slide/Slide"
import homepage from "./homepage.css"
import CategoryCard from "./CategoryCard"
import TabsCategory from "./TabsCategory"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <Slide />

      <div
        className="d-flex justify-content-center mt-5"
        style={{ width: "100%" }}
      >
        <Card style={{ width: "90%" }}>
          <Card.Body>
            <Card.Text className="text-center">
              You are on <strong>Trendo.com</strong>. You can also shop on
              Trendo for millions of products with fast local delivery. Click
              here to go to{" "}
              <strong>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#dc3545" }}
                >
                  Trendo.com
                </Link>
              </strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <CategoryCard />

      <TabsCategory />
    </>
  )
}

export default HomePage
