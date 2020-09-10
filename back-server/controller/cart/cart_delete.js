const pool = require('../../db/db');

module.exports = {
  async CartDelete(req, res) {
    const { id } = req.params;

    const CartDeleteSql = 'DELETE FROM cart WHERE cart_id=?';

    pool.query(CartDeleteSql, [id])
      .then((row) => {
        if (row) {
          res.send({ cart_deleted: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ cart_deleted: false });
      });
  },
};
