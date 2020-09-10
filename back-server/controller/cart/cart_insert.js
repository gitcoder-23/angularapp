const pool = require('../../db/db');

module.exports = {
  async CartInsert(req, res) {
    const userId = req.body.user_id;
    const pId = req.body.p_id;
    const pQuantity = req.body.p_quantity;
    const { price } = req.body;

    let CartInsertSql = 'INSERT INTO cart (user_id,p_id,p_quantity,price) VALUES';
    CartInsertSql += '(?,?,?,?)';

    pool.query(CartInsertSql, [userId, pId, pQuantity, price])

      .then((row) => {
        if (row) {
          res.send({ cart_inserted: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ cart_inserted: false });
      });
  },
};
