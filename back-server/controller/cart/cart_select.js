const pool = require('../../db/db');

module.exports = {
  async CartSelect(req, res) {
    const CartSelectSql = 'SELECT * FROM cart';

    pool.query(CartSelectSql)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err ${err}`);
        res.end({ fetch_all_cart: false });
      });
  },

  async CartSelectSingale(req, res) {
    const { id } = req.params;

    const CartSelectSingaleSql = 'SELECT * FROM cart WHERE cart_id=?';

    pool.query(CartSelectSingaleSql, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_single_cart: false });
      });
  },
};
