const pool = require('../../db/db');

module.exports = {
  async CartUpdate(req, res) {
    const userId = req.body.user_id;
    const pId = req.body.p_id;
    const pQuantity = req.body.p_quantity;
    const { price } = req.body;
    const { id } = req.params;

    let CartUpdateSql = 'UPDATE cart SET ';
    CartUpdateSql += ' user_id=?,';
    CartUpdateSql += 'p_id=?,';
    CartUpdateSql += 'p_quantity=?,';
    CartUpdateSql += 'price=? ';
    CartUpdateSql += 'WHERE cart_id=?';

    pool.query(CartUpdateSql, [userId, pId, pQuantity, price, id])
      .then((row) => {
        if (row) {
          res.send({ cart_updated: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ cart_updated: false });
      });
  },
};
