// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const countrySelect = require('./country_select');
const countryInsert = require('./country_insert');
const countryUpdate = require('./country_update');
const countryDelete = require('./country_delete');

// All Routes for API
app.get('/getcountry', countrySelect.getCountry);
app.get('/singlecountry/:id', countrySelect.singleCountry);
app.post('/addcountry', countryInsert.addCountry);
app.put('/putcountry/:cunid', countryUpdate.putCountry);
app.delete('/delcountry/:cunid', countryDelete.delCountry);

module.exports = app;
