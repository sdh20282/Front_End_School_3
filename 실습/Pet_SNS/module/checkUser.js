const checkUser = (req, res, next) => {
  if (!req.userInfo) {
    res.status(400).send("user not login!!");
    return;
  }

  return next();
};

module.exports = checkUser;
