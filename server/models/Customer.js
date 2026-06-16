//const {default : mongoose} = require('mongoose');
const mongoose = require('mongoose');
//const Product = require('./Product');
//const SchemaDef = mongoose.Schema;
const cartItemSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  name: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 }
});

const customerSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  email: String,
  name: String,
  cart: [cartItemSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', customerSchema);

