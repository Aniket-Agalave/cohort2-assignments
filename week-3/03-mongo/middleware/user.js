const { User } = require("../db");
// Middleware for handling auth
async function userMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  const value = await User.findOne({ username, password });
  if (value) {
    next();
  } else {
    res.status(403).json({
      msg: "User does not exist",
    });
  }
}
module.exports = userMiddleware;
