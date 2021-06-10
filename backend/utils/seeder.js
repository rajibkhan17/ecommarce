const Product = require('../models/product')
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')
const products = require('../data/product')
const product = require('../models/product')

// seeting up config file
dotenv.config({path: 'backend/config/config.env'})

connectDatabase();


const seedProducts = async () => {
    try{
      
        await product.deleteMany();
        console.log('product are deleted');

        await Product.insertMany(products)
        console.log('all product are added.')
        process.exit();

    } catch(error) {
        console.log('error.message');
        process.exit();
    }
}

seedProducts()