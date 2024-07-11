const { getUser } = require("../services/authService");

function loginValidator(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.redirect("/login");

  const user = getUser(userUid);

  if (!user) return res.redirect("/login");

  next();
}

module.exports = loginValidator;
