// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const categorySelect = require('./category_select');
const categoryInsert = require('./category_insert');
const categoryUpdate = require('./category_update');
const categoryDel = require('./category_delete');

// All Routes for API
app.get('/getcategory', categorySelect.getCategory);
app.get('/singlecategory/:id', categorySelect.singleCategory);
app.post('/addcategory', categoryInsert.addCategory);
app.put('/putcategory/:cid', categoryUpdate.putCategory);
app.delete('/delcategory/:cid', categoryDel.delCategory);

module.exports = app;
