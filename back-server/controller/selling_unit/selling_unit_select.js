const pool = require('../../db/db');

module.exports = {
  async getSellingUnit(req, res) {
    let selectQuery = ' SELECT su_id, unit';
    selectQuery += ' FROM `selling_unit`';

    pool.query(selectQuery)
      .then((row) => {
        if (row) {
          res.send(row);
        }
      })
      .catch((err) => {
        if (err) {
          res.send({ selling_unit_select: false });
        }
      });
  },

  async getSingleSellingUnit(req, res) {
    const { suid } = req.params;
    let selectQuery = ' SELECT su_id, unit';
    selectQuery += ' FROM `selling_unit`';
    selectQuery += ' WHERE selling_unit.su_id';
    selectQuery += ' AND su_id = ?';

    pool.query(selectQuery, [suid])
      .then((row) => {
        if (row) {
          res.send({ row });
        }
      })
      .catch((err) => {
        if (err) {
          res.send({ single_selling_unit: false });
        }
      });
  },
};
