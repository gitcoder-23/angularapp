const pool = require('../../../db/db');

module.exports = {
  async ProductValUpdate(req, res) {
    const { value } = req.body;
    const propId = req.body.prop_id;
    const pId = req.body.p_id;
    const { id } = req.params;

    let productvalupdateSql = 'UPDATE product_val SET ';
    productvalupdateSql += ' val=?, ';
    productvalupdateSql += ' prop_id=?, ';
    productvalupdateSql += ' p_id=? ';
    productvalupdateSql += ' WHERE id=? ';

    pool.query(productvalupdateSql, [value, propId, pId, id])
      .then((row) => {
        if (row) {
          res.send({ product_val_updated: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ product_val_updated: true });
      });
  },
};
