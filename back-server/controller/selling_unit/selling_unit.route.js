const app = require('express').Router();

// All required controllers required by method
const selectSellingUnit = require('./selling_unit_select');
const addSellingUnit = require('./selling_unit_insert');
const updateSellingUnit = require('./selling_unit_update');
const deleteSellingUnit = require('./selling_unit_delete');

// Route with making API
app.get('/getsellingunit', selectSellingUnit.getSellingUnit);
app.get('/singlesellingunit/:suid', selectSellingUnit.getSingleSellingUnit);
app.post('/addsellingunit', addSellingUnit.addSellingUnit);
app.put('/putsellingunit/:suid', updateSellingUnit.putSellingUnit);
app.delete('/delsellingunit/:suid', deleteSellingUnit.delSellingUnit);

module.exports = app;
