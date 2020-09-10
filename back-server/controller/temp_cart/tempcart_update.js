const pool = require('../../db/db');

module.exports = {
  async TempCartUpdate(req, res) {
    const cookeyId = req.body.cookey_id;
    const pId = req.body.p_id;
    const pQuantity = req.body.p_quantity;
    const { price } = req.body;
    const { id } = req.params;

    let TempCartUpdateSql = 'UPDATE temp_cart SET ';
    TempCartUpdateSql += 'id=?,';
    TempCartUpdateSql += 'cookey_p_id=?,';
    TempCartUpdateSql += 'p_quantity=?,';
    TempCartUpdateSql += 'price=?';
    TempCartUpdateSql += 'WHERE  temp_id=?';

    pool.query(TempCartUpdateSql, [cookeyId, pId, pQuantity, price, id])
      .then((row) => {
        if (row) {
          res.send({ tempcat_updated: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ tempcat_updated: false });
      });
  },
};
