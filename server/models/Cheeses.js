const mongoose = require("mongoose");

const CheeseSchema = new mongoose.Schema({
  name: String,
  description: String,
  pricePerKg: Number,
  colour: String,
});

const CheeseModel = mongoose.model("cheeses", CheeseSchema);
module.exports = CheeseModel;
