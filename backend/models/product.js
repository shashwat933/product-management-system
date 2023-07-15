const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productaaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', productaaSchema);

