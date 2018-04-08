const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  description: String,
  imageURL: String,
  price: Number
});

module.exports = mongoose.model('Item', itemSchema);
