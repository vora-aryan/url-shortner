const express = require("express");
const {
  generateNewShortUrl,
  handleUrlAnalytics,
} = require("../controllers/urlControllers");
const urlModel = require("../models/urlModel");

const urlRouter = express.Router();
urlRouter.get("/", async (req, res) => {
  const allUrls = await urlModel.find({});

  return res.render("home.ejs", {
    urls: allUrls,
  });
});
urlRouter.post("/", generateNewShortUrl);
urlRouter.get("/:shortId", handleUrlAnalytics);

module.exports = urlRouter;
