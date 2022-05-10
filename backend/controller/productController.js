import { StatusCodes } from "http-status-codes";
import data from "../data.js";
import Product from "../models/Product.js";
const loadProducts = async (req, res) => {
  const products = await Product.insertMany(data);
  res.send(products);
};

const getProducts = async (req, res) => {
  // const products = await Product.find();
  // if (products) {
  //   res.status(StatusCodes.OK).json({ products });
  // } else {
  //   res.status(StatusCodes.NOT_FOUND).json({ msg: "no products found" });
  // }

  console.log("working");
};

const getProductsbyId = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(StatusCodes.OK).json({ product });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "no products found" });
  }
};

export { getProducts, getProductsbyId, loadProducts };
