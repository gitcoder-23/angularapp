// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const productSelect = require('./product_select');
const productInsert = require('./product_insert');
const productUpdate = require('./product_update');
const productDel = require('./product_delete');

// All Routes for API
app.get('/getproduct', productSelect.getProduct);
app.get('/singleproduct/:pid', productSelect.singleProduct);
app.get('/getproductfulldetails', productSelect.getProductFullDetails);
app.post('/addproduct', productInsert.addProduct);
app.put('/putproduct/:pid', productUpdate.putProduct);
app.delete('/delproduct/:pid', productDel.delProduct);

module.exports = app;
