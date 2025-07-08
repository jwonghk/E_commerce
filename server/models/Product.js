const { default: mongoose } = require('mongoose');
const moogoose = require('mongoose');

const productSchema = new moogoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
})

module.exports = mongoose.model('Product', productSchema)