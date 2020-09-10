const pool = require('../../db/db');

module.exports = {

  async delSellingUnit(req, res) {
    const { suid } = req.params;

    const deleteQuery = ' DELETE FROM `selling_unit` WHERE su_id = ? ';

    pool.query(deleteQuery, [suid])
      .then((row) => {
        if (row) {
          res.send({ selling_unit_delete: true });
        }
      })
      .catch((err) => {
        if (err) {
          res.send({ selling_unit_delete: false });
        }
      });
  },
};
