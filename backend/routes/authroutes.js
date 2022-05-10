import { login, register } from "../controller/authController.js";
import express from "express";
const userRoute = express.Router();

userRoute.route("/register").post(register);
userRoute.route("/login").post(login);

export default userRoute;
