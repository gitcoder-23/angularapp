const pool = require('../../../db/db');

module.exports = {
  async ProductSelect(req, res) {
    const ProductSelectSql = 'SELECT * FROM product_val';

    pool.query(ProductSelectSql)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_all_product_val: false });
      });
  },

  async ProductSelectSingale(req, res) {
    const { id } = req.params;

    const ProductSelectSingaleSql = 'SELECT * FROM product_val WHERE id=?';

    pool.query(ProductSelectSingaleSql, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_single_product_val: false });
      });
  },
};
