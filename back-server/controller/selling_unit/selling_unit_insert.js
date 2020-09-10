const pool = require('../../db/db');

module.exports = {
  async addSellingUnit(req, res) {
    const unit = req.body.unit;

    let insertQuery = ' INSERT INTO `selling_unit` ';
    insertQuery += ' (`unit`) ';
    insertQuery += ' VALUES ';
    insertQuery += '( ? )';

    pool.query(insertQuery, [unit])
      .then((row) => {
        if (row) {
          res.send({ selling_unit_inserted: true });
        }
      })
      .catch((err) => {
        if (err) {
          res.send({ selling_unit_inserted: false });
        }
      });
  },
};
