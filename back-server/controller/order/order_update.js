const pool = require('../../db/db');

module.exports = {
  async OrderUpdate(req, res) {
    const uId = req.body.u_id;
    const pId = req.body.p_id;
    const pQuantity = req.body.p_quantity;
    const logId = req.body.log_id;
    const { id } = req.params;

    let OrderUpdateSql = 'UPDATE `order` SET ';
    OrderUpdateSql += 'u_id=?,';
    OrderUpdateSql += 'p_id=?,';
    OrderUpdateSql += 'p_quantity=?,';
    OrderUpdateSql += 'log_id=?';
    OrderUpdateSql += 'WHERE o_id=?';

    pool.query(OrderUpdateSql, [uId, pId, pQuantity, logId, id])
      .then((row) => {
        if (row) {
          res.send({ order_updated: true });
        }
        res.send({ order_updated: true });
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ order_updated: false });
      });
  },
};
