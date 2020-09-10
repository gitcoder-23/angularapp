const pool = require('../../db/db');

module.exports = {
  async ShipingDelete(req, res) {
    const { id } = req.params;

    const ShipingDeleteSql = 'DELETE FROM shiping WHERE ship_id=?';

    pool.query(ShipingDeleteSql, [id])
      .then((row) => {
        if (row) {
          res.send({ shipping_deleted: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ shipping_deleted: false });
      });
  },
};
