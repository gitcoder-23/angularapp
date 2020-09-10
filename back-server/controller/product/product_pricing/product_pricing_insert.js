const pool = require('../../../db/db');

module.exports = {
  async addProductPricing(req, res) {
    const pId = req.body.pId;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const sellingUnitId = req.body.sellingUnitId;

    let insertQuery = 'INSERT INTO `product_pricing`';
    insertQuery += ' (`p_id`, `quantity`, `price`, `selling_unit_id`)';
    insertQuery += ' VALUES ';
    insertQuery += ' ( ';
    insertQuery += ' ?, ';
    insertQuery += ' ?, ';
    insertQuery += ' ?, ';
    insertQuery += ' ? ';
    insertQuery += ' )';

    pool.query(insertQuery, [pId, quantity, price, sellingUnitId])
      .then((row) => {
        if (row) {
          res.send({ Product_pricing_add: true });
        }
      })
      .catch((err) => {
        if (err) {
          res.send({ Product_pricing_add: false });
        }
      });
  },

  async addProductId(pid) {
    let insertQuery = 'INSERT INTO `product_pricing`';
    insertQuery += ' (`p_id`)';
    insertQuery += ' VALUES ';
    insertQuery += ' ( ? )';

    pool.query(insertQuery, [pid])
      .then((row) => (!!row))
      .catch((err) => {
        throw err;
      });
  },

};
