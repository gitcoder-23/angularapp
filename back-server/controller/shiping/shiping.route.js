// eslint-disable-next-line new-cap
const shiping = require('express').Router();

// get all page
const shipingSelect = require('./shiping_select');
const shipingInsert = require('./shiping_insert');
const shipingUpdate = require('./shiping_update');
const shipingDelete = require('./shiping_delete');

// get all route

shiping.get('/getshiping', shipingSelect.ShipingSelect);
shiping.get('/getsingaleshiping/:id', shipingSelect.ShipingSelectSingale);
shiping.post('/shipinginsert', shipingInsert.ShipingInsert);
shiping.put('/shipingupdate/:id', shipingUpdate.ShipingUpdate);
shiping.delete('/shipingdelete/:id', shipingDelete.ShipingDelete);

module.exports = shiping;
