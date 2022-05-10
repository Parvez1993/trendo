import {
  getProducts,
  getProductsbyCategory,
  getProductsbyId,
  getProductsCategory,
  loadProducts,
} from "../controller/productController.js";

import express from "express";

const productRouter = express.Router();

productRouter.route("/").get(getProducts);
productRouter.route("/loadProducts").get(loadProducts);
productRouter.route("/category").get(getProductsCategory);
productRouter.route("/:id").get(getProductsbyId);
productRouter.route("/category/:category").get(getProductsbyCategory);
export default productRouter;
