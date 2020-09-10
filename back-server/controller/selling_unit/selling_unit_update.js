const pool = require('../../db/db');

module.exports = {
  async putSellingUnit(req, res) {
    const unit = req.body.unit;
    const { suid } = req.params;

    let updateQuery = ' UPDATE `selling_unit` SET';
    updateQuery += ' unit= ?';
    updateQuery += ' WHERE su_id= ?';

    pool.query(updateQuery, [unit, suid])
      .then((row) => {
        if (row) {
          res.send({ selling_unit_update: true });
        }
      })
      .catch((err) => {
        if (err) {
          res.send({ selling_unit_update: false });
        }
      });
  },
};
