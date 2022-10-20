const User = require("../model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authCtr = {
  register: async (req, res) => {
    const { username, password } = req.body;

    const exist = await User.findOne({ username: username });
    if (exist) {
      res.status(504).send("user exist!!");
      return;
    }

    const user = new User({
      username: username,
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    res.redirect("/");
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(500).send("user not found!!");
      return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.status(500).send("password invalid");
    }
    const data = user.toJSON();
    delete data.password;
    const token = jwt.sign(
      {
        _id: data._id,
        username: data.username,
      },
      "secret",
      {
        expiresIn: "7d",
      }
    );
    res.cookie("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });

    res.redirect("/");
  },
};

module.exports = authCtr;
