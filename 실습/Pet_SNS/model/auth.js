const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("auth", authSchema);
