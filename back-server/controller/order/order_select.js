const pool = require('../../db/db');

module.exports = {
  async OrderSelect(req, res) {
    const OrderSelectSql = 'SELECT * FROM `order`';

    pool.query(OrderSelectSql)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_all_order: false });
      });
  },

  async OrderSelectSingale(req, res) {
    const { id } = req.params;

    const OrderSelectSingaleSql = 'SELECT * FROM `order` WHERE o_id=?';

    pool.query(OrderSelectSingaleSql, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_single_order: false });
      });
  },
};
