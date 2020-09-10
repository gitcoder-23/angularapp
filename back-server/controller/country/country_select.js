const pool = require('../../db/db');

module.exports = {
  async getCountry(req, res) {
    const selectQuery = 'select c_id,country from `country`';

    pool.query(selectQuery)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('getCountry Query Error', err);
        res.end({ get_all_coutnry: false });
      });
  },

  async singleCountry(req, res) {
    const { id } = req.params;

    const selectQuery = 'SELECT * FROM country WHERE c_id=?';

    pool.query(selectQuery, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('getCountry Query Error', err);
        res.end({ get_single_coutnry: false });
      });
  },
};
