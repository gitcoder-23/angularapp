const pool = require('../../../db/db');

module.exports = {
  async getOneProductPricing(req, res) {
    const pId = req.headers.pId;
    console.log(req.headers);
    const pPriceId = req.headers.pPriceId;
    console.log(req.headers);
    let selectQuery = ' SELECT p_price_id, p_id, quantity, price, selling_unit_id';
    selectQuery += ' FROM `product_pricing` ';
    selectQuery += ' WHERE p_price_id = ? ';
    selectQuery += ' OR p_id = ? ';
    pool.query(selectQuery, [pId, pPriceId])
      .then((row) => {
        if (row) {
          res.send(row);
        }
      })
      .catch((err) => {
        if (err) {
          res.send({ single_product_price: false });
        }
      });
  },
};
