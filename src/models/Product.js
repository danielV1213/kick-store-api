const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: false },
    _id: { type: String, required: true },
    price: { type: Number, required: true },
    enStock: { type: Boolean, default: true },
    specialPrices: { type: Object, required: false },
})

module.exports = ProductSchema