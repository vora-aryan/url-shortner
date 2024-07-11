const express = require("express");
const mongoose = require("mongoose");
const urlRouter = require("./routes/urlRoutes");
const staticRouter = require("./routes/staicRoute");
const urlModel = require("./models/urlModel");
const userRouter = require("./routes/userRouter");
const cookiePareser = require("cookie-parser");
const { getUser } = require("./services/authService");
const loginValidator = require("./middlewares/loginValidator");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiePareser());

app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/url", loginValidator, urlRouter);
app.use("/url", urlRouter);
app.use("/", staticRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Server started");
});
