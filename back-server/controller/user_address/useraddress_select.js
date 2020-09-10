const pool = require('../../db/db');

module.exports = {
  async getUseraddress(req, res) {
    const sql = 'SELECT * FROM user_address';

    pool.query(sql)
      .then((row) => {
        res.json(row);
      })
      .catch((err) => {
        console.log(`mysql err${err}`);
        res.send({ select_all_address: false });
      });
  },

  // singale user fatch
  async singale_user_address(req, res) {
    const sql = 'SELECT * FROM user_address WHERE a_id=?';

    pool.query(sql, [req.params.id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(' select Query Error ', err);
        res.end({ select_single_address: false });
      });
  },

};
