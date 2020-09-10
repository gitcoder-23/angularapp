const pool = require('../../db/db');

module.exports = {
  async TempCartSelect(req, res) {
    const TempCartSelectSql = 'SELECT * FROM temp_cart';

    pool.query(TempCartSelectSql)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_all_temp: false });
      });
  },
  async TempCartSelectSingale(req, res) {
    const { id } = req.params;

    const TempCartSelectSingaleSql = 'SELECT * FROM temp_cart WHERE temp_id=?';

    pool.query(TempCartSelectSingaleSql, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ fetch_single_temp: false });
      });
  },
};
