const jwt = require("jsonwebtoken");
const conf_key = "user@619";

function setUser(user) {
  return jwt.sign({ _id: user ._id, email: user.email }, conf_key);
}
function getUser(token) {
  console.log(token);
  if (!token) return;
  try {
    return jwt.verify(token, conf_key);
  } catch (error) {
    return null;
  }
}
module.exports = { setUser, getUser };
