const jwt = require("jsonwebtoken");

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.locals.isAuthenticated = {};
    return next();
  }

  try {
    const decoded = jwt.verify(token, "secret");
    req.userInfo = {
      _id: decoded._id,
      username: decoded.username,
    };
    res.locals.isAuthenticated = { username: decoded.username };
    return next();
  } catch (error) {
    res.status(500).send("jwt error!");
  }
};

module.exports = jwtMiddleware;
