// eslint-disable-next-line new-cap
const app = require('express').Router();

// get all page
const productSelectVal = require('./productval_select');
const productInsertVal = require('./productval_insert');
const productUpdateVal = require('./productval_update');
const productDeleteVal = require('./productval_delete');

// get all route
app.get('/getproductvalselect', productSelectVal.ProductSelect);
app.get('/getsingaleproductval/:id', productSelectVal.ProductSelectSingale);
app.post('/insertproductval', productInsertVal.ProductValInsert);
app.put('/productvalupdate/:id', productUpdateVal.ProductValUpdate);
app.delete('/productvaldelete/:id', productDeleteVal.ProductValDelete);

module.exports = app;
