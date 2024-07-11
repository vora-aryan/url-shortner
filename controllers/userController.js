const userModel = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const { setUser, getUser } = require("../services/authService");

async function signUpUser(req, res) {
  const { name, email, password } = req.body;
  const user = await userModel.create({
    name,
    email,
    password,
  });
  return res.json({ msg: "user created" });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email, password });
  if (!user) {
    return res.render("login", {
      error: "invalid email or password",
    });
  }
  const sesionId = uuidv4();

  const token = setUser(user);

  res.cookie("uid", token);

  // console.log("logging in" + sesionId + user);

  return res.redirect("/url");
}

module.exports = { signUpUser, loginUser };
