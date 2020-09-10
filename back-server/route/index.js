// eslint-disable-next-line new-cap
const app = require('express').Router();

// Importing user routes
const user = require('../controller/user/user.route');

app.use(user);

// Importing address routes
const userAddress = require('../controller/user_address/useraddress.route.js');

app.use(userAddress);

// Importing user_type routes
const userType = require('../controller/user/user_type/usertype.router.js');

app.use(userType);

// Importing user_prop routes
const userProp = require('../controller/user/user_prop/userprop.router');

app.use(userProp);

// Importing user_val routes
const userVal = require('../controller/user/user_val/userval.route');

app.use(userVal);

// Importing product_prop routes
const productProp = require('../controller/product/product_prop/productprop.router');

app.use(productProp);

// Importing product_prop routes
const productVal = require('../controller/product/product_val/productval.route.js');

app.use(productVal);

// Importing cart routes
const cart = require('../controller/cart/cart.route');

app.use(cart);

// Importing order routes
const order = require('../controller/order/order.router');

app.use(order);

// Importing temp_cart routes
const tempCart = require('../controller/temp_cart/tempcart.router');

app.use(tempCart);

// Importing shiping routes
const shiping = require('../controller/shiping/shiping.route');

app.use(shiping);

// Importing category routes
const category = require('../controller/category/category.route');

app.use(category);

// Importing category routes
const state = require('../controller/state/state.route');

app.use(state);

// Importing category routes
const country = require('../controller/country/country.route');

app.use(country);

// Importing product routes
const product = require('../controller/product/product.route');

app.use(product);

// Importing product routes
const setting = require('../controller/settings/settings.route');

app.use(setting);

// Importing product-pricing route
const productPricing = require('../controller/product/product_pricing/product_pricing.route');

app.use(productPricing);

// Selling_Unit routes
const sellingUnit = require('../controller/selling_unit/selling_unit.route');

app.use(sellingUnit);

// Importing mail routes
const mail = require('./mail.js');

app.use(mail);

module.exports = app;
