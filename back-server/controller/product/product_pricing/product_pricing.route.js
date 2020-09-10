const app = require('express').Router();

// All Required Methods From  Controller For Route
const selectOneProductPricing = require('./product_pricing_select');
const addProductPricing = require('./product_pricing_insert');
const putProductPricing = require('./product_pricing_update');

// All Routes for API
app.get('/getoneproductpricing', selectOneProductPricing.getOneProductPricing);
app.post('/addproductpricing', addProductPricing.addProductPricing);
app.post('/addproductpricingid', addProductPricing.addProductId); // Update params id and api id should be same
app.put('/putproductpricing/:pid', putProductPricing.putProductPricing);

module.exports = app;
