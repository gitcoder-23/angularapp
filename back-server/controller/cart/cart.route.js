// eslint-disable-next-line new-cap
const app = require('express').Router();

// get all page

const cartSelect = require('./cart_select');
const cartInsert = require('./cart_insert');
const cartUpdate = require('./cart_update');
const cartDelete = require('./cart_delete');

// get all route

app.get('/getcart', cartSelect.CartSelect);
app.get('/getcartsingale/:id', cartSelect.CartSelectSingale);
app.post('/insertcart', cartInsert.CartInsert);
app.put('/updatecart/:id', cartUpdate.CartUpdate);
app.delete('/deletecart/:id', cartDelete.CartDelete);

module.exports = app;
