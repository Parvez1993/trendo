import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import NotFoundError from "../errors/not-found.js";
import BadRequestError from "../errors/bad-request.js";
import UnAuthenticatedError from "../errors/unauthenticated.js";

// get token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

//register

export const register = async (req, res, next) => {
  const { name, password, email } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all the values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create(req.body);

  const token = signToken(user._id);
  // user.password = undefined;
  res.status(StatusCodes.CREATED).json({
    status: "success",
    token,
    user,
  });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    throw new BadRequestError("Please provide all the values");
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    throw new UnAuthenticatedError("Incorrect credentials");
  }

  const token = signToken(user._id);

  // user.password = undefined;
  if (token) {
    res.status(StatusCodes.OK).json({
      status: "success",
      token,
      user,
    });
  }
};
