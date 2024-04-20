const mongoose = require('mongoose');

// Create a schema for the product
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

// Create a model for the product
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
