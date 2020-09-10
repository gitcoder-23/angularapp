const pool = require('../../db/db');

module.exports = {
  async OrderDelete(req, res) {
    const { id } = req.params;

    const OrderDeleteSql = 'DELETE FROM `order` WHERE o_id=?';

    pool.query(OrderDeleteSql, [id])
      .then((row) => {
        if (row) {
          res.send({ order_deleted: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ order_deleted: false });
      });
  },
};
