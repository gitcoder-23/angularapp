const pool = require('../../db/db');

module.exports = {
  async getState(req, res) {
    const selectQuery = 'SELECT * FROM state';

    pool.query(selectQuery)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('getState Query Error', err);
        res.end({ state_inserted: true });
      });
  },

  async singleState(req, res) {
    const { id } = req.params;

    const selectQuerye = 'SELECT * FROM state WHERE s_id=?';

    pool.query(selectQuerye, [id])

      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ state_inserted: false });
      });
  },
};
