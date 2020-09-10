const pool = require('../../db/db');

module.exports = {
  async OrderInsert(req, res) {
    const uId = req.body.u_id;
    const pId = req.body.p_id;
    const pQuantity = req.body.p_quantity;

    let OrderInsertSql = 'INSERT INTO `order` (u_id,p_id,p_quantity)';
    OrderInsertSql += ' VALUES (?,?,?)';

    pool.query(OrderInsertSql, [uId, pId, pQuantity])
      .then((row) => {
        if (row) {
          res.send({ order_inserted: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ order_inserted: false });
      });
  },
};
