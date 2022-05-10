import { StatusCodes } from "http-status-codes";
import data from "../data.js";
import Product from "../models/Product.js";
const loadProducts = async (req, res) => {
  await Product.deleteMany();
  const products = await Product.insertMany(data);
  res.send(products);
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  if (products) {
    res.status(StatusCodes.OK).json({ products });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "no products found" });
  }
};

const getProductsCategory = async (req, res) => {
  const category = await Product.distinct("model");
  if (category) {
    res.status(StatusCodes.OK).json({ category });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "no category found" });
  }
};
const getProductsbyId = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(StatusCodes.OK).json({ product });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "no products found" });
  }
};

const getProductsbyCategory = async (req, res) => {
  const match = req.params.category;
  const category = await Product.find({ category: { $all: match } });

  if (category) {
    res.status(StatusCodes.OK).json({ category });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "no category found" });
  }
};

export {
  getProducts,
  getProductsbyId,
  loadProducts,
  getProductsCategory,
  getProductsbyCategory,
};
