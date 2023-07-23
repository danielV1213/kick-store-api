require("dotenv").config();
const mongoose = require('mongoose')
const ProductSchema = require('../models/Product')
const MONGO_URL = process.env.MONGO_URL

// Establish connection to the Database.
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { console.log("MongoDB Connected!") }).catch(e => console.log(e));

mongoose.model('products', ProductSchema)