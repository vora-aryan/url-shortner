const mongoose = require("mongoose");
const nanoid = require("nanoid");
const urlModel = require("../models/urlModel");

async function generateNewShortUrl(req, res) {
  const { url } = req.body;
  if (!url) return res.json({ err: "url is required" });
  const shortId = nanoid.nanoid(8);
  await urlModel.create({
    shortId: shortId,
    redirectUrl: url,
    visitHistory: [],
  });
  // return res.json({ id: shortId });
  return res.redirect("/url");
}

async function handleUrlAnalytics(req, res) {
  const unqSid = req.params.shortId;
  const urlToRedirect = await urlModel.findOneAndUpdate(
    { shortId: unqSid },
    { $push: { visitHistory: { timeStamp: Date.now() } } }
  );

  return res.redirect(urlToRedirect.redirectUrl);
}

module.exports = { generateNewShortUrl, handleUrlAnalytics };
