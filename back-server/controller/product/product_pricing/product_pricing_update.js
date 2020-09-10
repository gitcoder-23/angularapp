const pool = require('../../../db/db');

module.exports = {
  async putProductPricing(req, res) {
    const quantity = req.body.quantity;
    const price = req.body.price;
    const sellingUnitId = req.body.sellingUnitId;
    const { pid } = req.params;

    console.log('Body Value', req.body);
    let updateQuery = 'UPDATE `product_pricing` SET ';
    updateQuery += ' quantity = ?,';
    updateQuery += ' price = ?,';
    updateQuery += ' selling_unit_id = ?';
    updateQuery += ' WHERE p_id = ?';
    pool.query(updateQuery, [quantity, price, sellingUnitId, pid])
      .then((row) => {
        if (row) {
          res.send({ update_product_price: true });
          // console.log(row)
        }
      })
      .catch((err) => {
        if (err) {
          // console.log(err)
          res.send({ update_product_price: false });
          throw err;
        }
      });
  },
};
