const pool = require('../../db/db');

module.exports = {
  async ShipingSelect(req, res) {
    const ShipingSelectSql = 'SELECT * FROM shiping';

    pool.query(ShipingSelectSql)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_all_shiping: false });
      });
  },

  async ShipingSelectSingale(req, res) {
    const { id } = req.params;

    const ShipingSelectSingaleSql = 'SELECT * FROM shiping WHERE ship_id=?';

    pool.query(ShipingSelectSingaleSql, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_single_shiping: false });
      });
  },
};
