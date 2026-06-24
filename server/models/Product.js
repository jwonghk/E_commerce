const { default: mongoose } = require('mongoose');
//const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, unique: true }, 
    name: String,
    category: String,
    price: Number,
    image: String,
    description: String
})


// schemes are compiled into models 
module.exports = mongoose.model('Product', productSchema)