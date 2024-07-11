const { mongoose } = require("mongoose");
const express = require(`express`);

const userModel = require("../models/userModel");
const { signUpUser, loginUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/", signUpUser);

userRouter.post("/login", loginUser);

module.exports = userRouter;
