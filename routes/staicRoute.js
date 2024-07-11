const express = require("express");
const urlModel = require("../models/urlModel");
const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {

  // console.log(allUrls);
  return res.render("login");
  
});

staticRouter.get("/signup", async (req, res) => {
  return res.render("signup");
});

staticRouter.get("/login", async (req, res) => {
  return res.render("login");
});

module.exports = staticRouter;
