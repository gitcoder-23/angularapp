// eslint-disable-next-line new-cap
const app = require('express').Router();

// get all page
const productSelect = require('./productprop_select');
const productInsert = require('./productprop_insert');
const productUpdate = require('./productprop_update');
const productdelete = require('./productprop_delete');

// get all rote
app.get('/getproductprop', productSelect.ProductSelect);
app.get('/getproductprop/:id', productSelect.ProductSelectSingale);
app.post('/productinsertprop', productInsert.ProductInsert);
app.put('/updateproductprop/:id', productUpdate.ProductUpdate);
app.delete('/productdeleteprop/:id', productdelete.ProductDelete);

module.exports = app;
