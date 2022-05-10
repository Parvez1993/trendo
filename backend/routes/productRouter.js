import {
  getProducts,
  getProductsbyId,
  loadProducts,
} from "../controller/productController.js";

import express from "express";

const productRouter = express.Router();

productRouter.route("/").get(getProducts);
productRouter.route("/loadProducts").get(loadProducts);
productRouter.route("/:id").get(getProductsbyId);

export default productRouter;
