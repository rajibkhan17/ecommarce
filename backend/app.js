const express = require('express');
const app = express();

app.use(express.json());

//import all route
const products = require('./routes/product');


app.use('/api/vi', products)


module.exports = app