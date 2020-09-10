const pool = require('../../../db/db');

module.exports = {
  async ProductValInsert(req, res) {
    const { value } = req.body;
    const propId = req.body.prop_id;
    const pId = req.body.p_id;

    let ProductValInsertSql = 'INSERT INTO product_val (val,prop_id,p_id) VALUES';
    ProductValInsertSql += '(?,?,?,)';

    pool.query(ProductValInsertSql, [value, propId, pId])
      .then((row) => {
        if (row) {
          res.send({ product_val_insert: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ product_val_insert: false });
      });
  },
};
