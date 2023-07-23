require("dotenv").config();
const mongoose = require('mongoose')
const ProductSchema = require('../models/Product')
const MONGO_URL = process.env.MONGO_URL

// Establish connection to the Database.
mongoose.connect('mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { console.log("MongoDB Connected!") }).catch(e => console.log(e));

mongoose.model('products', ProductSchema)