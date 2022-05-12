import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App"
import "swiper/css/bundle"
import { StoreProvider } from "./Store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</StoreProvider>
)
