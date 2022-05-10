import express from "express";
import data from "./data.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import productRouter from "./routes/productRouter.js";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

app.use(morgan("dev"));

const DB = process.env.DATABASE_LOCAL;

//mongo connection

mongoose.connect(DB, () => {
  console.log("connected mongodb");
});

morgan("tiny");

app.use("/products", productRouter);

app.listen(8000, () => {
  console.log("server running on 8000 port");
});
