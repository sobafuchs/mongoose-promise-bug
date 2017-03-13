const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  parent: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number
});