const pool = require('../../db/db');

module.exports = {
  async TempCartInsert(req, res) {
    const cookeyId = req.body.cookey_id;
    const pid = req.body.p_id;
    const pquantity = req.body.p_quantity;
    const { price } = req.body;

    let TempCartInsertSql = 'INSERT INTO `temp_cart`';
    TempCartInsertSql += ' (cookey_id,p_id,p_quantity,price)';
    TempCartInsertSql += 'VALUES(?,?,?,?)';

    pool.query(TempCartInsertSql, [cookeyId, pid, pquantity, price])
      .then((row) => {
        if (row) {
          res.send({ tempcat_inserted: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ tempcat_inserted: false });
      });
  },
};
