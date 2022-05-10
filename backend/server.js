import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import productRouter from "./routes/productRouter.js";
import notFoundMiddleware from "./middleware/notFoundMiddleware.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

app.use(morgan("dev"));

// ------------------mongodb--------------------

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB, () => {
  console.log("connected");
});

morgan("tiny");

app.use("/products", productRouter);

//unhandled errors

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
